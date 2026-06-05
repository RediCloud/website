<script lang="ts">
	import { marked } from 'marked';
	import { DarkMode } from 'flowbite-svelte';
	import { GithubSolid, DownloadSolid, TagSolid, ArrowLeftOutline } from 'flowbite-svelte-icons';

	marked.setOptions({ gfm: true, breaks: true });

	let { data } = $props();

	let showPreReleases = $state(false);
	let expandedAssets = $state(new Set<number>());

	function handleCodeCopy(e: MouseEvent) {
		const btn = (e.target as HTMLElement).closest('.changelog-copy-btn') as HTMLElement | null;
		if (!btn) return;
		const code = btn.getAttribute('data-code');
		if (!code) return;
		navigator.clipboard.writeText(code);
		btn.classList.add('copied');
		setTimeout(() => btn.classList.remove('copied'), 2000);
	}

	const filteredReleases = $derived(
		showPreReleases ? data.releases : data.releases.filter((r: { prerelease: boolean }) => !r.prerelease)
	);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function formatSize(bytes: number): string {
		if (bytes < 1024) return bytes + ' B';
		if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
		return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
	}

	const REPO = 'RediCloud/cloud-v2';

	function preprocess(md: string): string {
		// GitHub Alerts: > [!WARNING], > [!NOTE], > [!TIP], > [!IMPORTANT], > [!CAUTION]
		md = md.replace(
			/^> \[!(WARNING|NOTE|TIP|IMPORTANT|CAUTION)\]\n((?:^>.*\n?)*)/gm,
			(_match, type: string, body: string) => {
				const content = body.replace(/^> ?/gm, '').trim();
				const lower = type.toLowerCase();
				return `<div class="gh-alert gh-alert-${lower}"><span class="gh-alert-title">${type.charAt(0) + type.slice(1).toLowerCase()}</span>\n\n${content}</div>\n\n`;
			}
		);

		// Process line by line to avoid replacing inside existing markdown links
		md = md.split('\n').map(line => {
			// Extract existing markdown links and protect them
			const links: string[] = [];
			let processed = line.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_m, text, url) => {
				links.push(`[${text}](${url})`);
				return `%%LINK${links.length - 1}%%`;
			});

			// Convert raw GitHub URLs to markdown links before protecting them
			processed = processed.replace(
				/(https:\/\/github\.com\/[^\s,)]+)/g,
				(_m, url: string) => {
					// PR/issue URL → short format
					const prMatch = url.match(/\/pull\/(\d+)$/);
					if (prMatch) return `[#${prMatch[1]}](${url})`;
					const issueMatch = url.match(/\/issues\/(\d+)$/);
					if (issueMatch) return `[#${issueMatch[1]}](${url})`;
					// Compare URL → short format
					const compareMatch = url.match(/\/compare\/(.+)$/);
					if (compareMatch) return `[\`${compareMatch[1]}\`](${url})`;
					// Other GitHub URLs → keep as link
					return `[${url.replace('https://github.com/', '')}](${url})`;
				}
			);

			// @username mentions → link (only outside of protected zones)
			processed = processed.replace(/@([a-zA-Z0-9][-a-zA-Z0-9]*)/g, '[@$1](https://github.com/$1)');

			// Backtick-wrapped commit hashes → link
			processed = processed.replace(/`([0-9a-f]{7,40})`/g, `[\`$1\`](https://github.com/${REPO}/commit/$1)`);

			// Standalone #123 PR/issue references
			processed = processed.replace(/(?<!\w)#(\d+)(?!\w)/g, `[#$1](https://github.com/${REPO}/pull/$1)`);

			// Restore markdown links
			links.forEach((link, i) => {
				processed = processed.replace(`%%LINK${i}%%`, link);
			});

			return processed;
		}).join('\n');

		return md;
	}

	function renderMarkdown(md: string): string {
		if (!md) return '';
		let html = marked.parse(preprocess(md)) as string;
		// Make all links open in new tab
		html = html.replace(/<a /g, '<a target="_blank" ');
		// Replace <code> blocks inside <pre> with text content + copy button (clipboard + check icons)
		html = html.replace(
			/<pre><code(?:\s[^>]*)?>([^<]*)<\/code><\/pre>/g,
			(_m, content: string) => {
				const decoded = content.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
				const escaped = decoded.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
				return `<div class="changelog-codeblock"><pre>${content}</pre><button class="changelog-copy-btn" data-code="${escaped}" title="Copy to clipboard"><svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></button></div>`;
			}
		);
		// Replace inline <code> with <span> styled similarly
		html = html.replace(/<code>/g, '<span class="changelog-inline-code">');
		html = html.replace(/<\/code>/g, '</span>');
		return html;
	}

</script>

<svelte:head>
	<title>Changelog - RediCloud</title>
	<meta name="description" content="RediCloud version history and release notes." />
</svelte:head>

<!-- Header bar -->
<header class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<a href="/" class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
				<ArrowLeftOutline class="w-4 h-4" />
				Back
			</a>
			<span class="text-slate-300 dark:text-slate-600">/</span>
			<h1 class="font-bold text-slate-900 dark:text-white">Changelog</h1>
		</div>
		<DarkMode class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" />
	</div>
</header>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Filter -->
	<div class="flex items-center justify-between mb-10">
		<p class="text-slate-500 dark:text-slate-400 text-sm">
			{#if !data.error}
				{filteredReleases.length} release{filteredReleases.length !== 1 ? 's' : ''}
			{/if}
		</p>
		<button
			onclick={() => showPreReleases = !showPreReleases}
			class="inline-flex items-center gap-2 cursor-pointer"
		>
			<div class="relative w-9 h-5 rounded-full transition-colors {showPreReleases ? 'bg-redicloud-500' : 'bg-slate-300 dark:bg-slate-600'}">
				<div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 {showPreReleases ? 'translate-x-4' : 'translate-x-0'}"></div>
			</div>
			<span class="text-sm text-slate-600 dark:text-slate-400">Show pre-releases</span>
		</button>
	</div>

	<!-- Error state -->
	{#if data.error}
		<div class="rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 p-6 text-center">
			<p class="text-red-600 dark:text-red-400">{data.error}</p>
		</div>
	<!-- Releases -->
	{:else}
		<ol class="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-12">
			{#each filteredReleases as release}
				<li class="ml-8">
					<span class="absolute -left-[13px] flex items-center justify-center w-6 h-6 rounded-full {release.prerelease ? 'bg-redicloud-700' : 'bg-redicloud-500'} ring-4 ring-slate-50 dark:ring-slate-900">
						<TagSolid class="w-3 h-3 text-white" />
					</span>
					<div class="space-y-3">
						<time class="text-sm text-slate-500 dark:text-slate-400">{formatDate(release.published_at)}</time>
						<h3 class="text-xl font-bold text-slate-900 dark:text-white">{release.name || release.tag_name}</h3>

						<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
							{release.prerelease
								? 'bg-redicloud-200/50 text-redicloud-800 dark:bg-redicloud-800/30 dark:text-redicloud-200'
								: 'bg-redicloud-100 text-redicloud-700 dark:bg-redicloud-900/30 dark:text-redicloud-400'}">
							{release.prerelease ? 'Pre-release' : 'Stable'}
						</span>

						<!-- Release body -->
						{#if release.body}
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div class="changelog-prose" onclick={handleCodeCopy}>
								{@html renderMarkdown(release.body)}
							</div>
						{/if}

						<!-- Assets -->
						{#if release.assets.length > 0}
							<div class="pt-1">
								<button
									onclick={() => {
										const next = new Set(expandedAssets);
										if (next.has(release.id)) next.delete(release.id);
										else next.add(release.id);
										expandedAssets = next;
									}}
									class="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
								>
									<DownloadSolid class="w-3 h-3" />
									{release.assets.length} asset{release.assets.length !== 1 ? 's' : ''}
									<svg class="w-3 h-3 transition-transform duration-200 {expandedAssets.has(release.id) ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
								</button>
								{#if expandedAssets.has(release.id)}
									<div class="flex flex-wrap gap-2 mt-2">
										{#each release.assets as asset}
											<a
												href={asset.browser_download_url}
												class="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 px-2.5 py-1.5 rounded-lg transition-colors"
											>
												<DownloadSolid class="w-3 h-3" />
												{asset.name}
												<span class="text-slate-400 dark:text-slate-500">({formatSize(asset.size)})</span>
											</a>
										{/each}
									</div>
								{/if}
							</div>
						{/if}

						<!-- GitHub link -->
						<a href={release.html_url} target="_blank" class="inline-flex items-center gap-1.5 text-sm text-redicloud-500 hover:text-redicloud-400 transition-colors">
							<GithubSolid class="w-3.5 h-3.5" />
							View on GitHub
						</a>
					</div>
				</li>
			{/each}
		</ol>
	{/if}
</div>

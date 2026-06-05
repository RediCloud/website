<script lang="ts">
	import { DarkMode, GradientButton } from 'flowbite-svelte';
	import { GithubSolid, DiscordSolid, DownloadSolid, ServerSolid, RocketSolid, CodeBranchSolid, CloudArrowUpSolid, CogSolid, ClipboardOutline, CheckOutline, TagSolid } from 'flowbite-svelte-icons';
	import { animate } from '$lib/actions/animate';

	let showModal = $state(false);
	let copied = $state(false);

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}
</script>

<svelte:head>
	<title>Style Preview - RediCloud</title>
</svelte:head>

<!-- Fixed Dark Mode Toggle -->
<div class="fixed top-4 right-4 z-50">
	<DarkMode class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg p-2.5" />
</div>

<div class="max-w-6xl mx-auto px-6 py-12 space-y-24">

	<!-- Page Title -->
	<header class="text-center space-y-4">
		<h1 class="text-5xl font-extrabold text-gradient">RediCloud Style Preview</h1>
		<p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
			Jeder Abschnitt zeigt einen Design-Style. Toggle Dark Mode oben rechts. Scrolle durch um die Scroll-Animationen zu sehen.
		</p>
	</header>

	<!-- ============================================ -->
	<!-- SECTION 1: Dark Mode Toggle -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">1</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Dark Mode</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Folgt <code class="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">prefers-color-scheme</code> als Default.
			Manueller Toggle oben rechts (Flowbite <code class="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">DarkMode</code> Component).
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="text-lg font-semibold mb-2">Surface Card (Light/Dark)</h3>
				<p class="text-slate-600 dark:text-slate-400 text-sm">
					Heller Hintergrund im Light Mode, Slate-800 im Dark Mode. Borders und Schatten passen sich automatisch an.
				</p>
			</div>
			<div class="rounded-2xl bg-redicloud-500 p-6 shadow-lg text-white">
				<h3 class="text-lg font-semibold mb-2">Brand Color Card</h3>
				<p class="text-cyan-100 text-sm">
					RediCloud Primary Cyan (#09ADD3) bleibt in beiden Modi gleich. Immer weisse Schrift.
				</p>
			</div>
		</div>
	</section>

	<!-- ============================================ -->
	<!-- SECTION 2: Modern Gradients & Buttons -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">2</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Modern Gradients & Buttons</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Cyan-basierte Gradienten passend zur RediCloud Brand Color. Glow-Effekt bei Hover.
		</p>

		<!-- Gradient Buttons -->
		<div class="space-y-4">
			<h3 class="text-lg font-semibold text-slate-700 dark:text-slate-300">Buttons</h3>
			<div class="flex flex-wrap gap-4">
				<button class="px-6 py-3 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-medium glow-cyan hover:from-redicloud-600 hover:to-cyan-500 transition-all duration-300 cursor-pointer">
					Primary Gradient
				</button>
				<button class="px-6 py-3 rounded-xl border-2 border-redicloud-500 text-redicloud-500 font-medium hover:bg-redicloud-500 hover:text-white transition-all duration-300 cursor-pointer">
					Outline
				</button>
				<button class="px-6 py-3 rounded-xl text-redicloud-500 font-medium hover:bg-redicloud-500/10 transition-all duration-300 cursor-pointer">
					Ghost
				</button>
				<GradientButton color="cyanToBlue" pill>Cyan to Blue</GradientButton>
			</div>
		</div>

		<!-- Gradient text -->
		<div class="space-y-4">
			<h3 class="text-lg font-semibold text-slate-700 dark:text-slate-300">Gradient Text</h3>
			<h2 class="text-4xl font-extrabold text-gradient">RediCloud v2</h2>
			<p class="text-slate-500 dark:text-slate-400 text-sm">
				Gradient-Text fuer Ueberschriften — dezent eingesetzt.
			</p>
		</div>

		<!-- Gradient backgrounds -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="rounded-2xl p-6 bg-gradient-to-br from-redicloud-500/10 to-cyan-500/10 dark:from-redicloud-500/20 dark:to-cyan-500/20 border border-redicloud-200 dark:border-redicloud-800/30">
				<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Subtle Gradient BG</h3>
				<p class="text-slate-600 dark:text-slate-400 text-sm">Fuer Section-Hintergruende oder Hero-Bereiche. Sehr dezent.</p>
			</div>
			<div class="rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
				<h3 class="text-lg font-semibold text-white mb-2">Dark Gradient Card</h3>
				<p class="text-slate-400 text-sm">Dunkle Variante fuer Kontrast-Elemente, z.B. Code-Snippets oder Feature-Highlights.</p>
			</div>
		</div>
	</section>

	<!-- ============================================ -->
	<!-- SECTION 3: Card Designs -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">3</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Card Designs</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Verschiedene Card-Stile fuer Features, Help-Section, Installation-Steps.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<!-- Feature Card -->
			<div class="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl hover:border-redicloud-500/50 transition-all duration-300">
				<div class="w-14 h-14 rounded-2xl bg-redicloud-500/10 flex items-center justify-center mb-5 group-hover:bg-redicloud-500 group-hover:scale-110 transition-all duration-300">
					<RocketSolid class="w-7 h-7 text-redicloud-500 group-hover:text-white transition-colors duration-300" />
				</div>
				<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Feature Card</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
					Hover fuer den Icon-Effekt. Border faerbt sich. Schatten wird staerker.
				</p>
			</div>

			<!-- Help Card (Featured) -->
			<div class="relative rounded-2xl border-2 border-redicloud-500 bg-white dark:bg-slate-800 p-6 shadow-xl overflow-hidden">
				<div class="absolute top-0 right-0 bg-redicloud-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
				<div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-redicloud-500 to-cyan-400 flex items-center justify-center mb-5">
					<DiscordSolid class="w-7 h-7 text-white" />
				</div>
				<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Discord Support</h3>
				<ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-5">
					<li class="flex items-center gap-2">
						<span class="text-green-500">&#10003;</span> Ask for help
					</li>
					<li class="flex items-center gap-2">
						<span class="text-green-500">&#10003;</span> Feature requests
					</li>
					<li class="flex items-center gap-2">
						<span class="text-green-500">&#10003;</span> Bug reports
					</li>
				</ul>
				<button class="w-full py-2.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity cursor-pointer">
					Join Discord
				</button>
			</div>

			<!-- Install Step Card with Copy -->
			<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<div class="flex items-center gap-3 mb-4">
					<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-redicloud-500 to-cyan-400 text-white font-bold text-lg">1</span>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">Download</h3>
				</div>
				<div class="relative group/code rounded-xl bg-slate-950 border border-slate-700/50 p-4">
					<pre class="font-mono text-sm pr-10"><code><span class="text-slate-500">$</span> <span class="text-slate-300">wget</span> <span class="text-redicloud-400">redicloud.zip</span></code></pre>
					<button
						onclick={() => copyToClipboard('wget redicloud.zip')}
						class="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-500 hover:text-slate-300 transition-all duration-200 opacity-0 group-hover/code:opacity-100 cursor-pointer"
						title="Copy to clipboard"
					>
						{#if copied}
							<CheckOutline class="w-4 h-4 text-redicloud-400" />
						{:else}
							<ClipboardOutline class="w-4 h-4" />
						{/if}
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================================ -->
	<!-- SECTION 4: Scroll Animations -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">4</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Scroll Animations</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Elemente blenden ein beim Scrollen. Verschiedene Richtungen, mit Stagger-Delay.
		</p>

		<div use:animate={{ type: 'fade-up' }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
			<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Fade Up</h3>
			<p class="text-slate-500 dark:text-slate-400 text-sm">Kommt von unten hoch.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div use:animate={{ type: 'fade-up', delay: 0 }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="font-semibold text-slate-900 dark:text-white">Card 1</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Delay: 0ms</p>
			</div>
			<div use:animate={{ type: 'fade-up', delay: 150 }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="font-semibold text-slate-900 dark:text-white">Card 2</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Delay: 150ms</p>
			</div>
			<div use:animate={{ type: 'fade-up', delay: 300 }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="font-semibold text-slate-900 dark:text-white">Card 3</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Delay: 300ms</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div use:animate={{ type: 'slide-left' }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="font-semibold text-slate-900 dark:text-white">Slide Left</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Kommt von links rein.</p>
			</div>
			<div use:animate={{ type: 'slide-right' }} class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
				<h3 class="font-semibold text-slate-900 dark:text-white">Slide Right</h3>
				<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Kommt von rechts rein.</p>
			</div>
		</div>
	</section>

	<!-- ============================================ -->
	<!-- SECTION 5: Hero Section Mockup -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">5</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Hero Section Mockup</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Neu gestaltete Hero-Section mit Terminal-Output statt Screenshot, Gradient-Hintergrund und modernem Layout.
		</p>

		<!-- Hero Preview -->
		<div class="relative rounded-3xl overflow-hidden">
			<!-- Background -->
			<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
				<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-redicloud-500/15 rounded-full blur-3xl"></div>
				<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
				<div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
			</div>

			<div class="relative px-8 md:px-16 py-16 md:py-24">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<!-- Left: Content -->
					<div class="space-y-8">
						<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-redicloud-500/10 border border-redicloud-500/20 text-redicloud-400 text-sm font-medium">
							<span class="w-2 h-2 rounded-full bg-redicloud-500 animate-pulse"></span>
							Open Source Cloud System
						</span>

						<div class="space-y-3">
							<h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight">
								Redi<span class="text-transparent bg-clip-text bg-gradient-to-r from-redicloud-400 to-cyan-300">Cloud</span>
							</h1>
							<p class="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg">
								A cluster-based cloud system for Minecraft. Powered by Redis for maximum performance.
							</p>
						</div>

						<!-- CTA Buttons -->
						<div class="flex flex-wrap gap-4">
							<button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-semibold glow-cyan hover:from-redicloud-600 hover:to-cyan-500 transition-all duration-300 cursor-pointer">
								<GithubSolid class="w-5 h-5" />
								GitHub
							</button>
							<button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-redicloud-500/50 hover:text-white transition-all duration-300 cursor-pointer">
								<DiscordSolid class="w-5 h-5" />
								Discord
							</button>
							<button class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-redicloud-500/50 hover:text-white transition-all duration-300 cursor-pointer">
								<DownloadSolid class="w-5 h-5" />
								Download
							</button>
						</div>
					</div>

					<!-- Right: Terminal -->
					<div class="relative">
						<div class="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-950">
							<!-- Window frame -->
							<div class="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
								<div class="w-3 h-3 rounded-full bg-red-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
								<div class="w-3 h-3 rounded-full bg-green-500/80"></div>
								<span class="text-xs text-slate-500 ml-2">redicloud-console</span>
							</div>
							<!-- Terminal content -->
							<div class="p-4 md:p-5 font-mono text-[10px] md:text-xs leading-normal overflow-x-auto">
								<!-- ASCII Art Banner -->
<pre class="whitespace-pre text-[9px] md:text-[11px] leading-none mb-2"><span class="text-white"> ____           _ _</span><span class="text-redicloud-400">  ____ _                 _</span>
<span class="text-white">|  _ \ ___  __| (_)</span><span class="text-redicloud-400">/ ___| | ___  _   _  __| |</span>
<span class="text-white">| |_) / _ \/ _` | </span><span class="text-redicloud-400">| |   | |/ _ \| | | |/ _` |</span>
<span class="text-white">|  _ &lt;  __/ (_| | </span><span class="text-redicloud-400">| |___| | (_) | |_| | (_| |</span>
<span class="text-white">|_| \_\___|\__,_|_|</span><span class="text-redicloud-400">\____|_|\___/ \__,_|\__,_|</span></pre>
								<div class="text-slate-400 text-[10px] md:text-xs">A redis based cluster cloud system for Minecraft</div>
								<div class="mt-2 text-slate-500">
									<span class="text-slate-600">&raquo;</span> Version: <span class="text-redicloud-400">2.0.0-SNAPSHOT</span> | Git: <span class="text-redicloud-400">------</span>
								</div>
								<div class="text-slate-500">
									<span class="text-slate-600">&raquo;</span> Discord: <span class="text-redicloud-400">discord.gg/g2HV52VV4G</span>
								</div>
								<div class="mt-2 text-slate-500">
									<span class="text-slate-600">&raquo;</span> Checks:
								</div>
								<div class="text-slate-500 ml-2">
									<span class="text-slate-600">&bull;</span> Libraries &raquo; <span class="text-green-400">&#10003;</span> <span class="text-slate-400">(Libs loaded)</span>
								</div>
								<div class="text-slate-500 ml-2">
									<span class="text-slate-600">&bull;</span> No-Root-User &raquo; <span class="text-green-400">&#10003;</span> <span class="text-slate-400">(User: <span class="text-redicloud-400">user</span>)</span>
								</div>
								<div class="text-slate-500 ml-2">
									<span class="text-slate-600">&bull;</span> Java-Version &raquo; <span class="text-green-400">&#10003;</span> <span class="text-slate-400">(Java: <span class="text-redicloud-400">17.0.2</span>)</span>
								</div>
								<div class="text-slate-500 ml-2">
									<span class="text-slate-600">&bull;</span> Log-Level &raquo; <span class="text-redicloud-400">INFO</span>
								</div>
								<div class="mt-2 text-slate-500">
									<span class="text-slate-600">&raquo;</span> <span class="text-slate-400">Starting in 5 seconds...</span>
								</div>
								<div class="mt-1">
									<span class="text-slate-600">&bull;</span> <span class="text-redicloud-400">user</span><span class="text-slate-600">@</span><span class="text-slate-300">node01</span> <span class="text-slate-600">&rarr;</span> <span class="animate-pulse text-slate-400">_</span>
								</div>
							</div>
						</div>
						<!-- Glow behind terminal -->
						<div class="absolute -inset-4 bg-redicloud-500/8 rounded-3xl blur-2xl -z-10"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================================ -->
	<!-- SECTION 6: Flowbite Components Demo -->
	<!-- ============================================ -->
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-redicloud-500/10 text-redicloud-500 text-sm font-bold">6</span>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-white">Flowbite-Svelte Components</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400">
			Einige Flowbite-Svelte Komponenten die wir fuer komplexere Darstellungen nutzen werden.
		</p>

		<!-- Timeline Preview (for Changelog) — Custom built -->
		<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-8">Timeline (Changelog Preview)</h3>

			<ol class="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-10">
				<!-- v2.5.0-beta.2 -->
				<li class="ml-8">
					<span class="absolute -left-[13px] flex items-center justify-center w-6 h-6 rounded-full bg-redicloud-700 ring-4 ring-white dark:ring-slate-800">
						<TagSolid class="w-3 h-3 text-white" />
					</span>
					<div class="space-y-2">
						<time class="text-sm font-normal text-slate-500 dark:text-slate-400">June 2, 2026</time>
						<h4 class="text-lg font-bold text-slate-900 dark:text-white">v2.5.0-beta.2</h4>
						<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-redicloud-200/50 text-redicloud-800 dark:bg-redicloud-800/30 dark:text-redicloud-200">Pre-release</span>
						<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
							Bug fixes and performance improvements for the cluster module.
						</p>
						<a href="#" class="inline-flex items-center gap-1.5 text-sm text-redicloud-500 hover:text-redicloud-400 transition-colors">
							<GithubSolid class="w-3.5 h-3.5" />
							View on GitHub
						</a>
					</div>
				</li>

				<!-- v2.4.0-RELEASE -->
				<li class="ml-8">
					<span class="absolute -left-[13px] flex items-center justify-center w-6 h-6 rounded-full bg-redicloud-500 ring-4 ring-white dark:ring-slate-800">
						<TagSolid class="w-3 h-3 text-white" />
					</span>
					<div class="space-y-2">
						<time class="text-sm font-normal text-slate-500 dark:text-slate-400">July 24, 2024</time>
						<h4 class="text-lg font-bold text-slate-900 dark:text-white">v2.4.0-RELEASE</h4>
						<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-redicloud-100 text-redicloud-700 dark:bg-redicloud-900/30 dark:text-redicloud-400">Stable</span>
						<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
							Major release with new API features, improved node management, and Redis cluster support.
						</p>
						<div class="flex flex-wrap gap-2 mt-1">
							<span class="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
								<DownloadSolid class="w-3 h-3" />
								redicloud.zip
							</span>
						</div>
						<a href="#" class="inline-flex items-center gap-1.5 text-sm text-redicloud-500 hover:text-redicloud-400 transition-colors">
							<GithubSolid class="w-3.5 h-3.5" />
							View on GitHub
						</a>
					</div>
				</li>

				<!-- v2.3.7-RELEASE -->
				<li class="ml-8">
					<span class="absolute -left-[13px] flex items-center justify-center w-6 h-6 rounded-full bg-redicloud-500 ring-4 ring-white dark:ring-slate-800">
						<TagSolid class="w-3 h-3 text-white" />
					</span>
					<div class="space-y-2">
						<time class="text-sm font-normal text-slate-500 dark:text-slate-400">July 13, 2024</time>
						<h4 class="text-lg font-bold text-slate-900 dark:text-white">v2.3.7-RELEASE</h4>
						<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-redicloud-100 text-redicloud-700 dark:bg-redicloud-900/30 dark:text-redicloud-400">Stable</span>
						<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
							Hotfix release for node reconnection and memory leak in packet handler.
						</p>
						<a href="#" class="inline-flex items-center gap-1.5 text-sm text-redicloud-500 hover:text-redicloud-400 transition-colors">
							<GithubSolid class="w-3.5 h-3.5" />
							View on GitHub
						</a>
					</div>
				</li>
			</ol>
		</div>

		<!-- Modal Preview -->
		<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Modal (Warning Dialog)</h3>
			<button
				onclick={() => showModal = true}
				class="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors cursor-pointer"
			>
				Open Warning Modal
			</button>
		</div>

		{#if showModal}
			<!-- Backdrop -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
				onkeydown={(e) => { if (e.key === 'Escape') showModal = false; }}
			>
				<!-- Modal -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl"
					onclick={(e) => e.stopPropagation()}
				>
					<!-- Header -->
					<div class="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
						<h3 class="text-lg font-bold text-red-500">WARNING</h3>
						<button
							onclick={() => showModal = false}
							class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
						</button>
					</div>
					<!-- Body -->
					<div class="p-5">
						<p class="text-slate-600 dark:text-slate-400">
							Note that RediCloud is still unstable. Please do not use it in a production environment.
						</p>
					</div>
					<!-- Footer -->
					<div class="flex justify-end p-5 border-t border-slate-200 dark:border-slate-700">
						<button
							onclick={() => showModal = false}
							class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
						>
							Ok, I take note
						</button>
					</div>
				</div>
			</div>
		{/if}

		<!-- Icons -->
		<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Icons (flowbite-svelte-icons)</h3>
			<p class="text-slate-500 dark:text-slate-400 text-sm mb-4">Ersetzt FontAwesome komplett:</p>
			<div class="flex flex-wrap gap-6">
				<div class="flex flex-col items-center gap-2">
					<GithubSolid class="w-8 h-8 text-slate-700 dark:text-slate-300" />
					<span class="text-xs text-slate-500">GitHub</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<DiscordSolid class="w-8 h-8 text-[#5865F2]" />
					<span class="text-xs text-slate-500">Discord</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<DownloadSolid class="w-8 h-8 text-redicloud-500" />
					<span class="text-xs text-slate-500">Download</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<ServerSolid class="w-8 h-8 text-redicloud-600" />
					<span class="text-xs text-slate-500">Server</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<RocketSolid class="w-8 h-8 text-redicloud-500" />
					<span class="text-xs text-slate-500">Fast</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<CodeBranchSolid class="w-8 h-8 text-redicloud-400" />
					<span class="text-xs text-slate-500">Open Source</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<CloudArrowUpSolid class="w-8 h-8 text-redicloud-500" />
					<span class="text-xs text-slate-500">Cloud</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<CogSolid class="w-8 h-8 text-redicloud-700" />
					<span class="text-xs text-slate-500">API</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Spacer for scroll animation testing -->
	<div class="h-16"></div>
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { DarkMode } from 'flowbite-svelte';
	import { DownloadSolid } from 'flowbite-svelte-icons';

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let activeSection = $state('top');

	const sections = ['top', 'features', 'installation', 'help'];

	function handleScroll() {
		scrolled = window.scrollY > 50;

		for (const id of sections) {
			const el = document.getElementById(id);
			if (el) {
				const top = el.offsetTop;
				const height = el.offsetHeight;
				if (window.scrollY >= top - 120 && window.scrollY < top + height) {
					activeSection = id;
				}
			}
		}
	}

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({ top: el.offsetTop + 1, behavior: 'smooth' });
			menuOpen = false;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 {scrolled
		? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm'
		: 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 md:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2">
				<img src="/images/redicloud-logo-trans.png" alt="RediCloud" class="h-8 w-auto" />
				<span class="font-bold text-lg text-slate-900 dark:text-white">
					Redi<span class="text-redicloud-500">Cloud</span>
				</span>
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden md:flex items-center gap-1">
				{#each [
					{ id: 'top', label: 'Home' },
					{ id: 'features', label: 'Features' },
					{ id: 'installation', label: 'Installation' },
					{ id: 'help', label: 'Help' }
				] as item}
					<button
						onclick={() => scrollTo(item.id)}
						class="px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
							{activeSection === item.id
								? 'text-redicloud-500'
								: 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}"
					>
						{item.label}
					</button>
				{/each}

				<a
					href="https://docs.redicloud.dev"
					target="_blank"
					class="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
				>
					Docs
				</a>

				<a
					href="/changelog"
					class="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
				>
					Changelog
				</a>

				<DarkMode class="ml-1 p-2 rounded-lg transition-colors cursor-pointer text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" />

				<a
					href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip"
					target="_blank"
					class="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white text-sm font-medium hover:opacity-90 transition-opacity"
				>
					<DownloadSolid class="w-4 h-4" />
					Download
				</a>
			</nav>

			<!-- Mobile menu button -->
			<div class="flex items-center gap-2 md:hidden">
				<DarkMode class="p-2 rounded-lg text-slate-500" />
				<button
					onclick={() => (menuOpen = !menuOpen)}
					class="p-2 rounded-lg transition-colors cursor-pointer text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
				>
					{#if menuOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700">
			<div class="px-4 py-3 space-y-1">
				{#each [
					{ id: 'top', label: 'Home' },
					{ id: 'features', label: 'Features' },
					{ id: 'installation', label: 'Installation' },
					{ id: 'help', label: 'Help' }
				] as item}
					<button
						onclick={() => scrollTo(item.id)}
						class="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer
							{activeSection === item.id
								? 'text-redicloud-500 bg-redicloud-500/5'
								: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}"
					>
						{item.label}
					</button>
				{/each}
				<a href="https://docs.redicloud.dev" target="_blank" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
					Docs
				</a>
				<a href="/changelog" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
					Changelog
				</a>
				<a
					href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip"
					target="_blank"
					class="block mt-2 text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white text-sm font-medium"
				>
					Download
				</a>
			</div>
		</div>
	{/if}
</header>

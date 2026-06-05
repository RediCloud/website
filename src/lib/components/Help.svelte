<script lang="ts">
	import { GithubSolid, DiscordSolid } from 'flowbite-svelte-icons';
	import { animate } from '$lib/actions/animate';

	const channels = [
		{
			title: 'GitHub Issues',
			icon: GithubSolid,
			featured: false,
			items: [
				{ text: 'Feature requests', available: true },
				{ text: 'Bug report', available: true },
				{ text: 'Asking for help', available: false }
			],
			link: 'https://github.com/RediCloud/cloud-v2/issues',
			linkText: 'Open Issue'
		},
		{
			title: 'Discord',
			icon: DiscordSolid,
			featured: false,
			items: [
				{ text: 'Asking for help', available: true },
				{ text: 'Feature requests', available: true },
				{ text: 'Bug report', available: true }
			],
			link: 'https://discord.gg/G6f3uvsSqQ',
			linkText: 'Join Discord'
		}
	];
</script>

<section id="help" class="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div use:animate={{ type: 'fade-up' }} class="text-center max-w-2xl mx-auto mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Need help?</h2>
			<p class="text-slate-500 dark:text-slate-400 leading-relaxed">
				Here you will find a small overview of where you can get help.
			</p>
		</div>

		<!-- Help Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			{#each channels as channel, i}
				<div use:animate={{ type: 'fade-up', delay: i * 100 }}>
					<div class="relative rounded-2xl {channel.featured ? 'border-2 border-redicloud-500 shadow-xl' : 'border border-slate-200 dark:border-slate-700 shadow-lg'} bg-white dark:bg-slate-800 p-6 h-full flex flex-col overflow-hidden">
						{#if channel.featured}
							<div class="absolute top-0 right-0 bg-redicloud-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
						{/if}
						{#if channel.badge}
							<div class="absolute top-0 right-0 bg-slate-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{channel.badge}</div>
						{/if}

						<div class="w-14 h-14 rounded-2xl {channel.featured ? 'bg-gradient-to-br from-redicloud-500 to-cyan-400' : 'bg-redicloud-500/10'} flex items-center justify-center mb-5">
							<channel.icon class="w-7 h-7 {channel.featured ? 'text-white' : 'text-redicloud-500'}" />
						</div>

						<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{channel.title}</h3>

						<ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2.5 mb-6 flex-1">
							{#each channel.items as item}
								<li class="flex items-center gap-2">
									{#if item.available}
										<svg class="w-4 h-4 text-redicloud-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
										<span>{item.text}</span>
									{:else}
										<svg class="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
										<span class="line-through text-slate-400 dark:text-slate-600">{item.text}</span>
									{/if}
								</li>
							{/each}
						</ul>

						<a
							href={channel.link}
							target="_blank"
							class="block text-center py-2.5 rounded-xl font-medium transition-all duration-300
								{channel.featured
									? 'bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white hover:opacity-90'
									: 'border border-redicloud-500 text-redicloud-500 hover:bg-redicloud-500 hover:text-white'}"
						>
							{channel.linkText}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

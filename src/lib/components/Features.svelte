<script lang="ts">
	import { RocketSolid, CodeBranchSolid, ServerSolid, CogSolid } from 'flowbite-svelte-icons';
	import { animate } from '$lib/actions/animate';

	const features = [
		{
			icon: RocketSolid,
			title: 'Fast',
			description: 'RediCloud uses the Redis database to store data and communicate. Redis is an in-memory database that brings maximum speed.',
			link: 'https://redis.com',
			linkText: 'Learn more'
		},
		{
			icon: CodeBranchSolid,
			title: 'Open Source',
			description: 'The project is open source and available on GitHub. An entire community can actively develop the project.',
			link: 'https://github.com/RediCloud/cloud-v2',
			linkText: 'View on GitHub'
		},
		{
			icon: ServerSolid,
			title: 'Clustered',
			description: 'The cloud system is cluster based. Any number of nodes can be connected. If a node fails, the other nodes take over.',
			link: 'https://docs.redicloud.dev/cluster',
			linkText: 'Read docs'
		},
		{
			icon: CogSolid,
			title: 'Powerful API',
			description: 'There is an API which can be used for plugins. It is also possible to code your own modules which can run on a server or node.',
			link: 'https://docs.redicloud.dev/api',
			linkText: 'API docs'
		}
	];
</script>

<section id="features" class="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div use:animate={{ type: 'fade-up' }} class="text-center max-w-2xl mx-auto mb-16">
			<h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Features</h2>
			<p class="text-slate-500 dark:text-slate-400 leading-relaxed">
				Some features are listed below. You can find all features in our
				<a href="https://docs.redicloud.dev/" target="_blank" class="text-redicloud-500 hover:text-redicloud-400 transition-colors">documentation</a>.
			</p>
		</div>

		<!-- Feature Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each features as feature, i}
				<div use:animate={{ type: 'fade-up', delay: i * 100 }}>
					<a
						href={feature.link}
						target="_blank"
						class="group block rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl hover:border-redicloud-500/50 transition-all duration-300 h-full"
					>
						<div class="w-14 h-14 rounded-2xl bg-redicloud-500/10 flex items-center justify-center mb-5 group-hover:bg-redicloud-500 group-hover:scale-110 transition-all duration-300">
							<feature.icon class="w-7 h-7 text-redicloud-500 group-hover:text-white transition-colors duration-300" />
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
						<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{feature.description}</p>
						<span class="inline-flex items-center gap-1 text-sm font-medium text-redicloud-500 group-hover:text-redicloud-400 transition-colors">
							{feature.linkText}
							<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
						</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

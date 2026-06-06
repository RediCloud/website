<script lang="ts">
	import { ClipboardOutline, CheckOutline } from 'flowbite-svelte-icons';
	import { animate } from '$lib/actions/animate';

	let copiedIndex = $state(-1);

	const steps = [
		{
			num: '1',
			title: 'Install',
			description: 'Downloads the latest release, verifies SHA-256 checksum and extracts everything automatically.',
			command: 'curl -fsSL https://raw.githubusercontent.com/RediCloud/cloud-v2/main/install.sh | bash'
		},
		{
			num: '2',
			title: 'Start',
			description: 'Start the cloud node.',
			command: './start.sh'
		},
		{
			num: '3',
			title: 'Setup',
			description: 'Follow the interactive setup to configure your Redis database connection.'
		}
	];

	const requirements = [
		'Java 21+ (Temurin recommended)',
		'Redis database (running & reachable)',
		'Linux/macOS with bash, curl, unzip, sha256sum',
	];

	function copyCommand(command: string, index: number) {
		navigator.clipboard.writeText(command);
		copiedIndex = index;
		setTimeout(() => (copiedIndex = -1), 2000);
	}
</script>

<section id="installation" class="py-24 md:py-32 bg-white dark:bg-slate-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
			<!-- Left: Steps -->
			<div>
				<div use:animate={{ type: 'fade-up' }} class="mb-12">
					<h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Installation</h2>
					<p class="text-slate-500 dark:text-slate-400 leading-relaxed">
						The RediCloud installation process is very simple. If there are any problems, we are
						happy to help on the <a href="https://discord.gg/G6f3uvsSqQ" target="_blank" class="text-redicloud-500 hover:text-redicloud-400 transition-colors">Discord</a>.
					</p>
				</div>

				<!-- Requirements -->
				<div use:animate={{ type: 'fade-up', delay: 50 }} class="mb-8">
					<h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Requirements</h3>
					<ul class="space-y-1.5">
						{#each requirements as req}
							<li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
								<svg class="w-4 h-4 text-redicloud-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
								{req}
							</li>
						{/each}
					</ul>
				</div>

				<div class="space-y-4">
					{#each steps as step, i}
						<div use:animate={{ type: 'fade-up', delay: i * 100 }} class="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5">
							<div class="flex items-start gap-4">
								<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-redicloud-500 to-cyan-400 text-white font-bold text-sm shrink-0">
									{step.num}
								</span>
								<div class="flex-1 min-w-0">
									<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
									<p class="text-slate-500 dark:text-slate-400 text-sm mb-3">{step.description}</p>
									{#if step.command}
										<div class="relative group/code">
											<div class="rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700/50 p-3 overflow-x-auto select-all">
												<pre class="font-mono text-sm pr-10 whitespace-nowrap"><code><span class="text-slate-400 dark:text-slate-500">$</span> <span class="text-slate-700 dark:text-slate-300">{step.command}</span></code></pre>
											</div>
											<button
												onclick={() => copyCommand(step.command!, i)}
												class="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-all duration-200 opacity-0 group-hover/code:opacity-100 cursor-pointer z-10"
												title="Copy to clipboard"
											>
												{#if copiedIndex === i}
													<CheckOutline class="w-4 h-4 text-redicloud-500 dark:text-redicloud-400" />
												{:else}
													<ClipboardOutline class="w-4 h-4" />
												{/if}
											</button>
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>


			</div>

			<!-- Right: Terminal showing startup -->
			<div use:animate={{ type: 'slide-right' }} class="relative hidden lg:block">
				<div class="rounded-2xl overflow-hidden shadow-lg shadow-black/10 dark:shadow-2xl border border-slate-300 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-950">
					<div class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50">
						<div class="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
						<div class="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
						<div class="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
						<span class="text-xs text-slate-400 dark:text-slate-500 ml-2">redicloud-console</span>
					</div>
					<div class="p-5 font-mono text-[10px] md:text-xs leading-normal">
						<div class="text-slate-500 dark:text-slate-500">
							<span class="text-slate-400 dark:text-slate-600">&raquo;</span> Node Information:
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> Name &raquo; <span class="text-redicloud-600 dark:text-redicloud-400">node01</span>
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> Host &raquo; <span class="text-redicloud-600 dark:text-redicloud-400">127.0.0.1</span>
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> ID &raquo; <span class="text-redicloud-600 dark:text-redicloud-400">95d57ce4-e0a7-44d0-93b3-8908e2fba3a5</span>
						</div>
						<div class="mt-2 text-slate-500 dark:text-slate-500">
							node01: <span class="text-green-500 dark:text-green-400">&#x1F7E2;</span> (connected to the cluster)
						</div>
						<div class="text-slate-500 dark:text-slate-500">
							node01: <span class="text-yellow-500 dark:text-yellow-400">&#x1F7E0;</span> (new master)
						</div>
						<div class="text-slate-500 dark:text-slate-500 mt-1">
							Velocity-1: <span class="text-green-500 dark:text-green-400">&#x1F7E2;</span> (connected to the cluster)
						</div>
						<div class="mt-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> <span class="text-redicloud-600 dark:text-redicloud-400">user</span><span class="text-slate-400 dark:text-slate-600">@</span><span class="text-slate-700 dark:text-slate-300">node01</span> <span class="text-slate-400 dark:text-slate-600">&rarr;</span> <span class="animate-pulse text-slate-500 dark:text-slate-400">_</span>
						</div>
					</div>
				</div>
				<div class="absolute -inset-4 bg-redicloud-500/5 dark:bg-redicloud-500/8 rounded-3xl blur-2xl -z-10"></div>
			</div>
		</div>
	</div>
</section>

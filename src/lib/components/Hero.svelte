<script lang="ts">
	import { registeredNodes, connectedNodes } from '$lib/stores/metrics';
	import { GithubSolid, DiscordSolid, DownloadSolid } from 'flowbite-svelte-icons';
</script>

<section id="top" class="relative min-h-screen flex items-center overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
		<div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-redicloud-500/15 dark:bg-redicloud-500/15 rounded-full blur-3xl"></div>
		<div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-redicloud-400/8 dark:bg-redicloud-400/5 rounded-full blur-3xl"></div>
		<div class="absolute inset-0 opacity-[0.03] dark:opacity-5" style="background-image: radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>
	</div>

	<div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Left: Content -->
			<div class="space-y-8">
				<div class="space-y-4">
					<h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
						Redi<span class="text-transparent bg-clip-text bg-gradient-to-r from-redicloud-500 to-cyan-500 dark:from-redicloud-400 dark:to-cyan-300">Cloud</span>
					</h1>
					<p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
						A cluster-based cloud system for Minecraft. Powered by Redis for maximum performance.
					</p>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-wrap gap-4">
					<a
						href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip"
						target="_blank"
						class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-semibold glow-cyan hover:from-redicloud-600 hover:to-cyan-500 transition-all duration-300"
					>
						<DownloadSolid class="w-5 h-5" />
						Download
					</a>
					<a
						href="https://github.com/RediCloud/cloud-v2"
						target="_blank"
						class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold hover:border-redicloud-500/50 hover:text-redicloud-600 dark:hover:text-white transition-all duration-300"
					>
						<GithubSolid class="w-5 h-5" />
						GitHub
					</a>
					<a
						href="https://discord.gg/G6f3uvsSqQ"
						target="_blank"
						class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold hover:border-redicloud-500/50 hover:text-redicloud-600 dark:hover:text-white transition-all duration-300"
					>
						<DiscordSolid class="w-5 h-5" />
						Discord
					</a>
				</div>
			</div>

			<!-- Right: Terminal -->
			<div class="relative">
				<div class="rounded-2xl overflow-hidden shadow-lg shadow-black/10 dark:shadow-2xl border border-slate-300 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-950">
					<!-- Window frame -->
					<div class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50">
						<div class="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
						<div class="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
						<div class="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
						<span class="text-xs text-slate-400 dark:text-slate-500 ml-2">redicloud-console</span>
					</div>
					<!-- Terminal content -->
					<div class="p-4 md:p-5 font-mono text-[10px] md:text-xs leading-normal overflow-x-auto">
<pre class="whitespace-pre text-[9px] md:text-[11px] leading-none mb-2"><span class="text-slate-800 dark:text-white"> ____           _ _</span><span class="text-redicloud-600 dark:text-redicloud-400">  ____ _                 _</span>
<span class="text-slate-800 dark:text-white">|  _ \ ___  __| (_)</span><span class="text-redicloud-600 dark:text-redicloud-400">/ ___| | ___  _   _  __| |</span>
<span class="text-slate-800 dark:text-white">| |_) / _ \/ _` | </span><span class="text-redicloud-600 dark:text-redicloud-400">| |   | |/ _ \| | | |/ _` |</span>
<span class="text-slate-800 dark:text-white">|  _ &lt;  __/ (_| | </span><span class="text-redicloud-600 dark:text-redicloud-400">| |___| | (_) | |_| | (_| |</span>
<span class="text-slate-800 dark:text-white">|_| \_\___|\__,_|_|</span><span class="text-redicloud-600 dark:text-redicloud-400">\____|_|\___/ \__,_|\__,_|</span></pre>
						<div class="text-slate-600 dark:text-slate-400 text-[10px] md:text-xs">A redis based cluster cloud system for Minecraft</div>
						<div class="mt-2 text-slate-500 dark:text-slate-500">
							<span class="text-slate-400 dark:text-slate-600">&raquo;</span> Version: <span class="text-redicloud-600 dark:text-redicloud-400">2.0.0-SNAPSHOT</span> | Git: <span class="text-redicloud-600 dark:text-redicloud-400">------</span>
						</div>
						<div class="text-slate-500 dark:text-slate-500">
							<span class="text-slate-400 dark:text-slate-600">&raquo;</span> Discord: <span class="text-redicloud-600 dark:text-redicloud-400">discord.gg/g2HV52VV4G</span>
						</div>
						<div class="mt-2 text-slate-500 dark:text-slate-500">
							<span class="text-slate-400 dark:text-slate-600">&raquo;</span> Checks:
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> Libraries &raquo; <span class="text-green-600 dark:text-green-400">&#10003;</span> <span class="text-slate-600 dark:text-slate-400">(Libs loaded)</span>
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> Java-Version &raquo; <span class="text-green-600 dark:text-green-400">&#10003;</span> <span class="text-slate-600 dark:text-slate-400">(Java: <span class="text-redicloud-600 dark:text-redicloud-400">17.0.2</span>)</span>
						</div>
						<div class="text-slate-500 dark:text-slate-500 ml-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> Log-Level &raquo; <span class="text-redicloud-600 dark:text-redicloud-400">INFO</span>
						</div>
						<div class="mt-2">
							<span class="text-slate-400 dark:text-slate-600">&bull;</span> <span class="text-redicloud-600 dark:text-redicloud-400">user</span><span class="text-slate-400 dark:text-slate-600">@</span><span class="text-slate-700 dark:text-slate-300">node01</span> <span class="text-slate-400 dark:text-slate-600">&rarr;</span> <span class="animate-pulse text-slate-500 dark:text-slate-400">_</span>
						</div>
					</div>
				</div>
				<!-- Glow behind terminal -->
				<div class="absolute -inset-4 bg-redicloud-500/8 dark:bg-redicloud-500/8 rounded-3xl blur-2xl -z-10"></div>
			</div>
		</div>
	</div>
</section>

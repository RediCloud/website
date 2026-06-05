<script lang="ts">
	import { GithubSolid, DiscordSolid } from 'flowbite-svelte-icons';
</script>

<footer class="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
			<!-- About -->
			<div>
				<div class="flex items-center gap-2 mb-4">
					<img src="/images/redicloud-logo-trans.png" alt="RediCloud" class="h-8 w-auto" />
					<span class="font-bold text-lg text-slate-900 dark:text-white">
						Redi<span class="text-redicloud-500">Cloud</span>
					</span>
				</div>
				<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
					A redis based cluster cloud system for Minecraft.
				</p>
				<div class="flex gap-3">
					<a href="https://github.com/RediCloud/cloud-v2" target="_blank" class="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
						<GithubSolid class="w-5 h-5" />
					</a>
					<a href="https://discord.gg/G6f3uvsSqQ" target="_blank" class="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
						<DiscordSolid class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h4 class="font-semibold text-slate-900 dark:text-white mb-4">Navigation</h4>
				<ul class="space-y-2.5">
					<li><a href="#top" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Home</a></li>
					<li><a href="#features" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Features</a></li>
					<li><a href="#installation" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Installation</a></li>
					<li><a href="#help" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Help</a></li>
					<li><a href="/changelog" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Changelog</a></li>
				</ul>
			</div>

			<!-- Resources -->
			<div>
				<h4 class="font-semibold text-slate-900 dark:text-white mb-4">Resources</h4>
				<ul class="space-y-2.5">
					<li><a href="https://docs.redicloud.dev" target="_blank" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Documentation</a></li>
					<li><a href="https://docs.redicloud.dev/api" target="_blank" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">API</a></li>
					<li><a href="https://github.com/RediCloud/cloud-v2" target="_blank" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">GitHub</a></li>
					<li><a href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip" target="_blank" class="text-sm text-slate-500 dark:text-slate-400 hover:text-redicloud-500 dark:hover:text-redicloud-400 transition-colors">Download</a></li>
				</ul>
			</div>


		</div>

		<!-- Bottom bar -->
		<div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
			<p class="text-center text-sm text-slate-400 dark:text-slate-500">
				Copyright &copy; {new Date().getFullYear()} RediCloud. All Rights Reserved.
			</p>
		</div>
	</div>
</footer>

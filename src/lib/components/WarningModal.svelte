<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let visible = $state(false);

	onMount(() => {
		if (browser) {
			const params = new URLSearchParams(window.location.search);
			if (!params.has('warning_accepted')) {
				visible = true;
			}
		}
	});

	function accept() {
		visible = false;
		if (browser) {
			window.history.replaceState({}, '', '?warning_accepted=true');
		}
	}
</script>

{#if visible}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
		onkeydown={(e) => { if (e.key === 'Escape') accept(); }}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Header -->
			<div class="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
				<h3 class="text-lg font-bold text-red-500">WARNING</h3>
			</div>
			<!-- Body -->
			<div class="p-5">
				<p class="text-slate-600 dark:text-slate-400 leading-relaxed">
					Note that RediCloud is still unstable. Please do not use it in a production environment.
				</p>
			</div>
			<!-- Footer -->
			<div class="flex justify-end p-5 border-t border-slate-200 dark:border-slate-700">
				<button
					onclick={accept}
					class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-redicloud-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
				>
					Ok, I take note
				</button>
			</div>
		</div>
	</div>
{/if}

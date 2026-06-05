<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

{#if !loaded}
	<div class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
		<div class="flex gap-1.5">
			<span class="w-3 h-3 rounded-full bg-redicloud-500 animate-bounce" style="animation-delay: 0ms"></span>
			<span class="w-3 h-3 rounded-full bg-redicloud-400 animate-bounce" style="animation-delay: 150ms"></span>
			<span class="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 300ms"></span>
		</div>
	</div>
{/if}

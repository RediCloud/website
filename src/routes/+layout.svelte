<script lang="ts">
	import '$lib/styles/app.css';

	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans dark:bg-slate-900 dark:text-slate-100">
	{@render children()}
</div>

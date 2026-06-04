<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { startMetricsPolling, stopMetricsPolling } from '$lib/stores/metrics';

	import Preloader from '$lib/components/Preloader.svelte';
	import WarningModal from '$lib/components/WarningModal.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Installation from '$lib/components/Installation.svelte';
	import Help from '$lib/components/Help.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		startMetricsPolling();
	});

	onDestroy(() => {
		stopMetricsPolling();
	});
</script>

<svelte:head>
	<title>RediCloud</title>
</svelte:head>

<Preloader />
<WarningModal />
<Header />
<Hero />
<Features />
<Installation />
<Help />
<Footer />

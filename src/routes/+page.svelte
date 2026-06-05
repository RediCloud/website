<script lang="ts">
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Installation from '$lib/components/Installation.svelte';
	import Help from '$lib/components/Help.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>RediCloud</title>
</svelte:head>

<Preloader />
<Header />
<Hero />
<Features />
<Installation />
<Help />
<Footer />

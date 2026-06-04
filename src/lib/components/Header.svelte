<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let backgroundHeader = $state(false);
	let menuOpen = $state(false);
	let activeSection = $state('top');

	const sections = ['top', 'features', 'installation', 'help'];

	function handleScroll() {
		const headerText = document.querySelector('.header-text');
		const header = document.querySelector('header');
		if (headerText && header) {
			const scroll = window.scrollY;
			const box = headerText.clientHeight;
			const headerHeight = header.clientHeight;
			backgroundHeader = scroll >= box - headerHeight;
		}

		// Update active section
		for (const id of sections) {
			const el = document.getElementById(id);
			if (el) {
				const top = el.offsetTop;
				const height = el.offsetHeight;
				if (window.scrollY >= top - 100 && window.scrollY < top + height) {
					activeSection = id;
				}
			}
		}
	}

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({ top: el.offsetTop + 1, behavior: 'smooth' });
			menuOpen = false;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<header class="header-area header-sticky" class:background-header={backgroundHeader}>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="main-nav">
					<a href="/" class="logo">
						<img
							src="/images/redicloud-logo-trans.png"
							style="height: 16%; width: 16%; object-fit: cover"
							alt="RediCloud"
						/>
					</a>
					<ul class="nav" class:show-mobile={menuOpen}>
						<li class="scroll-to-section">
							<button class="nav-link" class:active={activeSection === 'top'} onclick={() => scrollTo('top')}>Home</button>
						</li>
						<li class="scroll-to-section">
							<button class="nav-link" class:active={activeSection === 'features'} onclick={() => scrollTo('features')}>Features</button>
						</li>
						<li class="scroll-to-section">
							<button class="nav-link" class:active={activeSection === 'installation'} onclick={() => scrollTo('installation')}>Installation</button>
						</li>
						<li class="scroll-to-section">
							<button class="nav-link" class:active={activeSection === 'help'} onclick={() => scrollTo('help')}>Help</button>
						</li>
						<li class="scroll-to-section">
							<a href="https://docs.redicloud.dev" target="_blank">Documentation</a>
						</li>
						<li>
							<div class="gradient-button">
								<a href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip" target="_blank">
									<i class="fa fa-download"></i> Download
								</a>
							</div>
						</li>
					</ul>
				<!-- svelte-ignore a11y_missing_attribute -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<a class="menu-trigger" class:active={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
					<span>Menu</span>
				</a>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	.nav-link {
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
		display: block;
		font-weight: 500;
		font-size: 15px;
		color: #2a2a2a;
		text-transform: capitalize;
		transition: all 0.3s ease 0s;
		height: 40px;
		line-height: 40px;
		letter-spacing: 1px;
		padding: 0;
	}

	.nav-link:hover,
	.nav-link.active {
		color: #4b8ef1 !important;
	}

	@media (max-width: 767px) {
		ul.nav.show-mobile {
			display: block !important;
		}

		.nav-link {
			height: 50px !important;
			line-height: 50px !important;
			padding: 0px !important;
			border: none !important;
			background: #f7f7f7 !important;
			color: #191a20 !important;
			width: 100%;
		}

		.nav-link:hover {
			background: #eee !important;
			color: #4b8ef1 !important;
		}
	}
</style>

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
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal-overlay" onclick={() => {}}>
		<div class="popupContainer" style="display: block;">
			<div class="popupHeader">
				<span class="header_title">WARNING</span>
			</div>
			<section class="popupBody">
				<div class="page_warning">
					<div class="centeredText">
						<span>Note that Redicloud is still unstable. Please do not use it in a production environment.</span>
					</div>
					<div class="action_btns">
						<div>
							<button class="btn btn_red" onclick={accept}>Ok, I take note</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.popupContainer {
		width: 35%;
		min-width: 300px;
		background: #fff;
		padding: 7px 15px;
		border-radius: 17px;
	}
</style>

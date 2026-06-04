<script lang="ts">
	import { registeredNodes, connectedNodes } from '$lib/stores/metrics';
</script>

<div class="main-banner" id="top">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="row">
					<div class="col-lg-6 align-self-center">
						<div class="left-content show-up header-text">
							<div class="row">
								<div class="col-lg-12">
									<h2>RediCloud v2</h2>
									<p>
										RediCloud is a cluster based cloud system for Minecraft. It runs with Redis and
										is designed for performance.
									</p>
								</div>
								<div class="col-lg-12">
									<div class="white-button first-button scroll-to-section">
										<a href="https://github.com/RediCloud/cloud-v2" target="_blank">
											Github <i class="fa-brands fa-github"></i>
										</a>
									</div>
									<div class="white-button not-last-button scroll-to-section">
										<a href="https://discord.gg/G6f3uvsSqQ" target="_blank">
											Discord <i class="fa-brands fa-discord"></i>
										</a>
									</div>
									<div class="white-button not-last-button scroll-to-section">
										<a
											href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip"
											target="_blank"
										>
											Installations: {$registeredNodes}
											<i class="fa-solid fa-file-arrow-down"></i>
										</a>
									</div>
									<div class="white-button scroll-to-section">
										<a href={undefined}>
											Running: {$connectedNodes}
											<i class="fa-solid fa-server"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="right-image">
							<img src="/images/redicloud-console.png" alt="console" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

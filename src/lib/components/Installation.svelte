<script lang="ts">
	import { registeredNodes } from '$lib/stores/metrics';
</script>

<div id="installation" class="installation section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 align-self-center">
				<div class="section-heading">
					<h4>Installation</h4>
					<img src="/images/heading-line-dec.png" alt="" />
					<p>
						The RediCloud installation process is very simple. If there are any problems, we are
						happy to help on the Discord.
					</p>
				</div>
				<div class="row">
					<div class="col-lg-6">
						<div class="box-item">
							<h4><a href={undefined}>1. Download</a></h4>
							<p>Download the cloud and extract the zip file.</p>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box-item">
							<h4><a href={undefined}>2. Permission</a></h4>
							<p>Run &quot;chmod +x &lt;start-file&gt;&quot; to give permission to the start file.</p>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box-item">
							<h4><a href={undefined}>3. First Start</a></h4>
							<p>Start the cloud with &quot;./&lt;start-file&gt;&quot;. First start took a while...</p>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="box-item">
							<h4><a href={undefined}>4. Setup</a></h4>
							<p>Answer all questions in the console such as database credentials</p>
						</div>
					</div>
					<div class="gradient-button">
						<a href="https://api.redicloud.dev/v2/files/master/latest/redicloud.zip">
							Download (Installations: {$registeredNodes})
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="right-image">
					<img src="/images/redicloud-console-start.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</div>

import { writable } from 'svelte/store';

const METRICS_URL = 'https://api.redicloud.dev/v2/metrics/master/';

export const connectedNodes = writable<string>('...');
export const registeredNodes = writable<string>('...');

async function fetchMetric(endpoint: string): Promise<string> {
	try {
		const response = await fetch(METRICS_URL + endpoint);
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		return await response.text();
	} catch {
		return '?';
	}
}

let interval: ReturnType<typeof setInterval> | null = null;

export function startMetricsPolling() {
	async function update() {
		const [connected, registered] = await Promise.all([
			fetchMetric('nodes/online'),
			fetchMetric('nodes/registered')
		]);
		connectedNodes.set(connected);
		registeredNodes.set(registered);
	}

	update();
	interval = setInterval(update, 5000);
}

export function stopMetricsPolling() {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
}

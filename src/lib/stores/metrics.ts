import { writable } from 'svelte/store';

export const connectedNodes = writable<string>('...');
export const registeredNodes = writable<string>('...');

let interval: ReturnType<typeof setInterval> | null = null;

export function startMetricsPolling() {
	async function update() {
		try {
			const response = await fetch('/api/metrics');
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const data = await response.json();
			connectedNodes.set(data.connectedNodes);
			registeredNodes.set(data.registeredNodes);
		} catch {
			connectedNodes.set('?');
			registeredNodes.set('?');
		}
	}

	update();
	interval = setInterval(update, 15000); // Match server cache TTL
}

export function stopMetricsPolling() {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
}

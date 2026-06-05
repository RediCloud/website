import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const METRICS_URL = 'https://api.redicloud.dev/v2/metrics/main/';

interface MetricsCache {
	data: { connectedNodes: string; registeredNodes: string };
	timestamp: number;
}

let cache: MetricsCache | null = null;
const CACHE_TTL = 15 * 1000; // 15 seconds

export const GET: RequestHandler = async () => {
	const now = Date.now();

	// Return cached data if still fresh
	if (cache && now - cache.timestamp < CACHE_TTL) {
		return json(cache.data, {
			headers: { 'Cache-Control': 'public, max-age=15' }
		});
	}

	try {
		const [connectedRes, registeredRes] = await Promise.all([
			fetch(METRICS_URL + 'nodes/online'),
			fetch(METRICS_URL + 'nodes/registered')
		]);

		const connectedNodes = connectedRes.ok ? await connectedRes.text() : '?';
		const registeredNodes = registeredRes.ok ? await registeredRes.text() : '?';

		const data = { connectedNodes, registeredNodes };

		// Update cache
		cache = { data, timestamp: now };

		return json(data, {
			headers: { 'Cache-Control': 'public, max-age=15' }
		});
	} catch {
		// Return stale cache on error
		if (cache) {
			return json(cache.data, {
				headers: { 'Cache-Control': 'public, max-age=5' }
			});
		}
		return json({ connectedNodes: '?', registeredNodes: '?' }, { status: 502 });
	}
};

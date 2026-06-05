import type { PageServerLoad } from './$types';

export const prerender = false;

interface ReleaseAsset {
	name: string;
	browser_download_url: string;
	size: number;
	download_count: number;
}

interface Release {
	id: number;
	tag_name: string;
	name: string;
	body: string;
	published_at: string;
	prerelease: boolean;
	draft: boolean;
	html_url: string;
	assets: ReleaseAsset[];
}

// Simple in-memory cache for the edge worker
let cachedReleases: Release[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const load: PageServerLoad = async ({ platform }) => {
	const now = Date.now();

	// Return cached data if still fresh
	if (cachedReleases && now - cacheTimestamp < CACHE_TTL) {
		return { releases: cachedReleases };
	}

	try {
		const headers: Record<string, string> = {
			Accept: 'application/vnd.github+json',
			'User-Agent': 'RediCloud-Website'
		};

		// Use GITHUB_TOKEN from Cloudflare env if available (5,000 req/h vs 60)
		const token = platform?.env?.GITHUB_TOKEN;
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

		const response = await fetch(
			'https://api.github.com/repos/RediCloud/cloud-v2/releases?per_page=100',
			{ headers }
		);

		if (!response.ok) {
			if (response.status === 403) {
				// Rate limited -- return cached data if available, even if stale
				if (cachedReleases) {
					return { releases: cachedReleases };
				}
				return { releases: [], error: 'GitHub API rate limit exceeded. Please try again later.' };
			}
			return { releases: [], error: `Failed to fetch releases (HTTP ${response.status})` };
		}

		const data: Release[] = await response.json();
		const releases = data.filter((r) => !r.draft);

		// Update cache
		cachedReleases = releases;
		cacheTimestamp = now;

		return { releases };
	} catch {
		// Return stale cache on error if available
		if (cachedReleases) {
			return { releases: cachedReleases };
		}
		return { releases: [], error: 'Failed to fetch releases.' };
	}
};

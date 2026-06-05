/**
 * Svelte action for scroll-based animations using IntersectionObserver.
 * Usage: <div use:animate={{ type: 'fade-up', delay: 200 }}>
 */
export interface AnimateOptions {
	type?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
	delay?: number;
	threshold?: number;
	once?: boolean;
}

export function animate(node: HTMLElement, options: AnimateOptions = {}) {
	const { type = 'fade-up', delay = 0, threshold = 0.1, once = true } = options;

	// Respect reduced motion preference
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReducedMotion) {
		return { destroy() {} };
	}

	node.classList.add(`animate-${type}`);
	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('animate-visible');
					if (once) {
						observer.unobserve(node);
					}
				} else if (!once) {
					node.classList.remove('animate-visible');
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		},
		update(newOptions: AnimateOptions) {
			// Handle option updates if needed
		}
	};
}

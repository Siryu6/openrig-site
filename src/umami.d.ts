// The Umami tracker loaded from src/analytics.mjs
interface Window {
	umami?: { track(name: string, data?: Record<string, unknown>): Promise<unknown> };
}

import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "quiet-go's blog",
	prologue: "Boys,you must strive to find your own voice.",
	author: {
		name: "quiet-go",
		email: "2499511171@qq.com",
		link: "https://quiet-go.github.io"
	},
	description: "quiet-go' blog.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		// locales: ["en", "zh-cn", "ja"],
		locales: ["zh-cn"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;

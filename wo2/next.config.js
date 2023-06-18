/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'imagecdn.clips4sale.com',
			},
		],
	},
}

module.exports = nextConfig

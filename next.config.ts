import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/dakts9ect/image/upload/**',
			},
		],
	},
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'promptbase.com',
                port: '',
                pathname: '/assets/**',
            },
        ],
    },
}

module.exports = nextConfig
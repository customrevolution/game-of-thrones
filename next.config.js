/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['m.media-amazon.com', 'imdb-api.com']
    }
}

module.exports = nextConfig

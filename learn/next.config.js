/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{
        serverComponentsExternalPackages:['mongoose']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',

            },
            {
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                port:'',
            }
        ]
    }
}

module.exports = nextConfig

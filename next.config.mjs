/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'bachelorexam.com',
            },
        ],
    }
};

export default nextConfig;

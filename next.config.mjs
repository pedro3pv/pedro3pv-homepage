/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pedro3pv-homepage',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}


export default nextConfig

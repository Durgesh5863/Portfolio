import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
 allowedDevOrigins: [
 'https://9002-firebase-portfoliogit-1755714592293.cluster-fdkw7vjj7bgguspe3fbbc25tra.cloudworkstations.dev',
 ],
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

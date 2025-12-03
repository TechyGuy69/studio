import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // START: Add allowedDevOrigins
  ...(process.env.NODE_ENV === 'development'
    ? {
        experimental: {
          allowedDevOrigins: [
            'https://6000-firebase-studio-1764742733872.cluster-bg6uurscprhn6qxr6xwtrhvkf6.cloudworkstations.dev',
          ],
        },
      }
    : {}),
  // END: Add allowedDevOrigins
};

export default nextConfig;

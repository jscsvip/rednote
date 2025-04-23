/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations if they exist ...

  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocol used by the source URL
        hostname: 'images.unsplash.com', // The hostname to allow
        port: '', // Usually empty unless a specific port is needed
        pathname: '/**', // Allows any path under this hostname, adjust if needed
      },
      // Add other patterns here if needed
    ],
  },

  // ... other configurations if they exist ...
};

module.exports = nextConfig;

// Or if you are using ESM (next.config.mjs):
// export default nextConfig;
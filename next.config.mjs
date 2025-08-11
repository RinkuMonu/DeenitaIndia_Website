/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export enable
  distDir: 'out',   // output folder ka naam 'out'
  images: {
    unoptimized: true, // ✅ disable image optimization for static export
  },
};

export default nextConfig;

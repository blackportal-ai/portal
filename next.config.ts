import type { NextConfig } from 'next';

import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'dist',
};

export default withMDX(nextConfig);

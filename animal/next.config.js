/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['www.animal.go.kr', 'image.idus.com', 'meridiani2.cafe24.com', 'm.marcoroho.com', 'modo-phinf.pstatic.net', 'encrypted-tbn0.gstatic.com', 'shop-phinf.pstatic.net'],
  },
};

module.exports = nextConfig;

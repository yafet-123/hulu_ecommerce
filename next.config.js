/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    domains: [
      'res.cloudinary.com','lh3.googleusercontent.com'
    ],
  },
}

module.exports = nextConfig

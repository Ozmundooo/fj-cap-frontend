/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || "https://www.freshtajamasi.ca/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

export default nextConfig;

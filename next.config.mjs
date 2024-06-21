/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.yuntech.edu.tw",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

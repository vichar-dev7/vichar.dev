/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
          dynamic: 30,
        },
      },
      images:{
        domains:["avatars.githubusercontent.com"]
      }
};

export default nextConfig;

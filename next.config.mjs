/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/dashboard", destination: "/page/dashboard", permanent: false },
      { source: "/user", destination: "/page/user", permanent: false },
      { source: "/settings", destination: "/page/settings", permanent: false },
      { source: "/main/dashboard", destination: "/page/dashboard", permanent: false },
      { source: "/main/user", destination: "/page/user", permanent: false },
      { source: "/main/settings", destination: "/page/settings", permanent: false },
    ];
  },
};

export default nextConfig;

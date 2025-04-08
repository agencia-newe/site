import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config redirects */
  async redirects() {
    return [
      {
        source: "/cases",
        destination: "/#cases",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

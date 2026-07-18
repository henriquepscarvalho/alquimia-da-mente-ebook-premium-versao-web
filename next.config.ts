import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites(){return [{source:"/ebook-premium-versao-web",destination:"/ebook-web/ebook-premium-versao-web.html"}];},
};

export default nextConfig;

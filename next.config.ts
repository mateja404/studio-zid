import type { NextConfig } from "next";

const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
};

module.exports = nextConfig;


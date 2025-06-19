import type { NextConfig } from "next";

const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'cdn.studiozid.rs'],
    },
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path');

module.exports = {
    env: {
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    },
};
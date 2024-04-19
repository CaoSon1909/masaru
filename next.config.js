const { withPayload } = require('@payloadcms/next/withPayload')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = withPayload(withPayload(nextConfig))

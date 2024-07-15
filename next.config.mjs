/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    WOOCOMMERCE_KEY: process.env.WOOCOMMERCE_KEY,
    WOOCOMMERCE_SECRET: process.env.WOOCOMMERCE_SECRET,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.bekishop.com',
            pathname: '**',
          },
        ],
      },
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
          })
        );
        return config;
      },
};

export default nextConfig;

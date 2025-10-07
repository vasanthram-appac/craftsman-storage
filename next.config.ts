
/** @type {import('next').NextConfig} */
 const nextConfig = {
   //  basePath: '',
    basePath: '/@develop/craftsman-storage/next',
    assetPrefix: '/@develop/craftsman-storage/next', // Required for assets
   trailingSlash: true,
output: 'export',
   images: {
     unoptimized: true,
   },



 };

// const nextConfig = {
//   basePath: '/',
//   assetPrefix: '/',
//   trailingSlash: true,
//   output: 'standalone', // ✅ build a dist you can deploy
//   images: {
//     unoptimized: false, // enables built-in optimization
//   },
// };

export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        domains: ["i.ibb.co.com"], // Imgbb uses i.ibb.co for hosted images
        qualities: [100, 75],
    },
    reactCompiler: true,
};

export default nextConfig;

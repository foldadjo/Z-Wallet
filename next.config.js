/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
    URL_FRONTEND: "localhost:3000",
    URL_CLOUDINARY:
      "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
  },
  // images: {
  //   loader: "cloudinary",
  //   path: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
  // },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/:id",
        destination: "/profile/:id",
      },
    ];
  },
};

module.exports = nextConfig;

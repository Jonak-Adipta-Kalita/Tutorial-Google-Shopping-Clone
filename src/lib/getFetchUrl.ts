export const getFetchUrl = (route: string) =>
  `${
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL!
      : "https://localhost:3000"
  }/${route}`;

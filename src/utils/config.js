if (process.env.NODE_ENV === "production") {
  domain = "https://next-dashboard-phi-ochre.vercel.app/api";
  // domain = process.env.VERCEL_URL + "/api";
} else {
  domain = "http://localhost:3000/api";
}

export default domain;

function config() {}
var domain;
if (process.env.NODE_ENV === "production") {
  domain = "next-dashboard-ebon-ten.vercel.app/api";
} else {
  domain = "http://localhost:3000/api";
}
export default domain;

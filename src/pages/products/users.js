import axios from "axios";
import { useTheme } from "next-themes";
import Head from "next/head";
export default function Users({ data }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="container mt-5  w-100 position-absolute top-20  p-5 end-0">
      <Head>
        <title>NEXT-DASHBOARD-USERS</title>
        <meta
          name=" users in your e-commerce  "
          content="know the results of your website and e-commerce , and you All Users in your website e-commerce , information your users  "
          key="Users"
        />
        <meta
          name="website dashboard"
          content="your website and e-commerce "
          key="e-commerce dashboard"
        />
      </Head>
      <table className={theme == "dark" ? "table table-dark" : "table"}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        {data.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export async function getStaticProps() {
  const response = await axios.get(`https://fakestoreapi.com/users`);
  return {
    props: { data: response.data, fallback: false },
  };
}

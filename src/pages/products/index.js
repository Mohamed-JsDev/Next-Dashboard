import domain from "../components/utils/config";
import dbConnect from "../components/utils/dbConnect";
import Image from "next/image";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "../../styles/products.module.css";
import Head from "next/head";

dbConnect();
export default function Post({ data }) {
  const products = data.slice().reverse();
  const router = useRouter();
  async function deleteProduct(e) {
    try {
      await axios.delete(`${domain}/posts/${e}`);
      alert("deleted");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className={style.parent}>
        <div className="container grid d-flex  flex-wrap text-center ">
          <Head>
            <title>NEXT-DASHBOARD-PRODUCTS</title>
            <meta
              name="products page"
              content="A dashboard   know the results of your website and e-commerce , all products in your website and your all control "
              key="dashboard"
            />
          </Head>
          {products.map((product) => {
            return (
              <div
                key={product._id}
                className="col-sm-10 col-md-6 col-lg-4   col-xl-3 p-2  shadow-lg rounded "
              >
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt={"prod"}
                  className="rounded-3"
                />
                <h4 className="p-1">{product.title.slice(0, 20)}</h4>
                <p>Price : {product.price} $</p>
                <Button
                  onClick={() => {
                    router.push(`products/product/${product._id}`);
                  }}
                  className="m-2 btn-primary w-50"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {" "}
                  Show{" "}
                </Button>
                <Button
                  onClick={() => {
                    alert("you must visit website to Buy ");
                  }}
                  className="m-2 btn-primary w-25 bg-transparent "
                  style={{ color: "var(--color-primary)" }}
                  disabled
                >
                  Return
                </Button>
                <Button
                  onClick={() => {
                    router.push(`/products/${product._id}`);
                  }}
                  className="m-2 btn-primary w-50 "
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Edit
                </Button>
                {product.title.length > 15 ? (
                  <Button
                    onClick={() => {
                      alert("only Manager can Delete and Return product");
                    }}
                    className="m-1 btn-danger w-25 p-2 "
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      deleteProduct(product._id);
                    }}
                    className="m-1 btn-danger w-25 p-2 "
                  >
                    Remove
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const response = await axios.get(`${domain}/posts`);
  return {
    props: { data: response.data, fallback: false },
  };
}

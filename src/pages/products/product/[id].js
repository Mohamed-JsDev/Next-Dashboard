import { useState } from "react";
import domain from "../../utils/config";
import axios from "axios";
import dbConnect from "../../utils/dbConnect";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Head from "next/head";

dbConnect();

export default function Id({ product }) {
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
      <Head>
        <title>DASHBOARD-PRODUCT</title>
        <meta
          name="dashboard to your website and e-commerce  "
          content="A dashboard to check your products, know your sales, and know the results of your website and e-commerce"
          key="dashboard"
        />
      </Head>
      <div className="container mt-5  w-100 position-absolute top-20  p-5 end-0">
        <div key={product._id} className=" p-2   shadow-lg  rounded w-75">
          <Image
            src={product.image}
            width={150}
            height={150}
            alt={"prod"}
            className=" rounded-3"
          />
          <h6 className="p-2">{product.title}</h6>
          <p>{product.description}</p>
          <p> price : {product.price} $</p>
          <p> {product.details} </p>
          {product.rating ? (
            <div className="d-flex text-center">
              <p> count : {product.rating.count} </p>
              <p className="mx-4  "> rate : {product.rating.rate} </p>
            </div>
          ) : (
            <h2>Users Add this product </h2>
          )}

          <Button
            onClick={() => {
              router.push(`/products/${product._id}`);
            }}
            className="mb-2 btn-primary w-100 "
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {" "}
            Edit{" "}
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
      </div>
    </>
  );
}
export async function getServerSideProps(router) {
  const response = await axios.get(`${domain}/posts/${router.query.id}`);
  return {
    props: { product: response.data },
  };
}

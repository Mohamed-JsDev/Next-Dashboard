import { useState } from "react";
import domain from "../../../utils/config";
import axios from "axios";
import dbConnect from "../../../utils/dbConnect";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
// const db = await
dbConnect();

export default function Editpost({ post }) {
  const context = useRouter();
  const [title, setTitle] = useState(post.title);
  const [image, setImage] = useState(post.image);
  const [details, setDetails] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  async function update(e) {
    e.preventDefault();
    const post = {
      title,
      image,
      details,
      price,
    };
    await axios.put(`${domain}/posts/${context.query.id}`, post);
    alert("post updated done congratulation code");
  }
  return (
    <>
      <Head>
        <title>DASHBOARD-EDIT-PRODUCT</title>
        <meta
          name="dashboard to your website and e-commerce  "
          content="A dashboard to check your products, know your sales, and know the results of your website and e-commerce"
          key="dashboard"
        />
      </Head>
      {post.title.length > 15 ? (
        <div className="container mt-5  w-100 position-absolute top-20  p-5 end-0 z-1">
          <div className="p-2">
            <h4 className="mb-5">update this Product</h4>
            <Image src={post.image} width={150} height={150} alt={post.title} />
            <form>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">title</label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    disabled
                    placeholder="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">Image Url </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={image}
                    disabled
                    placeholder="image_url"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={details}
                  disabled
                  placeholder="details"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">Price</label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={price}
                    disabled
                    placeholder="price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button className="btn btn-primary w-50" onClick={update}>
                    update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="container mt-5  w-100 position-absolute top-20  p-5 end-0 z-1">
          <div className="p-2">
            <h4 className="mb-5">update this Product</h4>
            <Image src={post.image} width={150} height={150} alt={post.title} />
            <form>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">title</label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    placeholder="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">Image Url </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={image}
                    disabled
                    placeholder="image_url"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={details}
                  placeholder="details"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="mb-3 row">
                <label className="col-4 col-form-label">Price</label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    value={price}
                    placeholder="price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button className="btn btn-primary w-50" onClick={update}>
                    update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const response = await axios.get(`${domain}/posts/${context.query.id}`);
  return {
    props: { post: response.data },
    // try {
    //   }

    // } catch (error) {
    //   console.log(error);
  };
}

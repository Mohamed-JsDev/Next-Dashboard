import { useState } from "react";
import domain from "../../../utils/config";
import axios from "axios";
import dbConnect from "../../../utils/dbConnect";
import style from "../../styles/products.module.css";
import Head from "next/head";
dbConnect();

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
  );
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  async function addPost(e) {
    e.preventDefault();
    const post = {
      title,
      image,
      details,
      price,
    };
    try {
      await axios.post(`${domain}/posts`, post);
      alert("post added done congratulation");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>DASHBOARD-ADD-PRODUCT</title>
        <meta
          name="dashboard to your website and e-commerce  "
          content="A dashboard to check your products, know your sales, and know the results of your website and e-commerce"
          key="dashboard"
        />
      </Head>
      <div className=" container mt-5  w-100 position-absolute top-20  p-5 end-0">
        <div className="p-2 ">
          <h2 className="mb-5 ">Add Product Page </h2>
          <form>
            <div className="mb-3 row">
              <label className="col-4 col-form-label">title</label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  maxLength="15"
                  placeholder="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
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
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Details</label>
              <textarea
                className="form-control"
                rows="3"
                value={details}
                required
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
                  type="number"
                  className="form-control"
                  value={price}
                  required
                  placeholder="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button
                  type="submit"
                  className="btn btn-primary w-50"
                  onClick={addPost}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

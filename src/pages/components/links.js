import { useState } from "react";
import style from "./style/links.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Links({ posts }) {
  const Router = useRouter();
  const [open, setOpen] = useState(true);
  function menu() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className={open ? style.home : style.homeClose}>
      <div
        className={open ? style.opened : style.closed}
        onClick={() => {
          menu(open);
        }}
      >
        <span></span>
      </div>
      <div className={open ? style.show : style.hide}>
        <h4>Dashboard </h4>
        <span>Websites</span>
        <Link href="/" className={style.link}>
          E-commerce
        </Link>
        <span>Pages</span>
        <Link href="../products" className={style.link}>
          Products
        </Link>
        <Link href="../products/AddProduct" className={style.link}>
          Add Product
        </Link>
        <Link href="../products/users" className={style.link}>
          Users
        </Link>
      </div>
    </div>
  );
}

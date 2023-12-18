import Head from "next/head";
import { useTheme } from "next-themes";
import photo from "/public/undraw_online_transactions_02ka.png";
import Image from "next/image";
import style from "../styles/home.module.css";
import {
  FcSalesPerformance,
  FcConferenceCall,
  FcSynchronize,
} from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import ReactEcharts from "echarts-for-react";
import { option } from "../../echarts";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>NEXT-DASHBOARD</title>
        <meta
          name="dashboard to your website and e-commerce  "
          content="A dashboard to check your products, know your sales, and know the results of your website and e-commerce"
          key="dashboard"
        />
        <meta
          name="website dashboard"
          content="your website and e-commerce "
          key="e-commerce dashboard"
        />
      </Head>
      <div className={style.home}>
        <div className="container">
          <div className={style.face}>
            <Image
              src={photo}
              className={style.Image}
              alt="mohamed"
              width={200}
              height={50}
            />
            <div>
              <div className={style.earning}>
                <span>Earning</span>
                <p>924.258 $ </p>
              </div>
              <div className={style.month}>
                <span>Revenue</span>
                <p>+24%</p>
              </div>
              <button className="btn">Download</button>
            </div>
          </div>
          <div className={style.boxes}>
            <div className={style.box}>
              <span>
                <FcConferenceCall />
              </span>
              <p>
                15,025 <span>+7%</span>
              </p>
              <span>Customers</span>
            </div>
            <div className={style.box}>
              <span>
                <MdProductionQuantityLimits />
              </span>
              <p>
                202 <span>+18%</span>
              </p>
              <span>Products</span>
            </div>
            <div className={style.box}>
              <span>
                <FcSalesPerformance />
              </span>
              <p>
                15,025 <span>+7%</span>
              </p>
              <span>Sales</span>
            </div>
            <div className={style.box}>
              <span>
                <FcSynchronize />
              </span>
              <p>
                24,04<span style={{ color: "red" }}>-17%</span>
              </p>
              <span>Refunds</span>
            </div>
          </div>

          <div className={style.map}>
            <ReactEcharts
              option={option}
              theme={theme == "dark" ? "dark" : "light"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

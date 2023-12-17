import Image from "next/image";
import style from "./style/header.module.css";
import face from "../../../public/face.jpg";
import Links from "./links";

import { useState } from "react";
import { users } from "../../../data";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";
import {
  BsListTask,
  BsFillInboxesFill,
  BsCurrencyDollar,
  BsChatLeft,
} from "react-icons/bs";
export default function Header() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const { theme, setTheme } = useTheme();
  const mode = (e) => {
    if (e !== theme) {
      setTheme(e);
    }
  };
  return (
    <>
      <div className={style.nav}>
        <div className={style.section}>
          <div
            className={chat ? style.iconLed : style.iconChat}
            onClick={() => {
              setShow(false);
              setNotification(false);
              setChat(true);
            }}
          >
            <BsChatLeft />
          </div>
          <div
            className={notification ? style.iconLed : style.icon}
            onClick={() => {
              setShow(false);
              setNotification(true);
              setChat(false);
            }}
          >
            <IoIosNotificationsOutline />
          </div>
          <div
            className={style.user}
            onClick={() => {
              setShow(true);
              setNotification(false);
              setChat(false);
            }}
          >
            <Image
              className={style.face}
              src={face}
              alt="face"
              width={40}
              height={40}
            />
            <p
              onClick={() => {
                setShow(true);
                setNotification(false);
                setChat(false);
              }}
            >
              Hi, <span>Mohamed</span>
            </p>
          </div>
        </div>
        {show ? (
          <div className={style.drop}>
            <div className={style.user}>
              <h2> User Profile </h2>
              <div
                className={style.close}
                onClick={() => {
                  setShow(false);
                }}
              >
                <AiFillCloseCircle />
              </div>
            </div>
            <div className={style.info}>
              <Image
                className={style.face}
                src={face}
                alt="face"
                width={100}
                height={100}
              />
              <div className={style.details}>
                <h2>Mohamed Alshafie</h2>
                <span>Administrator</span>
                <p>info@gmail.com</p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.icon}>
                <BsCurrencyDollar />
              </div>
              <div>
                <h4>My profile</h4>
                <p>Account setting </p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.icon}>
                <BsFillInboxesFill />
              </div>
              <div>
                <h4>My Inbox</h4>
                <p>Messages & Emails</p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.icon}>
                <BsListTask />
              </div>
              <div>
                <h4>My Tasks</h4>
                <p>To-do and Daily Tasks </p>
              </div>
            </div>
            <button
              onClick={() => {
                alert("you will log out");
              }}
            >
              {" "}
              Log out{" "}
            </button>
          </div>
        ) : null}
        {notification ? (
          <div className={style.drop_2}>
            <div className={style.user}>
              <h2> Notification </h2>
              <span>{users.length + 1} New</span>
              <div
                className={style.close}
                onClick={() => {
                  setNotification(false);
                }}
              >
                <AiFillCloseCircle />
              </div>
            </div>
            {users.map((user) => {
              return (
                <div className={style.box} key={user.id}>
                  <div className={style.img}>
                    <Image
                      className={style.img}
                      src={user.url}
                      alt={user.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h4>{user.title}</h4>
                    <p>{user.message} </p>
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => {
                alert("you Clear All Notifications");
              }}
            >
              Clear All Notifications
            </button>
          </div>
        ) : null}
        {chat ? (
          <div className={style.drop_2}>
            <div className={style.user}>
              <h2> Message </h2>
              <span>{users.length - 1} New</span>
              <div
                className={style.close}
                onClick={() => {
                  setChat(false);
                }}
              >
                <AiFillCloseCircle />
              </div>
            </div>
            {users.map((user) => {
              return (
                <div className={style.box} key={user.id}>
                  <div className={style.img}>
                    <Image
                      className={style.img}
                      src={user.url}
                      alt={user.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h4>{user.title}</h4>
                    <p>{user.message} </p>
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => {
                alert("show all message");
              }}
            >
              See All Message{" "}
            </button>
          </div>
        ) : null}
        <div className={theme === "dark" ? style.dark : style.light}>
          <div
            className={theme === "light" ? style.sun : style.sun}
            onClick={() => {
              mode("light");
            }}
          >
            <CiLight />
          </div>
          <div
            className={theme === "dark" ? style.moon : style.moon}
            onClick={() => {
              mode("dark");
            }}
          >
            <CiDark />
          </div>
        </div>
      </div>
    </>
  );
}

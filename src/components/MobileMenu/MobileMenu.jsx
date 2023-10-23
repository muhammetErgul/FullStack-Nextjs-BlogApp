"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Image
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className={styles.mobileContainer}>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link href="/dashboard/login" onClick={() => setOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import MobileMenu from "../MobileMenu/MobileMenu";
import UserSession from "../UserSession/UserSession";

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

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        What if?
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />

        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <div className={styles.session}>
          <UserSession />
        </div>
        <div className={styles.mobileMenu}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

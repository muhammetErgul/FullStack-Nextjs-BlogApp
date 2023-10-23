"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./page.module.css";
function UserSession() {
  const { data: session } = useSession();

  const handleStatus = () => {
    if (!session?.user) {
      // Oturum kullanıcısı yoksa (unauthenticated)
      return (
        <Link className={styles.logout} href="/dashboard/login">
          Login
        </Link>
      );
    } else {
      // Oturum kullanıcısı varsa (authenticated)
      return (
        <>
          <button className={styles.logout} onClick={() => signOut()}>
            Logout
          </button>
          <h1>{session?.user.name}</h1>
        </>
      );
    }
  };
  return <div>{handleStatus()}</div>;
}

export default UserSession;

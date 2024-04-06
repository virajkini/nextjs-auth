"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { UserAuth } from "../../context/AuthContext";

export default function NavBar() {
  const { user, logout, loading }: any = UserAuth();

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={"./"}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"./about"}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"./profile"}>Profile</Link>
        </li>
      </ul>
      <ul className={styles.navList}>
        {loading ? undefined : user ? (
          <li className={styles.navItem} onClick={logout}>
            Logout
          </li>
        ) : undefined}
      </ul>
    </div>
  );
}

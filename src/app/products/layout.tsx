import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default layout;

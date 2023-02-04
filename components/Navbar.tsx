import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";

interface NavbarProps {}

export function Navbar() {
  const { locale } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" locale={locale}>
          <Image src="/coco logo 1.png" alt="Logo" width={100} height={36} />
        </Link>
        <ul>
          <li>
            <Link className={styles.menuitem} href={"/"}>
              MarketPlace
            </Link>
            <Link className={styles.menuitem} href={"/"}>
              Rankings
            </Link>
            <Link className={styles.menuitem} href={"/"}>
              Abount
            </Link>
          </li>
        </ul>
        <div className={styles.search}>
          {" "}
          <SearchIcon color="disabled" />
          <input
            className={styles.searchinput}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <button className={styles.button}>Create</button>
        <div className={styles.avatar}>
          <Image src="/Ellipse 67.png" alt="Logo" width={36} height={36} />
        </div>
        <div className={styles.avatar}>
          <Image src="/Vector.png" alt="Logo" width={29} height={24} />
        </div>
      </div>
    </header>
  );
}

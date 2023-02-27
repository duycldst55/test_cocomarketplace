import * as React from "react";
import styles from "@/styles/Footer.module.scss";
import Image from "next/image";

// export interface FooterProps {}

export function Footer(props: any) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerct}>
        <div className={styles.footerct1}>
          <Image
            src="/cocologo1.png"
            alt="img1"
            width={113}
            height={42}
            style={{ marginBottom: "20px" }}
          />
          <p className={styles.footerchar}>
            The largest digital marketplace for crypto collectibles and
            non-fungible tokens (NFTs) on the Binance Smart Cahin. Create,
            collect, sell, and showcase exclusive digital items.
          </p>
          <div style={{ marginTop: "25px" }}>
            <Image
              src="/grouptw.png"
              style={{ margin: "0 10px" }}
              alt="img1"
              width={36}
              height={36}
            />
            <Image
              src="/35328151.png"
              style={{ margin: "0 10px" }}
              alt="img1"
              width={36}
              height={36}
            />
            <Image
              src="/20803041.png"
              style={{ margin: "0 10px" }}
              alt="img1"
              width={36}
              height={36}
            />
          </div>
        </div>
        <div className={styles.footerct2}>
          <p className={styles.chartitle}>Marketplace</p>
          <div className={styles.footerchar}>
            <p>All NFTs</p>
            {props.listcategory.map((category: any, i: any) => {
              return <p key={i}>{category}</p>;
            })}
          </div>
        </div>
        <div className={styles.footerct3}>
          <p className={styles.chartitle}>My Account</p>
          <div className={styles.footerchar}>
            <p>Profile</p>
            <p>Favorites</p>
            <p>My Collections</p>
            <p>Settings</p>
          </div>
        </div>
        <div className={styles.footerct4}>
          <p className={styles.chartitle}>Stay in the loop</p>
          <p className={styles.footerchar}>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className={styles.field}>
            <input
              className={styles.fieldemail}
              type="text"
              placeholder="Enter your email address.."
            />
            <button className={styles.btnemail}>Subscibe Now</button>
          </div>
        </div>
      </div>
      <div className={styles.footerend}>
        <p className={styles.footerend1}>Copyright © 2022 Coco</p>
        <div className={styles.footerend2}>
          Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions
        </div>
      </div>
    </div>
  );
}

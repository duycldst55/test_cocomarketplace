import Image from "next/image";
import * as React from "react";
import styles from "@/styles/Homeheader.module.scss";

export interface HomeheaderProps {}

export function Homeheader(props: HomeheaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.children1}>
          <p>CREATE</p>
          <Image
            className={styles.plus}
            src="/plussignhand1.png"
            alt="plus"
            width={65}
            height={65}
          />
          <p>COLLECT</p>
        </div>
        <p className={styles.i}>A BINENCE SMART CHAIN NFT MARKETPALCE</p>
      </div>
      <div className={styles.content1}>
            <Image
              className={styles.dot}
              src="/dot.png"
              alt="img1"
              width={310}
              height={170}
            />
            <Image
              style={{ borderRadius: "11px" }}
              src="/unsplash_E8Ufcyxz514.png"
              property=""
              alt="img1"
              width={385}
              height={425}
            />
            <div className={styles.children2}>
              <div className={styles.child1}>
                <div className={styles.childchild}>
                  <p>Creator</p>
                  <div className={styles.cre}>
                    <Image
                      src="/Ellipse 95.png"
                      alt="img1"
                      width={20}
                      height={20}
                    />
                    <p>Arkhan17</p>
                  </div>
                </div>
                <div className={styles.childchild}>
                  <p>Owner</p>
                  <div className={styles.own}>
                    <Image
                      src="/Ellipse 95.png"
                      alt="img1"
                      width={20}
                      height={20}
                    />
                    <p>Collection</p>
                  </div>
                </div>
                <div className={styles.childchild}>
                  <p>Collection</p>
                  <div className={styles.collet}>
                    <Image
                      src="/Ellipse 95.png"
                      alt="img1"
                      width={20}
                      height={20}
                    />
                    <p>Arkhan17</p>
                  </div>
                </div>
              </div>
              <p className={styles.child2}>Abstr Gradient NFT</p>
              <div className={styles.child3}>
                <div className={styles.ch1}>
                  <p className={styles.char1}>Curent Bid</p>
                  <p className={styles.char2}>0.25 BNB</p>
                  <p className={styles.char3}>$182.00</p>
                </div>
                <div>
                  <p className={styles.char1}>Auction ending in</p>
                  <div className={styles.ch2}>
                    <p className={styles.char2}>12</p>
                    <p className={styles.char4}>H</p>
                    <p className={styles.char2}>43</p>
                    <p className={styles.char4}>M</p>
                    <p className={styles.char2}>42</p>
                    <p className={styles.char4}>S</p>
                  </div>
                </div>
              </div>
              <button className={styles.btnbid}>Bid Now</button>
            </div>
          </div>
    </div>
  );
}

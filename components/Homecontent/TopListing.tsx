import * as React from "react";
import styles from "@/styles/TopListing.module.scss";
import Image from "next/image";

export default function TopListing(props: any) {
  return (
    <div className={styles.rank}>
      <p className={styles.ranktitle}>{props.toplisting.title}</p>
      <div className={styles.rankdropbtn}>
        <p style={{ marginRight: "10px" }}>Last 7 days</p>
        <Image src="/Vector1.png" alt="img1" width={10} height={5} />
      </div>
      {props.toplisting.top.map((item: any, i: any) => {
        return (
          <div key={i} className={styles.rankcard}>
            <p className={styles.rankstt}>1</p>
            <div className={styles.rankcardavt1}>
              {i === 0 ? (
                <Image
                  className={styles.rankcheck}
                  src="/vector2.png"
                  alt="img1"
                  width={27}
                  height={27}
                />
              ) : null}

              <Image src={item.avatar} alt="img1" width={60} height={60} />
            </div>
            <div className={styles.rankbody}>
              <p className={styles.rankbodytitle}>{item.title}</p>
              <div className={styles.rankbodyprice}>
                <Image
                  style={{ marginRight: "10px" }}
                  src="/group255.png"
                  alt="img1"
                  width={20}
                  height={20}
                />
                <p>{item.price}</p>
              </div>
            </div>
            <p
              className={
                item.footer > 0 ? styles.rankfooterc : styles.rankfootert
              }
            >
              {item.footer > 0 ? "+" : ""}
              {item.footer}%
            </p>
          </div>
        );
      })}
    </div>
  );
}

import * as React from "react";
import styles from "@/styles/TopListing.module.css";
import Image from "next/image";

// export interface TopListingProps {
//   title: string;
//   top: [
//     {
//       avatar: string;
//       title: string;
//       price: string;
//       footer: Float32Array;
//     },
//     {
//       avatar: string;
//       title: string;
//       price: string;
//       footer: Float32Array;
//     },
//     {
//       avatar: string;
//       title: string;
//       price: string;
//       footer: Float32Array;
//     },
//     {
//       avatar: string;
//       title: string;
//       price: string;
//       footer: Float32Array;
//     },
//     {
//       avatar: string;
//       title: string;
//       price: string;
//       footer: Float32Array;
//     }
//   ];
// }

export default function TopListing(props: any) {
  console.log(props);
  return (
    <div className={styles.rank}>
      <p className={styles.ranktitle}>{props.toplisting.title}</p>
      <div className={styles.rankdropbtn}>
        <p style={{ marginRight: "10px" }}>Last 7 days</p>
        <Image src="/Vector1.png" alt="img1" width={10} height={5} />
      </div>
      {props.toplisting.top.map((item, i) => {
        return (
          <div key={i} className={styles.rankcard}>
            <p className={styles.rankstt}>1</p>
            <div className={styles.rankcardavt1}>
              <Image
                className={styles.rankcheck}
                src="/vector2.png"
                alt="img1"
                width={27}
                height={27}
              />
              <Image
                src="/unsplash_k0rVudBoB4c.png"
                alt="img1"
                width={60}
                height={60}
              />
            </div>
            <div className={styles.rankbody}>
              <p className={styles.rankbodytitle}>CryptoFunks</p>
              <div className={styles.rankbodyprice}>
                <Image
                  style={{ marginRight: "10px" }}
                  src="/group255.png"
                  alt="img1"
                  width={20}
                  height={20}
                />
                <p>19,769.39</p>
              </div>
            </div>
            <p className={styles.rankfooterc}>+26.52%</p>
          </div>
        );
      })}
    </div>
  );
}

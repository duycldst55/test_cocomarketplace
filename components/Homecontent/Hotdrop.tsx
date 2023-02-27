import * as React from "react";
import styles from "@/styles/Hotdrop.module.scss";
import Image from "next/image";
import BidCard from "../BidCard";

export function Hotdrop(props: any) {
  return (
    <div className={styles.content2}>
      <div className={styles.children3}>
        <p className={styles.hot}>HOT</p>
        <p className={styles.drops}>DROPS</p>
        <Image
          src="/untitled_artwork(4)1.png"
          alt="img1"
          width={184}
          height={43}
        />
      </div>
      <div className={styles.hotdropslist}>
        {props.listhotdrops.map((hotdrop: any, index: any) => {
          return <BidCard key={index} bidcard={hotdrop} />;
        })}
      </div>
    </div>
  );
}

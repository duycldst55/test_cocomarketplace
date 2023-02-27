import Image from "next/image";
import * as React from "react";
import styles from "@/styles/Discovermore.module.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import BidCard from "../BidCard";

export function Discovermore(props: any) {
  return (
    <div className={styles.contentdiscovermore}>
      <div className={styles.discovermore}>
        <p className={styles.discover}>DISCOVER</p>
        <div className={styles.more}>
          <p className={styles.morechar}>MORE</p>
          <Image
            src="/untitled_artwork(4)1.png"
            style={{ marginLeft: "15px" }}
            alt="img1"
            width={212}
            height={50}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.groupbtn}>
          <button className={styles.btnactive}>All category</button>
          {props.listcategory.map((category: any, i: any) => {
            return (
              <button key={i} className={styles.btnunactive}>
                {category}
              </button>
            );
          })}
        </div>
        <button className={styles.btnfilt}>
          <FilterListIcon />
          <p>Filters</p>
        </button>
      </div>
      <div className={styles.groupcard}>
        {props.listAmazeNFT.map((amazeNFT: any, i: any) => {
          return <BidCard key={i} bidcard={amazeNFT} />;
        })}
      </div>
      <button className={styles.btnmore}> More NFT&apos;s</button>
    </div>
  );
}

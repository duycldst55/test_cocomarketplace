import * as React from "react";
import styles from "@/styles/BidCard.module.css";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface BidCardProps {
  bidcard: {
    title: string;
    description: string;
    price: string;
  };
}

export default function BidCard(props: BidCardProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardimg}
        src="/unsplash_RnCPiXixooY.png"
        alt="img1"
        width={260}
        height={240}
      />
      <p className={styles.cardtitle}>{props.bidcard.title}</p>
      <p className={styles.carddes}>{props.bidcard.description}</p>
      <div className={styles.cardprice}>
        <Image
          style={{ marginRight: "10px" }}
          src="/group255.png"
          alt="img1"
          width={20}
          height={20}
        />
        <p>{props.bidcard.price} BNB</p>
      </div>
      <div className={styles.cardbtn}>
        <button className={styles.cardbtn1}>3h 50m 2s</button>
        <button className={styles.cardbtn2}>Bid Now</button>
        <FavoriteIcon sx={{ color: " #F01866" }} />
      </div>
    </div>
  );
}

import Image from "next/image";
import * as React from "react";
import styles from "@/styles/Wizard.module.scss";

export function Wizard(props: any) {
  return (
    <div className={styles.contentwizard}>
      <div className={styles.wizard}>
        <div className={styles.wizardtitle}>
          <p>Become a wizard with the</p>
          <p> Coco NFT Academy</p>
        </div>
        <p className={styles.wizarddis}>
          Head over to our NFT Academy to learn all about NFTs. Our team is
          contantly developing new articles and videos to help you better
          understand how to create, collect, sell, showcase your digital assets.
        </p>
        <button className={styles.btnstart}>Start Learning</button>
      </div>
      <Image
        src="/untitleddesign(3)1.png"
        style={{ marginBottom: "110px" }}
        alt="img1"
        width={665}
        height={632}
      />
      <Image
        src="/untitleddesign(3)1.png"
        style={{ marginBottom: "110px" }}
        alt="img1"
        width={487}
        height={74}
        className={styles.wizardavt}
      />
    </div>
  );
}

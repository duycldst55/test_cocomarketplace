import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import TopListing from "@/components/Homecontent/TopListing";
import { Homeheader } from "@/components/Homeheader";
import { Footer } from "@/components/Footer";
import { Hotdrop } from "@/components/Homecontent/Hotdrop";
import { Wizard } from "@/components/Homecontent/Wizard";
import { Discovermore } from "@/components/Homecontent/Discovermore";

export default function Home() {
  const listhotdrops = [
    {
      title: "Name of Collectible1",
      description: "Name of Collectible1",
      price: "0.251",
    },
    {
      title: "Name of Collectible2",
      description: "Name of Collectible2",
      price: "0.252",
    },
    {
      title: "Name of Collectible3",
      description: "Name of Collectible3",
      price: "0.253",
    },
  ];

  const listtoplisting = [
    {
      title: "Top Collections",
      top: [
        {
          avatar: "/unsplash_k0rVudBoB4c.png",
          title: "CryptoFunks",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c2.png",
          title: "Cryptix",
          price: "9,769.39",
          footer: -10.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c3.png",
          title: "Frensware",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c4.png",
          title: "Punk Art",
          price: "19,769.39",
          footer: -6.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c5.png",
          title: "Art Crypto",
          price: "19,769.39",
          footer: "26.52",
        },
      ],
    },
    {
      title: "Top sellers",
      top: [
        {
          avatar: "/unsplash_k0rVudBoB4c.png",
          title: "CryptoFunks",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c2.png",
          title: "Cryptix",
          price: "9,769.39",
          footer: -10.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c3.png",
          title: "Frensware",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c4.png",
          title: "Punk Art",
          price: "19,769.39",
          footer: -6.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c5.png",
          title: "Art Crypto",
          price: "19,769.39",
          footer: "26.52",
        },
      ],
    },
    {
      title: "Top Buyers",
      top: [
        {
          avatar: "/unsplash_k0rVudBoB4c.png",
          title: "CryptoFunks",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c2.png",
          title: "Cryptix",
          price: "9,769.39",
          footer: -10.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c3.png",
          title: "Frensware",
          price: "19,769.39",
          footer: 26.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c4.png",
          title: "Punk Art",
          price: "19,769.39",
          footer: -6.52,
        },
        {
          avatar: "/unsplash_k0rVudBoB4c5.png",
          title: "Art Crypto",
          price: "19,769.39",
          footer: "26.52",
        },
      ],
    },
  ];

  const listcategory = [
    "Art",
    "Celebrities",
    "Music",
    "Photography",
    "Sports",
    "Trading Cards",
    "Utility",
    "Virtual Worlds",
  ];

  const listAmazeNFT = [
    {
      title: "Name of Collectible1",
      description: "Name of Collectible1",
      price: "0.251",
    },
    {
      title: "Name of Collectible2",
      description: "Name of Collectible2",
      price: "0.252",
    },
    {
      title: "Name of Collectible3",
      description: "Name of Collectible3",
      price: "0.253",
    },
    {
      title: "Name of Collectible4",
      description: "Name of Collectible3",
      price: "0.253",
    },
    {
      title: "Name of Collectible1",
      description: "Name of Collectible1",
      price: "0.251",
    },
    {
      title: "Name of Collectible2",
      description: "Name of Collectible2",
      price: "0.252",
    },
    {
      title: "Name of Collectible3",
      description: "Name of Collectible3",
      price: "0.253",
    },
    {
      title: "Name of Collectible4",
      description: "Name of Collectible3",
      price: "0.253",
    },
    {
      title: "Name of Collectible1",
      description: "Name of Collectible1",
      price: "0.251",
    },
    {
      title: "Name of Collectible2",
      description: "Name of Collectible2",
      price: "0.252",
    },
    {
      title: "Name of Collectible3",
      description: "Name of Collectible3",
      price: "0.253",
    },
    {
      title: "Name of Collectible4",
      description: "Name of Collectible3",
      price: "0.253",
    },
  ];

  return (
    <>
      <Head>
        <title>Coco Marketplace</title>
        <meta name="description" content="Generated by Coco Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cocologo1.png" />
      </Head>
      <main className={styles.main}>
        <Homeheader />
        <div className={styles.content}>
          <Hotdrop listhotdrops={listhotdrops} />
          <div className={styles.contenttoplisting}>
            {listtoplisting.map((toplisting, index) => {
              return <TopListing key={index} toplisting={toplisting} />;
            })}
          </div>
          <Discovermore
            listcategory={listcategory}
            listAmazeNFT={listAmazeNFT}
          />
          <Wizard />
        </div>
        <Footer listcategory={listcategory} />
      </main>
    </>
  );
}

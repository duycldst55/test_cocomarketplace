import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import BidCard from "@/components/BidCard";
import TopListing from "@/components/TopListing";
import FilterListIcon from "@mui/icons-material/FilterList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [listhotdrops, setlisthotdrops] = useState([
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
  ]);

  const [listtoplisting, setlisttoplisting] = useState([
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
  ]);

  const [listcategory, setlistcategory] = useState([
    {
      title: "All Categories",
    },
    {
      title: "Art",
    },
    {
      title: "Celebrities",
    },
    {
      title: "Music",
    },
    {
      title: "Photography",
    },
    {
      title: "Sports",
    },
    {
      title: "Trading Cards",
    },
    {
      title: "Utility",
    },
    {
      title: "Virtual Worlds",
    },
  ]);

  const [listAmazeNFT, setlistAmazeNFT] = useState([
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
  ]);

  return (
    <>
      <Head>
        <title>Coco Marketplace</title>
        <meta name="description" content="Generated by Coco Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cocologo1.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.children1}>
            <p className={styles.character1}>CREATE</p>
            <Image
              className={styles.plus}
              src="/plussignhand1.png"
              alt="plus"
              width={65}
              height={65}
            />
            <p className={styles.character1}>COLLECT</p>
          </div>
          <p className={styles.i}>A BINENCE SMART CHAIN NFT MARKETPALCE</p>
        </div>
        <div className={styles.content}>
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
          <div className={styles.content2}>
            <div className={styles.children3}>
              <p className={styles.char5}>HOT</p>
              <p className={styles.char6}>DROPS</p>
              <Image
                src="/untitled_artwork(4)1.png"
                alt="img1"
                width={184}
                height={43}
              />
            </div>
            <div className={styles.children4}>
              {listhotdrops.map((hotdrop, index) => {
                return <BidCard key={index} bidcard={hotdrop} />;
              })}
            </div>
          </div>
          <div className={styles.content3}>
            {listtoplisting.map((toplisting, index) => {
              return <TopListing key={index} toplisting={toplisting} />;
            })}
          </div>
          <div className={styles.content4}>
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
                {listcategory.map((category, i) => {
                  if (i === 0) {
                    return (
                      <button key={i} className={styles.btnactive}>
                        {category.title}
                      </button>
                    );
                  } else {
                    return (
                      <button key={i} className={styles.btnunactive}>
                        {category.title}
                      </button>
                    );
                  }
                })}
              </div>
              <button className={styles.btnfilt}>
                <FilterListIcon />
                <p>Filters</p>
              </button>
            </div>
            <div className={styles.groupcard}>
              {listAmazeNFT.map((amazeNFT, index) => {
                return <BidCard key={index} bidcard={amazeNFT} />;
              })}
            </div>
            <button className={styles.btnmore}> More NFT&apos;s</button>
          </div>
          <div className={styles.content5}>
            <div className={styles.wizard}>
              <div className={styles.wizardtitle}>
                <p>Become a wizard with the</p>
                <p> Coco NFT Academy</p>
              </div>
              <p className={styles.wizarddis}>
                Head over to our NFT Academy to learn all about NFTs. Our team
                is contantly developing new articles and videos to help you
                better understand how to create, collect, sell, showcase your
                digital assets.
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
        </div>
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
                <p>Art</p>
                <p>Collectibles</p>
                <p>Music</p>
                <p>Photography</p>
                <p>Sports</p>
                <p>Trading Cards</p>
                <p>Utility</p>
                <p>Virtual Worlds</p>
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
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
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
      </main>
    </>
  );
}

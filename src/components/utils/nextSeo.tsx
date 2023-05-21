import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

export default function NextSeoCard({}: Props) {
  return (
    <NextSeo
      title="ethereum Staking Calculator Reward (ETH)"
      description="Get the most out of your ethereum staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool."
      canonical="https://eth-staking-calculator.vercel.app/"
      additionalMetaTags={[
        {
          property: "dc:creator",
          content: "erickDevUP",
          keyOverride: "creator1",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "https://eth-staking-calculator.vercel.app/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "https://eth-staking-calculator.vercel.app/favicon.ico",
          sizes: "76x76",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
      openGraph={{
        url: "https://eth-staking-calculator.vercel.app",
        title: "ethereum Staking Calculator Reward (ETH)",
        description:
          "Get the most out of your ethereum staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool.",
        images: [
          {
            url: "https://eth-staking-calculator.vercel.app/shot.png",
            width: 900,
            height: 800,
            alt: "ethereum Staking Calculator Reward (ETH)",
            type: "image/png",
          },
        ],
        siteName: "ethereum Staking Calculator Reward (ETH)",
      }}
      twitter={{
        handle: "@erickdevup",
        site: "https://eth-staking-calculator.vercel.app/",
        cardType: "summary_large_image",
      }}
    />
  );
}

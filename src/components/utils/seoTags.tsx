import { NextSeo } from "next-seo";

export default function SeoTags() {
  return (
    <>
      <NextSeo
        title="ethereum Staking Calculator Reward (ETH)"
        description="Get the most out of your ethereum staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool."
        canonical="https://ETH-staking-calculator.vercel.app/"
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
            href: "https://ETH-staking-calculator.vercel.app/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://ETH-staking-calculator.vercel.app/favicon.ico",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
        openGraph={{
          url: "https://ETH-staking-calculator.vercel.app",
          title: "ethereum Staking Calculator Reward (ETH)",
          description:
            "Get the most out of your ethereum staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool.",
          images: [
            {
              url: "https://ETH-staking-calculator.vercel.app/shot.png",
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
          site: "https://ETH-staking-calculator.vercel.app/",
          cardType: "summary_large_image",
        }}
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        name="keywords"
        content="ethereum Staking Calculator,
        ethereum 2 0 staking rewards calculator,
        ethereum 2 0 calculator ,
        eth 2 0 profit calculator,
        ethereum staking profit,
        eth2 staking rewards"
      />
      <meta
        name="description"
        content="Get the most out of your ethereum staking with our efficient and distraction-free calculator. Calculate your rewards hassle-free with our easy-to-use tool."
      />
      <meta
        name="copyright"
        content="ethereum Staking Calculator Reward (ETH)"
      />
      <title>ethereum Staking Calculator Reward (ETH)</title>
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { SocialFeature } from "./SocialFeature";
import { NFTShowcase } from "./NFTShowcase";
import { HowToPlay } from "./HowToPlay";
import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";
import { ParallaxStars } from "./ParallaxStars";
import { ScrollToTop } from "./ScrollToTop";
import { LoadingScreen } from "./LoadingScreen";
import { MobileMenu } from "./MobileMenu";
import { SiteLogo } from "./SiteLogo";
import { SiteNav } from "./SiteNav";

const Cursor = dynamic(() => import("./Cursor").then((m) => ({ default: m.Cursor })), {
  ssr: false,
});

export function HomePage() {
  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-screen">
        <ParallaxStars />
        <SiteNav />
        <SiteLogo className="fixed right-4 top-[max(1rem,env(safe-area-inset-top))] z-50 md:hidden" />
        <MobileMenu />
        <Cursor />
        <main className="relative">
          <Hero />
          <Features />
          <div className="site-section--panel">
            <SocialFeature />
          </div>
          <NFTShowcase />
          <div className="site-section--panel">
            <HowToPlay />
          </div>
          <CallToAction />
          <Footer />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}

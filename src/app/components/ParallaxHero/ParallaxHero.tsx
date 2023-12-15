"use client";
import "./parallaxhero.scss";
import Img_BG from "@/assets/bg.jpg";
import Img_Dust from "@/assets/dust.webp";
import Img_ForegroundBack from "@/assets/foreground-back.webp";
import Img_ForegroundFront from "@/assets/foreground-front.webp";
import Img_Jax from "@/assets/jax.webp";
import Img_Luna from "@/assets/luna.webp";
import Img_Manny from "@/assets/manny.webp";
import Img_Rays from "@/assets/rays.webp";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ParallaxOverlay from "./ParallaxOverlay";

export default function ParallaxHero() {
  // parallax hooks
  const { ref: refRays }: { ref: React.RefObject<HTMLImageElement> } =
    useParallax({ speed: -55 });
  const { ref: refJax }: { ref: React.RefObject<HTMLImageElement> } =
    useParallax({ speed: -10 });
  const { ref: refLuna }: { ref: React.RefObject<HTMLImageElement> } =
    useParallax({ speed: -50 });
  const { ref: refManny }: { ref: React.RefObject<HTMLImageElement> } =
    useParallax({ speed: -35 });

  // lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="parallax">
      <Image
        className="parallax__bg parallax__image"
        src={Img_BG}
        alt="background"
      />
      <Image
        className="parallax__dust parallax__image"
        src={Img_Dust}
        alt="dust decal"
      />
      <Image
        className="parallax__foreground-back"
        src={Img_ForegroundBack}
        alt="foreground back"
      />
      <Image
        className="parallax__foreground-front"
        src={Img_ForegroundFront}
        alt="foreground front"
      />
      <Image
        ref={refRays}
        className="parallax__rays parallax__image"
        src={Img_Rays}
        alt="rays"
      />
      <Image
        ref={refJax}
        className="parallax__jax parallax__image"
        src={Img_Jax}
        alt="jax"
      />
      <Image
        ref={refLuna}
        className="parallax__luna parallax__image"
        src={Img_Luna}
        alt="luna"
      />
      <Image
        ref={refManny}
        className="parallax__manny parallax__image"
        src={Img_Manny}
        alt="manny"
      />
      <ParallaxOverlay />
    </div>
  );
}

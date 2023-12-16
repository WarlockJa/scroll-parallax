import Image from "next/image";
import "./parallaxoverlay.scss";
import Img_Logo from "@/assets/Logo.webp";
import { useParallax } from "react-scroll-parallax";
import XTwitter from "../svg/XTwitter";
import Instagram from "../svg/Instagram";
import Youtube from "../svg/Youtube";

export default function ParallaxOverlay() {
  const { ref: refOverlay }: { ref: React.RefObject<HTMLDivElement> } =
    useParallax({ speed: -80 });

  return (
    <div className="overlay" ref={refOverlay}>
      <nav className="overlay__nav">
        <picture>
          <Image
            className="overlay__nav__imgWrapper--logo"
            src={Img_Logo}
            alt="logo"
          />
        </picture>
        <div className="overlay__nav__links">
          <p>why join us</p>
          <p>the founders</p>
          <p>beta info</p>
        </div>
        <div className="overlay__nav__socials">
          <a href="#" target="_blank">
            <picture>
              <XTwitter />
            </picture>
          </a>
          <a className="overlay__nav__socials__a" href="#" target="_blank">
            <picture>
              <Instagram />
            </picture>
          </a>
          <a className="overlay__nav__socials__a" href="#" target="_blank">
            <picture>
              <Youtube />
            </picture>
          </a>
        </div>
      </nav>
      <div className="overlay__textWrapper">
        <p className="overlay__textWrapper--top">gear up!</p>
        <h1 className="overlay__textWrapper--main">
          we&apos;re going monster hunting!
        </h1>
        <div className="overlay__textWrapper__buttonWrapper">
          <button className="overlay__textWrapper--button">
            sign up for beta
          </button>
        </div>
      </div>
    </div>
  );
}

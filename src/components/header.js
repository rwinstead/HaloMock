import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header id={headerStyles.headerContent}>
      <StaticImage
        src="../images/home/MB_logo.png"
        width={169}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Murda Beatz logo"
        className={headerStyles.logo}
        placeholder="tracedSVG"
      />

    <nav id={headerStyles.navigation}>
      <ul>
        <li><a href="#releases">RELEASES</a></li>
        <li><a href="#videos">VIDEOS</a></li>
        <li><a href="#store">STORE</a></li>
        <li><a href="#photos">PHOTOS</a></li>
        <li><a href="#subscribe">SUBSCRIBE</a></li>
      </ul>
    </nav>
  </header>
)

export default Header

import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header id={headerStyles.headerContainer}>
    <div id={headerStyles.headerContent}>
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
        <li><a href="#">RELEASES</a></li>
        <li><a href="#">VIDEOS</a></li>
        <li><a href="#">STORE</a></li>
        <li><a href="#">PHOTOS</a></li>
        <li><a href="#">SUBSCRIBE</a></li>
      </ul>
    </nav>



    </div>
  </header>
)

export default Header

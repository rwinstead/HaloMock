import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Header from "../components/header"
import * as homeStyles from "../styles/home.module.css"

import emailIcon from "../images/home/social_icons/ico-mail.svg"
import spotifyIcon from "../images/home/social_icons/ico-spotify.svg"
import itunesIcon from "../images/home/social_icons/ico-apple.svg"
import instaIcon from "../images/home/social_icons/ico-ig.svg"
import twitterIcon from "../images/home/social_icons/ico-twitter.svg"
import facebookIcon from "../images/home/social_icons/ico-fb.svg"

const IndexPage = () => (
  <main>
    <Seo title="Home"/>
    <Header/>
    <section id={homeStyles.heroContainer}>
    <div id={homeStyles.heroSocial}>
        <ul>
          <li><a href="#email"><img src={emailIcon} alt="Email link"/></a></li>
          <li><a href="#spotify"><img src={spotifyIcon} alt="Spotify link"/></a></li>
          <li><a href="#itunes"><img src={itunesIcon} alt="Itunes link"/></a></li>
          <li><a href="#instagram"><img src={instaIcon} alt="Instagram link"/></a></li>
          <li><a href="#twitter"><img src={twitterIcon} alt="Twitter link"/></a></li>
          <li><a href="#facebook"><img src={facebookIcon} alt="Facebook link"/></a></li>
        </ul>
      </div>

      <div id={homeStyles.heroContent}>
        <div id={homeStyles.heroBkgContainer}>

          <div id={homeStyles.heroBkgTextContainer}>
            <div class={homeStyles.sedgwick} style={{marginBottom:'10px'}}>
              CHECK OUT ON SPLICE
            </div>
            <div id={homeStyles.heroBkgTextBold} class={`${homeStyles.sen} ${homeStyles.bold}`}>
              MURDA BEATZ’<br/>
              QUARANTINE KIT<br/>
              SAMPLE PACK
            </div>
            <button id={homeStyles.heroListenNowBtn} class={`${homeStyles.sen} ${homeStyles.bold}`} type="button">LISTEN NOW</button>
          </div>

          <StaticImage
            src="../images/home/heroImgFinal.png"
            width={644.41}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hero image of Murda Beatz drum kit quarantine pack"
            className={homeStyles.heroBkgImg}
          />
        </div>

      </div>
    </section>
    <div>
      ih
    </div>
  </main>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Header from "../components/header"
import * as homeStyles from "../styles/home.module.css"

import {Email, Spotify, Itunes, Insta, Twitter, Facebook} from "../images/home/social_icons/social-inline-svgs"

import featuredImg from "../images/home/releases/featured.png"
import releases1 from "../images/home/releases/releases1.png"
import releases2 from "../images/home/releases/releases2.png"
import releases3 from "../images/home/releases/releases3.png"
import releases4 from "../images/home/releases/releases4.png"

const IndexPage = () => (
  <main>
    <Seo title="Home"/>
    <Header/>
    <section id={homeStyles.heroContainer}>
    <div id={homeStyles.heroSocial}>
        <ul>
          <li><a href="#email"><Email/> </a></li>
          <li><a href="#spotify"><Spotify/> </a></li>
          <li><a href="#itunes"><Itunes/> </a></li>
          <li><a href="#instagram"><Insta/> </a></li>
          <li><a href="#twitter"><Twitter/> </a></li>
          <li><a href="#facebook"><Facebook/> </a></li>
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
            <button class={`${homeStyles.heroListenNowBtn} ${homeStyles.sen} ${homeStyles.bold}`} type="button">LISTEN NOW</button>
          </div>

          <StaticImage
            src="../images/home/heroImgFinal2.png"
            width={620}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hero image of Murda Beatz drum kit quarantine pack"
            className={homeStyles.heroBkgImg}
          />
        </div>

      </div>
    </section>

    <section id={homeStyles.releases}>
      <div id={homeStyles.lightOverlay}/>
      <div class={homeStyles.sectionContent}>
        <div class={homeStyles.sectionHeaderWhite}>
          RELEASES
        </div>
          <div class={homeStyles.releasesPhotoGrid}>
            <div 
              class={`${homeStyles.releasesCard} ${homeStyles.releasesFeaturedCard}`}
              style={{backgroundImage: `url(${featuredImg})`}}
            />
            <div 
              class={homeStyles.releasesCard}
              style={{backgroundImage: `url(${releases1})`}}
            />
            <div 
              class={homeStyles.releasesCard}
              style={{backgroundImage: `url(${releases2})`}}
            />
            <div 
              class={homeStyles.releasesCard}
              style={{backgroundImage: `url(${releases3})`}}
            />
            <div 
              class={homeStyles.releasesCard}
              style={{backgroundImage: `url(${releases4})`}}
            />
        </div>

        <div class={`${homeStyles.yellowButton} ${homeStyles.sectionBtn} ${homeStyles.sen} ${homeStyles.bold}`}>
          VIEW ALL RELEASES
        </div>


      </div>
    </section>

  </main>
)

export default IndexPage

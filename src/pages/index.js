import * as React from "react"
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

import video1 from "../images/home/videos/video1.png"
import video2 from "../images/home/videos/video2.png"

import arrowL from "../images/home/videos/arrowL.svg"
import arrowR from "../images/home/videos/arrowR.svg"

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoPosition : 0,
    };

    this.moveVideoLeft = this.moveVideoLeft.bind(this);
    this.moveVideoRight = this.moveVideoRight.bind(this);
}

moveVideoLeft(event) {
  event.preventDefault();

  let videoPos = this.state.videoPosition;

  if(videoPos > 0) {
    this.setState({
      videoPosition: videoPos - 1},
    );
  }

}

moveVideoRight(event) {
  event.preventDefault();

  let videoPos = this.state.videoPosition;

  if(videoPos < 2) {
    this.setState({
      videoPosition: videoPos + 1}, 
    );
  }

  if(videoPos === 2) {
    this.setState({
      videoPosition: 0},
    );
  }

}


render () {

  const videoPos = this.state.videoPosition;
  let videoInner;
  let videoTitle;
  let videoArtist;

  if(videoPos === 0) {
    videoInner = 
      <div id={homeStyles.videoInner}>
        <img alt="Video of Banana Split" src={video1} class={homeStyles.videoItem}/>
        <img alt="Video 2" src={video2} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
        <img alt="Video of Banana Split" src={video1} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
      </div>;

      videoTitle = <span>BANANA SPLIT</span>;
      videoArtist = <span>MURDA BEATZ (FEAT. YNW MELLY & LIL DURK)</span>;
  }

  if(videoPos === 1) {
    videoInner = 
    <div id={homeStyles.videoInner1}>
      <img alt="Video of Banana Split" src={video1} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
      <img alt="Video 2" src={video2} class={homeStyles.videoItem}/>
      <img alt="Video of Banana Split" src={video1} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
    </div>;

    videoTitle = <span>VIDEO 2 NAME</span>;
    videoArtist = <span>VIDEO 2 ARTIST HERE</span>;
  }

  if(videoPos === 2) {
    videoInner = 
    <div id={homeStyles.videoInner2}>
      <img alt="Video of Banana Split" src={video1} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
      <img alt="Video 2" src={video2} class={`${homeStyles.videoItem} ${homeStyles.tinted}`}/>
      <img alt="Video of Banana Split" src={video1} class={homeStyles.videoItem}/>
    </div>;

    videoTitle = <span>BANANA SPLIT</span>;
    videoArtist = <span>MURDA BEATZ (FEAT. YNW MELLY & LIL DURK)</span>;
  }


  return (
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
            loading={"eager"}
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

    <section id={homeStyles.tour}>
      <div class={homeStyles.sectionContent}>
        <div class={homeStyles.sectionHeaderWhite}>
            TOUR
        </div>
        <div id={homeStyles.tourGrid}>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
            <div class={homeStyles.tourDivider}/>
          </div>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
            <div class={homeStyles.tourDivider}/>
          </div>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
            <div class={homeStyles.tourDivider}/>
          </div>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
            <div class={homeStyles.tourDivider}/>
          </div>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
            <div class={`${homeStyles.tourDivider} ${homeStyles.mobileOnly}`}/>
          </div>
          <div class={homeStyles.tourCard}>
            <div class={homeStyles.tourItem}>
              <div class={homeStyles.tourItemLeft}>
                <div class={homeStyles.sedgwick}>JUN 6</div>
                <div class={homeStyles.tourLocation1}>JEWEL NIGHTCLUB</div>
                <div class={homeStyles.tourLocation2}>LAS VEGAS, NV</div>
              </div>
              <div class={homeStyles.tourItemRight}>
                <span class={homeStyles.tourLinksSpace}><a href="#TICKETS">TICKETS</a></span>
                <span class={homeStyles.tourLinksSpace}><a href="#VIP">VIP</a></span>
                <a href="#RSVP">RSVP</a>
              </div>
            </div>
          </div>
        </div>
        <div class={`${homeStyles.yellowButton} ${homeStyles.sectionBtn} ${homeStyles.sen} ${homeStyles.bold}`}>
          VIEW ALL DATES
        </div>
      </div>
    </section>

    <section id={homeStyles.videos}>
    <div class={homeStyles.sectionContent}>
        <div class={homeStyles.sectionHeaderWhite}>
            VIDEOS
        </div>
        <div id={homeStyles.videoOutter}>
          {videoInner}
        </div>
        <div id={homeStyles.videoSub}>
          <div class={homeStyles.videoTitle}>
            <div class={`${homeStyles.sen} ${homeStyles.bold} ${homeStyles.videoTitleText}`}>
              {videoTitle}
            </div>
            <div class={homeStyles.sedgwick} style={{letterSpacing:'normal'}}>
              {videoArtist}
            </div>
          </div>
          <div id={homeStyles.videoControl}>
            <div id={homeStyles.videoArrows}>
              <input type="image" src={arrowL} alt="previous video" onClick={this.moveVideoLeft}/>
              <input type="image" src={arrowR} alt="next video" onClick={this.moveVideoRight}/>
            </div>
          </div>
        </div>
        <div id={homeStyles.videoBtn} class={`${homeStyles.yellowButton} ${homeStyles.sectionBtn} ${homeStyles.sen} ${homeStyles.bold}`}>
                VIEW ALL VIDEOS
        </div>
      </div>
    </section>

  </main>
    );
  }
}



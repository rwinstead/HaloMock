import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.css"
import { StaticImage } from "gatsby-plugin-image"
import hamburger from "../images/header/hamburger.svg"
import closeX from "../images/header/closeX.svg"

export default class Header extends React.Component {

  constructor(props) {
      super(props);
  
      this.state = {
        showMenu : false,
      };
  
      this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
  
  render () {

    const showMenu = this.state.showMenu;
    let navButton;
    let navMenu;

    if(showMenu) {
      navButton = <input type="image" alt="Close menu" id={headerStyles.closeX} src={closeX} onClick={this.showMenu}/>;

      navMenu = 
        <div id={headerStyles.navMobileFullscreenContainer}>
          <div id={headerStyles.navMobileFullscreen}>
            <nav id={headerStyles.navMobileItems}>
              <ul>
                <li><a href="#releases">RELEASES</a></li>
                <li><a href="#videos">VIDEOS</a></li>
                <li><a href="#store">STORE</a></li>
                <li><a href="#photos">PHOTOS</a></li>
                <li><a href="#subscribe">SUBSCRIBE</a></li>
              </ul>
            </nav>
          </div>
        </div>;
    }

    else {
     navButton = <input type="image" alt="Open menu" id={headerStyles.hamburger} src={hamburger} onClick={this.showMenu}/>;
     navMenu = 
     <div id={headerStyles.navMobileFullscreenContainerInvis}>
       <div id={headerStyles.navMobileFullscreenShrink}>
         
       </div>
     </div>;
    }

    return (
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

        <nav id={headerStyles.navigationMobile}>
          {navMenu}
          {navButton}
        </nav>

      </header>
      );
    }
  }

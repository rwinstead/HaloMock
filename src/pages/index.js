import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <main>
    <Seo title="Home" />
    <Header/>
    <h1>Hi people</h1>
    <p style={{fontFamily:"Sedgwick Ave"}}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/MB_favicon.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </main>
)

export default IndexPage

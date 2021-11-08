import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = () => (
  <Layout>
    <Seo title="Page3" />
    
    <p>Risolvi enigma.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/tesseract-first.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The first piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
      src="../images/tesseract-third.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The second piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
      src="../images/tesseract-final.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="The final piece of the puzzle"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page2/">STEP 2</Link> <br />
    </p>
    
  </Layout>
)

export default Page3
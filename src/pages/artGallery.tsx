import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const pageTitle = "Art Gallery"




// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>TODO -
        <ul>
          <li>Full art gallery</li>
          <li>Sorting</li>
          <li>Expand for full resolution</li>
        </ul>
         For now, here's a couple pieces of art.
      </p>
      <StaticImage
        alt="..."
        src="../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png"
        layout="constrained"
        width={300}
      />
            <StaticImage
        alt="..."
        src="../assets/images/art/2022_10_Daxl_Serin_Chibi1.png"
        layout="constrained"
        width={300}
      />
            <StaticImage
        alt="..."
        src="../assets/images/art/2022_08_Tink_Serin_Smirk.png"
        layout="constrained"
        width={300}
      />
    </Layout>


  )
}

export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default AboutPage
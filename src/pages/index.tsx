import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage: React.FC<PageProps> = () => {
  return ( 
    <Layout pageTitle = "Welcome to my corner!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
        
      <StaticImage
        alt="Mia, a black and white lab mix, curled up on a couch cushion."
        src="../images/MiaCurled.jpg"
        layout="constrained"
      />
    
    </Layout>
  )

}

export default IndexPage

export const Head: HeadFC = () => 
{
  return (
    <title>Serin's Corner</title>
    )
}

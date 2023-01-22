import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage: React.FC<PageProps> = () => {
  return ( 
    <Layout pageTitle = "Welcome to my corner!">
      <p>Mia...</p>
        
      <StaticImage
        alt="Mia, a black and white lab mix, curled up on a couch cushion."
        src="../assets/images/photos/MiaCurled.jpg"
        layout="constrained"
        width={600}

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

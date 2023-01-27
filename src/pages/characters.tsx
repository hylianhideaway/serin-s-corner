import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Characters"}>
      <p>
        Select a character to learn more about them. 

        <br/><br/><br/>
        TODO: Actually implement this. 
      </p>


      <p> For now, there is one character to learn about. Serin!</p>
    </Layout>


  )
}

export const Head: HeadFC = () => {
    return <title>About Me</title>
}

// Step 3: Export your component
export default AboutPage
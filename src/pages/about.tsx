import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <p>Hi! I'm Serin. Your friendly neighborhood dragonborn Bard.
        I'm taking on this project as a chance to learn how to do React development in the wild.
        Previously, all of my experience with React has been with an Enterprise level applicaiton, where much of the actual setup was 
        cookie cutter and abstracted away. With this project, I can expand my knowledge and apply it in a cool new way. 
      </p>
    </Layout>


  )
}

export const Head: HeadFC = () => {
    return <title>About Me</title>
}

// Step 3: Export your component
export default AboutPage
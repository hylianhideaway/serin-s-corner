import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'


const pageTitle = "External Links"


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      

      <h2>Friend's sites</h2>
        <ul>
          <li><a href="https://groundedwren.com/">Vera's site </a>
            <ul>
              <li>made by my friend Vera. She is building her site from the ground up. No React. No prebuilt components. Just raw html, css, and javascript. </li>
            </ul>
          </li>
        </ul>
      <h2>Where to find me</h2>
        <ul>
          <li>Discord Handle: Serin#8136</li>
        </ul>
    </Layout>


  )
}

export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default AboutPage
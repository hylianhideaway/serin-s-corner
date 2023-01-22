import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'


const pageTitle = "External Links"


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <ul>
        <li><a href="https://groundedwren.com/">Vera's site </a>
        </li>
      </ul>
    </Layout>


  )
}

export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default AboutPage
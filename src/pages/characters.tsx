import * as React from 'react'
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from '../components/layout'
import SpacerDiv from '../components/spacer'

import  '../assets/style/characters.css'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const Characters: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Characters"}>
      <h2> Select a character</h2>
        <ul>
          <li><Link  to={"/characters/serin"}>Serin</Link></li>
          <li><Link  to={"/characters/tiberius"}>Tiberius</Link></li>


        </ul>
        

      <p>Idea: have icons that really just link to the pages we care about</p>

    </Layout>


  )
}




export const Head: HeadFC = () => {
    return <title>Characters</title>
}

// Step 3: Export your component
export default Characters
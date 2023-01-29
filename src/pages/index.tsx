import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import SpacerDiv from '../components/spacer'

import { StaticImage } from 'gatsby-plugin-image'


const IndexPage: React.FC<PageProps> = () => {
  return ( 
    <Layout pageTitle = "Welcome to my corner!">
      <h2>Hi there. I'm Serin. Welcome to my website. </h2>
      <p>This site is a landing page for my internet presence. It contains art of character's I've commissioned 
        (primarily of my <del>DnD</del> fantasy rollplaying game character Serin, whose name I often use an alias). 
        In the future, I may also create a blog, maybe to document some of the antics we have gotten up to in our DnD campaign as the Risen. 
      </p>

      <h2>So why a homegrown website? Why not Tumblr or Wordpress?</h2>
      <p> I started this project as a chance to learn how to do React development in the wild. 
        Previously, all of my experience with React has been with an Enterprise level application, 
        where much of the actual setup was cookie cutter and abstracted away. 
        With this project, I can expand my knowledge and apply it in a cool new way. 
        What I was not expecting was how much fun creating this website would be. 
        So, expect to see many updates in the future 😊.
      </p>
      <p> Oh! And while you’re here, don’t forget to say hi to Mia. </p>
      <SpacerDiv/>
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

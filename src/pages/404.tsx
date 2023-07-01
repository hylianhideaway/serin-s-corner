import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import {  StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle = "Page Not Found">
      
      <StaticImage
        alt="a doodle of Serin, a Brass dragonborn. He looks rather annoyed."
        src="../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png"
        layout="constrained"
        width={300}
      />
      <br/>
      <Link to="/">Go home</Link>.
  
  </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

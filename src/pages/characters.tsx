import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import  '../assets/style/characters.css'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const Characters: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Characters"}>
      <Serin/>
    </Layout>


  )
}


// Calling it Serin for now. Once we have mroe characters, should make this component generic and pass in all the values. 
// For now, we will hardcode them. 

const Serin: React.FC = () => {




  return (
    <div> 
      <h2> Serin</h2>
      <div className="generalTraitsContainer">
        <div className="generalTraitsItem">
          <table>
            <tr><td><b>Full Name</b></td><td>Serendipitus Nemmonis</td></tr>     
            <tr><td><b>Species</b></td><td>Brass Dragonborn</td></tr>
            <tr><td><b>Gender</b></td><td>Male</td></tr>
            <tr><td><b>Orientation</b></td><td>Gay</td></tr>

          </table>
        </div>
        <div className="generalTraitsItem">
          <table>
            <tr><td><b>Age</b></td><td>26</td></tr>
            <tr><td><b>Build</b></td><td>Slim. Lightly Muscled.</td></tr>  
            <tr><td><b>Height</b></td><td>5'11''</td></tr>
            <tr><td><b>Weight</b></td><td>165 lbs</td></tr>
            
          </table>
        </div>
      </div>
    </div>
  )









}





export const Head: HeadFC = () => {
    return <title>Characters</title>
}

// Step 3: Export your component
export default Characters
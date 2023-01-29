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
    <div> {/*Outer DIV*/} 
      <h2> Serin</h2>

      {/*General Traits Section*/} 
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
            <tr><td><b>Build</b></td><td>Slim, Lightly Muscled</td></tr>  
            <tr><td><b>Height</b></td><td>5'11''</td></tr>
            <tr><td><b>Weight</b></td><td>165 lbs</td></tr>
          </table>
        </div>
      </div>


            
      {/*TODO - additional details section. Ideally, will be expandable*/}

      {/*Color Pallete section*/}
      {/*Pulled from Aldermoth */}
      <div className="colorPaletteContainer">
        <div className="colorPaletteElement" style={{backgroundColor: "#D6995FFF"}} /> {/*Scales*/}
        <div className="colorPaletteElement" style={{backgroundColor: "#E8B176FF"}} /> {/*Neck, Chest, Abdomin */} 
        <div className="colorPaletteElement" style={{backgroundColor: "#B37844FF"}} /> {/*Horns*/} 
        <div className="colorPaletteElement" style={{backgroundColor: "#211812FF"}} /> {/*Nails */}
        <div className="colorPaletteElement" style={{backgroundColor: "#F4ECD6FF"}} /> {/*Sclera */}
        <div className="colorPaletteElement" style={{backgroundColor: "#915640FF"}} /> {/*Iris*/}
        <div className="colorPaletteElement" style={{backgroundColor: "#6E4038FF"}} /> {/*Pants*/}
      </div>

      {/*Pulled from Recent Sketch commission - for comparison only */}
      
      {/*<div className="colorPaletteContainer">*/}
        {/*<div className="colorPaletteElement" style={{backgroundColor: "#D4985CFF"}} /> */} {/*Scales*/}
        {/*<div className="colorPaletteElement" style={{backgroundColor: "#EAB478FF"}} />*/} {/*Neck, Chest, Abdomin */} 
        {/*<div className="colorPaletteElement" style={{backgroundColor: "#B47844FF"}} />*/} {/*Horns*/} 
        {/*<div className="colorPaletteElement"  /> */}
        {/*<div className="colorPaletteElement"  /> */}
        {/*<div className="colorPaletteElement"  />*/}
        {/*<div className="colorPaletteElement"  />  */}
     {/*</div>*/}
      
      <div className="generalTraitsContainer">
        <div className="generalTraitsItem">
          <table style={{width:"500px"}}>
            <ColorDetailsRow description="Scales" cssHex="#D6995FFF" colorAltName="Tan-Crayola" />
            <ColorDetailsRow description="Neck, chest, and abdomen" cssHex="#E8B176FF" colorAltName="Middle-Yellow-Red" />
            <ColorDetailsRow description="Horns" cssHex="#B37844FF" colorAltName="Copper" />
            <ColorDetailsRow description="Nails" cssHex="#211812FF" colorAltName="Black-Chocolate" />
            <ColorDetailsRow description="Sclera" cssHex="#F4ECD6FF" colorAltName="Eggshell" />
            <ColorDetailsRow description="Iris" cssHex="#915640FF" colorAltName="Chestnut" />
            <ColorDetailsRow description="Pants" cssHex="#6E4038FF" colorAltName="Bole" />

          </table>
        </div>
      </div>

       {/*Refernce section*/}
      <div style={{backgroundColor: "white", padding:"10px" ,margin:"10px" }}>
        <StaticImage 
          alt="images of Serin that best capture his true design" 
          src="../assets/images/references/SerinReferences01292023.png" 
          layout="constrained" 
          formats = {["png"]} 
          quality={100} 
          />
      </div>


          
    </div> 
  )


}

interface ColorDetailsRowProps 
{
  cssHex: string ; 
  colorAltName : string;
  description: string;

}


const ColorDetailsRow: React.FC<ColorDetailsRowProps> = (props) => {
  const cssHex = props.cssHex;
  const colorAltName = props.colorAltName; 
  const description = props.description;
  
  return (
    <tr>
      <td style={{backgroundColor: props.cssHex , width: "50px"}}/>
      <td>{props.cssHex}</td>
      <td>{props.colorAltName}</td>
      <td>{props.description}</td>
    </tr>   
  )
}





export const Head: HeadFC = () => {
    return <title>Characters</title>
}

// Step 3: Export your component
export default Characters
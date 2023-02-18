import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import CharacterLayout from '../../components/characterLayout'
import SpacerDiv from '../../components/spacer'
import { StaticImage } from 'gatsby-plugin-image'


const pageTitle = "Serin"


// Step 2: Define your component
const Serin: React.FC<PageProps> = () => {
  return (
    <CharacterLayout characterName="Serin">
        <SerinInternal/>
    </CharacterLayout>
  )
}

// Calling it Serin for now. Once we have mroe characters, should make this component generic and pass in all the values. 
// For now, we will hardcode them. 

const SerinInternal: React.FC = () => {

    return (
      <div> {/*Outer DIV*/}
        {/*Short Biography Section*/}
        <p>
        Serin is a brass dragonborn from the nation of Volestra. 
        Rather unimposing for a dragonborn, Serin is an extremely friendly fellow. 
        Often pitching outlandish ideas and hatching complicated schemes guaranteed to be overcomplicated for any problem, 
        the fact that he is able to succeed in even a fraction of them is tied to his extremely personable nature.     
        </p>
        <p>
        The bulk of Serin's story revolves around his adventures with the Risen, a group of unlikely fate-touched 
        individuals tasked with preventing a god-devil from consuming all souls on their plane.  
        </p> 





        {/*General Traits Section*/}
        <h3>Traits</h3> 
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
              <tr><td><b>Age</b></td><td>27</td></tr>
              <tr><td><b>Build</b></td><td>Slim, Lightly Muscled</td></tr>  
              <tr><td><b>Height</b></td><td>5'11'' (180cm)</td></tr>
              <tr><td><b>Weight</b></td><td>165lbs (75kg)</td></tr>
            </table>
          </div>
        </div>
  
        <SpacerDiv/>
              
        {/*TODO - additional details section. Ideally, will be expandable*/}
        {/*Color Pallete section*/}
        <h3>Color Pallete</h3> 
        {/*Pulled from Aldermoth */}
        <div>
          <div className="colorPaletteContainer">
            <div className="colorPaletteElement" style={{backgroundColor: "#D6995FFF"}} /> {/*Scales*/}
            <div className="colorPaletteElement" style={{backgroundColor: "#E8B176FF"}} /> {/*Neck, Chest, Abdomin */} 
            <div className="colorPaletteElement" style={{backgroundColor: "#B37844FF"}} /> {/*Horns*/} 
            <div className="colorPaletteElement" style={{backgroundColor: "#211812FF"}} /> {/*Nails */}
            <div className="colorPaletteElement" style={{backgroundColor: "#F4ECD6FF"}} /> {/*Sclera */}
            <div className="colorPaletteElement" style={{backgroundColor: "#915640FF"}} /> {/*Iris*/}
            <div className="colorPaletteElement" style={{backgroundColor: "#6E4038FF"}} /> {/*Pants*/}
          </div>
  
          <div className="generalTraitsContainer">
            <div className="generalTraitsItem">
              <table style={{width:"450px"}}>
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
  
        </div>
        {/*End of Color Pallete section*/}
  
        <SpacerDiv/>
  
         {/*Refernce section*/}
         <h3>Reference Sheet</h3> 
         <StaticImage 
            alt="First true reference sheet of Serin" 
            src="../../assets/images/references/SerinReference_Anatomy_02172023.png" 
            layout="constrained" 
            formats = {["png"]} 
            quality={100} 
          />
        <div style={{backgroundColor: "white", padding:"10px" ,margin:"10px" }}>
          <StaticImage 
            alt="images of Serin that best capture his true design" 
            src="../../assets/images/references/SerinReferences01292023.png" 
            layout="constrained" 
            formats = {["png"]} 
            quality={100} 
          />
        </div>

        <h3>Early Life</h3>
        <p>
        Serin has always been a free spirit. Originally from the tribe of Nemmonis, there was no question that Serin was 
        different from the other members of his clan. While his kinsmen were pursuing feats of strength and honor through 
        close quarters combat, Serin was more interested in the world's mysteries. Though distant in his pursuits, Serin 
        was always friendly and trusting with his Clan members. This, combined with his peculiar musical talent, led him 
        to be accepted (if not a bit alienated) by his clan. 
        </p>

        <p>
        Particularly, he was fascinated by music's profound effect on living things. At a younger age, he first observed 
        these effects in the emotional responses his performances solicited from his audience during clan gatherings. 
        As he continued to hone his skills, these responses became more and more potent. It soon became clear that his 
        musical performances had  effects atypical of the norm. These (rather unintentional) enchanted performances 
        unsettled Serin, as well as some of his clansmen, so Serin decided to set off to find ways to hone and control his musical gift.   
        </p>

        <p>
        At the age of 18, he set off to Bluecrest, home of the Bards college of Lore. There, he began the process of 
        honing and understanding his strange musical aptitude. He learned he was a part of a small subset of mortal beings 
        sensitive to the echoes of the primordial words spoken by the beings that created the cosmos. His sensitivity allows 
        him to capture these echoes, weaving them into spells and enchantments through music. 
        </p>

        <p>
        After his time at the college, Serin set out to begin making a name for himself. He travelled to a number of towns and 
        cities in Volestra, performing in city squares and inns. His friendly and trusting nature made it easy to find other 
        musicians to perform with, and he often travelled with other performers between settlements. As he travelled, he began 
        to pick up the different musical styles of the different regions. He also began to acquire a taste for the coin his 
        musical performances often presented. 
        </p>

        <p>
        Over time, he became invested in discovering particular melodies said to powerfully capture the echoes of creation. 
        These legendary songs became his pursuit, and he began to travel to farther locations in search of their mastery. 
        It was during these pursuits that he happened upon his current traveling companions. Though initially skeptical of their 
        quirkiness, their time spent travelling and defending each other has forged them into fast friends. 
        </p>

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
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default Serin
import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import CharacterLayout from '../../components/characterLayout'
import SpacerDiv from '../../components/spacer'
import TraitsTable from '../../components/traitsTable'
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

    const traitsTable1 : [string,string][] = 
          [
            ["Full Name","Serendipitus Nemmonis"],
            ["Species","Brass Dragonborn"],
            ["Gender","Male"],
            ["Orientation","Gay"]
          ];

    const traitsTable2: [string,string][] =
          [
            ["Age","27"],
            ["Build","Slim, Lightly Muscled"],
            ["Height","5'11'' (180cm)"],
            ["Weight","165lbs (75kg)"]
          ];

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
          <TraitsTable traitPairs={traitsTable1}/>
          <TraitsTable traitPairs={traitsTable2}/>  
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
         
         <h3>References</h3> 

         <StaticImage 
            alt="First true reference sheet of Serin, but clothed." 
            src="../../assets/images/references/SerinReference_Clothed_02192023_Full.png" 
            layout="constrained" 
            formats = {["png"]} 
            quality={100} 
          />
        
        <SpacerDiv/>

         <StaticImage 
            alt="First true reference sheet of Serin" 
            src="../../assets/images/references/SerinReference_Anatomy_02172023_Full.png" 
            layout="constrained" 
            formats = {["png"]} 
            quality={100} 
          />
        
        
        
        {/*<div style={{backgroundColor: "white", padding:"10px" ,margin:"10px" }}>
          <StaticImage 
            alt="images of Serin that best capture his true design" 
            src="../../assets/images/references/SerinReferences01292023.png" 
            layout="constrained" 
            formats = {["png"]} 
            quality={100} 
          />
        </div>
        */}

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

        <h3>Early Campaign</h3>
        <p>
        Like many adventures, Serin's began in a tavern. Specifically, in a small tavern in the city of Angmar, the capital of the country of Volestra. 
        Volestra was a relatively peaceful nation, comprised of seven smaller regions. Angmar, the capital region, shared the name of the capital city within. 
        Angmar was bordered by Erebus and Sylvas to the north, Caiusyss to the south, Mobius and Raiza to the west, and Kuraz to the east. 
        Though the country was vast, Serin's adventure began on a more modest note, with the matter of a bag. 
        Hamish, a well-off gnome sitting at the bar, enlisted the aid of a group of seemingly unassociated adventurers to retrieve a bag stolen from him days prior. 
        It was during this minor fetch quest that Serin became acquainted with the party he'd bond with for many years.
        </p>

        <p>
        There was Lightsong, a Cleric of Dol Arrah, always preaching about honor but often too polite or conflict-averse to challenge questionable acts. 
        Ghodukk, the hulking human barbarian, was a man of few words. At first, Serin mistook him for being soft-spoken, only to realize Ghodukk was, in fact, just simple-minded. 
        Convincing him of anything was like reasoning with a door, but there was no one else Serin would trust more in a brawl. 
        Eryn, the wood elf ranger, was both impulsive and mischievous. Serin was often amused with his antics, unless they were at Serin's expense, which happened frequently.
        </p>

        <p>
        Returning to the bag, the party tracked it to a cave in the nearby wilds of Volestra. 
        There, in addition to finding the bag, they encountered a Spectator and an odd shimmer seemingly suspended in the center of the cavern. 
        After defeating the Spectator, they approached the shimmer and were drawn into another realm. 
        Unbeknownst to them, they had landed in the Shadowfell, just outside Necrovall, the domain of the Raven Queen. 
        However, it was not the Raven Queen who welcomed them but Velkus, an Arch-devil, and his legion of demons, cultists, and Shadowfell warriors. 
        Paralyzed with fear, Serin listened as Velkus boasted about his plans to use the souls from Volestra to fuel his quest to conquer the multiverse. 
        The party hastily retreated through the rift and, with the bag in hand, made their way back to Angmar.
        </p>

        <p>
        Upon delivering the bag to Hamish (sans a map of Angmar's underworld), they sought the wisdom of M, the archmage of Angmar and de facto head archmage of Volestra. 
        After some effort, they secured a meeting to recount their ordeal. 
        M enlightened them about the convergence, a 10 millennia-old event that drew the planes of the multiverse closer, enabling easier planar movement and creating rifts like the one they had seen. 
        These rifts, unpredictable in their longevity, would only grow in number, size, and duration with the imminent convergence. 
        More worryingly, it would grant Velkus and his Archons another shot at invading their realm. 
        They had previously tried during the last convergence but were thwarted by seven heroes armed with the artifacts of the Sundering. 
        Led by Venca, the then-king of Volestra and keeper of the keystone, the heroes had saved their realm.  
        M entrusted Serin and his comrades with locating these artifacts before Velkus's agents did. 
        Armed with these relics, their world might stand a chance against the looming threat.
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
import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import CharacterLayout from '../../components/characterLayout'
import TraitsTable from '../../components/traitsTable'
import { StaticImage } from 'gatsby-plugin-image'


const pageTitle = "Tiberius"


// Step 2: Define your component
const Tiberius: React.FC<PageProps> = () => {
  return (
    <CharacterLayout characterName="Tiberius">
        <TiberiusInternal/>
    </CharacterLayout>


  )
}

const TiberiusInternal: React.FC = () => {

  const traitsTable1 : [string,string][] = 
      [
        ["Full Name","Tiberius Stormwind"],
        ["Species","Blue Dragonborn"],
        ["Gender","Male"],
        ["Orientation","Gay"]
      ];

  const traitsTable2: [string,string][] =
      [
        ["Age","28"],
        ["Build","Moderately muscled"],
        ["Height","6'1'' (185cm)"],
        ["Weight","190lbs (86kg)"]
      ];

    return (
      <div> {/*Outer DIV*/}

          {/*Short Biography Section*/}
          <p>
          Tiberius is a boisterous and excitable blue dragonborn who makes his home in the town of Wavesreach,
          a port city of West Volestra. Extremely extroverted and excitable, he makes his living selling potions 
          in his hometown. His unique brewing techniques, though a bit more expensive, result in surprisingly 
          tasty potion. He is currently Serin's mate in game.  
          </p>

          {/*General Traits Section*/}
          <h3>Traits</h3> 
          <div className="generalTraitsContainer">
            <TraitsTable traitPairs={traitsTable1}/>
            <TraitsTable traitPairs={traitsTable2}/>
          </div>

          <h3>References</h3> 
            <div style={{ padding:"10px" ,margin:"10px", display:"flex", flexDirection:"row",justifyContent:"center" }}>
              <div style={{ maxWidth:"600px"}}>
                <StaticImage 
                  alt="images of Serin that best capture his true design" 
                  src="../../assets/images/art/2022_11_Karne_Tiberius_01.png" 
                  layout="constrained" 
                  formats = {["png"]} 
                  quality={100}
                />
              </div>
            </div>
        


          <h3>Campaign</h3>
          <p>
            TODO
          </p>




      </div> 
    )

}




export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default Tiberius
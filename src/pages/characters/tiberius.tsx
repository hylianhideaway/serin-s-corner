import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import CharacterLayout from '../../components/characterLayout'
import TraitsTable from '../../components/traitsTable'


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



    return (
      <div> {/*Outer DIV*/}

            {/*General Traits Section*/}
          <h3>Traits</h3> 
          <div className="generalTraitsContainer">
            <TraitsTable traitPairs={traitsTable1}/>
          </div>
      </div> 
    )

}




export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default Tiberius
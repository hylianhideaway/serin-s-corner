import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import CharacterLayout from '../../components/characterLayout'


const pageTitle = "Tiberius"


// Step 2: Define your component
const Tiberius: React.FC<PageProps> = () => {
  return (
    <CharacterLayout characterName="Tiberius">
        Some additional info about tiberius here
      


    </CharacterLayout>


  )
}

export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default Tiberius
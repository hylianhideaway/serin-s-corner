import * as React from "react"
import {Link} from 'gatsby'
import  '../assets/style/layout.css'
import Layout from './layout'




interface CharacterProps 
{
    characterName:string; // title of the page.
    children:any // child nodes
}


/* Page frame component. Hold stuff every page should show, then inserts unique page in */
const CharacterLayout : React.FC<CharacterProps> = (props) => {
    
    const pageTitle="Characters";

    const characterName = props.characterName;
    const children = props.children;

    return (
        <Layout pageTitle={pageTitle}>
            <h2>{characterName}</h2>
            {children} {/* Where the actual meat and potatoes of the character ref sheet will go */}
        </Layout> 
    )
}


export default CharacterLayout




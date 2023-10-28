import React from 'react';


// Source: 
/*
Designed by Evelyne Krall & Robert Tanislav and interface coded by Zoltán Szőgyényi.
https://flowbite.com/icons/
*/


interface IconProps {
    color?: string;
}


//Source: Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools - Author: Dazzle UI
export const ChevronDown : React.FC<IconProps> = ({ color = "#000000" }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export const ChevronUp : React.FC<IconProps> = ({ color = "#000000" }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 15L12 9L18 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}











import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import  '../assets/style/artGallery.css'


const pageTitle = "Art Gallery"


interface ArtInfo {
  title: string;
  artist:string;
  address: string;
  characters: string[];
  staticImage: JSX.Element
}




// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  
  
  const comprehensiveArtArray : ArtInfo[] = [
    
    {
      title: "Original Risen",
      artist: "Bastien",
      address: "../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg",
      characters: ["Serin","Lightsong","Ghodukk","Eryn"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg" layout="constrained" />
    }
    ,
    {
      title: "Serin Redesign",
      artist: "RavenLuckArts",
      address: "../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png" layout="constrained"  />
    }
  
    ,
    {
      title: "Brunch",
      artist: "ShrimpLoverCat",
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png",
      characters: ["Lightsong","Vera","Serin","Luric","Percy"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png" layout="constrained"   />

    }
    ,
    {
      title: "Dab",
      artist: "ShrimpLoverCat",
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png" layout="constrained"  />

    }
    ,
    {
      title: "Modern Serin",
      artist: "FungiMan",
      address: "../assets/images/art/2022_05_FungiMan_Serin_Modern.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_05_FungiMan_Serin_Modern.png" layout="constrained"  />

    }
    ,
    {
      title: "Serin Chilling",
      artist: "Aldermoth",
      address: "../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png" layout="constrained"  />

    }
    ,
    {
      title: "Smug Serin",
      artist: "Tink",
      address: "../assets/images/art/2022_08_Tink_Serin_Smirk.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Tink_Serin_Smirk.png" layout="constrained"  />

    }
    ,
    {
      title: "Chibi Serin",
      artist: "Daxl",
      address: "../assets/images/art/2022_10_Daxl_Serin_Chibi1.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_10_Daxl_Serin_Chibi1.png" layout="constrained"  />

    }
    ,
    {
      title: "Tiberius",
      artist: "Karne",
      address: "../assets/images/art/2022_11_Karne_Tiberius_01.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_11_Karne_Tiberius_01.png" layout="constrained"  />

    }
    ,
    {
      title: "Christmas Serin",
      artist: "Daxl",
      address: "../assets/images/art/2022_12_Daxl_Serin_Christmas.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_12_Daxl_Serin_Christmas.png" layout="constrained"  />

    }
    ,
    {
      title: "Grumpy Doodle",
      artist: "Daxl",
      address: "../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png" layout="constrained"  />

    }
    
  ];

  
  const filteredArtArray=comprehensiveArtArray;  // TODO - actually add filtering. 
  
  return (
    <Layout pageTitle={pageTitle}>
      <p>TODO -
        <ul>
          <li>Full art gallery (done)</li>
          <li>Sorting</li>
          <li>Expand for full resolution</li>
          <li>Info for each item in gallery</li>
        </ul>
      </p>
      <ArtGallery comprehensiveArtArray={comprehensiveArtArray} />
    </Layout>
  )
}


interface ArtGalleryProps 
{
  comprehensiveArtArray : ArtInfo[]
}


const ArtGallery: React.FC<ArtGalleryProps> = (props) => {
  const comprehensiveArtArray=props.comprehensiveArtArray;

  const images =   comprehensiveArtArray.map( function(artPiece,index) 
    {
      return (
      <div className="galleryItem" key = {index}>
        {artPiece.staticImage}
        </div>
      );
    }
  )

  return (
    <div className="galleryContainer">
          {images}
    </div>
  )



}



export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default AboutPage
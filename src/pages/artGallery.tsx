import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import  '../assets/style/artGallery.css'


const pageTitle = "Art Gallery"


interface ArtInfo {
  title: string;
  artist:Artist;
  address: string;
  characters: Character[];
  staticImage: JSX.Element
}

enum Character {
  Serin = "Serin",
  Lightsong = "Lightsong",
  Ghodukk = "Ghodukk",
  Eryn = "Eryn",
  Vera = "Vera",
  Luric = "Luric",
  Percy = "Percy",
  Tiberius = "Tiberius"
}

enum Artist {
  Bastien = "Bastien",
  RavenLuckArts = "RavenLuckArts",
  ShrimpLoverCat = "ShrimpLoverCat",
  FungiMan = "FungiMan",
  Aldermoth = "Aldermoth",
  Tink = "Tink",
  Karne = "Karne",
  Daxl = "Daxl",

}


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  
  
  const comprehensiveArtArray : ArtInfo[] = [
    
    {
      title: "Original Risen",
      artist: Artist.Bastien,
      address: "../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg",
      characters: [Character.Serin,Character.Lightsong,Character.Ghodukk,Character.Eryn],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg" layout="constrained" />
    }
    ,
    {
      title: "Serin Redesign",
      artist: Artist.RavenLuckArts,
      address: "../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png" layout="constrained"  />
    }
  
    ,
    {
      title: "Brunch",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png",
      characters: [Character.Lightsong,Character.Vera,Character.Serin,Character.Luric,Character.Percy],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png" layout="constrained"   />

    }
    ,
    {
      title: "Dab",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png" layout="constrained"  />

    }
    ,
    {
      title: "Modern Serin",
      artist: Artist.FungiMan,
      address: "../assets/images/art/2022_05_FungiMan_Serin_Modern.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_05_FungiMan_Serin_Modern.png" layout="constrained"  />

    }
    ,
    {
      title: "Serin Chilling",
      artist: Artist.Aldermoth,
      address: "../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png",
      characters: ["Serin"],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png" layout="constrained"  />

    }
    ,
    {
      title: "Smug Serin",
      artist: Artist.Tink,
      address: "../assets/images/art/2022_08_Tink_Serin_Smirk.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Tink_Serin_Smirk.png" layout="constrained"  />

    }
    ,
    {
      title: "Chibi Serin",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_10_Daxl_Serin_Chibi1.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_10_Daxl_Serin_Chibi1.png" layout="constrained"  />

    }
    ,
    {
      title: "Tiberius",
      artist: Artist.Karne,
      address: "../assets/images/art/2022_11_Karne_Tiberius_01.png",
      characters: [Character.Tiberius],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_11_Karne_Tiberius_01.png" layout="constrained"  />

    }
    ,
    {
      title: "Christmas Serin",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_12_Daxl_Serin_Christmas.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_12_Daxl_Serin_Christmas.png" layout="constrained"  />

    }
    ,
    {
      title: "Grumpy Doodle",
      artist: Artist.Daxl,
      address: "../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png",
      characters: [Character.Serin],
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
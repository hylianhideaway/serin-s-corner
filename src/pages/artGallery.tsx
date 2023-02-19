import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import  '../assets/style/artGallery.css'
import { BackdropProps, ToggleButton, ToggleButtonGroup } from '@mui/material';


// Bunch of imports. Probably don't need all of them. 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import CloseIcon from '@mui/icons-material/Close';
import SpacerDiv from '../components/spacer'





const pageTitle = "Art Gallery"





interface ArtInfo {
  title: string; // The title of the piece
  artist:Artist; // The artist of the piece
  address: string; //Address of where the image is stored
  characters: Character[]; // List of characters who are in the piece
  staticImage: JSX.Element; // StaticImage JSX element holding the image
  dateRecieved: Date; // Date the piece was recieved 
  description: string; // A description of what is going on in the piece
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
  Enfys = "Enfys",


}

enum SortOrder {
  Chronological = 1,
  ReverseChronological = 2
}


// Step 2: Define your component
const GalleryPage: React.FC<PageProps> = () => {
  
  
  const comprehensiveArtArray : ArtInfo[] = [
    
    {
      title: "The Original Risen",
      artist: Artist.Bastien,
      address: "../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg",
      characters: [Character.Serin,Character.Lightsong,Character.Ghodukk,Character.Eryn],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg" layout="constrained" />,
      dateRecieved : new Date(2019,3,24), // 4/24/2019
      description: "A portrait of the original Risen.  Eryn, a wood-elf ranger, knocks an arrow on his bow. Ghodukk, a human barbarian, guards from the front. Lightsong, a Cleric of  Dol Arrah, displays his holy symbol while raising his mace. Serin, a Brass Dragonborn, grins while playing his mandolin."
    }
    ,
    {
      title: "Serin Redesign",
      artist: Artist.RavenLuckArts,
      address: "../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png" layout="constrained"  />,
      dateRecieved : new Date(2021,1,8), // 2/8/2021
      description: "A reimagining of Serin as compared to his original commission. This is the first depiction of his now canon appearance." 
    }
    ,
    {
      title: "Brunch",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png",
      characters: [Character.Lightsong,Character.Vera,Character.Serin,Character.Luric,Character.Percy],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png" layout="constrained"   />,
      dateRecieved : new Date(2022,2,12), // 3/12/2022
      description: "The Risen out to brunch. It seems they (somehow) convinced their patron Percy to come along. Serin should probably pay more attention to his coffee."
    }
    ,
    {
      title: "Dab",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png" layout="constrained"  />,
      dateRecieved : new Date(2022,2,27), // 3/27/2022
      description: "A dapper dragonborn dabbing."
    }
    ,
    {
      title: "Out for a stroll",
      artist: Artist.FungiMan,
      address: "../assets/images/art/2022_05_FungiMan_Serin_Modern.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_05_FungiMan_Serin_Modern.png" layout="constrained"  />,
      dateRecieved : new Date(2022,4,27) ,// 5/27/2022
      description: "A piece featuring Serin in a more modern AU. I wonder what he's singing?"
    }
    ,
    {
      title: "Relaxing",
      artist: Artist.Aldermoth,
      address: "../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png" layout="constrained"  />,
      dateRecieved : new Date(2022,8,5) ,// 9/5/2022
      description: "Serin relaxing with this shirt off. I really love the shading in this piece." 
    }
    ,
    {
      title: "Smirk",
      artist: Artist.Tink,
      address: "../assets/images/art/2022_08_Tink_Serin_Smirk.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Tink_Serin_Smirk.png" layout="constrained"  />,
      dateRecieved : new Date(2022,7,29) ,// 8/29/2022
      description: "Serin with a rather mischievous grin. What is he up to? Do you dare ask?"
    }
    ,
    {
      title: "Chibi Serin",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_10_Daxl_Serin_Chibi1.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_10_Daxl_Serin_Chibi1.png" layout="constrained"  />,
      dateRecieved : new Date(2022,9,28) ,// 10/28/2022
      description: "A chibi Serin. I wonder what he's playing?"
    }
    ,
    {
      title: "Tiberius",
      artist: Artist.Karne,
      address: "../assets/images/art/2022_11_Karne_Tiberius_01.png",
      characters: [Character.Tiberius],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_11_Karne_Tiberius_01.png" layout="constrained"  />,
      dateRecieved : new Date(2022,10,28) ,// 11/28/2022
      description: "A painted commission featuring Tiberius, a boisterous dragonborn NPC in our DND campaign who brews potions. He is currently dating Serin."
    }
    ,
    {
      title: "Christmas Lights",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_12_Daxl_Serin_Christmas.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_12_Daxl_Serin_Christmas.png" layout="constrained"  />,
      dateRecieved : new Date(2022,11,8)  ,// 12/08/2022
      description: "A Christmas themed sketch of Serin. He seems ready to cover Mariah Carey."
    }
    ,
    {
      title: "Grumpy Doodle",
      artist: Artist.Daxl,
      address: "../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png" layout="constrained"  />,
      dateRecieved : new Date(2022,11,23) ,// 12/23/2022
      description: "A doodle depicting a grumpy Serin. Vera often sees this look."
    } 
    ,
    {
      title: "Serin Anatomy Reference",
      artist: Artist.Enfys,
      address: "../assets/images/references/SerinReference_Anatomy_02172023_Full.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/references/SerinReference_Anatomy_02172023_Full.png" layout="constrained"  />,
      dateRecieved : new Date(2023,1,17) ,// 02/17/2023
      description: "Serin's first official reference sheet. In this version, he is unclothed to highlight his anatomy."
    }
    ,
    {
      title: "Serin Clothed Reference",
      artist: Artist.Enfys,
      address: "../assets/images/references/SerinReference_Clothed_02192023_Full.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/references/SerinReference_Clothed_02192023_Full.png" layout="constrained"  />,
      dateRecieved : new Date(2023,1,19) ,// 02/19/2023
      description: "Serin's first official reference sheet, this time with clothes! I really like how the back view shows his vest."
    }
    ,
    {
      title: "Inspiration, Inspiration Everywhere",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2023_02_18_ShrimpLoverCat_SerinVera_ToyStory.png",
      characters: [Character.Vera, Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2023_02_18_ShrimpLoverCat_SerinVera_ToyStory.png" layout="constrained"  />,
      dateRecieved : new Date(2023,1,18) ,// 02/18/2023
      description: "It seems Serin is pitching another wild plan. Or maybe he's decided to redecorate his magnificent mansion. Vera looks concerned."
    }   
  ];


  // Develop State for filters. 
  const [selectedArtists,setSelectedArtists] = React.useState<Artist[]>([]);
  const [selectedCharacters,setSelectedCharacters] = React.useState<Character[]>([]);
  const [sortOrder,setSortOrder] = React.useState<SortOrder>(SortOrder.Chronological);



  //Toogle functions
  const  handleArtistToggle = (event: React.MouseEvent<HTMLElement>,__selectedArtists: Artist[]) =>
    {
      setSelectedArtists(__selectedArtists) ;
    };

  const  handleCharacterToggle = (event: React.MouseEvent<HTMLElement>,__selectedCharacters: Character[]) =>
  {
    setSelectedCharacters(__selectedCharacters) ;
  };

  const handleSortOrderToggle = (event: React.MouseEvent<HTMLElement>,__selectedSortOrder: SortOrder) =>
  {
    setSortOrder(__selectedSortOrder);
  }

  
  return (
    <Layout pageTitle={pageTitle}>
      <h2>Display Options</h2>
      <h3>Artist</h3>
      <ToggleButtonGroup
        color="primary"
        aria-label="Artists"
        value = {selectedArtists}
        onChange = {handleArtistToggle}
        className="filterButtonGroup"
      >
          <ToggleButton value={Artist.Bastien}>{Artist.Bastien}</ToggleButton>
          <ToggleButton value={Artist.RavenLuckArts}>{Artist.RavenLuckArts}</ToggleButton>
          <ToggleButton value={Artist.ShrimpLoverCat}>{Artist.ShrimpLoverCat}</ToggleButton>
          <ToggleButton value={Artist.FungiMan}>{Artist.FungiMan}</ToggleButton>
          <ToggleButton value={Artist.Aldermoth}>{Artist.Aldermoth}</ToggleButton>
          <ToggleButton value={Artist.Tink}>{Artist.Tink}</ToggleButton>
          <ToggleButton value={Artist.Karne}>{Artist.Karne}</ToggleButton>
          <ToggleButton value={Artist.Daxl}>{Artist.Daxl}</ToggleButton>
          <ToggleButton value={Artist.Enfys}>{Artist.Enfys}</ToggleButton>

      </ToggleButtonGroup>
      <h3>Character</h3> 
      <ToggleButtonGroup
        color="secondary"
        aria-label="Characters"
        value = {selectedCharacters}
        onChange = {handleCharacterToggle}
        className="filterButtonGroup"

      >
          <ToggleButton value={Character.Serin}>{Character.Serin}</ToggleButton>
          <ToggleButton value={Character.Lightsong}>{Character.Lightsong}</ToggleButton>
          <ToggleButton value={Character.Ghodukk}>{Character.Ghodukk}</ToggleButton>
          <ToggleButton value={Character.Eryn}>{Character.Eryn}</ToggleButton>
          <ToggleButton value={Character.Vera}>{Character.Vera}</ToggleButton>
          <ToggleButton value={Character.Luric}>{Character.Luric}</ToggleButton>
          <ToggleButton value={Character.Percy}>{Character.Percy}</ToggleButton>
          <ToggleButton value={Character.Tiberius}>{Character.Tiberius}</ToggleButton>
      </ToggleButtonGroup>

      <h3>Sort Order</h3>
      <ToggleButtonGroup
        color="success"
        aria-label="Sort Order"
        value = {sortOrder}
        onChange = {handleSortOrderToggle}
        className="filterButtonGroup"
        exclusive
      >
          <ToggleButton value={SortOrder.Chronological}>Chronological</ToggleButton>
          <ToggleButton value={SortOrder.ReverseChronological}>Reverse Chronological</ToggleButton>
      </ToggleButtonGroup> 

      <br/>
      <ArtGallery 
        comprehensiveArtArray={comprehensiveArtArray} 
        selectedArtists = {selectedArtists} 
        selectedCharacters={selectedCharacters}
        sortOrder = {sortOrder}
      />
    </Layout>

    
  )
}

interface ArtGalleryProps 
{
  comprehensiveArtArray : ArtInfo[];
  selectedArtists: Artist[];
  selectedCharacters : Character[];
  sortOrder: SortOrder;
}


const ArtGallery: React.FC<ArtGalleryProps> = (props) => {
  const comprehensiveArtArray=props.comprehensiveArtArray;
  const selectedArtists = props.selectedArtists;
  const selectedCharacters = props.selectedCharacters;
  const sortOrder = props.sortOrder;

  let filteredArtArray = comprehensiveArtArray;


  // Filter by selected Artist(s) if any are selected. Otherwise, don't apply filter.
  if (selectedArtists.length !== 0) {
    filteredArtArray=filteredArtArray.filter( (element) => selectedArtists.includes(element.artist))
  }
  // Filter by selected character if any are selected. Otherwise, don't apply filter.
  if (selectedCharacters.length !== 0) {
    filteredArtArray=filteredArtArray.filter( (element) => {
        for(let character of element.characters)
        {
          if (selectedCharacters.includes(character)) return true;
        }
        return false;
    })
  }

  // sort by date
  if(sortOrder === SortOrder.Chronological) {
    filteredArtArray.sort( (a,b) => (a.dateRecieved.getTime() - b.dateRecieved.getTime()))

  } 
  else {
    filteredArtArray.sort( (a,b) => (b.dateRecieved.getTime() - a.dateRecieved.getTime()))
  }



  const [expanedViewIsOpen, setExpanedViewIsOpen] = React.useState<boolean[]>(new Array(filteredArtArray.length).fill(false));



  const handleOpenExpandedView = (index: number) => 
  {

    let tempArray = new Array<boolean>(...expanedViewIsOpen);
    tempArray[index] = true;
    setExpanedViewIsOpen(tempArray);
  }


  const handleClose = (index: number) => 
  {
    let tempArray = new Array<boolean>(...expanedViewIsOpen);
    tempArray[index] = false;
    setExpanedViewIsOpen(tempArray);
  }


  /*
    The images array is a pregenerated list of JSX object. Each outer div corresponds to both a 
    gallery image, as well as a modal popup that is triggered when said image is clicked. 
  */
  const images =   filteredArtArray.map( function(artPiece,index) 
    {
      return (
      <> 

        {/* GALLERY ITEM */}
        <div className="galleryItem" >
          <Button 
              onClick = {() => handleOpenExpandedView(index)}
          >
            {artPiece.staticImage}
          </Button>
        </div>
      
        {/* MODAL POPUP - should really be abstracted to its own component*/}   
        <Modal
          open={expanedViewIsOpen[index]}
          onClose={ () => handleClose(index)}
        >
          <div className = "modalImageShell">
            <div className="modalImageheaderBar">
              <IconButton onClick = {() => handleClose(index)}> <CloseIcon/></IconButton>
            </div>
            
            <div className="modalImageOuterContainer">
              <div><h1>{artPiece.title}</h1></div>
            
              <div className="modalImageDescriptorContainer">
                  <div className="modalImageDescriptorItem"><span><b>Artist: </b></span><span>{artPiece.artist} </span></div>
                  <div className="modalImageDescriptorItem"><span><b>Date: </b></span><span>{artPiece.dateRecieved.toDateString()}</span></div>              
              </div>
              <div> 
                <span><b>Character(s): </b></span><span>{artPiece.characters.join(", ")}</span>
              </div>
              <div className="modalImageDescription"><span>{artPiece.description}</span></div>
              <div className="modalImageImage"> {artPiece.staticImage} </div>
                
              
            </div>

          </div>
        </Modal>
    
      </>

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
export default GalleryPage
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





const pageTitle = "Art Gallery"





interface ArtInfo {
  title: string;
  artist:Artist;
  address: string;
  characters: Character[];
  staticImage: JSX.Element;
  dateRecieved: Date
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
  Daxl = "Daxl"

}

enum SortOrder {
  Chronological = 1,
  ReverseChronological = 2
}


// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  
  
  const comprehensiveArtArray : ArtInfo[] = [
    
    {
      title: "Original Risen",
      artist: Artist.Bastien,
      address: "../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg",
      characters: [Character.Serin,Character.Lightsong,Character.Ghodukk,Character.Eryn],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2019_04_Bastien_Multiple_DndGroup.jpg" layout="constrained" />,
      dateRecieved : new Date(2019,3,24) // 4/24/2019
    }
    ,
    {
      title: "Serin Redesign",
      artist: Artist.RavenLuckArts,
      address: "../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2021_01_RavenLuckArts_Serin_Redesign.png" layout="constrained"  />,
      dateRecieved : new Date(2021,1,8) // 2/8/2021

    }
    ,
    {
      title: "Brunch",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png",
      characters: [Character.Lightsong,Character.Vera,Character.Serin,Character.Luric,Character.Percy],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Muliple_Brunch.png" layout="constrained"   />,
      dateRecieved : new Date(2022,2,12) // 3/12/2022


    }
    ,
    {
      title: "Dab",
      artist: Artist.ShrimpLoverCat,
      address: "../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_03_ShrimpLoverCat_Serin_Dab.png" layout="constrained"  />,
      dateRecieved : new Date(2022,2,27) // 3/27/2022


    }
    ,
    {
      title: "Modern Serin",
      artist: Artist.FungiMan,
      address: "../assets/images/art/2022_05_FungiMan_Serin_Modern.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_05_FungiMan_Serin_Modern.png" layout="constrained"  />,
      dateRecieved : new Date(2022,4,27) // 5/27/2022


    }
    ,
    {
      title: "Serin Chilling",
      artist: Artist.Aldermoth,
      address: "../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Aldermoth_Serin_Chilling.png" layout="constrained"  />,
      dateRecieved : new Date(2022,8,5) // 9/5/2022


    }
    ,
    {
      title: "Smug Serin",
      artist: Artist.Tink,
      address: "../assets/images/art/2022_08_Tink_Serin_Smirk.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_08_Tink_Serin_Smirk.png" layout="constrained"  />,
      dateRecieved : new Date(2022,7,29) // 8/29/2022


    }
    ,
    {
      title: "Chibi Serin",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_10_Daxl_Serin_Chibi1.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_10_Daxl_Serin_Chibi1.png" layout="constrained"  />,
      dateRecieved : new Date(2022,9,28) // 10/28/2022


    }
    ,
    {
      title: "Tiberius",
      artist: Artist.Karne,
      address: "../assets/images/art/2022_11_Karne_Tiberius_01.png",
      characters: [Character.Tiberius],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_11_Karne_Tiberius_01.png" layout="constrained"  />,
      dateRecieved : new Date(2022,10,28) // 11/28/2022


    }
    ,
    {
      title: "Christmas Serin",
      artist: Artist.Daxl,
      address: "../assets/images/art/2022_12_Daxl_Serin_Christmas.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2022_12_Daxl_Serin_Christmas.png" layout="constrained"  />,
      dateRecieved : new Date(2022,11,8)  // 12/08/2022


    }
    ,
    {
      title: "Grumpy Doodle",
      artist: Artist.Daxl,
      address: "../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png",
      characters: [Character.Serin],
      staticImage: <StaticImage alt="..." src="../assets/images/art/2023_01_Daxl_Serin_GrumpyDoodle.png" layout="constrained"  />,
      dateRecieved : new Date(2022,11,23) // 12/23/2022
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
      <p>TODO -
        
        
        <ul>
          <li><del>Full art gallery</del> </li>
          <li><del>Filtering</del></li>
          <li>Sorting</li>
          <li>Expand for full resolution</li>
          <li>Info for each item in gallery</li>
            <ul>
              <li>Title</li>
              <li>Character(s)</li>
              <li>Creation Date</li>
              <li>Artist</li>
              <li>Description</li>
            </ul>
        </ul>
      </p>



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


  // Temp style until we get this working.
  /* 
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  */

  //https://www.reddit.com/r/learnjavascript/comments/ueeomi/are_there_any_mui_experts_here_my_modal_component/
  


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
          {/*<Box sx={style}>*/}
          <div className = "modalImageShell">
            <div className="modalImageheaderBar">
              <IconButton onClick = {() => handleClose(index)}> <CloseIcon/></IconButton>
            </div>
            
            <div className="modalImageOuterContainer">
              <div><h1>{artPiece.title}</h1></div>
            {/*
            <div> 
              {artPiece.staticImage}
            </div> 
            <br/>
            */}
            <div className="modalImageDescriptionContainer">
                <div className="modalImageDescriptionItem"><span><b>Artist: </b></span><span>{artPiece.artist} </span></div>
                <div className="modalImageDescriptionItem"><span><b>Date: </b></span><span>{artPiece.dateRecieved.toDateString()}</span></div>              
            </div>
            <div> 
              <span><b>Characters: </b></span><span>{artPiece.characters.join(", ")}</span>
            </div>
            </div>

          </div>
          {/*</Box> */}
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
export default AboutPage
import * as React from "react"
import {Link} from 'gatsby'
import  '../assets/style/layout.css'



interface LayoutProps 
{
    pageTitle:string; // title of the page.
    children:any // child nodes
}


/* Page frame component. Hold stuff every page should show, then inserts unique page in */
const Layout : React.FC<LayoutProps> = (props) => {
    
    const pageTitle = props.pageTitle;
    const children = props.children;

    
    
    return (
        
        
        
        <div className={"outerContainer"}>
            <div className={"innerContainer"}> 

                
                
                    <div className='headerBar'>
                        <nav className='nav-links'>
                            <Link className={"nav-link-item"} activeClassName={"nav-links-active"} to={"/"}>Home</Link>
                            <Link className={"nav-link-item"} activeClassName={"nav-links-active"} to={"/about"}>About</Link>
                            <Link className={"nav-link-item"} activeClassName={"nav-links-active"} to={"/artGallery"}>Gallery</Link>
                            <Link className={"nav-link-item"} activeClassName={"nav-links-active"}to={"/externalLinks"}>Links</Link>
                        </nav>
                    </div>



                    <main className={"mainContainer"}>
                        <h1 className={"heading"}>{pageTitle}</h1>
                        {children}
                    </main>

            </div>
        </div>
    )
}


export default Layout




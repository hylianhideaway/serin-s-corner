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
                            <div className="nav-link-item"><Link className={"nav-link-button"} activeClassName={"nav-links-active"} to={"/"}>Home</Link></div>
                            <div className={"nav-link-item characterDropdown"}>
                                <Link className={"nav-link-button characterDropdownButton"} activeClassName={"nav-links-active"} to={"/characters"}>Characters</Link>
                                <div className="characterDropdown-content">
                                    <Link className={"nav-link-button characterLinks"}  to={"/characters/serin"}>Serin</Link>
                                    <Link className={"nav-link-button characterLinks"}  to={"/characters/tiberius"}>Tiberius</Link>
                                </div>
                            </div>
                            <div className="nav-link-item" ><Link className={"nav-link-button"} activeClassName={"nav-links-active"} to={"/artGallery"}>Gallery</Link></div>
                            <div className="nav-link-item"><Link className={"nav-link-button"} activeClassName={"nav-links-active"}to={"/externalLinks"}>Links</Link></div>
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




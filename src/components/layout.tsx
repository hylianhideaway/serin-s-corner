import * as React from "react"
import {Link} from 'gatsby'
import  './layout.css' 



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
        <div className={"container"}>
            {/* Navigation Bar*/}
            <nav>
                <ul className={"nav-links"}>
                    <li className={"nav-link-item"}> <Link className={"nav-link-item"} to={"/"}>Home</Link></li>
                    <li className={"nav-link-item"}> <Link className={"nav-link-item"} to={"/about"}>About</Link></li>
                </ul>
            </nav>
            {/* Where the content for the child page goes */}
            <main>
                <h1 className={"heading"}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}


export default Layout




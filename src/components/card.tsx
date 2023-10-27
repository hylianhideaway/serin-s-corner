import React, { ReactNode, CSSProperties, useState } from 'react';




/**
 * Just the type for the TopContent, MiddleContent, and BottomContent components. 
 * It is really just their child components. 
 */
type CardContentProps = 
{
    children : ReactNode
}

export const TopContent: React.FC<CardContentProps> = (props) => <>{props.children}</>;
export const MiddleContent: React.FC<CardContentProps> = (props) => <>{props.children}</>;
export const BottomContent: React.FC<CardContentProps> = (props) => <>{props.children}</>;


/**
 * CardProps. For "Card" Functional component. 
 */
type CardProps = {
  
    /**
     * The ID for the card
     */
  id? :string

    
    /**
    * The title for the card element. 
    */
    titleText? : string
  
    /**
     * Background color for the title section. Default is 'transparent'.
     */
      titleSectionBackgroundColor?: string;

      titleTextColor?: string;


    /**
   * Padding around the card content. Default is '10px'.
   */
  padding?: string;

  /**
   * Margin outside the card. Default is '10px'.
   */
  margin?: string;

  /**
   * Border styling for the card. Default is '1px solid black'.
   */
  border?: string;


  width?: string ; 

  /**
   * Child elements passed to 
   */
  children : ReactNode

    /**
     * Whether or not the card component will be collapsible only to its title element.   
     */
  collapsible? : boolean


};


/**
 *  This components has a top, middle, and bottom, and is structured in a way that 
 *  allows you to keep formatting consistent on the website. 
 * @param props The props the card takes. Please see CardProps
 * @returns 
 */
const Card: React.FC<CardProps> = (props) => {

    //pull default for title if they exist.
    const titleText = props.titleText || "";
    const titleTextColor = props.titleTextColor || 'white';
    const titleSectionBackgroundColor = props.titleSectionBackgroundColor || '#606C38';

    // Apply defaults for styling props
    const padding = props.padding|| '10px';
    const margin = props.margin || '10px';
    const border = props.border || '2px solid #606C38';
    const width = props.width || '375px';


    // State elements
    const [isCollapsed,setIsCollapsed] = useState(false);

    // Callback functions
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }


    /**
     * Style for the outermost div of the Card.
     * Includes width control, outer margin, and border.
     */
    const cardOuterStyle : CSSProperties = {
        margin: margin,
        border: border,
        width: width,
        boxSizing: 'border-box',   
    }


    const titleDivStyle: CSSProperties = {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'relative',
        
        
        backgroundColor: titleSectionBackgroundColor,
        color: titleTextColor, // the title color




        fontWeight: 'bold',    // Make the title bold
        paddingTop: '5px',
        paddingBottom: '5px',

    };


    /**
     * Style for the main content div of the box.
     * Contains everything except for what goes into the
     * title box. 
     */
    const cardInnerStyle : CSSProperties = {
        display: 'flex',
        flexDirection: 'column',

        padding: padding,
        boxSizing: 'border-box',
    }

    const topStyle : CSSProperties = {
        padding: '5px',
        borderBottom: '1px solid #e0e0e0',
    };

    const bottomStyle : CSSProperties = {
        padding: '5px',
        borderTop: '1px solid #e0e0e0',
    };


    let title, top, middle, bottom;


    title  = 
        <div style={titleDivStyle}>
            {titleText}
            {props.collapsible ? 
                        <button 
                            onClick={toggleCollapse} 
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer',

                                position: 'absolute',
                                right: '10px'

                            }}
                        >
                            {isCollapsed ? 'Expand' : 'Collapse'}
                        </button>
                        
                        : null
            }
        </div>
    






    React.Children.forEach(props.children, (child) => {
        if (React.isValidElement(child)) {
            switch (child.type) {
                case TopContent:
                    top = child;
                    break;
                case MiddleContent:
                    middle = child;
                    break;
                case BottomContent:
                    bottom = child;
                    break;
                default:
                    break;
            }
        }
    });

    return (
        <div style = {cardOuterStyle}>
            {title}
            { !isCollapsed ? 
                <div style={cardInnerStyle}>
                    {top && <div style={topStyle}>{top}</div>}
                    {middle && <div>{middle}</div>}
                    {bottom && <div style={bottomStyle}>{bottom}</div>}
                </div>
                : null
            }

        </div>

    );


};

export default Card;

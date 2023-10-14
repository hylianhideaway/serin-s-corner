import React, { ReactNode, CSSProperties } from 'react';

// Define the prop types with comments
type CardProps = {
  
    /**
     * The ID for the card
     */
  id? :string
  
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
};


type CardTitleProps = {
    /**
     * Background color for the title section. Default is 'transparent'.
     */
    backgroundColor?: string;

    textColor?: string;

    /**
     * Child elements passed to the Title.
     */
    children: ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ backgroundColor = 'green', textColor = 'white' ,children }) => {
    const titleDivStyle: CSSProperties = {
        backgroundColor: backgroundColor,
        padding: '5px',
        textAlign: 'center',  // Center the title text
        fontWeight: 'bold',    // Make the title bold
        color: textColor // the title color
    };
    return <div style={titleDivStyle}>{children}</div>;
};

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
 *  This components has a top, middle, and bottom, and is structured in a way that 
 *  allows you to keep formatting consistent on the website. 
 * @param props The props the card takes. Please see CardProps
 * @returns 
 */
const Card: React.FC<CardProps> = (props) => {

    // Apply defaults for styling props
    const padding = props.padding|| "10px"
    const margin = props.margin || "10px";
    const border = props.border || "1px solid black"
    const width = props.width || '375px'


    const cardStyle: CSSProperties  = {
        display: 'flex',
        flexDirection: 'column',
        padding: padding,
        margin: margin,
        border: border,
        width: width,
        boxSizing: 'border-box',
    };

    const topStyle : CSSProperties = {
        padding: '5px',
        borderBottom: '1px solid #e0e0e0',
    };

    const bottomStyle : CSSProperties = {
        padding: '5px',
        borderTop: '1px solid #e0e0e0',
    };

    let title, top, middle, bottom;

    React.Children.forEach(props.children, (child) => {
        if (React.isValidElement(child)) {
            switch (child.type) {
                case CardTitle:
                    title = child; 
                    break; 
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
        <div style={cardStyle}>
            {title && title}
            {top && <div style={topStyle}>{top}</div>}
            {middle && <div>{middle}</div>}
            {bottom && <div style={bottomStyle}>{bottom}</div>}
        </div>
    );


};

export default Card;

import React, { ReactNode, CSSProperties } from 'react';

// Define the prop types with comments
type CardProps = {
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

  /**
   * Child elements passed to 
   */
  children : ReactNode
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


    const cardStyle: CSSProperties  = {
        display: 'flex',
        flexDirection: 'column',
        padding: padding,
        margin: margin,
        border: border,
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

    let top, middle, bottom;

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
        <div style={cardStyle}>
            {top && <div style={topStyle}>{top}</div>}
            {middle && <div>{middle}</div>}
            {bottom && <div style={bottomStyle}>{bottom}</div>}
        </div>
    );


};

export default Card;

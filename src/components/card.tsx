import React, { ReactNode, CSSProperties } from 'react';

// Define the prop types with comments
type CardProps = {
  /**
   * Content or child component(s) for the top narrow section.
   * This is optional and can be used for elements like buttons.
   */
  topContent?: ReactNode;

  /**
   * Content or child component(s) for the main content section.
   * This is the primary content of the card and is required.
   */
  middleContent: ReactNode;

  /**
   * Content or child component(s) for the bottom section.
   * This is optional and can be used for elements like buttons or selectable fields.
   */
  bottomContent?: ReactNode;

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
};


/**
 * 
 * @param props The props the card takes. Please see CardProps
 * @returns 
 */
const Card: React.FC<CardProps> = (props) => {

    const topContent = props.topContent;
    const middleContent = props.middleContent;
    const bottomContent = props.bottomContent;

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

  return (
    <div style={cardStyle}>

      {topContent && <div style={topStyle}>{topContent}</div>}
      
      <div>{middleContent}</div>

      {bottomContent && <div style={bottomStyle}>{bottomContent}</div>}
    
    </div>
  );
};

export default Card;

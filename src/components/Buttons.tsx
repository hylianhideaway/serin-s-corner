import React from 'react';
import  '../assets/style/buttons.css'



interface StandardButtonProps {
    /**
     * the button label.
     */
    label: string;
    /**
     * A function controlling what will happen when the button is clicked
     */
    onClick: () => void; 
}


/**
 * A button that does a thing when clicked. 
 * @param props 
 * @returns A button that does a thing when clicked. 
 */
export const StandardButton: React.FC<StandardButtonProps> = (props) => {
    
    const { label, onClick } = props;

    return (
        <div 
            className='baseButton standardButton'
            onClick={onClick}
        >
            {label}
        </div>
    );
};


interface OptionButtonProps {
    /**
     * the button label.
     */
    label: string;
    /**
     * an indicator as to wheterh or not the button is active or not.
     */
    isActive: boolean; 
    /**
     * A function controlling what will happen when the button is clicked
     */
    onClick: () => void; 
}


/**
 * An option button. Can be used in a group of itself to create an 
 * optionlist. The currently selected button will be activated,
 * while the others will be in a de-activated state
 * @param props 
 * @returns 
 */
export const OptionButton: React.FC<OptionButtonProps> = (props) => {
    
    const { label, isActive, onClick } = props;
    
    return (
        <div 
            className={`baseButton optionButton ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};


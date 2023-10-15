import React from 'react';
import  '../assets/style/buttons.css'



interface StandardButtonProps {
    label: string;
    onClick: () => void;
}

export const StandardButton: React.FC<StandardButtonProps> = ({ label, onClick }) => {
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
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <div 
            className={`baseButton optionButton ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};


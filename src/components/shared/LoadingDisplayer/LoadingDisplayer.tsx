import React from 'react';
import "./LoadingDisplayer.scss";

interface LoadingDisplayerProps{};

export const LoadingDisplayer: React.FC<LoadingDisplayerProps> = () => {
    return( 
    <div className="LoadingOverlay">
        <div className="bouncer LoadingDisplayer">            
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         </div>
     )
        
    
}
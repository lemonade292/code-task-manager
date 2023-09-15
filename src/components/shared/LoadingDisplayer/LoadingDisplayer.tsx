import React from 'react';

interface LoadingDisplayerProps{};

export const LoadingDisplayer: React.FC<LoadingDisplayerProps> = () => {
    return <div className="LoadingDisplayer" data-testid="LoadingDisplayer">
        Loading...
    </div>
}
// RandomHeadingContainer.js
import React, { useEffect, useState } from 'react';
const RandomHeadingContainer = () => {
    
    const [randomText, setRandomText] = useState('Loading...');
    
    const fetchRandomText = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) {
                throw new Error('Failed to fetch random text');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching random text:', error);
            throw error;
        }
    };


    const fetchRandomHeading = async () => {
        try {
            const textResponse = await fetchRandomText();
            setRandomText(textResponse.title || 'No title available');
        } catch (error) {
            console.error('Error fetching random heading:', error);
        }
    };

    useEffect(() => {
        fetchRandomHeading();
    }, []);

    return (
        <div>
            <span>{randomText}</span>
        </div>
    );
};

export default RandomHeadingContainer;

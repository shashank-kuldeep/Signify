import React, { useEffect, useState } from 'react';

const WordSequenceRenderer = ({ sentence }) => {
    const words = sentence.split(' ');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        setCurrentIndex(0);
    }, [sentence]);

    useEffect(() => {
        if (currentIndex < words.length) {
            const currentWord = words[currentIndex];
            const path = `/nouns/${currentWord}.mp4`;

            // Check if video exists
            fetch(path)
                .then(res => {
                    if (res.ok) {
                        setVideoSrc(path);
                    } else {
                        setVideoSrc(null); // Skip word if not found
                    }
                })
                .catch(() => setVideoSrc(null));
        }
    }, [currentIndex, words]);

    const handleEnded = () => {
        setCurrentIndex(currentIndex + 1);
    };

    if (currentIndex >= words.length) {
        return <p>✅ All valid word videos played!</p>;
    }

    return (
        videoSrc ? (
            <video
                key={videoSrc}
                src={videoSrc}
                autoPlay
                controls
                onEnded={handleEnded}
                className="video-box"
            >
                Your browser does not support the video tag.
            </video>
        ) : (
            // If no video, skip to next word
            <button onClick={() => setCurrentIndex(currentIndex + 1)}>Skip Missing Word</button>
        )
    );
};

export default WordSequenceRenderer;

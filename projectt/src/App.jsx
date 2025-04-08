import React, { useState } from 'react';
import './Home.css';
import './App.css';
 // Importing the external CSS file
import Header from './Header.jsx';

const App = () => {
    const [started, setStarted] = useState(false);
    const [text, setText] = useState('');

    return (
        <div>
            <Header />
            {!started ? (
                <div className='home-container'>
                    <div className='home-box'>
                        <h1 className='home-title'>WELCOME PEOPLE</h1>
                        <p className='home-subtitle'>"Sign language is the noblest gift God has given to deaf people."</p>
                        <button className='home-button' onClick={() => setStarted(true)}>Get Started</button>
                    </div>
                </div>
            ) : (
                <div className='main-container'>
                    <div className='box-container'>
                        <div className='box input-box'>
                            <textarea 
                                placeholder='Type here...' 
                                value={text} 
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='box output-box'>
                        { text.trim() && (
    <video key={text.trim()} controls autoPlay className="video-box">
        <source src={`/nouns/${text.trim().toLowerCase()}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App; 
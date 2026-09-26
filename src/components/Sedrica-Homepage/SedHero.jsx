import React from 'react';
import './SedHero.css'

function SedHero() {
    return (
        // Added 'text-start' to force left alignment and 'ps-5' for a nice left margin padding
        <div className="container-fluid pt-2 text-start ps-5">
            <h1 className='hero-title'>WE ARE <br/> INNOVATORS!</h1>
        </div>
    );
}

export default SedHero;
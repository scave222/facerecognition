import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import calto from './calto.jpg'

const Logo = () => {
    return (
        <div className='ma4 mt0  '>
            <Tilt className="Tilt br-100 shadow-3 " options={{ max : 55 }} style={{ height: 113, width: 150 }} >
                <div className="Tilt-inner Tilt "> <img className='Tilt center' alt='logo' src={calto}/> </div>
            </Tilt>

        </div>
    );
}

export default Logo;
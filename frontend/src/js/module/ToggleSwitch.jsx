import React, { useState } from 'react';
import '../../sass/modules/_toggleSwitch.scss';
import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';



export const ToggleSwitch = ({ setTheme }) => {
    const [ active, setActive ] = useState(false);

    const toggle = () => {
        setTheme( (theme) => (theme === 'light' ? 'dark' : 'light'));
    };

    
    const handleClick = () => {
        setActive(!active);
        toggle();
    };
    return (
        <div className={`toggle ${ active ? 'active' : '' }`} onClick={handleClick}>
            <i className='indicator'>
                <ThemedIconsFactory id='darkMoon' name="moon" />
                <ThemedIconsFactory id='lightSun' name="sun" />
            </i>
        </div>
    );
};

export default ToggleSwitch;
// <div id="sun-icon"></div> // this works too.
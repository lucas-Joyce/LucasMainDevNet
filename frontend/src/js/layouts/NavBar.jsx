
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
//import {TriggerLJ} from '../module/TriggerLJ';
import ToggleSwitch from '../module/ToggleSwitch.jsx';
import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';
import LogoLJ from '../module/LogoLJ.jsx';

const NavBar = (props) => {
    const {theme, setTheme } = useContext(ThemeContext);
   

    return (
        <nav className='header__nav'>
            <LogoLJ />
            <ul className='ul__row'>
                <li className='li__text'>
                    <h3 onClick={props.onMe}>Me</h3>
                </li>
                <li className='li__text'>
                    <h3 onClick={props.onShowcase}>Showcase</h3>
                </li>
                <li className='li__icon'>
                    <Link to="./" >
                    <ThemedIconsFactory name="filearrowdown" />
                    </Link>
                </li>
                <li>
                    <ToggleSwitch setTheme={setTheme}/>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;

//  const triggerClick = TriggerLJ();onClick={triggerClick}
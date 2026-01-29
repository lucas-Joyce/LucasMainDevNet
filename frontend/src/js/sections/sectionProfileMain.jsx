import React from 'react';
//import Section from './Section.js';
import MagicButton from '../module/MagicButton.jsx';
import DeafDevLable from '../components/DeafDev.jsx';
import '../../sass/sections/_sectionProfileMain.scss';

const SectionProfileMain = (props) => {

    return (
        <section className='mainSection'>
            <h1 className="web">Web Development</h1>
            <h3 className="dev">Full stack developer</h3>
            <h2 className="enquiry">Enquiry & Contact</h2>
            <DeafDevLable />
            <h3 className="interaction">INTERACTION & VISUAL PRODUCT DESIGNER</h3>
            <h3 className="design">"Design is thinking made visual".</h3>
            <MagicButton id="magicButton" onClick={props.onClick}/>
        </section>
    );
};

export default SectionProfileMain;
// 
// 
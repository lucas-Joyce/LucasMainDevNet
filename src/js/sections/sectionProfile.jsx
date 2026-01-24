import React from 'react';
//import { Section }  from './Section.js';

import '../../sass/sections/_sectionProfile.scss';

export const SectionProfile = (props) => {

return (
    <section className='profileSection'>
        <div className='profilePos'>
            <img className="avatar" src='/img/portrait-luc.png' alt='profile of me' />
            <h3 className="coder"> &lt; coder &gt; </h3>
            <h3 className="designer">designer</h3>
            <h4 className="quote"><span>"</span>I build scalable and user-friendly web application that solve real-world problems.<span>"</span></h4>
        <div className="LjLink">
            <h1 className="LucasJoyce" >Lucas Joyce</h1>
            <h4 className="linkTag">Links</h4>
        </div>
        </div>
    </section>
);
};

export default SectionProfile;
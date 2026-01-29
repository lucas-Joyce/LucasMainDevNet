import React, { useState, useEffect } from 'react';
import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import '../../sass/layouts/_footer.scss';

import 'vanilla-tilt';




const Footer = ({className}) => {

    const [background, setBackground] = useState('linear-gradient(#fafafa00, #cfd1e184 )');


    const handleMouseEnter = (e) => {
        const abe = e.currentTarget;
        const abeStyles = getComputedStyle(abe);
        const abeBgColor = abeStyles.background;
        console.log('Button class:', abe.className, 'Background:', abeBgColor);  
        setBackground(abeBgColor);
      };
    
    const handleMouseLeave = () => {
      setBackground('linear-gradient(#fafafa00, #cfd1e184 )');
    };


useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".media li a"), {
		max: 20,
		speed: 400,
        glare: true,
        "max-glare": 0.8,
	});

    const list = document.querySelectorAll('.media li');
    const sMbackground = document.querySelector('.socialMedia');

        list.forEach(elements => {
            elements.addEventListener('mouseenter', function(event){
        const color = elements.getAttribute('data-color');
        sMbackground.style.backgroundColor = color;
        
        });
        elements.addEventListener('mouseleave', function(event){
        sMbackground.style.backgroundColor = '#cfd1e1';
        });
        });

    }, []);
 
    //
return (
    
    <footer className={className}>
        <section className="socialMedia"style={{ background: background }} >
        <ul className="media">
            <li data-text="Linkedin" data-color="#00ff44">
                <a 
                    href="https://www.linkedin.com/in/lucas-joyce-91718b265/" 
                    className="linkedin abe"
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }>
                    <ThemedIconsFactory name="linkedin" />
                </a>
            </li>
            <li data-text="Github" data-color="#00ff44">
                <a 
                    href="https://github.com/lucas-Joyce" 
                    className="github abe"
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }>
                    <ThemedIconsFactory name="github"  />
                </a>
            </li>
            <li data-text="Behance" data-color="#e4405f">
                <a 
                    href="https://www.linkedin.com/in/lucas-joyce-91718b265/" 
                    className="behance abe"
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }>
                    <ThemedIconsFactory name="behance" />
                </a>
            </li>
            <li data-text="Dribble" data-color="#0099ff">
                <a 
                    href="https://www.linkedin.com/in/lucas-joyce-91718b265/" 
                    className="dribble abe"
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }>
                    <ThemedIconsFactory name="dribble"  />
                </a>
            </li>
        </ul>
        </section>
    
    <div className='footerBanner'>credit & etc 
    </div>
    </footer>
    
    );
};

export default Footer;
//<style>{`socialMedia { background-color: ${background}; }`}</style>
//<i className="fa-brands fa-linkedin" aria-hidden="true"></i> animateTransition={false} 


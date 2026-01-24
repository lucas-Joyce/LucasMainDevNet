import React from'react';
import ReactDOM  from 'react-dom';
import Footer from '../layouts/Footer.jsx';
import '../../sass/pages/_bioPage.scss';
//import ConstSticker from '../components/constructionSticker.js';
import '../../sass/app.scss';
// import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';
// import { ThemeContext } from '../context/ThemeContext.jsx';
const BioPage = (props) => {
   
    return (
        ReactDOM.createPortal(
        <article className='basicPageLayout bioPage'>
            <section className='bioPage__hero'>
                <div>
                    <h1>Lucas Joyce</h1>
                    <p>Full Stack Developer</p>
                </div>
            </section>
                <div className='bioPage__container'>
                    <section className='bioPage__content'>
                        <h1>About Me!</h1>
                        <p>Furniture engineer for 15 years, now transitioning to frontend development. <br/>
                            Left university with BA(Hons) in 3D Design & Furniture.<br/>
                            <hr/> 
                            Factory closed in 2012, my parents were teachers, this leads me to volunteered teaching deaf children in the Philippines. 
                            Had to overcome different language and different sign language too, different culture. Then 
                            Typhoon Haiyan (Yolanda) destroyed Tacloban, I lost everything including passport. Took weeks to 
                            get home.<br/>

                            In 2014, my first exposure to coding was VBA in Autodesk Inventor, writing scripts for 
                            interactive 3D model optimisation. That opened the door to exploring code further, 
                            which led me into web development.<br/>

                            Profoundly deaf since birth, I think visually and communicate in writing.<br/>

                            February 2025: going full-time remote developer, relocating permanently to the 
                            Philippines where my wife and I own land.</p>
                    </section>
                    <section className='bioPage__skills'>
                        <h1>Skills</h1>
                        <p> <span>Frontend:</span> JavaScript, D3.js data visualisation, HTML, CSS, jQuery <br/>
                            <span>Currently Learning:</span> React, SCSS, Node.js, Express, MongoDB<br/>
                            <span>Engineering:</span> Autodesk Inventor, 3DS Max, iLogic VBA, CNC Programming, 3D CAD<br/>
                            <hr/>
                            15 years engineering complex assemblies—now applying that systems thinking to 
                            frontend development. Built interactive election data visualisations with D3.js, 
                            SVG manipulation, and real-time data processing.
                            <hr/>
                            Working toward full-stack capabilities.</p>
                    </section>
                    <section className='bioPage__experience'>
                        <h1>Experience</h1>
                        <p> <span>2022-present:</span> Ocado driver.<br/>
                            <span>2021-2022:</span>  2020 furniture design ltd. – Engineering & Design Management. <br/>
                            <span>2018-2021:</span>  Unemployed and in study. <br/>
                            <span>2014-2018:</span>  Rhubarb Solutions – Engineering & Design Management. <br/>
                            <span>2013-2014:</span>  Volunteering for the visayans in the Philippines. <br/>
                            <span>2011-2012:</span>  Spaceoasis – Engineering & Product Management.<br/>  
                            <span>2005-2011:</span>  Milieu Design – Senior Engineer & Designer.<br/>
                            <hr/>
                            Pizza Hut, Kings College, Home Office, University of London + dozens more.<br/>
                            Designed, engineered, programmed CNC, managed production. Built custom iLogic 
                            VBA scripts for parametric 3D modelling.
                            <br/><hr/>
                            Current: Frontend development. Interactive D3.js visualisations. Learning 
                            full-stack development.</p>
                    </section>
                </div>
            <Footer className='bioPage__footer' />
        </article>, document.getElementById('bioHook')
        )
    );
};
export default BioPage;

//     

    //           <footer>
    //   <div className="facebook-icon"></div>
    //    <div className="figma-icon"></div>
    //    <div className="github-icon"></div>
    //     </footer>
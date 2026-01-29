import React, {useState} from 'react';
import NavBar from './NavBar.jsx';
import DropMenu from '../module/DropMenu.jsx';
import Backdrop from '../module/Backdrop.jsx';

import  '../../sass/layouts/_navbar.scss';

const Header = (props) => {
    const [isMeOpen, setMeOpen ] = useState(false);
    const [isCaseOpen, setCaseOpen ] = useState(false);

    //const [dropisOpen, setdropOpen ] = useState(false);
    

    const openMeHandler = () => {
        setMeOpen(true);
        setCaseOpen(false);
    }
    const openCaseHandler = () => {
        setCaseOpen(true);
        setMeOpen(false);
        
    }
    const closeDropHandler = () => {
        setMeOpen(false);
        setCaseOpen(false);
    }
    return (
        <React.Fragment>
            {isMeOpen && <Backdrop onClick={closeDropHandler}/>}
            {isCaseOpen && <Backdrop onClick={closeDropHandler}/>}
            <header className='header__hide'>
                <NavBar 
                    onMe={openMeHandler} 
                    onShowcase={openCaseHandler}/>
                <div className='menu__row'>
                <DropMenu 
                    className="__col" 
                    to1="/BugTracker" 
                    to2="/MKDC" 
                    to3="/3DWorks"
                    active={`${isCaseOpen ? 'dropMenu__onShowcase' : ''}`}  
                    show={isCaseOpen} 
                    onClose={closeDropHandler} 
                    isActiveShowCase={isCaseOpen}>
                    <span>Bug Tracking</span>
                    <span>MKDC</span>
                    <span>3D Works</span>
                </DropMenu>
                <DropMenu 
                    className="__col" 
                    to1="/Bio" 
                    to2="/History"  
                    active={`${isMeOpen ? 'dropMenu__onMe' : ''}`}
                    show={isMeOpen} 
                    onClose={closeDropHandler} 
                    isActiveOnMe={isMeOpen}>
                    <span>Bio</span>
                    <span className='historyTab'>History</span>
                </DropMenu>
                </div>
                </header>
        </React.Fragment>
        );
};

export default Header;
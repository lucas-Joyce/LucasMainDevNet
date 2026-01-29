import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

import RandomPebbles from '../components/randomPebbles.jsx';
import SectionProfile from '../sections/sectionProfile.jsx';
import SectionProfileMain from '../sections/sectionProfileMain.jsx';
import Backdrop from '../module/Backdrop.jsx';
import ModalEmail from '../module/ModalEmail.jsx';
const HomePage = (props) => {
       const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModalHandler = () => {
        setModalIsOpen(true);
    };
    const closeModalHandler = () => {
        setModalIsOpen(false);
    };
    return (
        ReactDOM.createPortal(
            <React.Fragment>
            { modalIsOpen && <Backdrop onClick={closeModalHandler} onClose={closeModalHandler}/> }
                    <ModalEmail 
                            show={modalIsOpen} 
                            onClose={closeModalHandler}
                            onSubmit='submit' />
            <div className='basicPageLayout'>
                <RandomPebbles/>
                <SectionProfile/>
                <SectionProfileMain onClick={openModalHandler}/>
            </div>
            </React.Fragment>, document.getElementById('root')
        )
    );
};
export default HomePage;
//
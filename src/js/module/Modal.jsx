import React from 'react';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";



import'../../sass/modules/_modal.scss';


const ModalOverlay = props => {

    const content = (

            <div className='modalPop'>
                <div className="modal-body">
                    <header className='modal-header'>
                    <span onClick={props.onClose} className="close">&times;</span>
                        <h2>{props.headerTitle}</h2>
                    </header>
                    <div className='modal-content' >
                        {props.children}
                    </div>
                    <footer className='modal-footer' >
                        <h3>{props.footerTitle}</h3>
                    </footer>
                </div>
            </div>
        );
        return ReactDOM.createPortal(content, document.getElementById("modalHook"));
        }

const Modal = (props) => {

return (
    <React.Fragment>
    <CSSTransition 
        in={props.show} 
        mountOnEnter 
        unmountOnExit 
        timeout={300} 
        classNames="modalPop">
        <ModalOverlay {...props} />
    </CSSTransition>
</React.Fragment>
    );
};

export default Modal;
import React from 'react';
import ReactDOM from 'react-dom';


import Modal from '../module/Modal';
import FormEmail from '../module/FormEmail';

import '../../sass/modules/_formEmail.scss';


const ModalEmail = (props) => {

return (
    ReactDOM.createPortal(
        <Modal 
            show={props.show}
            onClose={props.onClose}
            headerTitle={props.headerTitle}
            footerTitle={props.footerTitle}>
            <FormEmail onSubmit={props.onSubmit} />
        </Modal>, document.getElementById('modalHook')
        )
);
};

export default ModalEmail;

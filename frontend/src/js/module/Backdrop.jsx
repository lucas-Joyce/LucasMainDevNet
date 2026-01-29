import React from 'react';
import ReactDOM from 'react-dom';

import '../../sass/modules/_backdrop.scss';

const Backdrop = (props) => {
  return (
    ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backDropHook')
    )
  );
};

export default Backdrop;

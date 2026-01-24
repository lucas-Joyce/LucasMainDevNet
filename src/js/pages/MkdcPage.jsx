import React from'react';
import ReactDOM  from 'react-dom';
import ConstSticker from '../components/constructionSticker.js';

const MkdcPage = (props) => {
   
    return (
        ReactDOM.createPortal(
            <div className='basicPageLayout'>
                <h1>MKDC Page Here</h1>
                <ConstSticker />
            </div>, document.getElementById('mkdcHook')
        )
    );
};
export default MkdcPage;
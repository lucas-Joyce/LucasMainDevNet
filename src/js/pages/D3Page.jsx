import React from'react';
import ReactDOM  from 'react-dom';
import ConstSticker from '../components/constructionSticker.js';

const D3Page = (props) => {
   
    return (
        ReactDOM.createPortal(
            <div className='basicPageLayout'>
                <h1>3D works Page Here</h1>
                <ConstSticker />
            </div>, document.getElementById('d3Hook')
        )
    );
};
export default D3Page;
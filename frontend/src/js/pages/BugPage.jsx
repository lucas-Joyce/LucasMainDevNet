import React from'react';
import ReactDOM  from 'react-dom';
import ConstSticker from '../components/constructionSticker.js';

const BugPage = (props) => {
   
    return (
        ReactDOM.createPortal(
            <div className='basicPageLayout'>
                <h1>Bug Page Here</h1>
                <ConstSticker />  
            </div>, document.getElementById('bugHook')
        )
    );
};
export default BugPage;
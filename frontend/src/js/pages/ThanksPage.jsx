import React from'react';
import ReactDOM  from 'react-dom';
// import ConstSticker from '../components/constructionSticker.js';
// <ConstSticker />  
const ThanksPage = (props) => {
   
    return (
        ReactDOM.createPortal(
            <div className='basicPageLayout'>
                <h1>Thank you page Here</h1>
                <p>Your message has been received. I'll get back to you soon.</p>
                
            </div>, document.getElementById('thanksHook')
        )
    );
};
export default ThanksPage;
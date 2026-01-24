import React from'react';
import ReactDOM  from 'react-dom';
import ConstSticker from '../components/constructionSticker.js';

const HisPage = (props) => {
   
    return (
        ReactDOM.createPortal(
       
            <div className='basicPageLayout'>
                <h1>His Page Here</h1> 
                <ConstSticker />
                <button>Generate</button>
                <button className='circleBtn'>Circle | Square</button>
            </div>, document.getElementById('historyHook')
        )
    );
};
export default HisPage;
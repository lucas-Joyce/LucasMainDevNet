import React from 'react';
import '../../sass/components/_deafDev.scss';
import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';


const DeafDevLable = (props) => {

    // code here for if hoover over text, 
    // display active, else stay hidden

   

return (
    <div className='deafDev'>
        <h2>
            <span>D</span>
            <span>e</span>
            <span>a</span>
            <span>f</span>
            <span ><ThemedIconsFactory className='deafhand' name="deafhands" /></span> 
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span>!</span>
        </h2>
</div>
);
};

export default DeafDevLable;
// </span>
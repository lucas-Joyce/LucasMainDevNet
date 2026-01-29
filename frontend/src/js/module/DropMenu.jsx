import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../sass/modules/_dropMenu.scss';

const DropMenu = (props) => {
    
    const menuClasses = `dropMenu ${props.active} ${props.isActiveOnMe || ''} ${props.isActiveShowCase || ''}`;
    return (
        <div className={menuClasses}>
            <NavLink to={props.to1} onClick={props.onClose}>{props.children[0]}</NavLink>
            <NavLink to={props.to2} onClick={props.onClose}>{props.children[1]}</NavLink>
            <NavLink to={props.to3} onClick={props.onClose}>{props.children[2]}</NavLink>
        </div>
    );
};

export default DropMenu;
import React from 'react';



export const Form = (props) => {
    
    return (
        <form 
            className='form' 
            action={props.action} 
            method={props.method} 
            encType={props.enctype}  >
            {props.children}
        </form>
    );
};

export default Form;


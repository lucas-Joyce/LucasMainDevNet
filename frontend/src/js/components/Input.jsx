import React from 'react';
import '../../sass/components/_input.scss';

const Input = (props) => {
    return (
        <div className='input'>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            className={props.className}
            type={props.type}
            step={props.step}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            required={props.required}
            onChange={props.onChange}
            onClick={props.onClick}
          />
        </div>
      );
};

export default Input;
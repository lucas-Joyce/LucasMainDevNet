import React from 'react';
import '../../sass/modules/_magicButton.scss';

const MagicButton = (props) => {

    return (
        <div className='buttpos'>
            <svg className="filter" xmlns='https://www.w3.org/TR/SVG2/'>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result='blur' />
                        <feColorMatrix in="blur" type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9' result='highContrastGraphic' />
                        <feComposite in='SourceGraphic' in2='highContrastGraphic' operator='atop'/>
                    </filter>
                </defs>
            </svg>
            <button id={props.id} onClick={props.onClick}>
                Contact me
                <span className="bubbles">
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                </span>
            </button>
        </div>
    );
};

export default MagicButton;
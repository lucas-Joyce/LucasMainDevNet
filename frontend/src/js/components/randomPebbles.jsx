import React, {useEffect} from "react";
//import '../../sass/bases/_mupayngakulop.scss';
import '../../sass/app.scss';

//import anime from '../../../node_modules/animejs/lib/anime.es.js';
import anime from 'animejs/lib/anime.es.js';

const RandomPebbles = (props) => {


    function getRandomHeightandWidth() {
        const getRandomValue = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const width = getRandomValue(50, 150);
        const height = getRandomValue(50, 150);
        return { width: `${width}px`, height: `${height}px`};
    }
    function getRandomBorderRadius() {
        const getRandomValue = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const topLeft = getRandomValue(10, 90);
        const topRight = getRandomValue(10, 90);
        const bottomRight = getRandomValue(10, 90);
        const bottomLeft = getRandomValue(10, 90);

        const topWidth = getRandomValue(10, 90);
        const bottomWidth = getRandomValue(10, 90);
        const leftHeight = getRandomValue(10, 90);
        const rightHeight = getRandomValue(10, 90);
        return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topWidth}% ${rightHeight}% ${bottomWidth}% ${leftHeight}%`;
    }
    const Generate = () => {
        useEffect(() => {
            setTimeout(() => {
            const parentContainer = document.querySelector(".basicPageLayout");
            const viewportHeight = window.innerHeight;
            const headerOffset = viewportHeight > 1440 ? 650 : 330; 

            const maxX = parentContainer ? parentContainer.offsetWidth : 1000;
            const maxY = parentContainer ? parentContainer.scrollHeight : 1000;

             console.log('Parent scrollHeight:', parentContainer?.scrollHeight);
            console.log('maxY:', maxY);

            anime({
                targets: '.blocks',
                translateX: () => anime.random(-maxX/2, maxX/2),
                translateY: () => anime.random(-headerOffset, maxY),
                scale: () => anime.random(1,3),
                loop: false,
                easing: 'linear',
                duration: 300,
            });
        }, 100);
        }, []);
    };

    const renderBlocks = () => {
        const blocks = [];
        for (let i = 0; i < 70; i++) {
            const style = {
                borderRadius: getRandomBorderRadius(),
                ...getRandomHeightandWidth(),
            };
            blocks.push(<div key={i} className='blocks' style={style} ></div>);
        };
        Generate();
        return blocks;
    };

    return (
        <React.Fragment>
            <div className="randomise">{renderBlocks()}</div>
        </React.Fragment>
    )

}
export default RandomPebbles;

// const Generate = () => {
//         useEffect(() => {
//             const container = document.querySelector(".randomise");
//             const maxX = container ? container.offsetWidth / 2
//             anime({
//                 targets: '.blocks',
//                 translateX: () => anime.random(-1000, 1000),
//                 translateY: () => anime.random(-1000, 1000),
//                 scale: () => anime.random(1,3),
//                 loop: false,
//                 easing: 'linear',
//                 duration: 300,
//             });
//         }, []);
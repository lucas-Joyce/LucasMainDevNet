import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import PropTypes from 'prop-types';


const ThemedIcons = ({ 
    IconComponent, 
    className = '', 
    lightColor = '#3f3f3f', 
    darkColor = '#ffffff',
    width,
    height,
    id,
    animateTransition = true
    }) => {
        const { theme } = useContext(ThemeContext);
        const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

    const svg = containerRef.current.querySelector('svg');
    if (!svg) return;

    if (width) svg.style.width = width;
    if (height) svg.style.height = height;

    // Add transition class for smooth color changes
    if (animateTransition) {
      svg.style.transition = 'all 0.3s ease-in-out';
    }

    const paths = svg.querySelectorAll('path, circle, rect, polygon');
    const currentColor = theme === 'light' ? darkColor : lightColor ;

    paths.forEach((element) => {
        element.setAttribute('fill', currentColor);
        const fillAttr = element.getAttribute('fill');
        const fillStyle = element.style.fill;
  console.log('fillAttr:', fillAttr);
  console.log('fillStyle:', fillStyle);
  console.log('computed fill:', window.getComputedStyle(element).fill);

      if (fillAttr && fillAttr !== 'none') {
            if (fillAttr === lightColor) {
      element.setAttribute('fill', darkColor);
    } else if (fillAttr === darkColor) {
      element.setAttribute('fill', lightColor);
    } else {
        element.setAttribute('fill', currentColor);
        }
        if (animateTransition) {
          element.style.transition = 'fill 0.3s ease-in-out';
        }
      }
    });
  }, [theme, lightColor, darkColor, width, height, animateTransition]);

  return (
    <div ref={containerRef} className={`themed-icon ${className}`} id={id} >
      <IconComponent />
    </div>
  );
};

ThemedIcons.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  animateTransition: PropTypes.bool
};

export default ThemedIcons;
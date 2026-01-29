import React from 'react';
import PropTypes from 'prop-types';
import ThemedIcons from './ThemedIcons.jsx';
import { themedIcons, isValidIcon } from '../config/iconConfig.jsx';


const ThemedIconsFactory = ({ name, animateTransition, ...props }) => {
  // Validate icon name
  if (!isValidIcon(name)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Icon "${name}" not found in config. Available icons:`,
        Object.keys(themedIcons)
      );
    }
    return null;
  }

  const config = themedIcons[name];

  return (
    <ThemedIcons
      IconComponent={config.Component}
      className={config.className}
      lightColor={config.lightColor}
      darkColor={config.darkColor}
      width={config.width}
      height={config.height}
      id={config.id}
      animateTransition={animateTransition}
      {...props}
    />
  );
};

ThemedIconsFactory.propTypes = {
  name: PropTypes.string.isRequired,
  animateTransition: PropTypes.bool
};

ThemedIconsFactory.defaultProps = {
  animateTransition: true
};

export default ThemedIconsFactory;
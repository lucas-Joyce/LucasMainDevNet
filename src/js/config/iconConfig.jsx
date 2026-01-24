

import SunIcon from '../../icons/sun.svg?react';
import SassIcon from '../../icons/sass.svg?react';
import ReactIcon from '../../icons/react.svg?react';
import PythonIcon from '../../icons/python.svg?react';
import NodeIcon from '../../icons/node.svg?react';
import MoonIcon from '../../icons/moon.svg?react';
import LJIcon from '../../icons/LJ.svg?react';
import LinkedinIcon from '../../icons/linkedin.svg?react';
import JiraIcon from '../../icons/jira.svg?react';
import Html5Icon from '../../icons/html5.svg?react';
import GithubIcon from '../../icons/github.svg?react';
import FlaskIcon from '../../icons/flask.svg?react';
import FileArrowDownIcon from '../../icons/filearrowdown.svg?react';
import FigmaIcon from '../../icons/figma.svg?react';
import FaceBookIcon from '../../icons/facebook.svg?react';
import DockerIcon from '../../icons/docker.svg?react';
import DjangoIcon from '../../icons/django.svg?react';
import BehanceIcon from '../../icons/behance.svg?react';
import DeafHandsIcon from '../../icons/deafHands.svg?react';
import DribbleIcon from '../../icons/dribbble.svg?react';


/**
 * Centralized configuration for all themed icons
 * Each icon has its own color scheme and styling
 * Colors are imported from SCSS via CSS custom properties
 * Single source of truth: src/sass/bases/_colours.scss
 */


export const themedIcons = {
  sun: {
    Component: SunIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $lime-4
    darkColor: 'var(--yellow-9)',   // Using SCSS $orange-5
    className: 'sun-icon',
    description: 'Sun icon for theme toggle'
  },
  moon: {
    Component: MoonIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $blue-3
    darkColor: 'var(--yellow-9)',   // Using SCSS $blue-6
    className: 'moon-icon',
    description: 'Moon icon for theme toggle'
  },
  LJ: {
    Component: LJIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--yellow-9)',   // Using SCSS $dark-0
    className: 'lj-icon',
    width: '60px',
    height: '80px',
    description: 'LJ logo automatically themed'
  },
  filearrowdown: {
    Component: FileArrowDownIcon,
    lightColor: 'var(--bg-dark)',  // Using SCSS $dark-7
    darkColor: 'var(--bg-light)',   // Using SCSS $dark-0
    className: 'filearrowdown-icon',
    width: '25px',
    height: '34px',
    description: 'filearrowdown automatically themed'
  },
  deafhands: {
    Component: DeafHandsIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--yellow-9)',   // Using SCSS $lime-4
    className: 'deafhands-icon',
    width: '1.5em',
    height: 'auto',
    description: 'deaf hands automatically themed'
  },
  linkedin: {
    Component: LinkedinIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--yellow-9)',   // Using SCSS $lime-4
    className: 'linkedin-icon',
    width: '1em',
    height: '1em',
    description: 'linkedin automatically themed'
  },  
  github: {
    Component: GithubIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--yellow-9)',   // Using SCSS $lime-4
    className: 'github-icon',
    width: '1em',
    height: '1em',
    description: 'github automatically themed'
  },  
  dribble: {
    Component: DribbleIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--yellow-9)',   // Using SCSS $lime-4
    className: 'dribble-icon',
    width: '1em',
    height: '1em',
    description: 'dribble automatically themed'
  },  
  behance: {
    Component: BehanceIcon,
    lightColor: 'var(--yellow-9)',  // Using SCSS $dark-7
    darkColor: 'var(--lime-5)',   // Using SCSS $lime-4
    className: 'behance-icon',
    width: '1em',
    height: '1em',
    description: 'behance automatically themed'
  },
};



export const isValidIcon = (name) => {
  return name in themedIcons;
};
export const getAvailableIcons = () => {
  return Object.keys(themedIcons);
};

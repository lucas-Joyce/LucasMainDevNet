import React, { useContext, useEffect }  from 'react';
import { Link } from "react-router-dom";
import ThemedIconsFactory from '../components/ThemedIconsFactory.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

const LogoLJ = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('LogoLJ - Current theme:', theme);
  }, [theme]);

  return (
    <Link className='lj-icon' exact='true' to='/'  >
        <ThemedIconsFactory name="LJ" />
    </Link>
  );
};
export default LogoLJ;


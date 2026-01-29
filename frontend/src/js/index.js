import React from "react";
//import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext.jsx';

import App from './App';
import '../sass/app.scss';


import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  const app = createRoot(root);

//const root = ReactDOM.createRoot(document.getElementById('root'));

// const root = document.getElementById('root');
// const app = ReactDOM.createRoot(root);
app.render(
    <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
});
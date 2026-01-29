import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from "./layouts/Header.jsx";
//import NavBar from './layouts/NavBar.jsx';
import HomePage from '../js/pages/HomePage.jsx';
import BioPage from "./pages/BioPage.jsx";
import HisPage from "./pages/HisPage.jsx";
import BugPage from "./pages/BugPage.jsx";
import MkdcPage from "./pages/MkdcPage.jsx";
import D3Page from "./pages/D3Page.jsx";
import ThanksPage from "./pages/ThanksPage.jsx";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/thank-you" exact element={<ThanksPage/>} />
                    <Route path="/Bio" exact element={<BioPage />} />
                    <Route path="/History" exact element={<HisPage/>} />
                    <Route path="/BugTracker" exact element={<BugPage />} />
                    <Route path="/MKDC" exact element={<MkdcPage />} />
                    <Route path="/3DWorks" exact element={<D3Page />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}
export default App;
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar/> 
                    </div>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
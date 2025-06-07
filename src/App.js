import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Recetas from './pages/masters/Recetas';


function App() {
    const [items, setItems] = useState([{
    }]);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <div style={{ marginTop: '70px' }}></div>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/recetas" element={<Recetas />} />

                            </Routes>
                        </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
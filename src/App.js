import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
    const [items, setItems] = useState([{
        title: "Progra Web",
        description: "Clase de los sabados"
    }]);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                        {/* Redireccionar desde la raíz */}
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar />
                        <div style={{
                            marginLeft: '210px', marginTop: '60px',
                            padding: '20px'
                        }}>
                            <Routes>
                                <Route path="/home" element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
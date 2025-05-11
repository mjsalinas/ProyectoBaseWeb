import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
    const [items, setItems] = useState([{title:"Progra Web", 
        description:"Clase de los sabados"}]);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar />
                        <div style={{ marginLeft: '300px', marginTop: '56px', 
                            padding: '20px', backgroundColor:'red' }}>
                            <Routes>
                                <Route path="/home" element={<Home items={items} />} />
                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
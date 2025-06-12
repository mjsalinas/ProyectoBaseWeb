import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Books from './pages/masters/Books';
import Register from './pages/masters/Register';


function App() {
    const [items, setItems] = useState([{
        title: "Progra Web",
        description: "Clase de los sabados"
    }]);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register/>} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar />
                        <div style={{
                            marginLeft: '210px', marginTop: '60px',
                            padding: '20px'
                        }}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/books" element={<Books />} />
                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
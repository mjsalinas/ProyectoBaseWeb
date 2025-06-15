import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Recetas from './pages/masters/create_Recetas/Recetas';
import Register from './pages/masters/Register';
import { getALLRecetas } from './api/recetasServices';


function App() {
    const [recetas, setRecetas] = useState([]);
    useEffect(()=>{
        const fetchRecetas= async()=>{
        try{
            const {data}= await getALLRecetas();
            console(response); 
        }catch(err){
            console.error("Error al obtener informacion:", err);
        }
    }
    fetchRecetas();
   }, [])
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <div style={{ marginTop: '70px' }}></div>
                            <Routes>
                                <Route path="/" element={<Home recetas={recetas} />} />
                                <Route path="/recetas" element={<Recetas recetas={recetas} setRecetas={setRecetas} />} />

                            </Routes>
                        </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
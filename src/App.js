import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Recipes from './pages/masters/create_Recetas/Recipes';
import Register from './pages/masters/Register';
import { getALLRecipes } from './api/recetasServices';


function App() {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        const fetchRecipes= async()=>{
        try{
            const {data}= await getALLRecipes();
            setRecipes(data);
            console.log(data); 
        }catch(err){
            console.log("Error al obtener informacion:", err);
        }
    }
    fetchRecipes();
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
                                <Route path="/" element={<Home recetas={recipes} />} />
                                <Route path="/recipes" element={<Recipes recipes={recipes} setRecipes={setRecipes} />} />

                            </Routes>
                        </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
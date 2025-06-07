import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Recetas from './pages/masters/create_Recetas/Recetas';


function App() {
    const [recetas, setRecetas] = useState([{
    nombre: 'Spaghetti',
    ingredientes: 'Pasta Tomate Queso',
    preparacion: 'Hervir la pasta y añadir salsa.',
    image: 'https://mandolina.co/wp-content/uploads/2020/11/espaguetis-rojos-con-tomate-1200x720.jpg'
  },
  {
    nombre: 'Ensalada',
    ingredientes: 'Lechuga Tomate Aceite de oliva',
    preparacion: 'Mezclar todos los ingredientes.',
    image: 'https://www.recetas-chilenas.com/base/stock/Recipe/ensalada-de-lechuga-y-tomate/ensalada-de-lechuga-y-tomate_web.jpg.webp'
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
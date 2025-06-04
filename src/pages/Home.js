import CardItem from "../components/CardItem"
import React, { useState } from 'react';

function Home() {
    const receta = [
  {
    nombre: 'Spaghetti',
    ingredientes: ['Pasta', 'Tomate', 'Queso'],
    preparacion: 'Hervir la pasta y añadir salsa.',
    image: 'https://mandolina.co/wp-content/uploads/2020/11/espaguetis-rojos-con-tomate-1200x720.jpg'
  },
  {
    nombre: 'Ensalada',
    ingredientes: ['Lechuga', 'Tomate', 'Aceite de oliva'],
    preparacion: 'Mezclar todos los ingredientes.',
    image: 'https://www.recetas-chilenas.com/base/stock/Recipe/ensalada-de-lechuga-y-tomate/ensalada-de-lechuga-y-tomate_web.jpg.webp'
  }
];

      return (
        <div className="container mt-4">
          <h2>MENU DE RECETAS</h2>
          <div className="row">
            {receta.map((receta, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <CardItem {...receta} />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home;
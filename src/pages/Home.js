import CardItem from "../components/CardItem"
import React, { useState } from 'react';

function Home({recetas}) {
//     const receta = [
//   {
//     nombre: 'Spaghetti',
//     ingredientes: ['Pasta', 'Tomate', 'Queso'],
//     preparacion: 'Hervir la pasta y añadir salsa.',
//     image: 'https://mandolina.co/wp-content/uploads/2020/11/espaguetis-rojos-con-tomate-1200x720.jpg'
//   },
//   {
//     nombre: 'Ensalada',
//     ingredientes: ['Lechuga', 'Tomate', 'Aceite de oliva'],
//     preparacion: 'Mezclar todos los ingredientes.',
//     image: 'https://www.recetas-chilenas.com/base/stock/Recipe/ensalada-de-lechuga-y-tomate/ensalada-de-lechuga-y-tomate_web.jpg.webp'
//   }
// ];

      return (
        <div className="container mt-4">
      <h2 style={{ paddingBottom: '20px', fontWeight: 'bold' }}>Blogs Disponibles</h2>
      <div className="row">
        {recetas.length > 0 ? (
          recetas.map((receta, idx) => {
  const imageSrc =
    receta.image instanceof File
      ? URL.createObjectURL(receta.image)
      : receta.image;

  return (
    <div className="col-md-4 mb-4" key={idx}>
      <CardItem
        nombre={receta.nombre}
        ingredientes={receta.ingredientes}
        preparacion={receta.preparacion}
        image={imageSrc}
      />
    </div>
  );
})

        ) : (
          <p>No hay blogs para mostrar.</p>
        )}
      </div>
    </div>
      );
}

export default Home;
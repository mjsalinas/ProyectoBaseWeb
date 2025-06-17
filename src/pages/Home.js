import CardItem from "../components/CardItem"
import React, { useState } from 'react';

function Home({recetas}) {
      return (
        <div className="container mt-4">
      <h2 style={{ paddingBottom: '20px', fontWeight: 'bold' }}>Recetas Disponibles</h2>
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
        title={receta.title}
        ingredients={receta.ingredients}
        preparation={receta.preparation}
        image={imageSrc}
      />
    </div>
  );
})

        ) : (
          <p>No hay receta para mostrar.</p>
        )}
      </div>
    </div>
      );
}

export default Home;
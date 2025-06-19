import CardItem from "../components/CardItem"
import React from 'react';

function Home({recipes}) {
      return (
        <div className="container mt-4">
      <h2 style={{ paddingBottom: '20px', fontWeight: 'bold' }}>Recetas Disponibles</h2>
      <div className="row">
        {recipes?.length > 0 ? (
          recipes.map((recipe, idx) => {
  const imageSrc =
    recipe.image instanceof File
      ? URL.createObjectURL(recipe.image)
      : recipe.image;

  return (
    <div className="col-md-4 mb-4" key={idx}>
      <CardItem
        title={recipe.title}
        ingredients={recipe.ingredients}
        preparation={recipe.preparation}
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
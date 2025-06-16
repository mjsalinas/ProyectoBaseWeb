import React from 'react';


function CardItem({ title, ingredients, preparation, image }) {
  return (
    <div className="card h-100">
      <img 
        src={image} 
        alt={image} 
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
        <h6>Ingredientes:</h6>
        <p>{ingredients}</p>

        <h6>Preparación:</h6>
        <p>{preparation}</p>
      </div>
    </div>
  );
}

export default CardItem;

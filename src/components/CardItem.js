import React from 'react';


function CardItem({ nombre, ingredientes, preparacion, image }) {
  return (
    <div className="card h-100">
      <img 
        src={image} 
        alt={image} 
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        
        <h6>Ingredientes:</h6>
        <p>{ingredientes}</p>

        <h6>Preparación:</h6>
        <p>{preparacion}</p>
      </div>
    </div>
  );
}

export default CardItem;

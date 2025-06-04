import React from 'react';

function CardItem({ nombre, ingredientes, preparacion, image }) {
  return (
    <div className="card h-100">
      {image && <img src={image} className="card-img-top" alt={nombre} />}
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        
        <h6>Ingredientes:</h6>
        <ul>
          {ingredientes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h6>Preparación:</h6>
        <p>{preparacion}</p>
      </div>
    </div>
  );
}

export default CardItem;

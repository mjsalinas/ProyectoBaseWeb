import { getAllBooks } from "../api/booksService";
import CardItem from "../components/CardItem"
import React, { useEffect, useState } from 'react';

function Home() {
const [books, setBooks]= useState([]);

useEffect(()=>{
const fetchBooks = async () => {
  try{
    const {data} = await getAllBooks();
    setBooks(data);
    console.log(data);
  }catch(err){
    console.error("Error al obtener informacion: ", err);
  }  
}
fetchBooks();
}, [])


  return (
        <div className="container mt-4">
          <h2>Libros Disponibles</h2>
          <div className="row">
            {books.map((book, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <CardItem {...book} />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home;
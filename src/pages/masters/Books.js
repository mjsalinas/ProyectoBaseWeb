import { useState } from "react";

function Books() {
    const [editIndex, setEditIndex] = useState(null);
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({'title':'', 'author':'',
        'description':'','publishDate':''});

const handleOnChangeInputs = (e) => {
            setForm({...form,[e.target.name]: e.target.value});
}
const handleOnEdit = (id) => {
    setForm(books[id]);
    setEditIndex(id);
}
const handleOnDelete = (id) => {
const updatedBooks = books.filter((book, index) => index !== id);
setBooks(updatedBooks);
}

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(editIndex !== null){
            const updatedBooks = [...books];
            updatedBooks[editIndex] = form;
            setBooks(updatedBooks);
            setEditIndex(null);
        }else{
            setBooks([...books, form]);
            console.log(form);
        }
        setForm({'title':'', 'author':'',
            'description':'','publishDate':''});
    }
    return (
        <div>
            <h2>Gestion de Libros</h2>
            <form onSubmit={handleOnSubmit} className="mb-4">
                {['title', 'author','description','publishDate'].map(
                    (campo)=> (
                        <input 
                            key={campo} 
                            name={campo} 
                            value={form[campo]} 
                            onChange={handleOnChangeInputs}
                            placeholder={campo}
                            className="form-control mb-2"
                        /> 
                    )
                )}
                <button> {editIndex !== null ? 'Actualizar' : 'Agregar'} </button>
            </form>
            
            <table  className="table"> 
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>
                                <button onClick={() => handleOnEdit(index)}>Editar</button>
                                <button onClick={() => handleOnDelete(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}

export default Books;
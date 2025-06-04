import { useState } from "react";

    function Recetas() {
    const [editIndex, setEditIndex] = useState(null);
    const [recetas, setRecetas] = useState([]);
    const [form, setForm] = useState({
        title: '',
        ingredientes: '',
        preparacion: ''
    });

    const handleOnChangeInputs = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOnEdit = (id) => {
        setForm(recetas[id]);
        setEditIndex(id);
    };

    const handleOnDelete = (id) => {
        const updatedRecetas = recetas.filter((_, index) => index !== id);
        setRecetas(updatedRecetas);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
        const updatedRecetas = [...recetas];
        updatedRecetas[editIndex] = form;
        setRecetas(updatedRecetas);
        setEditIndex(null);
        } else {
        setRecetas([...recetas, form]);
        }
        setForm({ title: '', ingredientes: '', preparacion: '' });
    };

    return (
        <div className="container mt-4">
        <h2>Agregar nueva Receta</h2>

        <form onSubmit={handleOnSubmit} className="mb-4">
            <input
            name="title"
            value={form.title}
            onChange={handleOnChangeInputs}
            placeholder="Título"
            className="form-control mb-2"
            />

            <textarea
            name="ingredientes"
            value={form.ingredientes}
            onChange={handleOnChangeInputs}
            placeholder="Ingredientes"
            className="form-control mb-2"
            rows={4}
            />

            <textarea
            name="preparacion"
            value={form.preparacion}
            onChange={handleOnChangeInputs}
            placeholder="Preparación"
            className="form-control mb-3"
            rows={6}
            />

            <button className="btn btn-primary" type="submit">
            {editIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
        </form>

        <table className="table table-bordered">
            <thead className="table-dark">
            <tr>
                <th>Título</th>
                <th>Ingredientes</th>
                <th>Preparación</th>
            </tr>
            </thead>
            <tbody>
            {recetas.length === 0 ? (
                <tr>
                <td colSpan="4" className="text-center">No hay recetas aún</td>
                </tr>
            ) : (
                recetas.map((recetas, index) => (
                <tr key={index}>
                    <td>{recetas.title}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{recetas.ingredientes}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{recetas.preparacion}</td>
                    <td>
                    <button
                        onClick={() => handleOnEdit(index)}
                        className="btn btn-sm btn-warning me-2"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => handleOnDelete(index)}
                        className="btn btn-sm btn-danger"
                    >
                        Eliminar
                    </button>
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>
        </div>
    );
    }

    export default Recetas;

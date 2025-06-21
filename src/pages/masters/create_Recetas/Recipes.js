import { useState } from "react";
import "../Recetas.css";
import { createNewRecipes } from "../../../api/recipesServices";
import { updateRecipes } from "../../../api/recipesServices";
import { deleteRecipes } from "../../../api/recipesServices";
import { getALLRecipes } from "../../../api/recipesServices";
import { supabase } from "../../../utils/supabaseClient";

    function Recipes({recipes, setRecipes}) {
    const [editIndex, setEditIndex] = useState(null);
    
    const [form, setForm] = useState({
        image: null,
        title: '',
        ingredients: '',
        preparation: ''

    });

    const handleOnChangeInputs = (e) => {
        setForm((prev)=>({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleOnEdit = (id) => {
        setForm(recipes[id]);
        setEditIndex(id);
    };

    const handleOnDelete = (id) => {
        const updatedRecipes = recipes.filter((recipes, index) => index !== id);
        setRecipes(updatedRecipes);
        if (editIndex === id) {
        setEditIndex(null);
        setForm();
    }
    };

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        try{
        if (editIndex !== null) {
        const{data}= await updateRecipes(recipes[editIndex].id, form);
        console.log("Receta actualizada", data);
        const updated = [...recipes];    
        updated[editIndex] = form;
        setRecipes(updated);
        setEditIndex(null);
        }  else {
        // Modo creación
        console.log(form);
        const res = await createNewRecipes(form);
        alert("Receta creada exitosamente")
        setRecipes([...recipes, form]);
        console.log("Receta creada", res);
        
      }
    } catch (err){
      alert("error al agregar receta");
      console.log(err);
    } finally {
        setForm({
        image: '',
        title: '',
        ingredients: '',
        preparation: ''
        });
        }
};
  
    

    return (
        <div className="container mt-4">
        <h2>Agregar nueva Receta</h2>

        <form onSubmit={handleOnSubmit} className="mb-4">
            {/* --- INPUT para cargar la imagen --- */}
            <div className="contenedor-Upload">
            <label className="label-img">Imagen de portada: </label>
            <input
                className="input-img"
                id="image"
                name="image"
                type="text"
                placeholder="Pega la URL de la imagen aquí"
                value={form.image || ""}
                onChange={handleOnChangeInputs}
            />
            </div>
        
            <input
            name="title"
            value={form.title}
            onChange={handleOnChangeInputs}
            placeholder="Título"
            className="form-control mb-2"
            />

            <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={handleOnChangeInputs}
            placeholder="Ingredientes"
            className="form-control mb-2"
            rows={4}
            />

            <textarea
            name="preparation"
            value={form.preparation}
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
                <th>Imagen</th>
                <th>Título</th>
                <th>Ingredientes</th>
                <th>Preparación</th>
            </tr>
            </thead>
            <tbody>
            {recipes.length === 0 ? (
                <tr>
                <td colSpan="4" className="text-center">No hay recetas aún</td>
                </tr>
            ) : (
                recipes.map((recipes, index) => (
                <tr key={index}>
                    <td>
                {recipes.image ? (
                  // Si es URL (string) o File, lo muestro con createObjectURL:
                  <img
                    src={
                      recipes.image instanceof File
                        ? URL.createObjectURL(recipes.image)
                        : recipes.image
                    }
                    alt={`Recipes ${index}`}
                    style={{ width: '80px', objectFit: 'cover' }}
                  />
                ) : (
                  '–'
                )}
              </td>
                    <td>{recipes.title}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{recipes.ingredients}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{recipes.preparation}</td>
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

    export default Recipes;
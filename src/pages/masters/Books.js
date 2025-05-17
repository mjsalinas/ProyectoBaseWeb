function Books () {
    return (
        <div>
            <h1>Gestión de libros</h1>
            <form>
                {('title','author','description','publishDate').map(
                    (campo) => (<input key={campo} 
                        name={campo} 
                        value={form[campo]} 
                        onChange={handleOnChange}
                        placeholder={campo}
                        className="form-control mb-2"
                        />
                    ))}
            </form>
        </div>
    );
}
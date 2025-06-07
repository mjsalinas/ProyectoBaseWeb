import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
   
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-3">Crear cuenta</h3>
      <form onSubmit={handleRegister}>
        <input type="email" className="form-control mb-2" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-2" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-success w-100">Registrarse</button>
      </form>
      {mensaje && <p className="mt-3">{mensaje}</p>}
      <p className="mt-3 text-center">¿Ya tiene cuenta? <Link to="/">Iniciar sesión</Link></p>
    </div>
  );
}

export default Register;
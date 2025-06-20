import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authService';
import { supabase } from '../utils/supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
    try{
      const res = await loginUser(email, password);
      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    }catch (err){
           alert("error al iniciar sesion");
      console.log(err);
    }
  };

  const handleGoogleLogin = async() => {
    const {error} = await supabase.auth.signInWithOAuth({provider: "google"});
    if (error) console.log(error);
  }
  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-3">Iniciar sesión</h3>
      <form onSubmit={handleLogin}>
        <input type="email" className="form-control mb-2" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-2" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Entrar</button>
      </form>

      {error && <p className="text-danger mt-2">{error}</p>}
      <p className="mt-3 text-center">¿No tiene cuenta? <Link to="/registro">Regístrese</Link></p>
        <button className="btn btn-secondary w-100" onClick={handleGoogleLogin}>Iniciar Sesion con Google</button>
    
    </div>
  );
}

export default Login;
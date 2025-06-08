import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState(null);
    const navigate = useNavigate();

    const handleOnClick = () => {
        console.log("valor de email: " + email);
        console.log("valor de password: " + password);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleOnBlur = () => {
        if (email.includes('@')) {
            setInputError(null);
        } else {
            setInputError('Correo o Costraseña invalida');
        }
    };

    const handleRegister = () => {
        navigate('/register'); 
    };

    return (
        <div 
            className="d-flex align-items-center justify-content-center" 
            style={{ 
                height: '100vh',
                backgroundImage: "url('https://rumbameats.com/wp-content/uploads/2023/03/How-to-Set-a-Buffet-Table-for-a-Celebrations.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="card p-4" style={{ width: '300px', background: 'beige' }}>
                <h2 className="text-center mb-3" style={{ color: 'purple' }}>Iniciar Sesión</h2>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="email"
                        className="form-control mb-3"
                        style={{ width: '250px', border: '3px solid black', background: 'transparent', color: 'black' }}
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleOnBlur}
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        style={{ width: '250px', border: '3px solid black', background: 'transparent', color: 'black' }}
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {inputError && <div className="text-center text-white mb-3" style={{ background: 'red' }}>{inputError}</div>}
                    
                    <button
                        className="btn btn-success w-100 mb-2"
                        type="sumit"
                        onClick={handleOnClick}
                        style={{
                            padding: '10px',
                            marginTop: '10px',
                            background: 'green',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.03)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        Ingresar
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary w-100 mb-2"
                        onClick={handleRegister}
                        style={{
                            padding: '10px',
                            marginTop: '10px',
                            background: 'green',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease-in-out'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.03)';
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

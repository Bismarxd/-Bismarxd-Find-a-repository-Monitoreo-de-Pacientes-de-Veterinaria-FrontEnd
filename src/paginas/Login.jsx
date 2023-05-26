import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import backgroundImage from '../../public/VETERINARIA_LA_PAZ.png'


const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alerta, setAlerta] = useState({});

  const {setAuth} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return;
    }

    try {
      const {data} =await clienteAxios.post('/veterinarios/login', {email, password});
     
      localStorage.setItem('token', data.token);
      
      setAuth(data);
      navigate('/admin');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }
  };

  const styles = {

    container: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100vh',
    },

    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`,
      height: '30vh',
      width: '30vh',
      
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionX: 'center',
      transform: 'translate(50%, 10%)',
      
      borderRadius: '25%',
      
     

    },
  };

 

  const {msg} = alerta
  

  return (
    <>
        <div >
          <div >
            
            <img src="" alt="" />
            <h1 className='font-black text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-900 to-orange-500 md:w-3/4 mx-auto'>
                Seguimiento clínico de mascotas {''}
                
            </h1>
            <img src={backgroundImage} alt="Image" className="bg-center  mt-5 md:ml-32 mr-auto"/>
          </div>
        </div>
        
          

          <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-orange-400 bg-opacity-50">

            {
              msg && <Alerta
              alerta = {alerta}
            />}

            <form 
              className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover"}}
              onSubmit={handleSubmit}>

              <div className="my-5">
                <label className="text-gray-700 uppercase font-bold">
                  Email
                </label>

                <input 
                  type="email" 
                  placeholder="Email de Registro"
                  className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-gray-700 uppercase font-bold">
                  Password
                </label>

                <input 
                  type="password" 
                  placeholder="Tu Password"
                  className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <input 
                type="submit" 
                value="Iniciar Sesión"
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40 mt-5' 
              />
              

            </form>

            <nav className="mt-10 lg:flex lg:justify-between ">
              <Link 
                className="block text-center my-5  text-white font-extrabold text-2xl"
                to="/registrar">¿No tienes una cuenta? Regístrate</Link>

              <Link 
                className="block text-center my-5  text-white font-extrabold text-2xl"
                to="/olvide-password">Olvide mi Password</Link>
            </nav>
          </div>

          
        
    </>
  )
}

export default Login;
import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setrepetirPassword] = useState('');
    
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
      e.preventDefault();

      if([nombre, email, password, repetirPassword].includes(''))
      {
        setAlerta({msg: 'Hay campos vacios', error: true});
        return;
      }

      if(password !== repetirPassword) 
      {
        setAlerta({msg: 'Los Password no son Iguales', error: true});
        return;
      }

      if(password.length < 6)
      {
        setAlerta({msg: 'El pasword es muy corto, agrega minimo 6 caracteres', error: true});
        return;
      }

      setAlerta({});

      //Crear el usuario en la API
      try {
        await clienteAxios.post('/veterinarios', {nombre, email, password});
        setAlerta({
          msg: 'Creado correctamente, revisa tu email',
          error: false
        });
        setTimeout(() => {
          setAlerta({})
        }, 3000);
        
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
      }

      
    }

    const {msg} = alerta

    return (
      <>
  
        <div>
          <h1 className="font-black text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">Crea tu Cuenta y Administra {""}<span className="text-green-900">tus Pacientes</span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-orange-400 bg-opacity-50 mb-6">

          {
            msg && <Alerta
            alerta = {alerta}
          />
          }
          <form
            className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover"}}
            onSubmit={handleSubmit}
          >

          {/* //Nombre */}
            <div className="my-5">
              <label className="text-gray-700 uppercase font-bold">
                Nombre
              </label>

              <input 
                type="text" 
                placeholder="Tu Nombre"
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                value={nombre}
                onChange= { e => setNombre(e.target.value)} 
              />
            </div>

          {/* //Email */}
            <div className="my-5">
              <label className="text-gray-700 uppercase font-bold">
                Email
              </label>

              <input 
                type="email" 
                placeholder="Email de Registro"
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                value={email}
                onChange= { e => setEmail(e.target.value)} 
              />
            </div>

          {/* //Password */}
            <div className="my-5">
              <label className="text-gray-700 uppercase font-bold">
                Password
              </label>

              <input 
                type="password" 
                placeholder="Tu Password"
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                value={password}
                onChange= { e => setPassword(e.target.value)} 
              />
            </div>

          {/* //Repetir Password */}
            <div className="my-5">
                <label className="text-gray-700 uppercase font-bold">
                  Repetir Password
                </label>

                <input 
                  type="password" 
                  placeholder="Repite Tu Password"
                  className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                  value={repetirPassword}
                  onChange= { e => setrepetirPassword(e.target.value)} 
                />
            </div>
            

            <input 
              type="submit" 
              value="Crear Cuenta"
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40' 
            />
          </form>
          
          <nav className="mt-10 lg:flex lg:justify-between ">
            <Link 
              className="block text-center my-5  text-white font-extrabold text-2xl"
              to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>

            <Link 
              className="block text-center my-5  text-white font-extrabold text-2xl"
              to="/olvide-password">Olvide mi Password</Link>
          </nav>
        </div>

       

  
      </>
    )
  }
  
  export default Registrar
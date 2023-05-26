import { useState } from "react";
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPasword = () => {

    const {guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    });


    const handleSubmit = async e => {
        e.preventDefault();

        if (Object.values(password).some(campo => campo === '')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        if (password.pwd_nuevo.length < 6) {
            setAlerta({
                msg: 'El password debe tener minimo 6 caracteres',
                error: true
            });
        }
        const respuesta = await guardarPassword(password);

        setAlerta(respuesta);
    };

    const {msg} = alerta;

  return (
    <> 
        <AdminNav />

        <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>Cambiar Password</h2>
        

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-orange-300 shadow rounded-lg p-5">

                {msg && 
                    <Alerta alerta= {alerta}
                /> }

                <form
                 className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('../../public/fondoform.jpg')", backgroundSize: "cover"}}
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="text-gray-700 uppercase font-bold">Password Actual</label>
                        <input 
                            type="password" 
                            className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                            name="pwd_actual"
                            placeholder="Ecribe tu Password Actual"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
        
                        />
                    </div>

                    <div className="my-3">
                        <label className="text-gray-700 uppercase font-bold">Password Nuevo</label>
                        <input 
                            type="password" 
                            className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                            name="pwd_nuevo"
                            placeholder="Ecribe tu Nuevo Password"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
        
                        />
                    </div>


                    <input 
                        type="submit" 
                        value="Actualizar Password"
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40' 
                        
                    />

                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPasword
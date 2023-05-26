import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth"

const EditarPerfil = () => {

    const {auth, actualizarPerfil} = useAuth();
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {

        setPerfil(auth);

    }, [auth]);

    const handleSubmit = async e => {
        e.preventDefault();

        const {nombre, email} = perfil;

        if ([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return
        }

         const resultado = await actualizarPerfil(perfil);
         setAlerta(resultado);
    }

    const {msg} = alerta;
    

  return (
    <> 
        <AdminNav />

        <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>Editar Perfil</h2>

<div className="flex justify-center">
    <div className="w-full md:w-1/2 bg-orange-300 shadow rounded-lg p-5 " >
        {msg && <Alerta alerta={alerta} />}

        <form
             className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('../../public/fondoform.jpg')", backgroundSize: "cover"}}
            onSubmit={handleSubmit}>
            <div className="my-3">
                <label className="text-gray-700 uppercase font-bold">Nombre</label>
                <input
                    type="text"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    name="nombre"
                    value={perfil.nombre || ''}
                    onChange={(e) =>
                        setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
            </div>

            <div className="my-3">
                <label className="uppercase font-bold text-gray-600">Sitio Web</label>
                <input
                    type="text"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    name="web"
                    value={perfil.web || ''}
                    onChange={(e) =>
                        setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                        })
                    }
                />

                <label className="uppercase font-bold text-gray-600">Teléfono</label>
                <input
                    type="text"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    name="telefono"
                    value={perfil.telefono || ''}
                    onChange={(e) =>
                        setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
            </div>

            <div className="my-3">
                <label className="uppercase font-bold text-gray-600">Email</label>
                <input
                    type="text"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    name="email"
                    value={perfil.email || ''}
                    onChange={(e) =>
                        setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
            </div>

            <input
                type="submit"
                value="Guardar Cambios"
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40' 
            />
        </form>
    </div>
</div>
    </>
  )
}

export default EditarPerfil;
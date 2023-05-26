import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const {cerrarSesion} = useAuth();

  return (
    <header className="py-10 bg-emerald-900 bg-opacity-30 font-serif">
        <div className="container mx-auto flex flex-col lg:flex-row  items-center">
            
                
            
            <h1 className='font-black text-7xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-900 to-orange-500 md:w-3/4 mx-auto'>
                Seguimiento clínico de mascotas {''}
                <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-800">Veterinaria La Paz</span>
            </h1>

            
                <nav className="flex flex-col items-center lg:flex-row gap-6 mt-5 lg:mt-0">
                    <Link to="/admin" className="text-white hover:text-teal-900 text-2xl uppercase font-black">Pacientes</Link>
                    <Link to="/admin/perfil" className="text-white hover:text-teal-900 text-2xl uppercase font-black">Perfil</Link>

                    <button
                        type="button"
                        className="text-white hover:text-teal-900 text-2xl uppercase font-black"
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>
                </nav>
            
        </div>

    </header>
  )
}

export default Header
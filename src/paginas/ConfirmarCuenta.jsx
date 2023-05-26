
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    const params = useParams();
    const {id} = params;

    useEffect(() => {
      const confirmarCuenta = async () => {
        try {
          const url = `/veterinarios/confirmar/${id}`
          const {data} = await clienteAxios(url);
          
          setCuentaConfirmada(true);
          setAlerta({
            msg: data.msg
          });
          
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          });
        }
        setCargando(false)
      }
      confirmarCuenta();
    }, [])
    

    return (
      <>
  
        <div>
          <h1 className="font-black text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-700">Confirma tu cuenta, para administrar {""}<span className="to-lime-900">tus Pacientes</span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-orange-400 bg-opacity-50">
          
         {!cargando && 
           <Alerta
           alerta={alerta}
         />}

          {cuentaConfirmada && (
             <Link 
              className="block text-center my-5  text-white font-extrabold text-2xl"
              to="/">Inicia Sesión</Link>
          )}

        </div>
  
      </>
    )
  }
  
  export default ConfirmarCuenta
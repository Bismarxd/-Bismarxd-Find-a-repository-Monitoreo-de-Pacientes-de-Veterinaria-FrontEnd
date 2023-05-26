import { useState, useEffect } from "react"
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const {guardarPaciente, paciente} = usePacientes();

    useEffect(() => {
        if (paciente?.nombre) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setTelefono(paciente.telefono);
            setFecha(paciente.fecha);
            setHora(paciente.hora);
            setSintomas(paciente.sintomas);
            setId(paciente._id);
        }
        
    }, [paciente]);


    const handleSubmit = e => {
        e.preventDefault()

        //Validar el formulario
        if ([nombre, propietario, telefono, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son oligatorios',
                error: true
            })
            return;
        }

        
        guardarPaciente({nombre, propietario, telefono, fecha, hora, sintomas, id});
        setAlerta({
            msg: 'Guardado Correctamente'
        });
        setTimeout(() => {
            setAlerta({})
        }, 3000);

        setNombre('')
        setPropietario('')
        setTelefono('')
        setFecha('')
        setHora('')
        setSintomas('')
        setId('')
    }

    const {msg} = alerta

  return (
    <>

        <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>Monitoreo de Pacientes</h2>

    

        <form 
             className='bg-orange-100 p-6 rounded-lg shadow-md ml-2 mb-8' style={{ backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover"}}
             onSubmit={handleSubmit}
        >
            {msg && <Alerta alerta={alerta} />}
            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-gray-700 uppercase font-bold"
                >Nombre Mascota</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="propietario"
                    className="text-gray-700 uppercase font-bold"
                >Nombre Propietario</label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="telefono"
                    className="text-gray-700 uppercase font-bold"
                >Telefono o Celular del Propietario</label>
                <input
                    id="telefono"
                    type="number"
                    placeholder="telefono del Propietario"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className="text-gray-700 uppercase font-bold"
                >Fecha Alta</label>
                <input
                    id="fecha"
                    type="date"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="hora"
                    className="text-gray-700 uppercase font-bold"
                >Hora de Alta</label>
                <input
                    id="hora"
                    type="time"
                    name="hora"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline' 
                    value={hora}
                    onChange={e => setHora(e.target.value)}
                   
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="sintomas"
                    className="text-gray-700 uppercase font-bold"
                >Síntomas</label>
                <textarea
                    id="sintomas"
                    placeholder="Describe los Síntomas"
                    className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline'
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>

            <input 
                type="submit" 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full md:w-1/2 rounded-2xl uppercase hover:cursor-pointer ml-40' 
                value={ id ? 'Editar Paciente' : 'Agregar Paciente' }
            />
        </form>
        
    </>
  )
}

export default Formulario
import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";

const ListadoPacientes = () => {

  const {pacientes} = usePacientes();

  return (
    <>
      {pacientes.length ? 
      (
        <>
                 
          <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>Listado de Pacientes</h2>
          
          <div className='bg-gray-100 rounded-lg p-4 ml-4 overflow-y-scroll' style={{ maxHeight: 'calc(110vh - 220px)', backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover" }}> 
                <p className='text-3xl font-semibold font-serif mt-5 text-sky-900 mb-10 text-center '>Gestiona tus pacientes y citas</p>

            {pacientes.map(paciente => (
                <Paciente
                  key={paciente._id}
                  paciente={paciente}
                />
            ))}

          </div>
        </>
      ) : (
        <>
           <h2 className='font-black font-serif text-5xl text-center text-orange-800 mb-4'>No hay Pacientes</h2>

          <div className='bg-gray-100 rounded-lg p-4 ml-4 overflow-y-scroll' style={{ maxHeight: 'calc(110vh - 220px)', backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover" }}> 
            <div className='bg-gray-100 rounded-lg p-4 ml-4 overflow-y-scroll' style={{ maxHeight: 'calc(110vh - 220px)', backgroundImage: "url('./public/fondoform.jpg')", backgroundSize: "cover" }}> 
                <p className='text-3xl font-semibold font-serif mt-5 text-sky-900 mb-10 text-center '>Los Pacientes aparecen aquí</p>
            </div>
          </div>
        </>
      )}
    </>

  )
}

export default ListadoPacientes
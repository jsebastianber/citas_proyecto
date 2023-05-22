import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {

    return (


        <div className="md:w-1/2 lg:3/5 mx-5 ">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
                    <p className="mt-3 text-center text-lg">
                        Administra tus {''}
                        <span className="text-blue font-bold">Pacientes y Citas</span>
                    </p>
                    <div className='h-screen overflow-y-scroll py-5'>

                        {pacientes.map(paciente=>(

                            < Paciente
                                key= {paciente.id}
                                paciente = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}


                    </div>
                </>
            ):(
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="mt-3 text-center text-lg">
                        Comienza agregando pacientes {''}
                        <span className="text-blue font-bold">para Administrarlos</span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;

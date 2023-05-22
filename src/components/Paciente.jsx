export default function Paciente({paciente, setPaciente,eliminarPaciente}) {

    const {nombre, propietario, email, alta,sintoma,id} = paciente

    const handleEliminar = () =>{
        const respuesta = confirm("Deseas eliminar el paciente?")
        if (respuesta){
            console.log(id);
            eliminarPaciente(id)
        }
    }

    return (
        <>
            <div className="m-3 my-5 p-2 bg-gray-light shadow-md">

                <p className="font-bold mb-3 uppercase">Nombre:{' '}
                    <span className ="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 uppercase">Propetario:{' '}
                    <span className ="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 uppercase">Email:{' '}
                    <span className ="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 uppercase">Fecha Alta:{' '}
                    <span className ="font-normal normal-case">{alta}</span>
                </p>

                <p className="font-bold mb-3 uppercase">Sintomas:{' '}
                    <span className ="font-normal normal-case">{sintoma}</span>
                </p>

                <div>
                    <button type="button"
                            className="p-2 ml-1 bg-purple text-center text-white hover:rounded-lg"
                            onClick={() => setPaciente(paciente) }>
                        Editar
                    </button>

                    <button type="button"
                            className="p-2 ml-1 bg-orange text-center text-white hover:rounded-lg"
                            onClick ={handleEliminar}>
                        Eliminar
                    </button>
                </div>

            </div>
        </>
    )
}

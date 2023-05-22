 /*
    * la estructura de un Hooks
    const [cliente, setCliente] = useState({})
    !Los Hooks se deben colocar dentro del componente
    !No pueden estar dentro de condicionales
    !No se pueden crear despues de un "Return"
    */

import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

   //Hooks del formulario
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintoma, setSintoma] = useState('')

    //Manejo de errores
    const [error,setError] = useState(false)

    //Manejo de pacientes para ser editados
    useEffect(()=>{

        if (Object.keys(paciente).length  > 0){

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintoma(paciente.sintoma)
        }

    },[paciente])

    //Funcion para generar un ID al momento de crear un paciente
    const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    //*Evento Click
    const handleSubmit = (e)=>{
        e.preventDefault()
        //Validar formulario

        if ([nombre,propietario,email,alta.sintoma].includes('')) {
            setError(true)
            return
        }
        setError(false)

        //uso de props
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintoma
        }

        if (paciente.id){
            //? Editando un registro ya creado
            objetoPaciente.id = paciente.id

            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id? objetoPaciente:pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})

        }else{
            //? Ingresando un nuevo registro
            objetoPaciente.id =generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        //reiniciar valores
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintoma('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <h2 className = "font-black text-3xl text-center">Formulario</h2>

            <p className="mt-3 text-lg text-center mb-10" >Añade pacientes y {''}
                <span className="text-blue font-bold">Administralos</span>
            </p>

            <form className="mt-5 bg-blue shadow-md rounded-lg py-10 px-5 font-bold mb-10"
                    onSubmit={handleSubmit}
            >

                {/* se coloca el error cuando un campo no es llenado*/}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>  }


                <div>
                    <label htmlFor='mascota'  className="block text-gray-700 upercase">Nombre Mascota:{''}</label>
                    <input
                        id='mascota'
                        className="mt-2 w-full p-2 border-1 placeholder-gray rounded-md"
                        type ="text"
                        placeholder="Nombre mascota.."
                        value = {nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor='propietario'  className="block text-gray-700 upercase">Nombre Propietario:{''}</label>
                    <input
                        id='propietario'
                        className="mt-2 w-full p-2 border-1 placeholder-gray rounded-md"
                        type ="text"
                        placeholder="Nombre propietario.."
                        value = {propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor='email'  className="block text-gray-700 upercase">Email:{''}</label>
                    <input
                        id='email'
                        className="mt-2 w-full p-2 border-1 placeholder-gray rounded-md"
                        type ="email"
                        placeholder="Email.."
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor='alta'  className="block text-gray-700 upercase">Fecha de Alta:{''}</label>
                    <input
                        id='alta'
                        className="mt-2 w-full p-2 border-1 placeholder-gray rounded-md"
                        type ="date"
                        value={alta}
                        onChange={(e)=>setAlta(e.target.value)}
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor='sintomas'  className="block text-gray-700 upercase">Sintomas:{''}</label>
                    <textarea
                        id='sintomas'
                        className="mt-2 w-full p-2 border-1 placeholder-gray rounded-md"
                        type ="email"
                        placeholder="Sintomas.."
                        value={sintoma}
                        onChange={(e)=>setSintoma(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-green rounded-md mt-3 p-3 mr-auto w-full text-white uppercase hover:bg-purple cursor-pointer transition-colors"
                    value={ paciente.id ?  "Editar paciente":"agregar paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;

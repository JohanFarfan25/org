import './Form.css';
import Campo from '../Campo';
import ListaOpciones from '../listaOpciones';
import Boton from '../Boton';
import { useState } from 'react';


const Form = (props) => {

    const [nombre,setNombre] = useState('');
    const [puesto,setPuesto] = useState('');
    const [foto,setFoto] = useState('');
    const [equipo,setEqipo] = useState('');

    const [titulo,setTitulo] = useState('');
    const [color,setColor] = useState('');


    const {registrarColaborador , crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();//e = evento

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto:foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const menjarNuevoEquipo = (e)=>{
        e.preventDefault();//e = evento
        crearEquipo({ titulo: titulo, colorPrimario: color })
    }



    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones 
                equipos ={props.equipos}
                valor={equipo}
                actualizarValor={setEqipo}
            />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={menjarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={setTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar color en Hex" 
                required 
                valor={color} 
                actualizarValor={setColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Form;
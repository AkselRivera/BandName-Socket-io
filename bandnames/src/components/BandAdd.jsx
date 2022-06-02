import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

const BandAdd = () => {

  const {socket} = useContext( SocketContext );
  const [valor, setValor] = useState('');

  const crearBanda= (nombre)=>{
    socket.emit('nueva-banda',{nombre});
  }

  const onSubmit = (e)=>{
    e.preventDefault();

    if(valor.trim().length>0){
      crearBanda(valor);
      setValor('');
    }
  } 

  return (
    <div>

        <h3> Agregar Banda</h3>
        <form onSubmit={onSubmit}>
            <input 
                className='form-control'
                placeholder='Nuevo nombre de banda'
                value={valor}
                onChange={ (e)=> setValor(e.target.value) }
            />
        </form>

    </div>
  )
}

export default BandAdd
import { useContext } from "react";
import BandAdd from "../components/BandAdd";
import {BandChart} from "../components/BandChart";
import BandList from "../components/BandList";
import { SocketContext } from "../context/SocketContext";



function HomePage() {

  // const [bands, setBands] = useState([]);
  const {online} = useContext( SocketContext )

  // const {socket, online}= useSocket('http://localhost:8080/');


  // useEffect(()=>{
  //   socket.on('current-bands', (bands) => {
  //       setBands(bands);
  //   });
  // }, [socket] );



  // const votar = (id)=>{
  //   socket.emit('votar-banda', id);
  // }

  // const borrar = (id)=>{
  //   socket.emit('borrar-banda', id);
  // }

  // const cambiarNombre = (id,nombre) =>{
  //   socket.emit('cambiar-nombre-banda',{id,nombre});
  // }

  // const crearBanda= (nombre)=>{
  //   socket.emit('nueva-banda',{nombre});
  // }

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {
          online 
          ? <span className="text-success"> Online</span>
          : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>


      <h3>Band Names</h3>
      <hr/>

      <div className="row">
        <div className="col">
          <BandChart />
        </div>
      </div>


      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>


    </div>
  );
}

export default HomePage;

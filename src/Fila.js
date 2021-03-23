import Botonera from "./Botonera";

function Fila(props) {

    return( props.array.map((e,indice)=> <p key={e}><Botonera array={e} fila={indice} pandemic={(x,y)=> props.pandemic(x,y)}/></p>));


}

export default Fila;
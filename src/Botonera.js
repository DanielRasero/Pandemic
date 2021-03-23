function Botonera(props) {

    return( props.array.map((e,indice)=>  <button  onClick={(x,y)=> props.pandemic(props.fila,indice)}>{e}</button>));


}

export default Botonera;
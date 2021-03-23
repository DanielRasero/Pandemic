import './App.css';
import Fila from "./Fila";
import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            biocenosis: [['P', 'P', 'G', 'H', 'H', 'R'],
                ['P', 'P', 'G', 'H', 'H', 'G'],
                ['P', 'G', 'M', 'H', 'H', 'G'],
                ['G', 'R', 'M', 'H', 'G', 'G'],
                ['R', 'R', 'H', 'H', 'G', 'P']],

            humans: 0,

        }
    }

    contar() {
        let array = this.state.biocenosis.flat(Infinity);
        let contador = 0;
        for (var i = 0; i < array.length; i++) {

            if (array[i] == "H") {
                contador++;

            }
            this.setState({humans: contador});
        }
    }

    componentDidMount() {
        this.contar();
    }

    pandemic(fila, columna) {
        let valor = this.state.biocenosis[fila][columna];
        console.log("valor " + valor)

        let aux = this.state.biocenosis;

        if (this.state.biocenosis[fila][columna] === "H") {
            aux[fila][columna] = ' ';
        }
        if (this.state.biocenosis[fila][columna] === "M") {
            aux[fila][columna] = 'm';
        }

        this.setState({biocenosis: aux});

            if (fila > 0 && (this.state.biocenosis[fila][columna] === " " || this.state.biocenosis[fila][columna] === "m" ) &&
                (this.state.biocenosis[fila - 1][columna] === valor || this.state.biocenosis[fila - 1][columna] === "H")) {

                this.pandemic(fila - 1, columna);
            }

            if (fila < 4 && (this.state.biocenosis[fila][columna] === " " || this.state.biocenosis[fila][columna] === "m" ) &&
                (this.state.biocenosis[fila + 1][columna] === valor || this.state.biocenosis[fila + 1][columna] === "H")) {

                this.pandemic(fila + 1, columna);
            }

            if (columna > 0 && (this.state.biocenosis[fila][columna] === " " || this.state.biocenosis[fila][columna] === "m" ) &&
                (this.state.biocenosis[fila][columna - 1] === valor || this.state.biocenosis[fila][columna - 1] === "H")) {

                this.pandemic(fila, columna - 1);
            }

            if (columna < 5 && (this.state.biocenosis[fila][columna] === " " || this.state.biocenosis[fila][columna] === "m" ) &&
                (this.state.biocenosis[fila][columna + 1] === valor || this.state.biocenosis[fila][columna + 1] === "H")) {

                this.pandemic(fila, columna + 1);
            }


    }

    render() {

        return (
            <div className="App">

                <p>Humanos: {this.state.humans}</p>

                <Fila array={this.state.biocenosis} pandemic={(x, y) => this.pandemic(x, y)}/>


            </div>
        );
    }


}


export default App;

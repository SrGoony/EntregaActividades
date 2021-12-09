import React, {Component} from "react";

class Shell extends Component {
    componentDidMount(){
        console.log("hola")
    }
    render (){

        return (
            <div>
                <h1>HOLA</h1>
                <h2>{this.props.propiedadEjemplo}</h2>

            </div>
        )
    }

}

export default Shell


import React, {Component} from "react";
import { Container3 } from "./Style.js";
export default class Main extends Component{
    render(){
        return(
            <>
            <Container3 className="vermelha">
                <h1>{this.props.nome}</h1>
                <h2>{this.props.idade}</h2>
                <h3>{this.props.estudar}</h3>
            </Container3>
            </>
        )
    }
}


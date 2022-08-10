
import React, { Component } from "react";
import {Big, Caixa} from './Components/Style';
import Main from "./Components/Main";
export default class App extends Component{
  render(){
    return(
      <section>   
      <Big>
      <Caixa/>
      <Main nome="João Pedro" idade={20} estudar="Amo estudar Front-End"/>
      </Big>
      </section>
    )
  }
}

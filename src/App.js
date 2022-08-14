
import React, { Component } from "react";
import {Big, Caixa} from './Components/Style';
import Main from "./Components/Main";
export default class App extends Component{
  state={
    numero:0
   }
   componentDidMount(){
      this.setState({
        numero: 0
      });
    }
  
    componentDidUpdate(){
      setTimeout(()=>{ this.mudacor()},2000)
    }
    // comparar o dom não dá certo so modificar tem que comparar algo direto do react exemplo:state
    mudacor = () =>{
      this.setState({
          numero:this.state.numero+1
      })
      if(this.state.numero === 0){
          document.body.style.backgroundColor = "blue"
      } else if(this.state.numero === 1 ){
          document.body.style.backgroundColor = "red"
      }else if(this.state.numero === 2 ){
          document.body.style.backgroundColor = "yellow"
      }else if(this.state.numero === 3 ){
          document.body.style.backgroundColor = "green"
      }else if(this.state.numero === 4 ){
          document.body.style.backgroundColor = "gray"
      }else if(this.state.numero === 5 ){
          document.body.style.backgroundColor = "pink"
      }else if(this.state.numero === 6 ){
          document.body.style.backgroundColor = "purple"
      }else if(this.state.numero === 7 ){
          document.body.style.backgroundColor = "orange"
          this.setState({
              numero:this.state.numero-7
          })
      }
    }
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

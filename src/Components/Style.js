import React from "react";
import styled from "styled-components";

export const Container = styled.section`
position: absolute;
top:15vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
width: 100%;
height: 80vh;
`

export const Container2 = styled.section`
display: flex;
align-items: center;
flex-direction: column;
border: dashed;
width: 20vw;
height: 20vh;
button{
    height: 5vh;
    width: 8vw;
    background-color: #000000;
    color: #ffff;
    border-radius:10px;
    cursor: pointer;
&:hover{
    transform: scale(110%);
}
}
`

export const Container3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 0vw;
height: 0vh;
font-size: 0px;
transition: ease-in-out 1s;

animation: rodar 3.5s linear 0s infinite normal none;
@keyframes rodar {
    0%{
        transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
}
`

export const Big = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export const Caixa = () => {
    return (
        <div>
            <Container2>
                <p>Clique no botão </p>
                <button onClick={Crescer} >Clique aqui</button>
            </Container2>
        </div>

)
}

let contagem = 0
const Crescer = () => {
    if (contagem === 0) {
        let caixa = document.querySelector(".vermelha")
        caixa.style.transition = "ease-in-out 1s"
        caixa.style.border = "3px double"
        caixa.style.width =  "16vw"
        caixa.style.height =  "26vh"
        caixa.style.fontSize = "15px"
        contagem += 1
    } else if (contagem === 1) {
        let caixa = document.querySelector(".vermelha")
        caixa.style.border = "none"
        caixa.style.width =  "0vw"
        caixa.style.height =  "0vh"
        caixa.style.fontSize = "0px"
        caixa.style.transition = "ease-in-out 1s"
        contagem -= 1
    }
}
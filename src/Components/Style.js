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
border: 3px double;
width: 20vw;
height: 30vh;
transition: ease-in-out 1s;
transform: scale(1%);
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
        caixa.style.transform = "scale(100%)"
        caixa.style.transition = "ease-in-out 1s"
        contagem += 1
    } else if (contagem === 1) {
        let caixa = document.querySelector(".vermelha")
        caixa.style.transform = "scale(0.1%)"
        caixa.style.transition = "ease-in-out 1s"
        contagem -= 1
    }
}
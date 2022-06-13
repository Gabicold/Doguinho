import React, {useState} from "react"
import styled from "styled-components"
import axios from "axios"

export default function App(){
  const CaixaPrincipal = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100vw;
  height:100vh;
  background: #9400d3;
  `
  const Titulo = styled.h1`
  color:White;
  `
  const Rodrigo = styled.button`
  color:white;
  font-size:1.2rem;
  font-weight:bold;
  background-color: #229a00;
  border:solid 2px #229a00;
  width:15vw;
  border-radius:20px;
  height:5vh;
  cursor:pointer;
  &:hover{
    border-radius:10px;
    transition-duration: 1s;
    
  }
  `

  const Doguinhos = styled.img`
  whidth:5vw;
  height:40vh;
  margin-top:5vh;
  border-radius:40px 40px 1px;
  `
  const [dog, setDog] = useState([])
  const [appear, setAppear] = useState(false)
  const DogList = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
    });
    setAppear(true)
  }

 
  return(
<CaixaPrincipal>
    <Titulo>Clique para soltar vários "KKKS"</Titulo>
    <Rodrigo onClick={()=>{DogList()}}>Alegria</Rodrigo>
    <div>
    {appear && <Doguinhos src={dog} alt="doguinhos"/>}
    </div>
    
</CaixaPrincipal>
  )
}


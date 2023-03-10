import React from 'react'
import Header from '../../components/header/Header'
import { HomeContainer,HomeImg, MainContainer } from './Home.style'
import homeImg from "../../assets/books.jpg";

const Home = () => {
  return (
    <HomeContainer>
   <Header/>
   <HomeImg>
    <img  src={homeImg} alt="home image" />
   </HomeImg>
   <MainContainer>
    
   </MainContainer>

    </HomeContainer>
  )
}

export default Home
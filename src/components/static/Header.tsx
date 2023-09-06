import React from 'react'
import styled from "styled-components"
import ButtonProsp from './ButtonProsp'

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
            
            <Logo>Medium</Logo>
           <NavHolder>
          
            <Nav>Our Story</Nav>
            <Nav>Membership</Nav>
            <Nav>Write</Nav>
            <Nav>sign in</Nav>
            <ButtonProsp
            
            text='Get Started'
            />
           </NavHolder>
            
            </Main>
        </Container>
    </div>
  )
}

export default Header


const Nav = styled.div`
display:flex;
justify-content:space-between;
margin-top:10px;
margin: 10px;
margin-bottom:15px;
`
const NavHolder = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor: pointer;
margin-top:10px;
`
const Logo = styled.div`
font-size:25px;
font-weight:800;
margin-top:10px;
right:40px;
margin-left:50px;`

const  Main = styled.div`
width:85%;
display:flex;
justify-content:space-between;
align-items:center;`

const Container = styled.div`
width:100%;
height:80%;
background-color:#FFC017;
display:flex;
justify-content:content;
border:1px solid black;
`
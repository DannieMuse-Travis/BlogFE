import React from 'react'
import styled from 'styled-components'
import ButtonProsp from '../../components/static/ButtonProsp'

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
             <BigText>Stay curious.</BigText>
             <SmallText>Discover stories, thinking, and expertise
                <br/> from writers on any topic.</SmallText>

                <T>
                <ButtonProsp
                 text='Start Reading'
                />
                </T>
            </Main>
        </Container>
    </div>
  )
}

export default Hero

const T = styled.div`
width:150px;
align-items:center;
justify-content:center;
display:flex;
margin-left:50px;
`

const SmallText = styled.div`
font-size:30px;
margin: 20px;
font-weight:300;
margin-left:50px;
`
const BigText = styled.div`
margin-top :70px;
font-size:80px;
font-weight:700;
margin-left:50px;`
const Container = styled.div`
width:100%;
height:80vh;
background-color:#FFC017;
display:flex;
justify-content:content;
border:1px solid silver;`

const Main = styled.div``

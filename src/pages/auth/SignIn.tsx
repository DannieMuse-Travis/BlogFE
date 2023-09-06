import React from 'react'
import styled from 'styled-components'
import SocialButton from '../../components/static/SocialButton'
import { Link } from 'react-router-dom'
import {FiMail} from "react-icons/fi"
import {FiKey} from "react-icons/fi"

const SignIn = () => {
  return (
    <div>S

<Container>
                <Main>
                    <Top>
                        <Logo />
                        <Title>Sign In</Title>

                        <Div>
                            <SocialButton
                                text="Use Google"
                                color="#fb8585"
                                icon="G"
                            />
                            <SocialButton
                                text="Use Facebook"
                                color="#579cfd"
                                icon="F"
                            />
                        </Div>

                        <br />
                        <DotLine>
                            <Line />
                            <Text>OR</Text>
                            <Line />
                        </DotLine>
                    </Top>

                    

                        <Holder>
                            <TextHolder>Email:</TextHolder>
                            <InputHolder>
                                <Input
                                    placeholder="Your Email"
                                />
                                <IconMail />
                            </InputHolder>
                    
                        </Holder>
                        <Holder>
                            <TextHolder>Password:</TextHolder>
                            <InputHolder>
                                <Input
                                    placeholder="Your Password"/>
                                    <IconKey/>
                            </InputHolder>
                            
                        </Holder>


                        <Button type="submit">Sign In</Button>

                        <TextContent>

                        Click “Sign Up” to agree to Medium’s Termsof Service and acknowledge that Medium’s Privacy Policy applies to you
                        </TextContent>
                        <Signed to="/register" >Sign Up</Signed>
                    
                </Main>
            </Container>
    </div>
  )
}

export default SignIn

const Signed = styled(Link)`
margin-bottom: 30px;
/* color: purple; */
cursor: pointer;
font-weight: 600;
text-decoration: none;
`


const TextContent = styled.div`
font-size: 13px;
text-align: center;
margin: 10px 0;

span{
    font-weight: 700
}
`

const Button = styled.button`
outline: none;
border: 0;
background-color: purple;
width: 100%;
height: 40px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 3px;
color: white;
font-size: 20px;
font-weight: 600;
`



const IconKey = styled(FiKey)`
margin-right: 5px;
font-size: 30px;
color: rgba(0,0,0,0.4);

`

const IconMail = styled(FiMail)`
margin-right: 5px;
font-size: 30px;
color: rgba(0,0,0,0.4);

`

const Input = styled.input`
outline: none;
flex: 1;
border: 0;
padding-left: 10px
`
const InputHolder = styled.div`
width: 100%;
height: 35px;
border: 1px solid silver;
border-radius: 5px;
display:flex;
align-items:center;
`

const TextHolder = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 3px
`

const Holder = styled.div`
width: 100%;
margin: 10px 0;

`



const Div = styled.div`
display:flex
`

const Text = styled.div`
margin: 0 5px;
font-size: 10px;
`

const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver
`

const DotLine = styled.div`
display:flex;
width:100%;
align-items: center;
`

const Title = styled.div`
font-weight: 600;
font-size: 30px;
margin-top: 10px
`

const Logo = styled.div`
width: 60px;
height: 50px;
border-radius: 3px;
background-color: purple;

`

const Top = styled.div`
margin: 20px 0;
display:flex;
align-items: center;
flex-direction: column;
width: 100%

`

const Main = styled.div`
width: 350px;
min-height: 450px;
border: 1px solid silver;
border-radius: 5px;
display:flex;
align-items: center;
flex-direction: column;
padding: 0 10px;
`

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
/* font-family: Poppins */

`
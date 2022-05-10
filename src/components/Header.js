import React, { useState, useEffect } from 'react'
// Logo
import { Logo, Toogle, CloseToggle } from '../icons'
//Style
import styled from 'styled-components'


const Header = () => {

  const [ showNav, setShowNav] = useState(false)
  const [navScroll, setNavScroll] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 700) { 
        setNavScroll(true)
      } else {
        setNavScroll(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <>
      <Nav showNav={showNav}>
        <CloseButton onClick={ () => setShowNav(false)}>
          <CloseToggle/>
        </CloseButton>
        <Links>
          <Link href='#Home' onClick={ () => setShowNav(false)}>Início</Link>
          <Link href='#Insulfilms' onClick={ () => setShowNav(false)}>Insulfilms</Link>
          <Link href='#Serviços' onClick={ () => setShowNav(false)}>Serviços</Link>
          <Link href='#Acessórios' onClick={ () => setShowNav(false)}>Acessórios</Link>
        </Links>
      </Nav>
      <Container navScroll={navScroll}>
        <Logo/>
        <ToogleButton onClick={ () => setShowNav(true)}>
          <Toogle/>
        </ToogleButton>
        <Menu>
          <Texts href='#Home'>Início</Texts>
          <Texts href='#Insulfilms'>Insulfilms</Texts>
          <Texts href='#Serviços'>Serviços</Texts>
          <Texts href='#Acessórios'>Acessórios</Texts>
        </Menu>                                      
      </Container>
    </>
  )
}
export default Header



const Nav = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #2e2e2e;
  z-index: 999;
  align-items: center;
  top: ${({showNav}) => (showNav ? '0' : '-130%')};
  transition: 0.5s ease;
  @media (max-width: 800px) {
    display: flex;
  }
`
const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 60px;
  top: 50px;
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 13%;
`
const Link = styled.a`
  font-size: 3rem;
  font-weight: 800;
  color: #ffd60a;
  text-decoration: none;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({navScroll}) => (navScroll ? '20px 8%' : '40px 8%')};
  position: ${({navScroll}) => (navScroll ? 'fixed' : 'absolute')};
  width: 100%;
  z-index: 997;
  transition: .5s ease;
  background: ${({navScroll}) => (navScroll ? '#2e2e2e' : 'transparent') };
`


const Texts = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-right: 35px;
  &:last-child {
    margin-right: 0;
  }
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    display: none;
  }
`
const ToogleButton = styled.button`
  display: none;
  background: none;
  border: none;
  @media (max-width: 800px) {
    display: initial
  }
`
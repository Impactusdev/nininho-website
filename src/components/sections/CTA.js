import React from 'react'
// style
import styled from 'styled-components'
import { Arrow } from '../../icons'

const CTA = () => {
  return(
    <Container>
      <Title>Gostaria de <br/>alguma modificação?</Title>
      <Button href='https://wa.me/5519983564345' target='blank'>Fale Conosco <Arrow/></Button>
    </Container>
  )
}
export default CTA





// style

const Container = styled.section`
  padding: 200px 8%;
`
const Title = styled.h2`
  font-size: 5rem;
  color: white;
  margin-bottom: 80px;

  @media (max-width: 800px) {
    br {
      display: none;
    }
    font-size: 3rem;
  }
`
const Button = styled.a`
  width: fit-content;
  text-decoration: none;
  padding: 10px 35px;
  background: #ffc300;
  font-size: 1.5rem;
  color: #2e2e2e;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  svg {
    transform: scale(1.4);
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 10px 20px;
    svg {
      transform: scale(1);
      margin-left: 10px;
    }
  }
`
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``

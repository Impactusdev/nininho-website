import React from 'react'
// style 
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Arrow } from '../../icons'
// Data
import { data } from '../../data/dataAlarmes'


const Alarmes = () => {
  return(
    <Container>
      <Flex2>
        <StaticImage
          src='../../images/imgAlarmes.png'
          alt='Alarmes'
          quality={100}
        />
      </Flex2>
      <Flex1>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
        <Button href='https://wa.me/5519983564345' target='blank'>
          {data.buttonText}
          <Arrow/>
        </Button>
      </Flex1>
    </Container>
  )
}
export default Alarmes



// Style

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 200px 8%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: end;
    padding: 100px 8%;
  }
`

const Flex1 = styled.div`
  width: 50%;
  padding-left: 60px;

  @media (max-width: 800px) {
    width: 100%;
    text-align: end;
    padding-left: 0;
  }
`
const Flex2 = styled.div`
  width: 50%;
  text-align: end;
  padding-right: 60px;

  @media (max-width: 800px) {
    padding-right: 0;
  }
`

const Title = styled.h2`
  font-size: 3rem;
  color: #2e2e2e;

  @media (max-width: 800px) {
    margin-top: 20px;
  }
`
const Text = styled.p`
  width: 65%;
  color: #707070;
  margin: 20px 0;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    width: 80%;
    text-align: end;
    margin-left: auto;
  }
`
const Button = styled.a`
  width: fit-content;
  text-decoration: none;
  padding: 7px 25px;
  background: #ffc300;
  font-size: 0.8rem;
  color: #2e2e2e;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  svg {
    transform: scale(0.85);
    margin-left: 10px;
  }

  @media (max-width: 800px) {
    margin-left: auto;
  }
`
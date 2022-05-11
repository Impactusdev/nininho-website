import React from 'react'
// style 
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Arrow } from '../../icons'
// Data
import { data } from '../../data/dataSobre'


const Sobre = () => {
  return(
    <Container>
      <Infos>
        <Detail>{data.detail}</Detail>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
        <Button href='https://wa.me/5519983564345' target='blank'>{data.buttonText}<Arrow/></Button>
      </Infos>

      <Image>
        <StaticImage
          src='../../images/imgHero.png'
          alt=''
          quality={100}
          style={{ position: 'absolute' }}
          className='imageBg'
        />
      </Image>
    </Container>
  )
}
export default Sobre


// Style

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 200px 8%;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 70px 8%;
  }
`

const Infos = styled.div`
  width: 60%;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 50px;
  }
`

const Detail = styled.p`
  font-size: 0.8rem;
  color: #ffc300;
  margin-bottom: 40px;
`

const Title = styled.h2`
  font-size: 3rem;
  color: white;
`

const Text = styled.p`
  width: 60%;
  color: white;
  margin: 40px 0;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    width: 100%;
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
`

const Image = styled.div`
  position: relative;
  width: 40%;
  height: 600px;
  .imageBg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 350px;
  }
`

// const X = styled.X``
import React from 'react'
// Style
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
// Data
import { data } from '../../data/dataHero'
// Icon
import { Arrow } from '../../icons'

const Hero = () => {
  return (
    <>
      <a id='Home'></a>
      <Container>
        <Infos>
          <Detail>
            {data.detail}
            <Line/>
          </Detail>
          <Title>
            {data.titleI}<br/>
            {data.titleII}<br/>
            {data.titleIII}<span>{data.titleColor}</span>!</Title>
          <Text>{data.text}</Text>
          <Button href='https://wa.me/5519983564345' target='blank'>{data.buttonText}<Arrow/></Button>
        </Infos>
        <Image>
          <StaticImage
            src='../../images/imgHero.png'
            alt='Comércio Nininho'
            quality='100'
            style={{ position: 'absolute' }}
            className='imgHero'
          />
        </Image>
      </Container>
    </>
  )
}
export default Hero


const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`

const Infos = styled.div`
  width: auto;
  padding: 160px 30px 240px 8%;
  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 50px;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: #ffff;
  width: 100%;
  line-height: 4.5rem;
  margin: 50px 0 40px 0;
  animation: Reveal .5s ease-in forwards;
  transform: translateY(25px);
  opacity: 0;
  span {
    color: #ffc300;
  }
  @keyframes Reveal {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    font-size: 2rem;
    width: 100%;
  }
`

const Detail = styled.h6`
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffc300;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Line = styled.div`
  width: 150px;
  height: 2px;
  background: #ffc300;
  border-radius: 50px;
  margin-left: 40px;
`

const Text = styled.p`
  width: 50%;
  color: #ffff;
  line-height: 1.5rem;
  animation: Reveal .5s ease-in forwards;
  animation-delay: .2s;
  transform: translateY(25px);
  opacity: 0;

  @keyframes Reveal {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`

const Button = styled.a`
  width: fit-content;
  text-decoration: none;
  margin-top: 40px;
  padding: 11px 21px;
  background: #ffc300;
  color: #2e2e2e;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
  }

  animation: Reveal .5s ease-in forwards;
  animation-delay: .3s;
  transform: translateY(25px);
  opacity: 0;

  @keyframes Reveal {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Image = styled.div`
  width: 55%;
  position: relative;
  z-index: 0;
  .imgHero {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 300px;
  }
`

// const Infos = styled.div``

// const Infos = styled.div``
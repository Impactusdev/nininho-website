import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Interno = () => {
  return(
    <Container>
      <Infos>
        <h4>Conforto na</h4>
        <h3>Sala de espera</h3>
      </Infos>
      <Image>
          <StaticImage
            src='../../images/imgInterno.png'
            alt='Ambiente interno'
            quality={100}
            style={{ position: 'absolute' }}
            className='img'
          />
      </Image>
    </Container>
  )
}
export default Interno

const Container = styled.div`
  position: relative;
`
const Infos = styled.div`
  position: absolute;
  bottom: 60px;
  left: 8%;
  z-index: 20;
  h3 { font-size: 2.5rem; color: white; font-weight: 800;}
  h4 { color: #ffc300;}

  @media (max-width: 800px) {
    bottom: 30px;
    left: 8%;
    h3 { font-size: 1.5rem; color: white; font-weight: 800;}
    h4 { color: #ffc300;}
  }
`
const Image = styled.div`
  position: relative;
  width: 100%;
  height: 750px;

  .img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    height: 250px;
  }
`
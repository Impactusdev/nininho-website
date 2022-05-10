import React from 'react'
// style
import styled from 'styled-components'
import { IconLocal } from '../../icons'
import { StaticImage } from 'gatsby-plugin-image'

const Unidade = () => {
  return(
    <Container>
      <Unidades>
        <Infos>
          <Button href='https://www.google.com/maps/dir//Avenida+Doutor+Alberto+Sarmento,+276+-+Loja+02,+Campinas+-+SP,+13070-711/@-22.8974865,-47.1503908,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c8c61f5308a609:0x54a13e08cd8716cf!2m2!1d-47.0803503!2d-22.8975018' target='blank'>
            <IconLocal/>
          </Button>
          <Title>Unidade 02</Title>
          <Location>Av. Dr. Alberto Sarmento, 276</Location>
        </Infos>
        <StaticImage
          src='../../images/imgHero.png'
          style={{ position: 'absolute' }}
          className='img'
        />
      </Unidades>
      <Unidades>
        <Infos>
          <Button href='https://www.google.com/maps/dir//R.+Etelvina+de+S%C3%A1les+Alves,+6+-+Jardim+Garcia,+Campinas+-+SP,+13061-097/@-22.9152611,-47.1030502,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c8c87b2b45aa73:0x94a2b6281e4d01a!2m2!1d-47.1032308!2d-22.9152963' target='blank'>
            <IconLocal/>
          </Button>
          <Title>Unidade 01</Title>
          <Location>Etelvina de Sales Alves, 06</Location>
        </Infos>
        <StaticImage
          src='../../images/imgUnidade02.png'
          style={{ position: 'absolute' }}
          className='img'
        />
      </Unidades>
    </Container>
  )
}
export default Unidade


// style

const Container = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Button = styled.a`
  border: 2px solid #2e2e2e;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  padding: 20px;
  background: rgba( 255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Unidades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 750px;

  .img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`
const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 940;
`
const Title = styled.h2`
  font-size: 3rem;
  color: #2e2e2e;
  font-weight: bolder;
`
const Location = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  color: #2e2e2e;
`

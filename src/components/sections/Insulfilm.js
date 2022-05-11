import React from 'react'
// Data
import * as D from '../../data/dataInsulfilm'
// Style
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Arrow, IconConforto, IconLuminosidade, IconPrivacidade } from '../../icons'

const Insulfilm = () => {
  return (
    <>
      <a id='Insulfilms'></a>
      <Container>
        <Intro>
          <Infos>
            <Title>{D.intro.title}</Title>
            <Text>{D.intro.text}</Text>
            <Button href='https://wa.me/5519983564345' target='blank'>
              {D.intro.buttonText}
              <Arrow/>
            </Button>
          </Infos>
          <StaticImage
            src='../../images/imgInsulfilm.png'
            alt='Carro com insulfilm'
            quality='100'
          />
        </Intro>

        <Cards>
          <Card>
            <IconLuminosidade/>
            <TitleCard>{D.card1.title}</TitleCard>
            <TextCard>{D.card1.text}</TextCard>
          </Card>
          <Card>
            <IconPrivacidade/>
            <TitleCard>{D.card2.title}</TitleCard>
            <TextCard>{D.card2.text}</TextCard>
          </Card>
          <Card>
            <IconConforto/>
            <TitleCard>{D.card3.title}</TitleCard>
            <TextCard>{D.card3.text}</TextCard>
          </Card>
        </Cards>

        <Models>
          <Flex1>
            <DetailModels>{D.models.detail}</DetailModels>
            <LineModels/>
            <TextModels>{D.models.text}</TextModels>
          </Flex1>

          <Flex2>
            <Type>
              <TypeText>{D.models.type1}</TypeText>
            </Type>
            <Type>
              <TypeText>{D.models.type2}</TypeText>
            </Type>
            <Type>
              <TypeText>{D.models.type3}</TypeText>
            </Type>
            <Type>
              <TypeText>{D.models.type4}</TypeText>
            </Type>
          </Flex2>
        </Models>

      </Container>
    </>
  )
}
export default Insulfilm



const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 200px 8%;

  @media (max-width: 800px) {
    padding: 100px 8%;
  }
`


// I N T R O ------------------------------->

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
  padding-right: 70px;

  @media (max-width: 800px) {
    align-items: start;
    width: 100%;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2e2e2e;

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`

const Text = styled.p`
  width: 400px;
  text-align: end;
  margin: 20px 0;
  color: #707070;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    text-align: start;
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


// C A R D S  ------------------------------->

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 280px));
  gap: 60px 60px;
  justify-content: center;
  padding: 200px 5%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(100%, 100%));
    gap: 80px 10px;
    justify-content: flex-start;
    padding: 100px 0;
  }
`

const Card = styled.div`
  width: fit-content;

  @media (max-width: 800px) {
    width: 90%;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const TitleCard = styled.h2`
  font-size: 2rem;
  color: #2e2e2e;
  margin: 30px 0 10px 0;
`

const TextCard = styled.p`
  color: #707070;
  width: 100%;
  line-height: 1.5rem;
`


// M O D E L S  ------------------------------->

const Models = styled.div`
  padding: 50px 8%;

  @media (max-width: 800px) {
    padding: 0 8%;
  }
`

const Flex1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const DetailModels = styled.h6`
  font-size: 0.9rem;
  color: #ffc300;
`

const LineModels = styled.div`
  width: 2px;
  height: 100px;
  background: #ffc300;
  margin: 0 30px;
`

const TextModels = styled.p`
  width: 300px;
  line-height: 1.5rem;
`

const Flex2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 150px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
`

const Type = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2.5px solid #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    margin-bottom: 30px; 
  }
`

const TypeText = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  color: #2e2e2e;
`
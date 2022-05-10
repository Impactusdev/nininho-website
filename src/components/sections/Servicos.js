import React from 'react'
// style 
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
// Icon 
import {
  Arrow, IconSom, IconAlarme,
  IconInsulfilm, IconVidro, IconUltra,
  IconConcerto, IconMais,
} from '../../icons'
// Data
import * as D from '../../data/dataServicos'


const Servicos = () => {
  return(
    <>
      <a id='Serviços'></a>
      <Container>
        <Infos>
          <Title>{D.data.title}</Title>
          <Text>{D.data.text}</Text>
        </Infos>

        <Cards>
          <Card>
            <IconSom/>
            <TitleCard>{D.Cards.title1}</TitleCard>
            <TextCard>{D.Cards.text1}</TextCard>
          </Card>
          <Card>
            <IconAlarme/>
            <TitleCard>{D.Cards.title2}</TitleCard>
            <TextCard>{D.Cards.text2}</TextCard>
          </Card>
          <Card>
            <IconInsulfilm/>
            <TitleCard>{D.Cards.title3}</TitleCard>
            <TextCard>{D.Cards.text3}</TextCard>
          </Card>
          <Card>
            <IconVidro/>
            <TitleCard>{D.Cards.title4}</TitleCard>
            <TextCard>{D.Cards.text4}</TextCard>
          </Card>
          <Card>
            <IconUltra/>
            <TitleCard>{D.Cards.title5}</TitleCard>
            <TextCard>{D.Cards.text5}</TextCard>
          </Card>
          <Card>
            <IconConcerto/>
            <TitleCard>{D.Cards.title6}</TitleCard>
            <TextCard>{D.Cards.text6}</TextCard>
          </Card>
          <Card>
            <IconMais/>
            <TitleCard>{D.Cards.title7}</TitleCard>
            <TextCard>{D.Cards.text7}</TextCard>
          </Card>
        </Cards>
      </Container>
    </>
  )
}
export default Servicos


// Style

const Container = styled.div`
  padding: 200px 8%;

  @media (max-width: 800px) {
    padding: 100px 8%;
  }
`
const Infos = styled.div`
`
const Title = styled.h2`
  font-size: 3rem;
  color: white;
`
const Text = styled.p`
  width: 30%;
  color: white;
  margin-top: 40px;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 400px));
  gap: 80px 60px;
  margin-top: 150px;

  @media (max-width: 800px) {
    margin-top: 100px;
  }
`
const Card = styled.div`
  @media (max-width: 800px) {
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const TitleCard = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin: 30px 0 15px;
`
const TextCard = styled.p`
  color: #d9d9d9;
  line-height: 1.5rem;
  width: 100%;
`

// const X = styled.X``
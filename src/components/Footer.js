import React from 'react'
// style
import styled from 'styled-components'
import * as Icon from '../icons'
// Data
import { data } from '../data/dataFooter'


const Footer = () => {
  return(
    <Container>
      <Icon.LogoFooter/>
      <Infos>
        <Content>
          <Title>{data.mapa.title}</Title>
          <Links >{data.mapa.Link1}</Links>
          <Links >{data.mapa.Link2}</Links>
          <Links >{data.mapa.Link3}</Links>
          <Links >{data.mapa.Link4}</Links>
          <Links >{data.mapa.Link5}</Links>
        </Content>
        <Content>
          <Title>{data.servicos.title}</Title>
          <Links>{data.servicos.Link1}</Links>
          <Links>{data.servicos.Link2}</Links>
          <Links>{data.servicos.Link3}</Links>
          <Links>{data.servicos.Link4}</Links>
          <Links>{data.servicos.Link5}</Links>
        </Content>
        <Content>
          <Title>{data.contato.title}</Title>
          <Links href={data.contato.urlInsta} target='blank'><Icon.Instagram/>{data.contato.Link1}</Links>
          <Links href={data.contato.urlFace} target='blank'><Icon.Facebook/>{data.contato.Link2}</Links>
          <Links href={data.contato.urlWpp} target='blank'><Icon.WhatsappFooter/>{data.contato.Link3}</Links>
          <Links href={data.contato.urlEmail} target='blank'><Icon.Email/>{data.contato.Link4}</Links>
        </Content>
        <Content>
          <Title>{data.unidade02.title}</Title>
          <Links>
            <Icon.IconLocal/>
            <strong>{data.unidade02.id}</strong>
          </Links>
          <Links href={data.unidade02.url} target='blank'>{data.unidade02.loc}</Links>
          
          <Links >
            <Icon.IconLocal/>
            <strong>{data.unidade01.id}</strong>
          </Links>
          <Links href={data.unidade01.url} target='blank'>{data.unidade01.loc}</Links>
        </Content>
      </Infos>
    </Container>
  )
}
export default Footer


// style

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 8% 50px;
  background: #FFC300;

  @media (max-width: 800px) {
    svg { width: 300px; }
    align-items: flex-start;
  }
`
const Infos = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  gap: 60px 40px;
  margin-top: 100px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(100px, 200px));
    gap: 50px 0;
  }
`
const Content = styled.div``
const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 25px;
  color: #2e2e2e;
`
const Links = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #2e2e2e;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  svg {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
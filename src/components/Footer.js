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
      <Registro>
        <p>Todos os direitos reservados<br/> Nininho Som e Alarme® 2022</p>
        <div>
          <p className='imp'>Desenvolvido pela</p>
          <a href='https://www.impactusdev.com' target='blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="387.703" height="56.435" viewBox="0 0 387.703 56.435">
              <g id="Grupo_40" data-name="Grupo 40" transform="translate(-345.41 -75.212)">
                <g id="Grupo_37" data-name="Grupo 37">
                  <path id="Caminho_459" data-name="Caminho 459" d="M410.52,100.428a29.138,29.138,0,0,1-26.712,29.052h0q-1.207.1-2.442.1a29.1,29.1,0,0,1-22.578-10.707,18.116,18.116,0,0,0,1.785,12.773,18.067,18.067,0,0,1-6.567-21.128h0a29.288,29.288,0,0,1-.187-19.661h-7.142a1.266,1.266,0,0,1-1.266-1.266V79.777a1.272,1.272,0,0,1,.708-.994l.056-.024a42.879,42.879,0,0,1,17.134-3.547q1.62,0,3.211.119A42.763,42.763,0,0,1,380.532,78.8l.008,0,.154.068.01,0a1.266,1.266,0,0,1,.661,1.113v9.6a1.265,1.265,0,0,1-1.265,1.266h-7.223a18.149,18.149,0,0,0-.783,7.986,18.051,18.051,0,0,1,14.623,9.293,18.085,18.085,0,0,0-12.666-3.105,18.051,18.051,0,0,0,14.766,9.555q.587.036,1.183.037a18.225,18.225,0,0,0,2.326-.148l.05-.007a15.052,15.052,0,0,0,8.658-4.266,18.078,18.078,0,0,0,5.152-15.1h0a17.863,17.863,0,0,0-.6-2.839,10.959,10.959,0,0,1-3.44-1.5,11.1,11.1,0,0,1-4.624-6.38,11.107,11.107,0,0,0,8.01,3.411c.079,0,.159,0,.237,0l.015.028a.161.161,0,0,0,.024-.029,10.845,10.845,0,0,0,1.037-1.541,11.113,11.113,0,0,0,1.319-6.739,11.043,11.043,0,0,1,2.334,6.81c0,.1,0,.205,0,.306a11.047,11.047,0,0,1-1.332,4.982c.1.3.188.609.275.916A29.229,29.229,0,0,1,410.52,100.428Z" fill="#2e2e2e"/>
                </g>
                <g id="IMPACTUS.DEV">
                  <g id="Grupo_38" data-name="Grupo 38">
                    <path id="Caminho_460" data-name="Caminho 460" d="M440.983,89.693h7.409v26.6h-7.409Z" fill="#2e2e2e"/>
                    <path id="Caminho_461" data-name="Caminho 461" d="M453.252,89.693h7.79l6.345,10.3,6.344-10.3h7.79v26.6h-7.333V101.015l-6.8,10.411h-.153l-6.762-10.335v15.2h-7.22Z" fill="#2e2e2e"/>
                    <path id="Caminho_462" data-name="Caminho 462" d="M486.226,89.693h11.4c6.725,0,11.056,3.457,11.056,9.347v.076c0,6.269-4.826,9.574-11.436,9.574H493.6v7.6h-7.371Zm10.867,13.222c2.621,0,4.217-1.368,4.217-3.457v-.077c0-2.279-1.6-3.495-4.255-3.495H493.6v7.029Z" fill="#2e2e2e"/>
                    <path id="Caminho_463" data-name="Caminho 463" d="M518.328,89.5h7.1l11.322,26.786h-7.9l-1.937-4.749H516.656l-1.9,4.749h-7.751Zm6.459,16.3-2.964-7.561-3,7.561Z" fill="#2e2e2e"/>
                    <path id="Caminho_464" data-name="Caminho 464" d="M536.712,103.067v-.076a13.663,13.663,0,0,1,14.02-13.83,13.022,13.022,0,0,1,11.284,5.547L556.469,99a7.123,7.123,0,0,0-5.813-3.115c-3.724,0-6.345,3.154-6.345,7.029v.076c0,3.989,2.621,7.105,6.345,7.105,2.773,0,4.407-1.292,6-3.23l5.547,3.952a14,14,0,0,1-25.494-7.751Z" fill="#2e2e2e"/>
                    <path id="Caminho_465" data-name="Caminho 465" d="M571.852,96.152h-7.979V89.693H587.2v6.459h-7.979v20.137h-7.371Z" fill="#2e2e2e"/>
                    <path id="Caminho_466" data-name="Caminho 466" d="M590.084,104.625V89.693h7.485v14.78c0,3.837,1.938,5.661,4.9,5.661s4.9-1.748,4.9-5.471V89.693h7.485v14.742c0,8.586-4.9,12.348-12.462,12.348S590.084,112.945,590.084,104.625Z" fill="#2e2e2e"/>
                    <path id="Caminho_467" data-name="Caminho 467" d="M617.208,112.338l4.1-4.9a13.7,13.7,0,0,0,8.625,3.191c1.976,0,3.04-.684,3.04-1.824v-.076c0-1.1-.874-1.709-4.484-2.545-5.661-1.292-10.031-2.888-10.031-8.359v-.076c0-4.939,3.914-8.511,10.3-8.511A16.736,16.736,0,0,1,639.7,92.771l-3.685,5.2a13.338,13.338,0,0,0-7.447-2.622c-1.786,0-2.66.76-2.66,1.71v.076c0,1.215.912,1.748,4.6,2.584,6.117,1.329,9.916,3.305,9.916,8.282v.076c0,5.434-4.293,8.663-10.752,8.663A18.578,18.578,0,0,1,617.208,112.338Z" fill="#2e2e2e"/>
                  </g>
                  <g id="Grupo_39" data-name="Grupo 39">
                    <path id="Caminho_468" data-name="Caminho 468" d="M644.56,116.289V112.3h3.495v3.989Z" fill="#2e2e2e"/>
                    <path id="Caminho_469" data-name="Caminho 469" d="M663.935,116.289H654.7v-26.6h9.233c8.358,0,14.133,5.737,14.133,13.26S672.293,116.289,663.935,116.289Zm0-23.822H657.7v21.049h6.231c6.725,0,11.018-4.56,11.018-10.487S670.66,92.467,663.935,92.467Z" fill="#2e2e2e"/>
                    <path id="Caminho_470" data-name="Caminho 470" d="M703.634,92.429H687.41v9.08h14.514v2.736H687.41v9.309h16.414v2.735H684.408v-26.6h19.226Z" fill="#2e2e2e"/>
                    <path id="Caminho_471" data-name="Caminho 471" d="M729.884,89.693h3.229l-11.436,26.786h-2.66L707.581,89.693h3.343l9.461,22.911Z" fill="#2e2e2e"/>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </Registro>
    </Container>
  )
}
export default Footer


// style

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 8% 20px;
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
const Registro = styled.div`
  padding: 70px 12% 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  
  @media (max-width: 800px) {
    padding: 70px 0 0px;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
  }

  p { font-size: 0.9rem; font-weight: bolder; color: #2e2e2e; margin-bottom: 13px}
  div{
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0;
    margin: 0;
    .imp { font-size: 0.9rem; font-weight: lighter; color: #2e2e2e; margin: 0px 0 7px; }
    svg { width: 200px; padding:0; margin:0;}

    @media (max-width: 800px) {
      align-items: flex-start;
      margin-top: 20px;
    }
  }

`
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
//const x = styled.x``
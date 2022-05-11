import React from 'react'
// style
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Arrow, Whatsapp } from '../../icons' 
// Data
import * as D from '../../data/dataAcessorios'

const Acessorios = () => {
  return(
    <>
      <a id='Acessórios'></a>
      <Container>
        <Intro>
          <StaticImage
            src='../../images/imgAcessorios.png'
            alt='Bancada de acessórios'
            quality={100}
          />
          <Infos>
            <Title>{D.intro.title}</Title>
            <Text>{D.intro.text}</Text>
            <Button>{D.intro.buttonText}<Arrow/></Button>
          </Infos>
        </Intro>

        <Produtos>

          <Card>
            <StaticImage
              src='../../images/imgProd1.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_1.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_1.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd2.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_2.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_2.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd3.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_3.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_3.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd4.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_4.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_4.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd5.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_5.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_5.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd6.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_6.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_6.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd7.png'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_7.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_7.buttonText}
            </ButtonCard>
          </Card>
          <Card>
            <StaticImage
              src='../../images/imgProd8.svg'
              alt='Produto'
              quality={100}
            />
            <Id>{D.produto_8.id}</Id>
            <ButtonCard href='https://wa.me/5519983564345' target='blank'>
              <Whatsapp/>
              {D.produto_8.buttonText}
            </ButtonCard>
          </Card>

        </Produtos>
      </Container>
    </>
  )
}
export default Acessorios


// style

const Container = styled.section`
  padding: 200px 8%;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 800px) {
    padding: 100px 8%;
  }
`

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: initial;
  }
`
const Infos = styled.div`
  padding-left: 70px;
  width: fit-content;

  @media (max-width: 800px) {
    padding-left: 0;
    margin-top: 50px;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  color: white;
`
const Text = styled.p`
  max-width: 400px;
  color: #D9D9D9;
  margin: 30px 0;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    width: 75%;
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

const Produtos = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  gap: 60px 40px;
  margin-top: 150px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(100px, 200px));
    gap: 30px 25px;
  }
`
const Card = styled.div`
  position: relative;
  background: white;
  /* height: 300px; */
`
const Id = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: #2e2e2e;
  margin: 20px 10px 50px 10px ;
`
const ButtonCard = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background: #34c759;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    margin-right: 10px;
  }
`
// const x = styled.x`` 
// const x = styled.x`` 
// const x = styled.x`` 
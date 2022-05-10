import React from 'react'
// style 
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const VisualFilm = () => {
  return(
    <Container>
      <Content>
        <div className='absolute'>
          <Demos>
            <G35 className='pattern'><Type>G35</Type></G35>
            <G20 className='pattern'><Type>G20</Type></G20>
            <G5 className='pattern'><Type>G5</Type></G5>
          </Demos>
        </div>
        <StaticImage
          src='../../images/imgVisual.png'
          alt='Demontração de niveis do Insulfilm'
          quality={100}
          style={{ position: 'absolute' }}
          className='backgroundImg'
        />
      </Content>
    </Container>
  )
}
export default VisualFilm


// style

const Container = styled.section``

const Content = styled.div`
  position: relative;
  height: 600px;
  .backgroundImg {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .absolute {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 0px 12%;
    @media (max-width: 800px) {
      padding: 10% 0;
    }
  }
`

const Demos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 200;
  height: 100%;
  .pattern {
    width: fit-content;
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
      width: 100%;
      padding: 20px 0;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }

`

const G35 = styled.div`
  background: rgba(0, 0, 0, 0.65);
`

const G20 = styled.div`
  background: rgba(0, 0, 0, 0.80);
`

const G5 = styled.div`
  background: rgba(0, 0, 0, 0.95);
`

const Type = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  background: #ffc300;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`


// const X = styled.X``

import * as React from "react"
import { Helmet } from 'react-helmet'
//Style
import * as Component from "../components"
// Sections
import * as Section from '../components/sections'


const IndexPage = () => {
  return (
    <>
      <Component.SEO
        title='Nininho | Som e Alarme'
      />
      <Component.Header/>
      <Section.Hero/>
      <Section.Insulfilm/>
      <Section.VisualFilm/>
      <Section.Alarmes/>
      <Section.Sobre/>
      <Section.Servicos/>
      <Section.Acessorios/>
      <Section.Unidade/>
      <Section.CTA/>
      <Component.Footer/>
      <Component.GlobalStyle/>
    </>
  )
}

export default IndexPage

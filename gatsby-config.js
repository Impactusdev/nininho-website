module.exports = {
  siteMetadata: {
    title: "",
    titleTemplate: "",
    description:
      "Nininho Som e Alarme atua no mercado de Campinas e Região. Oferecemos o que existe de mais atual em acessórios automotivos. Som, alarme, insul film, vidro elétrico, engate, farol de milha , lâmpadas Ultra Led, sensor de estacionamento,Kit multimídia, e muito mais. Venha conhecer nossas lojas, e teremos o maior prazer em recebê-lo. ",
    url: "https://www.nininhosomealarme.com",
    image: "",
  },
  
  plugins: 
  [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nininho | Som e Alarme",
        short_name: "Nininho",
        start_url: "/",
        theme_color: "#ffc300",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
  ]
};
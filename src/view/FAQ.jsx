import React, { Component } from 'react';
import Faq from 'react-faq-component';
import "./css/FAQ.css";

const data = {
  title: "F.A.Q. - Perguntas frequentes",
  rows: [
    {
      title: "Qual a intenção deste site?",
      content: "Reunir, divulgar os melhores filmes e te ajudar na escolha do que assistir. "
    },
    {
      title: "O site é pago?",
      content: "Até o momento estamos disponibilizando-o totalmente grátis."
    },
    {
      title: "Vocês são uma empresa?",
      content: "Não. Somos um grupo de Desenvolvedores Web Jr. incluídos no projeto Programadores Cariocas, oferecido pela Prefeitura do Rio de Janeiro."
    },
    {
      title: "Quem são vocês?",
      content: <a href='/Sobre'>Acesse aqui</a>,
    }]
}

export default class faq extends Component {
  render() {
    return (
      <div className='corpoQuest'>

        <Faq data={data}/>

      </div>
    )
  }
}
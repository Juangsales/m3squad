import logo from './imagens/adAstra.jpg';
import logo2 from './imagens/herediario.jpg';
import logo3 from './imagens/batmanDarkKnigh.jpg';
import logo4 from './imagens/batmanDarkKnigh2.jpg';
import logo5 from './imagens/batmanPiadaMoral.jpg';
import logo6 from './imagens/corra.jpg';
import logo7 from './imagens/Duna.jpeg';
import logo8 from './imagens/encanto.jpeg';
import logo9 from './imagens/entidade.jpg';
import logo10 from './imagens/facebook.jpeg';
import logo11 from './imagens/flashPoint.jpg';
import logo12 from './imagens/ZackSnyder.jpg';
import logo13 from './imagens/hacker.jpeg';
import logo14 from './imagens/HomemAranha2.jpg';
import logo15 from './imagens/homemDeAço.jpg';
import logo16 from './imagens/homemInvisivel.jpg';
import logo17 from './imagens/interstellar.png';
import logo18 from './imagens/invasores.jpg';
import logo19 from './imagens/ligaDaJustica.jpg';
import logo20 from './imagens/matrix.jpg';
import logo21 from './imagens/naoNaoOlhe.jpg';
import logo22 from './imagens/oQuintoPoder.jpg';
import logo23 from './imagens/osIncriveis.jpeg';
import logo24 from './imagens/osIncriveisDois.png';
import logo25 from './imagens/paradoxoCloverfield.jpg';
import logo26 from './imagens/passageiroAcidental.jpg';
import logo27 from './imagens/Passageiros.jpg';
import logo28 from './imagens/perseguiçãoVirtual.jpg';
import logo29 from './imagens/sorria.jpg';
import logo30 from './imagens/soul.jpg';
import logo31 from './imagens/umLugarSilncioso.jpg';
import logo32 from './imagens/Vida.jpg';
import logo33 from './imagens/vigilanteDoAmanha.jpg';
import logo34 from './imagens/Vingadores.jpg';
import logo35 from './imagens/vingadores2.jpg';
import {
  Container,
  Col,
  Row
} from "reactstrap";
import "./css/Filmes.css";

const Filmes = () => {
    document.title = "Filmes"
    return (
      
<Container className="corpoFilme">
  <Row className='nome'>
<h1>Filmes</h1>
<br></br>
<h2><span>Devs</span></h2>
    <Col className='devsfilmes'>
 <div className='listafilme'>
       <div className='filmes'><img className="foto" src={logo20}/></div>
       <div className='filmes'><img className="foto" src={logo28}/></div>
       <div className='filmes'><img className="foto" src={logo33}/></div>
       <div className='filmes'><img className="foto" src={logo22}/></div>
       <div className='filmes'><img className="foto" src={logo18}/></div>
       <div className='filmes'><img className="foto" src={logo13}/></div>
       <div className='filmes'><img className="foto" src={logo10}/></div>
       </div>
       </Col>
  <h2><span>Ação</span></h2>
    <Col className='acaofilmes'>
       <div className='listafilme'>
       <div className='filmes'><img className="foto" src={logo3}/></div>
       <div className='filmes'><img className="foto" src={logo4}/></div>
       <div className='filmes'><img className="foto" src={logo12}/></div>
       <div className='filmes'><img className="foto" src={logo14}/></div>
       <div className='filmes'><img className="foto" src={logo15}/></div>
       <div className='filmes'><img className="foto" src={logo34}/></div>
       <div className='filmes'><img className="foto" src={logo35}/></div>
       </div>
       </Col>
       <h2><span>Animação</span></h2>
    <Col className='animacaofilmes'>
       <div className='listafilme'>
       <div className='filmes'><img className="foto" src={logo19}/></div>
       <div className='filmes'><img className="foto" src={logo30}/></div>
       <div className='filmes'><img className="foto" src={logo23}/></div>
       <div className='filmes'><img className="foto" src={logo24}/></div>
       <div className='filmes'><img className="foto" src={logo11}/></div>
       <div className='filmes'><img className="foto" src={logo8}/></div>
       <div className='filmes'><img className="foto" src={logo5}/></div>
       </div>
       </Col>
       <h2><span>Terror</span></h2>
    <Col className='terrorfilmes'>
       <div className='listafilme'>
       <div className='filmes'><img className="foto" src={logo31}/></div>
       <div className='filmes'><img className="foto" src={logo29}/></div>
       <div className='filmes'><img className="foto" src={logo21}/></div>
       <div className='filmes'><img className="foto" src={logo16}/></div>
       <div className='filmes'><img className="foto" src={logo9}/></div>
       <div className='filmes'><img className="foto" src={logo6}/></div>
       <div className='filmes'><img className="foto" src={logo2}/></div>
       </div>
       </Col>
       <h2><span>Ficção Cientifica</span></h2>
    <Col className='ficcaofilmes'>
  <div className='listafilme'>
       <div className='filmes'><img className="foto" src={logo32}/></div>
       <div className='filmes'><img className="foto" src={logo25}/></div>
       <div className='filmes'><img className="foto" src={logo26}/></div>
       <div className='filmes'><img className="foto" src={logo27}/></div>
       <div className='filmes'><img className="foto" src={logo17}/></div>
       <div className='filmes'><img className="foto" src={logo7}/></div>
       <div className='filmes'><img className="foto" src={logo}/></div>
       </div>
    </Col>

</Row>
</Container>
    )
  };
 

  export default Filmes;

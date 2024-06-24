import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServicoL from '../components/servicoL';
import ServicoR from '../components/servicoR';

export default function Servicos() {
  const interior = {
    titulo: "Interior",
    texto: `Nossa arquiteta especializada em design de interiores transforma 
    espaços comuns em ambientes extraordinários. Com atenção meticulosa aos 
    detalhes e um profundo entendimento das necessidades e desejos dos clientes
    , criamos projetos que combinam funcionalidade e estética. Desde a escolha 
    dos materiais até a disposição dos móveis e a iluminação, cada elemento é 
    cuidadosamente selecionado para refletir a personalidade e o estilo de vida 
    de quem vai viver ou trabalhar no espaço.`,
    imagem: "media/projetos/projeto_ap_602/projeto_ap_602.jpg",
  }
  const exterior = {
    titulo: "Exterior",
    texto: `Projetar exteriores que encantam e se integram harmoniosamente ao 
    entorno é a nossa especialidade. Seja para residências, edifícios 
    comerciais ou espaços públicos, nossos projetos de arquitetura exterior são 
    desenvolvidos para serem duráveis, esteticamente agradáveis e sustentáveis. 
    A escolha de materiais adequados, o planejamento de paisagismo e a 
    incorporação de elementos arquitetônicos modernos garantem que cada projeto 
    seja único e atenda perfeitamente às expectativas dos nossos clientes.`,
    imagem: "media/projetos/cobertura_bela_vista/Lu_cobertura_21/20211222_144401.jpg",
  }
  const residencial = {
    titulo: "Residencial",
    texto: `Nosso serviço de arquitetura residencial é dedicado a criar lares 
    que são verdadeiros refúgios de conforto e beleza. Trabalhamos em estreita 
    colaboração com os clientes para entender suas necessidades e aspirações, 
    traduzindo-as em projetos que combinam estética, funcionalidade e 
    sustentabilidade. Desde a concepção inicial até a conclusão da obra, 
    nosso foco está em criar espaços que proporcionem bem-estar e qualidade de 
    vida, respeitando o estilo pessoal de cada família.`,
    imagem: "media/projetos/cobertura_bela_vista/Lu_cobertura_21/20211222_144401.jpg",
  }
  const comercial = {
    titulo: "Comercial",
    texto: `Na área de arquitetura comercial, oferecemos soluções inovadoras e 
    eficientes para empresas de todos os setores. Entendemos que um bom projeto 
    comercial deve não apenas atrair clientes, mas também promover a 
    produtividade e o bem-estar dos colaboradores. Nosso trabalho inclui desde 
    a concepção de lojas e escritórios até a reforma de espaços existentes, 
    sempre com o objetivo de criar ambientes funcionais, modernos e alinhados 
    com a identidade da marca.`,
    imagem: "media/projetos/top3/top3_depois_(5).jpg",
  }
  
  return (
    <>
      <Navbar/>
      <h1>Serviços</h1>
      <ServicoL {...interior}/>
      <ServicoR {...exterior}/>
      <ServicoL {...residencial}/>
      <ServicoR {...comercial}/>
      <Footer/>
    </>
  );
}
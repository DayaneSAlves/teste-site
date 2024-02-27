
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import './App.css';
import logo from './assets/logo.png';
import iconWhats from './assets/icone-whats.png';
import iconResidencias from './assets/icon-residencias.png';
import iconComercios from './assets/icon-comercios.png';
import iconHospitais from './assets/icon-hospitais.png';
import iconEscolas from './assets/icon-escolas.png';
import person from './assets/homem-limpando.png';
import licenca1 from './assets/licenca-crq.png';
import licenca2 from './assets/licenca-anvisa.png';
import licenca3 from './assets/licenca-bombeiro.png';
import iconTelefone from './assets/icon-telefone.png';
import iconEmail from './assets/icone-email.png';
import iconService1 from './assets/icon-desinsetizacao.png';
import iconService2 from './assets/icon-desratizacao.png';
import iconService3 from './assets/icon-descupinizacao.png';
import iconService4 from './assets/icon-sanitizacao.png';
import logoFennecFox from './assets/logo-fennec-fox.png';
function App() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required(),
    telefone: yup.string().required(),
    mensagem: yup.string().required()
  });

  return (
    <>
      <div className='premenu' id="home">
        <div className="container-xl justify-content-center d-flex align-items-center">
          <div className="row justify-content-between">
            <div className="col-12 px-0 px-md-4 col-md-auto">
              <p>Atendimento Seg a Qui - 8:00 às 18:00 | Sextas - 8:00 as 17:00 | Sábado das 8:00 as 13:00 <span className='d-flex d-md-none'> - Fale com a administração: <a href='tel:5511992074058'> (11) 99207-4058</a></span></p>
            </div>
            <div className="col-md-auto">
              <p className='d-none d-md-flex'>Fale com a administração: <a href='tel:5511992074058'>(11) 99207-4058</a></p>
            </div>
          </div>
        </div>
      </div>

      <Navbar expand="lg" className="menu-site" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-list">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#nossos-servicos">Nossos Serviços</Nav.Link>
              <Nav.Link href="#onde-atuamos">Onde Atuamos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" target='_blank' className="btn-whats"><img src={iconWhats} className='me-1' />Solicitar Orçamento</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="banner">
      </div>

      <div className="container" id="nossos-servicos">
        <div className="row">
          <div className="col-md-12">
            <h1 className='pre-title'>Nossos serviços</h1>
            <h2 className='title-bloco'>Controle de Pragas</h2>
            <h3 className='subtitle-bloco'>Evite surtos de doenças, mantenha um ambiente agradável e seguro sem a convivência indesejadas de pragas e prevenção de prejuízos.</h3>
          </div>
        </div>
        <div className="row d-none d-md-flex">
          <div className="tab-service">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row>
                <Col sm={4} className='p-0 col-12'>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="1">
                        <div className="row d-flex flex-nowrap">
                          <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                            <img src={iconService1} alt="" />
                          </div>
                          <div className="col-9 col-md-9">
                            <h4>DESINSETIZAÇÃO</h4>
                            <p>Ambiente seguro, higiênico<br /> e livre de pragas.</p>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="2">
                        <div className="row d-flex flex-nowrap">
                          <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                            <img src={iconService2} alt="" />
                          </div>
                          <div className="col-9 col-md-9">
                            <h4>DESRATIZAÇÃO</h4>
                            <p>Sua casa em paz e livre de roedores indesejáveis.</p>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="3">
                        <div className="row d-flex flex-nowrap">
                          <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                            <img src={iconService3} alt="" />
                          </div>
                          <div className="col-9 col-md-9">
                            <h4>DESCUPINIZAÇÃO</h4>
                            <p>Eficácia na proteção da sua casa contra cupins.</p>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='tabs'>
                      <Nav.Link eventKey="4">
                        <div className="row d-flex flex-nowrap">
                          <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                            <img src={iconService4} alt="" />
                          </div>
                          <div className="col-9 col-md-9">
                            <h4>SANITIZAÇÃO</h4>
                            <p>Seu espaço higienizado livre de bactérias.</p>
                          </div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8} className='p-0 col-12'>
                  <Tab.Content >
                    <Tab.Pane eventKey="1" >
                      <div className="row">
                        <div className="col-md-12">
                          <h2>A desinsetização é um procedimento essencial.</h2>
                          <p>Feito por meio do uso de técnicas e produtos específicos, para garantir o conforto, a segurança e a higiene em nosso ambiente. Ela trata do controle de pragas, eliminando e prevenindo infestações de insetos e animais indesejados em residências, estabelecimentos comerciais e industriais.
                          </p>
                          <p>Ou seja, ela não apenas livra a sua casa dessas criaturas indesejadas, mas também protege a sua saúde, proporcionando um ambiente seguro, higiênico e livre de pragas, recuperando a paz em seu lar para desfrutar de momentos de tranquilidade sem essa preocupação constante.
                          </p>
                          <h3>MÉTODOS UTILIZADOS PARA DESINSETIZAÇÃO:</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Inspeção:</h4>
                          <h5>Um profissional qualificado realiza uma inspeção minuciosa para identificar as pragas presentes, seu nível de infestação e as áreas afetadas, além disso pode ser que nessa hora ele ofereça um orçamento de acordo com o plano de ação que será seguido;</h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Planejamento:</h4>
                          <h5>Com base na inspeção, é desenvolvido um plano de ação ersonalizado que inclui os produtos adequados e as técnicas de aplicação mais eficazes para eliminar as pragas;</h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Aplicação:</h4>
                          <h5>Os produtos são aplicados de acordo com o plano de ação, seja por meio de pulverização, gel, armadilhas ou outros métodos apropriados para cada tipo de praga;</h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Medidas preventivas:</h4>
                          <h5>Além de eliminar as pragas existentes, são tomadas medidas preventivas para evitar futuras infestações, como o fechamento de pontos de entrada, a orientação sobre boas práticas de higiene e a utilização de produtos repelentes.</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento de Desinsetização" className='btn-orcamento'>
                            Solicitar Orçamento
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Entenda sobre os Ratos</h2>
                          <p>As três espécies de ratos consideradas pragas urbanas são: Rattus Novergicus(ratazana, rato de esgoto); Rattus rattus(rato de telhado, rato preto); Mus musculus(camundongo, catita) – atualmente com a nomenclatura de Mus domesticus.
                          </p>
                          <p>Os ratos são uma praga que atinge a maior parte das cidades do mundo todo. Eles trazem diversos prejuízos a população local e podem transmitir inúmeras doenças. Entre as patologias transmitidas pelo rato, estão peste bubônica, leptospirose, tifo murino e hantavirose, triquinose e salmonelose. Por isso, o combate aos ratos torna-se essencial nas casas, condomínios e empresas.
                          </p>
                          <h3>MÉTODOS UTILIZADOS NA DESRATIZAÇÃO:</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Iscagem:</h4>
                          <h5>Realizada através de posicionamento do veneno em pontos estratégicos. O veneno atrai os ratos e pode infectar também a colônia, dependendo da espécie.
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Povilhamento:</h4>
                          <h5>Feita através do uso de pó seco inodoro, o polvilhamento também é efetivo contra indivíduos e colônias através da sua ação residual e transporte pelos próprios animais.</h5>
                        </div>
                        <div className="col-md-6 m-auto">
                          <h4>Dispositivos de Captura:</h4>
                          <h5>Também é indicado para casos de monitoramento ou para onde o uso de produtos químicos é impossibilitado. Considerado uma forma humana de lidar com os roedores urbanos.</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Desratização" className='btn-orcamento'>
                            Solicitar Orçamento
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Eliminando os Cupins</h2>
                          <p>Cupins ou Térmitas são insetos que se alimentam de madeira (e outros componentes celulósicos) e, em seu habitat natural,desempenham uma importante função na natureza relacionada a converter restos vegetais e árvores mortas e matéria orgânica(húmos),que é um dos componentes enriquecedores do solo. </p>
                          <p>Devido a essas características, no entanto,estes insetos apresentam-se potencialmente danosos ao homem quando encontram madeira ou outros materiais celulósicos de importância econômica,tais como madeiras com função estrutural em residências,livros,móveis,etc.As principais espécies de Cupins no Brasil são:Cryptotermes brevis(Cupins de madeira seca);Coptotermes gestroi(Cupins de solo);Nasutitermes sp(arbóreos).</p>
                          <h3>MÉTODOS UTILIZADOS PARA DESCUPINIZAÇÃO:</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Investigação técnica:</h4>
                          <h5>nessa etapa é feita uma inspeção minuciosa do local, identificando focos de infestação, núcleo do cupinzeiro, tipo de cupim e avaliando o grau de comprometimento do local dominado pela praga.
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Definição do tratamento:</h4>
                          <h5>Após identificar o tipo de cupim e o tamanho da colônia, é possível estabelecer qual processo de imunização adequado para acabar com cupins, definindo o produto químico e estratégias adequadas para acabar com a praga. O local precisa ser avaliado para traçar estratégias de combate à infestação
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Dedetização:</h4>
                          <h5>Nessa etapa é realizada a aplicação da técnica definida para o controle da infestação. Nesse processo, os profissionais utilizam equipamentos de proteção individual para a aplicação de venenos que sejam eficazes contra cupins.</h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Monitoramento do local e renovação:</h4>
                          <h5>A última etapa do processo é o monitoramento do serviço executado, avaliando a eficácia no combate à infestação de cupins e sugerindo ações preventivas para evitar a formação de novas colônias.</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h3>TIPOS DE DESCUPINIZAÇÃO:</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Descupinização com barreira química:</h4>
                          <h5>O processo com barreira química costuma ser utilizado em controle de cupins subterrâneos, com a aplicação de produtos no solo, paredes e tetos, evitando que as pragas se espalhem pela casa.
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Descupinização com tratamento de madeira:</h4>
                          <h5>O processo é feito com a aplicação de veneno para cupins em madeiras, aplicando o produto através de pulverizações e furos estratégicos para acabar com a colônia de cupins. </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Descupinização com tratamento de conduítes:</h4>
                          <h5>Nesse processo são utilizados produtos químicos que bloqueiam a passagem de cupins, evitando que a praga possa infestar novos pontos.
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Descupinização localizada: </h4>
                          <h5>Esse tipo de tratamento é feito em locais específicos atingidos pela infestação de cupins, aplicando produtos químicos que ajudem a combater a infestação
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Descupinização" className='btn-orcamento'>
                            Solicitar Orçamento
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="4">
                      <div className="row">
                        <div className="col-md-12">
                          <h2>Livre de microoorganismos.</h2>
                          <p>Sanitização é um processo de redução dos microorganismos e bactérias patogênicos, até um nível considerado aceitável pelos órgãos de saúde pública, como a ANVISA (Agência Nacional de Vigilância Sanitária). Portanto, o intuito dessa técnica não é somente deixar o local limpo, mas garantir a biossegurança do espaço higienizado. Com a drástica redução dos agentes patogênicos, as chances de contaminação caem consideravelmente.</p>
                          <p>Dessa forma, o ambiente se torna seguro para seres humanos. No local de trabalho, por exemplo, uma empresa que realiza a sanitização periódica tem menos chances de sofrer processos trabalhistas. Isso porque, ela possuirá certificados que conferem a redução do risco de contaminação. Vale destacar que os produtos utilizados nesse procedimento são diferentes daqueles usados na limpeza, e devem atender as regras da ANVISA.
                          </p>
                          <h3>MÉTODO UTILIZADO PARA SANITIZAÇÃO:</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Como funciona:</h4>
                          <h5>Uma sanitização eficiente é realizada com quaternário de amônia, pois não deixa resíduos de microorganismos ou de produtos químicos. Nesse sentido, é altamente utilizado em diversos ambientes, como transportes públicos, lojas comerciais, industriais  e outros. </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Produtos:</h4>
                          <h5>Cada procedimento de sanitização requer um produto específico, indicado para o tipo de germe a ser eliminado.
                          </h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Nebulização:</h4>
                          <h5>Após isso, é feita uma nebulização sobre as superfícies para criar uma película protetora, impedindo a proliferação de microorganismos. Como a nebulização ainda é um tratamento sanitizante, que usa produtos químicos, a circulação de pessoas no local só é permitida após algumas horas;</h5>
                        </div>
                        <div className="col-md-6">
                          <h4>Realização:</h4>
                          <h5>De modo geral, a sanitização reduz grande parte dos agentes patogênicos e costuma ser realizada por empresas tercerizadas.
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Sanitização" className='btn-orcamento'>
                            Solicitar Orçamento
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
        <div className="row d-flex d-md-none">
          <div className="tab-service">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header className='tabs'> <div className="row d-flex flex-nowrap">
                  <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                    <img src={iconService1} alt="" />
                  </div>
                  <div className="col-9 col-md-9">
                    <h4>DESINSETIZAÇÃO</h4>
                    <p>Ambiente seguro, higiênico<br /> e livre de pragas.</p>
                  </div>
                </div></Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-12">
                      <h2>A desinsetização é um procedimento essencial.</h2>
                      <p>Feito por meio do uso de técnicas e produtos específicos, para garantir o conforto, a segurança e a higiene em nosso ambiente. Ela trata do controle de pragas, eliminando e prevenindo infestações de insetos e animais indesejados em residências, estabelecimentos comerciais e industriais.
                      </p>
                      <p>Ou seja, ela não apenas livra a sua casa dessas criaturas indesejadas, mas também protege a sua saúde, proporcionando um ambiente seguro, higiênico e livre de pragas, recuperando a paz em seu lar para desfrutar de momentos de tranquilidade sem essa preocupação constante.
                      </p>
                      <h3>MÉTODOS UTILIZADOS PARA DESINSETIZAÇÃO:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Inspeção:</h4>
                      <h5>Um profissional qualificado realiza uma inspeção minuciosa para identificar as pragas presentes, seu nível de infestação e as áreas afetadas, além disso pode ser que nessa hora ele ofereça um orçamento de acordo com o plano de ação que será seguido;</h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Planejamento:</h4>
                      <h5>Com base na inspeção, é desenvolvido um plano de ação ersonalizado que inclui os produtos adequados e as técnicas de aplicação mais eficazes para eliminar as pragas;</h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Aplicação:</h4>
                      <h5>Os produtos são aplicados de acordo com o plano de ação, seja por meio de pulverização, gel, armadilhas ou outros métodos apropriados para cada tipo de praga;</h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Medidas preventivas:</h4>
                      <h5>Além de eliminar as pragas existentes, são tomadas medidas preventivas para evitar futuras infestações, como o fechamento de pontos de entrada, a orientação sobre boas práticas de higiene e a utilização de produtos repelentes.</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento de Desinsetização" className='btn-orcamento'>
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className='tabs'>
                  <div className="row d-flex flex-nowrap">
                    <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                      <img src={iconService2} alt="" />
                    </div>
                    <div className="col-9 col-md-9">
                      <h4>DESRATIZAÇÃO</h4>
                      <p>Sua casa em paz e livre de roedores indesejáveis.</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Entenda sobre os Ratos</h2>
                      <p>As três espécies de ratos consideradas pragas urbanas são: Rattus Novergicus(ratazana, rato de esgoto); Rattus rattus(rato de telhado, rato preto); Mus musculus(camundongo, catita) – atualmente com a nomenclatura de Mus domesticus.
                      </p>
                      <p>Os ratos são uma praga que atinge a maior parte das cidades do mundo todo. Eles trazem diversos prejuízos a população local e podem transmitir inúmeras doenças. Entre as patologias transmitidas pelo rato, estão peste bubônica, leptospirose, tifo murino e hantavirose, triquinose e salmonelose. Por isso, o combate aos ratos torna-se essencial nas casas, condomínios e empresas.
                      </p>
                      <h3>MÉTODOS UTILIZADOS NA DESRATIZAÇÃO:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Iscagem:</h4>
                      <h5>Realizada através de posicionamento do veneno em pontos estratégicos. O veneno atrai os ratos e pode infectar também a colônia, dependendo da espécie.
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Povilhamento:</h4>
                      <h5>Feita através do uso de pó seco inodoro, o polvilhamento também é efetivo contra indivíduos e colônias através da sua ação residual e transporte pelos próprios animais.</h5>
                    </div>
                    <div className="col-md-6 m-auto">
                      <h4>Dispositivos de Captura:</h4>
                      <h5>Também é indicado para casos de monitoramento ou para onde o uso de produtos químicos é impossibilitado. Considerado uma forma humana de lidar com os roedores urbanos.</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Desratização" className='btn-orcamento'>
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className='tabs'>
                  <div className="row d-flex flex-nowrap">
                    <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                      <img src={iconService3} alt="" />
                    </div>
                    <div className="col-9 col-md-9">
                      <h4>DESCUPINIZAÇÃO</h4>
                      <p>Eficácia na proteção da sua casa contra cupins.</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Eliminando os Cupins</h2>
                      <p>Cupins ou Térmitas são insetos que se alimentam de madeira (e outros componentes celulósicos) e, em seu habitat natural,desempenham uma importante função na natureza relacionada a converter restos vegetais e árvores mortas e matéria orgânica(húmos),que é um dos componentes enriquecedores do solo. </p>
                      <p>Devido a essas características, no entanto,estes insetos apresentam-se potencialmente danosos ao homem quando encontram madeira ou outros materiais celulósicos de importância econômica,tais como madeiras com função estrutural em residências,livros,móveis,etc.As principais espécies de Cupins no Brasil são:Cryptotermes brevis(Cupins de madeira seca);Coptotermes gestroi(Cupins de solo);Nasutitermes sp(arbóreos).</p>
                      <h3>MÉTODOS UTILIZADOS PARA DESCUPINIZAÇÃO:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Investigação técnica:</h4>
                      <h5>nessa etapa é feita uma inspeção minuciosa do local, identificando focos de infestação, núcleo do cupinzeiro, tipo de cupim e avaliando o grau de comprometimento do local dominado pela praga.
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Definição do tratamento:</h4>
                      <h5>Após identificar o tipo de cupim e o tamanho da colônia, é possível estabelecer qual processo de imunização adequado para acabar com cupins, definindo o produto químico e estratégias adequadas para acabar com a praga. O local precisa ser avaliado para traçar estratégias de combate à infestação
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Dedetização:</h4>
                      <h5>Nessa etapa é realizada a aplicação da técnica definida para o controle da infestação. Nesse processo, os profissionais utilizam equipamentos de proteção individual para a aplicação de venenos que sejam eficazes contra cupins.</h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Monitoramento do local e renovação:</h4>
                      <h5>A última etapa do processo é o monitoramento do serviço executado, avaliando a eficácia no combate à infestação de cupins e sugerindo ações preventivas para evitar a formação de novas colônias.</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h3>TIPOS DE DESCUPINIZAÇÃO:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Descupinização com barreira química:</h4>
                      <h5>O processo com barreira química costuma ser utilizado em controle de cupins subterrâneos, com a aplicação de produtos no solo, paredes e tetos, evitando que as pragas se espalhem pela casa.
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Descupinização com tratamento de madeira:</h4>
                      <h5>O processo é feito com a aplicação de veneno para cupins em madeiras, aplicando o produto através de pulverizações e furos estratégicos para acabar com a colônia de cupins. </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Descupinização com tratamento de conduítes:</h4>
                      <h5>Nesse processo são utilizados produtos químicos que bloqueiam a passagem de cupins, evitando que a praga possa infestar novos pontos.
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Descupinização localizada: </h4>
                      <h5>Esse tipo de tratamento é feito em locais específicos atingidos pela infestação de cupins, aplicando produtos químicos que ajudem a combater a infestação
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Descupinização" className='btn-orcamento'>
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className='tabs'>
                  <div className="row d-flex flex-nowrap">
                    <div className="col-3 col-md-auto pe-0 d-flex align-items-center">
                      <img src={iconService4} alt="" />
                    </div>
                    <div className="col-9 col-md-9">
                      <h4>SANITIZAÇÃO</h4>
                      <p>Seu espaço higienizado livre de bactérias.</p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Livre de microoorganismos.</h2>
                      <p>Sanitização é um processo de redução dos microorganismos e bactérias patogênicos, até um nível considerado aceitável pelos órgãos de saúde pública, como a ANVISA (Agência Nacional de Vigilância Sanitária). Portanto, o intuito dessa técnica não é somente deixar o local limpo, mas garantir a biossegurança do espaço higienizado. Com a drástica redução dos agentes patogênicos, as chances de contaminação caem consideravelmente.</p>
                      <p>Dessa forma, o ambiente se torna seguro para seres humanos. No local de trabalho, por exemplo, uma empresa que realiza a sanitização periódica tem menos chances de sofrer processos trabalhistas. Isso porque, ela possuirá certificados que conferem a redução do risco de contaminação. Vale destacar que os produtos utilizados nesse procedimento são diferentes daqueles usados na limpeza, e devem atender as regras da ANVISA.
                      </p>
                      <h3>MÉTODO UTILIZADO PARA SANITIZAÇÃO:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Como funciona:</h4>
                      <h5>Uma sanitização eficiente é realizada com quaternário de amônia, pois não deixa resíduos de microorganismos ou de produtos químicos. Nesse sentido, é altamente utilizado em diversos ambientes, como transportes públicos, lojas comerciais, industriais  e outros. </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Produtos:</h4>
                      <h5>Cada procedimento de sanitização requer um produto específico, indicado para o tipo de germe a ser eliminado.
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Nebulização:</h4>
                      <h5>Após isso, é feita uma nebulização sobre as superfícies para criar uma película protetora, impedindo a proliferação de microorganismos. Como a nebulização ainda é um tratamento sanitizante, que usa produtos químicos, a circulação de pessoas no local só é permitida após algumas horas;</h5>
                    </div>
                    <div className="col-md-6">
                      <h4>Realização:</h4>
                      <h5>De modo geral, a sanitização reduz grande parte dos agentes patogênicos e costuma ser realizada por empresas tercerizadas.
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento para Sanitização" className='btn-orcamento'>
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="onde-atuamos" id="onde-atuamos">
        <div className="container d-flex flex-column align-items-center">
          <div className="row">
            <div className="col-md-12">
              <h2 className='pre-title'>Conheça</h2>
              <h3 className='title-bloco'>Onde Atuamos</h3>
              <h4 className='subtitle-bloco col-md-3'>Temos um time capacitado e preparado para atender demandas em:</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="bloco-atuacao">
                <img src={iconResidencias} alt="" className='icon-atuacao' />
                <h5>Residências</h5>
                <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" className="btn-solicitar-orcamento">Solicitar Orçamento</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bloco-atuacao">
                <img src={iconComercios} alt="" className='icon-atuacao' />
                <h5>Comércios</h5>
                <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" className="btn-solicitar-orcamento">Solicitar Orçamento</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bloco-atuacao">
                <img src={iconEscolas} alt="" className='icon-atuacao' />
                <h5>Escolas</h5>
                <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" className="btn-solicitar-orcamento">Solicitar Orçamento</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="bloco-atuacao">
                <img src={iconHospitais} alt="" className='icon-atuacao' />
                <h5>Hospitais</h5>
                <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" className="btn-solicitar-orcamento">Solicitar Orçamento</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prevencao">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className='pre-title'>Saiba mais</h2>
              <h3 className='title-bloco'>Prevenção</h3>
              <h4 className='subtitle-bloco col-md-3'>Veja boas práticas de como prevenir que sua casa tenha bichos indesejáveis.</h4>
            </div>
          </div>
          <ol className="row">
            <div className="col-md-4 coluna">
              <li>
                <p>Sobretudo manter limpos quintais, jardins e terrenos baldios, do mesmo modo não acumulando entulho e lixo e lavar periodicamente a lixeira, mantendo a seca e bem fechada.</p>
              </li>
              <li>
                <p>Conservação dos alimentos de modo a impedir o alcance das baratas. Por exemplo: doces, pães e biscoitos devem ser guardados em vasilhas bem fechadas ou na geladeira.</p>
              </li>
              <li>
                <p>Faça a limpeza frequentemente (quinzenal) de caixas de gordura, mantendo-as sempre bem fechadas.</p>
              </li>
              <li>
                <p>Eliminação dos abrigos rebocando-se ou vedando com silicone nas frestas e outras fendas e eliminação de mesas e armários de madeira das áreas de alimentação. </p>
              </li>
              <li>
                <p>Vistoria dos locais de acesso, tais como: canalizações de água, interruptores, etc. Assim também manter bem justas as tampas, trocando as tomadas ou interruptores quebrados. </p>
              </li>
            </div>
            <div className="col-md-4">
              <div className="person"><img src={person} alt="person" /></div>
            </div>
            <div className="col-md-4 coluna">
              <li>
                <p>Olhe bem as mercadorias e o descarte total de todas as embalagens de papelão ou de madeira usadas para o transporte de alimentos (insetos adultos ou seus ovos são espalhados desta maneira); </p>
              </li>
              <li>
                <p>Limpeza diária do fogão e embaixo da geladeira e conservação da bancada da pia bem seca e limpa durante a noite;</p>
              </li>
              <li>
                <p>Constantemente faça a limpeza dos ralos da cozinha, área de serviço e banheiros que devem ser do tipo abre e fecha para impedir a passagem de insetos. </p>
              </li>
              <li>
                <p>Sobretudo sempre verificar a vedação de borracha em todas as portas que dão para o exterior das edificações.</p>
              </li>
              <li>
                <p>Manter as instalações hidráulicas e redes de esgoto em bom estado, os ralos devem ser sifonados ou com sistema abre e fecha. As válvulas anti-refluxo devem ser instaladas na saída da tubulação de esgoto. E as fossas deverão estar bem fechadas.
                </p>
              </li>
            </div>
          </ol>
        </div>
      </div>
      <div className="licencas">
        <div className="container">
          <div className="row mb-5 line-horizontal">
            <div className="col-12 col-md-4 mb-5 mb-md-0">
              <h3>Quem Somos</h3>
              <p>A Control Química Dedetizadora, é uma empresa que surgiu da ideia de um casal, formados em Recursos Humanos e Química, após se especializarem na area de Controle de Pragas Urbanas  fundaram á empresa, com uma equipe técnica especializada para atender seus clientes com qualidade e responsabilidade, utizando métodos seguros e eficaz, eliminando completamente as pragas indesejadas.</p>
            </div>
            <div className="col-12 col-md-8 d-flex align-items-center">
              <div className="row">
                <div className="col-12 col-md-4 mb-5 mb-md-0">
                  <h4 className='detalhes-titulo'>Missão</h4>
                  <p className='detalhes'>Atender com excelência todos os clientes com profissionalismo, utilizando sempre produtos e equipamentos de qualidade e com tecnologia inovadoras, zelando pelo meio ambiente, pela sociedade e economia sustentável.</p>
                </div>
                <div className="col-12 col-md-4 mb-5 mb-md-0">
                  <h4 className='detalhes-titulo'>Visão</h4>
                  <p className='detalhes'>Ser a empresa reconhecida regionalmente pela excelência em sua gestão, qualidade e confiabilidade em seus serviços.</p>
                </div>
                <div className="col-12 col-md-4">
                  <h4 className='detalhes-titulo'>Valores</h4>
                  <p className='detalhes'>Ética, Transparência, Sustentabilidade, Comprometimento, Excelência e Desenvolvimento de pessoas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-4 mb-md-1">
              <h3>Licenças</h3>
              <p>Somos uma empresa certificada e qualificada para oferecer o melhor serviço.</p>
            </div>
            <div className="col-12 col-md-8">
              <div className="row justify-content-between justify-content-center align-items-center">
                <div className="col-4 col-md-auto"><img src={licenca1} alt="Licença CRQ" /></div>
                <div className="col-5 col-md-auto"><img src={licenca2} alt="Licença Anvisa" /></div>
                <div className="col-2 col-md-auto"><img src={licenca3} alt="Licença Bombeiro" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-contato" id="contato">
        <div className="container p-md-0">
          <div className="contato">
            <div className="row">
              <div className="col-12 col-md-5">
                <h2>Precisando <br className='d-none d-md-block' /> Dedetizar?</h2>
                <h3>Entre em contato  <br className='d-none d-md-block' /> conosco e agende já <br className='d-none d-md-block' />um dos nossos serviços.</h3>
                <div className="infos">
                  <div className="row linha">
                    <div className="col-md-auto pe-0"><img src={iconTelefone} /></div>
                    <div className="col-md-auto">
                      <h4>Ligue ou chame no Whats</h4>
                      <a href='tel:5511992074058' className='me-1'>11 99207-4058</a> | <a href="https://api.whatsapp.com/send?phone=5511966475166&&text=Olá vim através do site Control Química Dedetizadora e gostaria de fazer um orçamento" className='ms-1'>11 96647-5166</a>
                    </div>
                  </div>
                  <div className="row linha">
                    <div className="col-md-auto pe-0"><img src={iconEmail} /></div>
                    <div className="col-md-auto">
                      <h4>Suporte por e-mail</h4>
                      <a href='mailto:adm@controlquimicaddt.com.br' className='d-flex me-1'>adm@controlquimicaddt.com.br</a>
                      <a href='mailto:vendas@controlquimicaddt.com.br' className='d-flex me-1'>vendas@controlquimicaddt.com.br</a>
                      <a href='mailto:tecnico@controlquimicaddt.com.br' className='d-flex me-1'>tecnico@controlquimicaddt.com.br</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line d-none d-md-flex"></div>
              <div className="col-12 col-md-7">
                <div className="contact-lead">
                  <h2>Nos envie uma mensagem.</h2>
                  <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                      nome: '',
                      email: '',
                      telefone: '',
                      mensagem: ''
                    }}
                  >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                      <Form noValidate onSubmit={handleSubmit}>
                        <Row  >
                          <Form.Group as={Col} className='col-12' md="12" controlId="validationFormik01">
                            <InputGroup hasValidation>
                              <Form.Control
                                type="nome"
                                placeholder="Nome"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                                isInvalid={!!errors.nome}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.nome}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group as={Col} md="12" controlId="validationFormik02">
                            <InputGroup hasValidation>
                              <Form.Control
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Row>
                        <Row  >
                          <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <InputGroup hasValidation>
                              <Form.Control
                                type="telefone"
                                placeholder="Telefone"
                                name="telefone"
                                value={values.telefone}
                                onChange={handleChange}
                                isInvalid={!!errors.telefone}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.telefone}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} md="12" controlId="validationFormik04">
                            <InputGroup hasValidation>
                              <Form.Control
                                type="text"
                                placeholder="Mensagem"
                                name="mensagem"
                                value={values.mensagem}
                                onChange={handleChange}
                                isInvalid={!!errors.mensagem}
                                as="textarea"
                                className="textarea"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.mensagem}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                        </Row>
                        <Button type="submit" className='btn-solicitar-orcamento-form'>Enviar</Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='rodape'>
        <div className="container">
          <div className="row mt-md-4">
            <div className="col-md-6">
              <p className='mt-5'>@2024 Control Química Dedetizadora. Todos os Direitos Reservados</p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <p className='mt-0 mt-md-5'>Desenvolvido por: <a href="https://api.whatsapp.com/send?phone=5511998702675&&text=Olá vim através do site Control Química Dedetizadora, gostaria de fazer um orçamento" ><img src={logoFennecFox} /></a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

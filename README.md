#Criando uma API para consumir dados

<h2>Primeiras impressões de um dev com API, GIT, GITHUB,NODEJS,REACT</h2>

<h3>Descrição</h3>
<p>Bem-vindos ao meu projeto!
  Aqui você encontrará um ambiente de informação para o desenvolvimento de uma API 
  partindo de uma premissa de um dev que esta começando a trabalhar com essas ferramentas.
  Uma API desenvolvida com Node.js para comunicar com uma API externa(starWars) e retorna os dados trabalhados para o cliente. Esta aplicação deve seguir as diretrizes REST, 
  garantindo que a comunicação entre o servidor e o cliente seja super suave e padronizada. 
</p>

<h3>API starWar</h3>
<p>
  A API de Star Wars, ou "swapi" (Swah-pee) é a primeira fonte de dados quantificada e acessível programaticamente do mundo para todos os dados do universo canônico de Star Wars!
</p>
<p>A API oferece o seguinte endpoints na documentação, entretanto com os teste utilizamos outros, como veremos adiante.
<br/>https://swapi.dev/api/
 <ul>
   <li>/people/ -- obtenha todos os recursos das pessoas</li>
   <li>/people/:id/ -- obter um recurso específico de pessoas</li>
   <li>/people/schema/ -- exibir o esquema JSON para este recurso</li>
 </ul> 
<h2>Partindo dessas informações, qual seria o desafio?</h2>
Desenvolver uma API REST com as seguintes funcionalidades: o cliente vai  buscar um personagem no nosso frontend. 
Quando ele fizer essa busca, ela vai se conectar à nossa API no backend. Nossa API, por sua vez, vai solicitar as informações 
do personagem na API da Star Wars e trazer o resultado para o cliente. Na apresentação do resultado, vai ser incluido um bnt/link
para adicionar o personagem a uma lista de favoritos e outro bnt/link para mostrar a lista completa dos favoritos.
</p>

<h3>Tecnologias utilizadas</h3>

<ul>
  <li>Node.js: Para o desenvolvimento do servidor.</li>
  <li>Express: Estrutura para facilitar a criação da API.</li>
  <li>React: Para construir uma interface de usuário dinâmica.</li>
  <li>REST: Para padronizar a comunicação entre a API e o cliente.</li>
 </ul> 

<h2>Visão Backend</h2>

<h4>Inicio</h4>>

<p>A primeira providencia que devemos tomar quando iniciamos qualquer projeto, que vamos trabalhar, é buscar informações. 
É uma lição que aprendi desde os tempos da faculdade e que levo comigo até os dias atuais.Informação é poder!</p>

<p><strong>A pergunta que devemos fazer é essa:<br/>
  Onde é que fui me meter?rsrsr(só para descontrair)</strong></p>
  <p>Agora falando serio.Vamos as perguntas de fato.</p>
<p>O que é: API, NodeJs, React, Rest, Git, GitHUB, Express, Cors, Nodemon, Endpoints, git, gitHub</p>
<p>Na verdade já tinhamos ouvido falar dessas tecnologias ,só não tinhamos trabalhado  com elas.</p>
<p>Para responder todas as essas perguntas vamos ao: pai, mãe, irmão, professor... de todo dev, a famosa "web", 
  com seus recursos ilimitados e muita disponibilidade em ajudar com: youtube, foruns, documentação, blogs, cursos on-line, tudo gratis(nem todos os cursos) e disponivel 24 horas todos os dias </p>
<h2>Fontes pesquisadas</h2>
<ul>
   <li>1° Youtube - https://www.youtube.com/</li>
   <li>2° Google - www.google.com.br</li>
   <li>3° Nodejs - https://nodejs.org/pt</li>
   <li>4° React - https://react.dev/</li>
   <li>5° Express - https://expressjs.com/pt-br/</li>
   <li>6° Cors - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS</li>
   <li>7° Nodemon - https://www.npmjs.com/package/nodemon</li>
   <li>8° Rest - https://pt.wikipedia.org/wiki/REST</li>
   <li>9° API - https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es </li>  
   <li>10°Git - https://git-scm.com/</li>
   <li>11°GitHub - https://github.com/ </li>
 </ul> 
 <p>Obs:O visual code que uso no projeto não precisei estudar, pois já utilizo ele para criação de games junto com a unity.</p>
 <p>Realizada essa etapa vamos botar a mão na massa!Ops, desculpe! no codigo</p>
 <p>Antes mesmo de comecar a programar devemos preparar primeiramente  o ambiente de trabalho que vai ser realizado, em nosso 
   caso fazer os downloads e instalar as bibliotecas nescessarias para o projeto</p>
   
<h2>Setup</h2>
<h4>Iniciando os trabalhos</h4>
<h4>Instalação dos aplicativos</h4>
<ul>
<li>1° Node - https://nodejs.org/en/download/package-manager</li>
<li>2° Visual code - https://code.visualstudio.com/download</li>
<li>3° Git - https://git-scm.com/downloads </li>  
<li>4° GitHub - Cadastro </li>
</ul>
<p>As versões das tecnologias que uso no projeto</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/Versoes.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
<p>img:1</p>

<p>Vamos começar a desenvolver o nosso aplicativo, abrindo o prompt(no meu caso o prompt do windows) para criarmos as pastas e instalarmos as bibliotecas.</p>
<ul>
   <li>1º criamos a pasta => <strong>mkdir</strong></li>
   <li>2º Entramos na pasta =>  <strong>cd ./pasta/</strong> </li>
   <li>3° criamos o projeto => <strong>npm init</strong></li>
   <li>Obs: na web tem varios tutoriais passo a passo para estes procedimentos</li>
   <li>Uma imagem abaixo para melhor exemplificar o processo:</li>   
 </ul> 
<p><br/>
  <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img1.jpg" alt="Iniciando o projeto" /></p>
  <p>img:2</p>
  <p>Logo em seguida instalamo as bibliotecas são 3 no total</p>
  <ul>
   <li>1º express => <strong>npm i express</strong></li>
   <li>2º nodemon =><strong> npm i nodemon</strong></li>
   <li>3° cors => <strong>npm i cors</strong></li>
   <li>4º Vamos abrir o visual code => <strong> code .</strong> </li>
 </ul> 
<p>Caso haja alguma dificuldade , busque auxilio no google ou no youtube , pois estão recheado de tutorias explicando cada processo desses realizado</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img2.jpg" alt="Instalações das bibliotecas" /></p>
<p>img:3</p>
<p>Chegou até aqui! Tudo tranquilo? Tá suave? Se divertindo? Então vamos lá...</p>
<p>Para ver se esta tudo certo voce pode dar os seguintes comandos, obeserve que na img de minhas versões mostro o resultado destes comandos</p>
<ul>
  <li>1º <strong> git --version </strong> Para ver se o git esta instalado</li>
  <li>2º <strong> node --version</strong> Para ver se o node esta instalado</li>
  <li>3° <strong> code --version</strong> Para ver se visual code esta instalado</li>
 </ul> 
<p>Obs: se o comando <strong>code .</strong> não abrir o visual code automaticamente , reinstale o programa , comigo resolveu.</p>
<p>
  <p>Imagem do visual code aberto após o comando code .</p>
   <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img3.jpg" alt="Visualização do projeto no visual code" /></p>
   <p>img:4</p>
   Obs: Veja a sua tela esta acompanhando as setas que indico para os pontos a serem observados.
</p>
<h2>PRONTO!!!!!!!! TUDO CERTO !!!!! VAMOS COMEÇAR OS PROCEDIMENTOS</h2>
<h3>Instalando o servidor</h3>
<p>Na pagina <strong>serve.js</strong> efetue os seguintes comandos: <strong> const express =require('express'); </strong> e <strong> const app = express();</strong> e <strong> const app.use(express);</strong></p>
<p>Na pagina digite</p>
<p>
<strong>
app.get('/', (req,res) =>{<br />
  res.send('starWars');{<br />
});  
</strong>
<strong>
app.listen(3000,() =>{<br />
  console.log('Testando o Servidor');<br />
});  
</strong>
<p>
  <p>Veja a imagem para uma comparação</p>
  <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img4.jpg" alt="Iniciando o servidor" /></p>
  <p>img:5</p>
<p>Para um melhor aproveitamento, vamos verificar alguns passos a serem seguido para a nossa primeira experiencia no desenvolvimento de uma API.</p>
<p>Aqui vamos fazer um cheklist para o nosso passo a passo!</p>
<ul>
   <li><h3>[x] Objetivo :criar Uma Api</h3></h3></li>
  <li>1º Inciar o projeto: Para isso abra o terminal no visual code e digite:<strong> npm init -y</strong> <img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>2º Instalar as dependencias: Se voce seguiu o passo a passo já estão instaladas<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>3º Criar uma rota para acessar uma API:Crie um arquivo rotas.js nele importe a biblioteca express com os seguintes comandos:
    <strong> const express =require('express'); </strong> e <strong> const rotas = express.Routers();</strong>
    <p>Imagem referente a este procedimento <img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></p>
    <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img5.jpg" alt="Criando rotas" /></p> 
    <p>img:6</p>
  </li>
  <li><p>4º Servir a API<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></p>
    <p>Para não ter que escrever muito veja a imagem abaixo como é a implementação para este serviço:</p>
    <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/consumindoDadosDaAPI.jpg" alt="Consumindo dados da API criada" /></p>
    <p>img:7</p>
  </li>
  <li>5° Habilitar o CORS : <stron>const cors = require('cors');</stron><img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
  <li>6º Habilitar o NODEMON : Observe que esta etapa já foi realizada conforme a img 3, caso voce não tenha feito verifique a imagem novamente.<img src="http://www.soumaisconquista.com/gitHub/icone1.png" alt="icone" /></li>
 </ul> 
<h2>PRONTO, seis passos cocluidos e o nosso servidor esta ok! Backend cocluido! Vamos para o frontend</h2>
<h2>Visão Frontend</h2>
<p>Deixe o visualcode do backend aberto, e abra novamente o prompt do se computador.</p>
<p>Nele digite : <strong>npx create-react-app app</strong></p>
<p>Aguarde... demora um pouquinho!</p>
<p>No final deve apresentar algo semelhante a tela logo abaixo! Obs: Selecione a pasta que voce quer baixar com o comando <strong>cd ./pasta/.</strong> </p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img1.jpg" alt="Instalando o react" /></p>
<p>img:8</p>
<p>Vamos instalar agora a biblioteca axios</p>
<p>Entre na pasta app</p>
<p>Para instalar o axios escreva no prompt: <strong>npm i axios</strong></p>
<p>Já no visual code observe as pasta e os arquivos pela imagem apresentada.</p>
<p>Veja que muita coisa retiramos por não precisar para o nosso projeto. </p>
<p>Mais é opcional!</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img3.jpg" alt="Tela do visual code apresentando o React" /></p>
<p>img:9</p>
<h3>Agora vamos trabalhar no frontend! Lembrando que o backend esta rodando e ativo em outra janela, na porta 3000</h3>
<ul>
   <li>
     <p>1º Primeiro vamos ligar o nosso servidor. No terminal digite na pasta app: <strong> npm star</strong></p>
     <p>Deve aparecer uma mensagem informando que a porta 3000 esta em uso, apert y que vai direcionar para outra porta.</p>
     <p>Não dando erro o servidor estara ligado e operante</p>
     <p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img4.jpg" alt="Acionando o servidor" /></p>
     <p>img:10</p>
   </li>
  <li>    
     <p>2º Lembre-se que no frontend podemos codificar, mais ele se caracteriza mais pela parte visual.</p>
     <p>Portanto para isso vamos criar um formulario basico para teste</p>
     <p>
        
    <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><a href='*' >Lista de Favoritos</a></div>
               <h2>Busque seu personagem </h2>
                <form className ='formulario'>
                <input 
                id='inputID'
                type='text'
                name='personagem'
                placeholder='personagem'
                required
                />
                <button 
                className='btn-login'
                type='submit'              
                >Pesquisar</button>
                </form>
           </div>

     </p>
     <p> <img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img5.jpg" alt="Teste de servidor" /></p>    
   </li>  
 </ul> 
 <h3>Vamos testar o botão do formulario .</h3>
 <p>Para isso criamos uma função colocamos um console log e clicamos.Verificamos no console se hove resposta.</p>
 <p>

function App() {
    const [personagem, setPersonagem] = useState('');  
    const handlePesquisar = async (e) =>{
    e.preventDefault();
    console.log(personagem);
    const response = await axios.post('http://localhost:3000/pesquisar',JSON.stringify({personagem}),    {
        headers:{ 'Content-Type' : 'application/json'}
    }
  );
};
   
 </p>
 <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testeCliqueNoBotao.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
 <p>Img:11</p>
 <h2>Momento reflexão</h2>
 <p>Já instalamos os aplicativos e tambem as bibliotecas necessárias, criamos um listener para o nosso servidor backend na porta 3000.
   Testamos o servidor no backend acessando o endereço: http://localhost:3000. Também configuramos uma rota no backend e criamos
   um array de dados que foram consumidos perfeitamente pela nossa API.
No frontend, inicializamos o servidor, provavelmente na porta XXXX, e testamos no navegador com o endereço: http://localhost:XXXX 
   . Além disso, criamos um formulário básico e testamos nosso botão.
 </p>
 <p>Continuando...</p>
 <p>Lembrando que o nosso desafio é buscar um personagem pelo nome em uma API externa(starWars) passando a requisição por nossa api que retorna para o nosso frontend o personagem com seus 
 dados e caracteristicas, nesse retorno o personagem vem acompanhado com um bt/link que quando clicado vai adiciona-lo em uma base de dados de favoritos, onde podera ser chamada pelo frontend em um bt/link para acessar a lista de favoritos</p>
 <p>Mais ou menos assim</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/index2.jpg" alt="Rascunho de tela do app" /></p>
 <p><img:12</p>
<p>Entendido o problema vamos do velho jargão de programador "vamos dividir para conquista"!</p>                         
<p>API criada , servidores iniciado , criamos o ouvido no backende (metodo get) e a boca no frontend (formulario)</p>
<p>Vamos ver nossa API consumindo a API da starWars</p>
<p>Codigo aqui</p>
<h2>Teste dos endpoints</h2>
<ul>
   <li><strong>/people/1 </strong>-- obter um recurso específico de pessoas</li>
   <li><strong>/people/</strong> -- obtenha todos os recursos das pessoas</li>
   <li><strong>/people/results/</strong> -- um array com os dados dos personagens</li>
  <li> Selecionando apenas um personagem</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndPoint1.jpg" alt="Teste endpoint 1" /> 
    <p>img:13</p></li>
 
  <li>Voltando toda a estrutura da API em formato de objeto</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndpoint2.jpg" alt="Teste endpoint 2" />
  <p>img:14</p></li>
  <li>Retorna um array somente com os personagens (pção escolhida para darmos prosseguimento)</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEnpoint3.jpg" alt="Teste endpoint 3" />
  <p>img:15</p>
  </li>
 </ul> 
<h2>Vamos testar a comunicação entre backend e frontend</h2>
<p>codigo</p>
<p>Aqui colocamos um evento onClick no formulario que dispara uma função que faz essa comunicação com o backend e
recebe a resposta.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/enviandoOnomeParaOservidor.jpg" alt="Enviando o nome para o servidor" /></p>
<p><img:16</p>
<h2>Vamos testar a comunicação entre frontend => backend => ApiStarwars => backend => frontend</h2>
<p>
   <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><a href='*' >Lista de Favoritos</a></div>
               <h2>Busque seu personagem </h2>
                <form className ='formulario'>
                <input 
                id='inputID'
                type='text'
                name='personagem'
                placeholder='personagem'
                required
                onChange={(e) => setPersonagem(e.target.value)} />
                <button 
                className='btn-login'
                type='submit'
                onClick={(e) => handlePesquisar(e)}
                >Pesquisar</button>
                </form>
           </div>
</p>
<p>Ao ser acionada pelo cliente neste momento sem nome de personagem, minha API aciona uma função que busca na API starWars os dados e retorna para
o cliente todos os personagens em um array</p>
<p>Veja a imagem abaixo</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracaoBackendFrontendAPIstarWars.jpg" alt="Integração frontEnd, bacKend e API" /></p>
        <p>img:17</p>
<h3>Vencida esta etapa vamos adiante!</h3>
<p>Nossa API já esta comunicando com o front atraves de um retorno da API starwAR.</p>
<p>Esta na hora de comerçarmos trabalhar o retorno da API externa, ou seja, devolver ao cliente somente o que ele solicitou.</p>
<p>Como mostramos a seguir:</p>
<p>
  app.get('/', async(req,res) => {  
    const{data} = await axios('https://swapi.dev/api/people/')     
    let testePesquisa = data.results;
    const retornoPesquisa = 
    testePesquisa.find((persona) => persona.name === "Luke Skywalker");   
    return res.json(retornoPesquisa);
 });
</p>
<p>Aqui utilizamos o methodo find passando o nome que vem do frontend para selecionarmos o personagem escolhido e devolvermos o resultado ao cliente.</p>
<p>Veja a imagem</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/pesquisaPorNome.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
        <p>img:18</p>
<p>Neste momento o negocio travou não conseguimos mostrar para o nosso cliente o resultado na tela, ou seja a resposta esta chegando no frontEnd mais fica no console.  
</p>

<h2>Contribuições são bem vindas</h2>
<p>Por ser o nosso primeiro projeto com essas tecnologias , não concluimos o desafio com todo processo realizado , caso seja do seu interesse .<br />
  Vamos precisar para terminar:
</p>
<ul>
   <li>Mostrar na tela o resultado da pesquisa</li>
  <li>Implementar uma base de dados para colocarmos os personagens na lista de favoritos</li>
  <li>Criar uma função para responder para o frontend quando solcitado a lista de favoritos</li>
 </ul> 

 <h2>Conclusão</h2> 
 <p>
   Desenvolvendo com Paixão<br/>
Desenvolver é um ciclo constante de teste => implementação => teste => implementação. Isso requer estudo, paciência e, claro, muito café! ☕️ <br/>

Para aqueles que amam programar, o mundo se abre em um leque infinito de possibilidades. Temos a incrível oportunidade de transformar ideias 
em realidade, seja criando uma API, um jogo, um aplicativo ou um site, entre outras coisas.<br/>
Pessoalmente, gosto de desenvolver e aprender, e sempre fico maravilhado com as novas possibilidades que surgem. Mesmo quando não consigo completar um
desafio dentro do prazo, fico animado por ter sido apresentado a ferramentas que eu conhecia, mas com as quais ainda não havia trabalhado.<br/>

Aqui, vou compartilhar alguns dos projetos que desenvolvi e espero que eles possam contribuir de alguma forma com a comunidade.<br/>

<h2>Um forte abraço e até a próxima!</h2>
  
      
 </p>

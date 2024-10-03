#"Desenvolvimento de uma Aplicação Full Stack com Node.js e React: Utilizando uma API para Integração entre Front-end e Back-end"

<h2>Prepare-se para embarcar em uma jornada emocionante pelo vasto universo da tecnologia! Neste projeto, exploraremos temas fascinantes como API, Git, GitHub, Node.js, React, Express, Nodemon e CORS. Estou animado para mergulhar fundo nessas ferramentas e compartilhar cada descoberta com você.<br />
Vou revelar também meu método especial de aprendizado, que transforma o desafio de adquirir novas habilidades em uma aventura inspiradora. Junte-se a mim nessa experiência única e descubra juntos como podemos desbravar o desconhecido, desvelar inovações e expandir nossos horizontes no desenvolvimento de aplicações! O futuro nos espera, e estou ansioso para tê-lo ao meu lado nesta jornada épica! Vamos nessa! 🚀</h2>
Warning: atualizado em 01/10/2024 Organizando o README, corrigindo a apresentaçãos dos codigos, melhorando as imagens, melhorando os textos, lapidando o prototipo a primeira após a publicação<br />
Obs: outras atualizações estão no final da pagina.
<h3>Descrição</h3>
<p>Bem-vindos ao meu projeto!</p>
<p>
Aqui você encontrará um ambiente de informação e animação para o desenvolvimento de uma API, com base na experiência de um desenvolvedor (com certa vivência) que está começando a trabalhar com essas ferramentas agora. É uma oportunidade única! Acompanhe toda a metodologia que utilizo quando enfrento uma nova proposta de trabalho.</p>
<p>
Vamos desenvolver uma API muito interessante utilizando Node.js para o back-end e React no front-end. Nossa API deverá se comunicar com uma API externa (utilizaremos a da Star Wars) para atender às solicitações dos usuários que tenham acesso ao nosso sistema. Esta aplicação deverá seguir as diretrizes REST, garantindo que a comunicação entre o servidor e o cliente seja suave e padronizada.<p>
<p>
Um adendo: apesar de desenvolver aplicações web há muitos anos, eu nunca trabalhei com essas ferramentas. Ou seja, é uma ótima oportunidade para quem está começando acompanhar. Trata-se do início de uma jornada, onde a próxima estação é o desenvolvimento de uma aplicação completa. Vamos trabalhar tanto na frente quanto nos bastidores de um sistema. Resolveremos um problema e, no final, sairemos melhores do que entramos, aprendendo novos conhecimentos que são super úteis no mercado de trabalho atualmente.<p>
<p>
Animados? Espero que sim! Você vai vivenciar uma experiência única e empolgante. A inquietude na vida de um desenvolvedor Full Stack nos permite não ficarmos presos (digo restritamente, pois precisamos entender os princípios que regem cada tema; não dá para criar um site e colocar o texto amarelo sobre um vermelho cintilante) a nenhuma linguagem ou conceito de design; somos livres para desenvolver o que nos inspirar. Antes deste projeto, por exemplo, eu já estava criando um game com C# e Unity, e logo colocarei ele aqui também no GitHub. Neste momento, vou focar neste projeto. Venha comigo nesta jornada, e juntos vamos descobrir as possibilidades e oportunidades que essas novas ferramentas (digo "novas" para mim) podem oferecer. Vai ser divertido!!&nbsp;&nbsp;let's go!  
</p>
<h2>Prototipo</h2>
<p>Fala devs, não ficou muito bem sincronizado mais já podemos ter uma ideia de como vai ficar a nossa aplicação, até o final do projeto ele fica perfeito.Neste gif vcs já vão poder acompanhar minha metodologia de trabalho,
1º penso na ideia/conceito 2º executo/implemento 3º vou lapidando/cor,fonte,desenhos. Vou colocar as versões  na base do projeto,conforme a lapidação vai sendo realizada. VEJA lá ! E um forte abraço!
</p>
<p>
  <img src="http://www.soumaisconquista.com/gitHub/gifAnimado/prototipo14.gif" alt="Prototipo do sistema em gif animado" /><br /> 
</p>
<p>Para organizamos nosso projeto até a sua conclusão, vamos a um checklist basico:</p>
<p>
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;iniciar o projeto; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Instalar as bibliotecas; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Express; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar servidor com o express no Back-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma rota para acessar nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Nodemon para sempre reiniciar nosso servidor; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Servir a API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Cors; <br /> 
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar o projeto no React-Front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o servidor no Front-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar o formulario; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar estilo para o formulario e pagina; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Testar clique no botão; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma base de dados no back end para ser cosumida no front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Utilizar o fetch para consumir nossa API no backend; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Usar try e o catch; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Usar o Axio; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Acessar a API da Star Wars; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Testar endpoints fornecidos na documentação; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Analisar retornos dos end points.Que tipos retornam?; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Testar a pesquisa pelo nome do personagem enviado pelo formulario; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de consumo da API externa , atraves de nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Mostrar resultado da consulta pelo nome da API  Star Wars na tela do usuario; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar base de dados para cadastramento de personagem na lista de favoritos; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma função para mostrar lista de personagem; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Apresentar dados do personagem após ser clicado na lista; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Implementar logica de erro de: Digitação, Ausencia de personagem, Nome invalido; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Implementar logica de apresentação do nome dos filmes em vez de URL <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Trazer o conceito de componentes para o projeto; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Apresentar o aplicativo como mostrado no prototipo; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Desenvolver uma API rest para atualização de personagens cadastrado; <br />
  
 
  
</p>
<h3>API starWar - Vamos conhece-la um pouco já de inicio!</h3>
<p>
  A API de Star Wars, ou "swapi" (Swah-pee) é a primeira fonte de dados quantificada e acessível programaticamente do mundo para todos os dados do universo canônico de Star Wars!(Retirado do site)
</p>
<p>A API oferece o seguinte endpoints na sua documentação, entretanto com os teste realizados optamos utilizar outros, como veremos adiante.
<br/>https://swapi.dev/api/
 <ul>
   <li>/people/ -- obtenha todos os recursos de um personagem</li>
   <li>/people/:id/ -- obter um recurso específico de um personagem</li>
   <li>/people/schema/ -- exibir o esquema JSON para lista de personagens</li>
 </ul> 
<h2>Partindo dessas primeiras informações!!&nbsp;&nbsp;<strong>Qual seria de fato o nosso desafio?</strong></h2>
Este projeto têm como objetivo criar uma API REST que permitirá aos fãns da série Star Wars, buscar seus personagens favoritos, através de um Front-end interativo, que deve facilitar a busca por seu personagem favorito.
Ao receber os dados da pesquisa do usuario, nossa aplicação Front-end deve comunicar com a API desenvolvida por nós no Back-end, que, por sua vez, fará uma solicitação à
API oficial da Star Wars para obter o personagem invocado na pesquisa.Observem, vamos utilizar a Api da Star - Wars como nosso banco de dados. Vamos receber os dados da API externa, formata-loss e responder 
ao nosso front -end que por sua vez repassa para o usuario.

As funcionalidades principais de no aplicação incluem:
<ul>
<li><strong>Busca de Personagens:</strong> O cliente poderá buscar pelo nome um personagem.Nossa API deve receber essa solicitação e buscar a resposta na API da star - Wars .</li>

<li><strong>Lista de Favoritos:</strong> Após a nossa API apresentar os resultados ao usuario, será disponibilizado um botão/link que permitirá adicionar o personagem à uma lista de favoritos.Atenção, vamos precisar guardar essa informação
em alguma base de dados(a definir) persistente ou não.</li>

<li><strong>Visualização de Favoritos:</strong> Sera fornecido ao usuario um segundo botão/link que o possibilitará  visualizar sua lista de personagens favoritos, proporcionando assim uma experiência rica e personalizada.</li>
</ul>
Neste projeto vamos integrar as tecnologias Node.js e React, criando uma aplicação completa entre Front-end e back-end, possibilitando criar uma experiência rica, fluida e dinâmica para os nossos usuários.
</p>

<h3>Tecnologias utilizadas</h3>
<p><img src="http://www.soumaisconquista.com/gitHub/Badges/Badges_REACT.png" alt="Badges_REACT" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/badges_express.png" alt="Badges_express" />
&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/badges_nodejs.png" alt="Badges_nodeJS" />
</p>
<ol>
  <li><strong>Node.js:</strong> Para o desenvolvimento no servidor.</li>
  <li><strong>Express:</strong> Biblioteca para facilitar a criação da API.</li>
  <li><strong>React:</strong> Framework para construir uma interface de usuário dinâmica.</li>
  <li><strong>REST:</strong> Diretrizes para padronizar a comunicação entre a API e o cliente.</li>
 </ol> 

<h2>Introdução</h2>

<p>A primeira providência a ser tomada ao iniciar qualquer projeto (não apenas os tecnológicos) é a busca por informações relevantes. Essa lição eu aprendi durante minha época de estudante e permanece comigo até hoje: "informação é poder!"

Buscar conhecimento e entender em qual contexto que vamos trabalhar, antes de avançarmos... É fundamental para o sucesso de um projeto. Ao reunir dados e insights, podemos tomar decisões mais assertivas e criar soluções mais eficazes.</p>

<p>Revise novamente o desafio e pense... pense novamente!&nbsp;Quais perguntas devemos fazer, a principio, tudo é novo?&nbsp; Uma pergunta eficaz ajuda na resolução do problema.<br/>   
  <p>Para quem está começando! Começe com o basico, se é muita coisa para aprender, faça a divisão em parte menores. </p>
<p>Como essas ferramentas não fazem parte da nossa rotina de trabalho, devemos começar perguntando para cada tecnologia que vamos usar: <br /><br />
  1º -O que? <br />
  2º - O que faz?  <br />
  3º - E como faz? <br /><br />
 </p>
 <p>
   Para exemplo vamos pegar o nodeJS, observe:<br /><br />
  1º O que é?<br /><br />  
   Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 
   A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.<br /><br />
  2º O que faz ou para que serve?<br /><br />
   O Node. js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador. Quando executamos um comando escrito 
   em JavaScript, o Node. js interpreta esse comando e faz a sua conversão para a linguagem de máquina a ser executada pelo computador.<br /><br />
   3º E como faz ou como posso usar?<br /><br />
  <p> Abra o terminal ou prompt de comando e navegue até o diretório onde deseja criar seu projeto. Em seguida, execute o comando<br /></p>
   
   ```
    npm init
```
   
   <p>Responda às perguntas do assistente de configuração para criar um arquivo package onde é guardado as informações do projeto.</p>
   <p>Para não responder perguntas</p>

   ```
    npm init -y
  ```

 <p> Veja que uma rapida consulta na web e, já conseguimos respostas para nossas perguntas iniciais , já podemos dizer então que o nodeJS é multiplataforma, o codigo não é compilado, usa a linguagem Java Script e roda fora do navegador,utiliza arquitetura assíncrona e orientada por eventos.
 Voce pode esta pensando! Assincrona? Orientada por eventos? Esta me xingando!!! Veja no site da IBM uma explicação:&nbsp;&nbsp;<a href="https://www.ibm.com/br-pt/topics/event-driven-architecture">IBM</a>
 </p>
<p>Na verdade particularmente já tinha visto ou lido sobre todas estas tecnologias ,mais de fato, não ter realizado nenhum trabalho com elas.No momento estava voltado para c# e unity na criação de jogos digitais, mais surgiu esse desafio e, deixei 
o game um pouquinho de lado. Mas, aguardem, pois vou termina-lo e colocar aqui no gitHUB tambem, é bem simples mais é o primeiro que faço na unity.</p>
<p>Voltando ao desafio, para responder essas perguntas para todas as tecnologias, vamos ao: pai, mãe, irmão, professor... de todo dev.A famosa "web", 
  com seus recursos ilimitados e, muita, mais muita mesmo, disponibilidade em ajudar, apresento-lhes os meus personagens favoritos da web : youtube, foruns, documentação, blogs, cursos on-line, tudo gratis(nem todos os cursos) e disponivel 24 horas todos os dias(não sei se lembrei de todos.) </p>
<h2>A dica aqui é: ESTUDE,TESTE,ESTUDE, TESTE...Fontes pesquisadas</h2>
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
 <h2>Dá uma passada em cada plataforma e confira o que pode ser útil para o projeto. Você pode encontrar coisas bem interessantes! </h2>
 <p>Obs:O visual code não precisei estudar, pois já utilizo ele para criação de games junto com a unity.Caso voce não o conheça acrecente a lista por gentileza</p>
 <p>Realizada essa etapa vamos botar a mão na massa!Ops, desculpe! no codigo</p>
 <p>Antes de iniciar qualquer fase na programação, é fundamental preparar adequadamente o ambiente de trabalho verificando nossas ferramentas de trabalho. No nosso caso, isso envolve o download e a instalação das bibliotecas necessárias para o projeto.

Essa etapa inicial é crucial e obrigatoria, não avance sem completa-la com exito.Pois garante que todas as ferramentas e dependências estejam prontamente disponíveis para execução e conclusão de nosso desafio, permitindo um fluxo de trabalho mais eficiente e evitando possíveis obstáculos durante o nosso desenvolvimento.<br />
Geralmente prototipando a minha aplicação, seja no papel ou mesmo em um rascunho digital. Para este desafio devido ao curto espaço de tempo E, para entrega do projeto no prazo, não fiz o prototipo, mais agora que já entreguei o desafio mesmo que de forma incompleta, estou providenciando o prototipo atravez de um gif animado.
</p>
<h2>Visão - Back-End</h2>  
<h2>Setup</h2>
<h4>Iniciando os trabalhos</h4>
<h4>Instalação dos aplicativos</h4>
<ul>
<li>1° Node - https://nodejs.org/en/download/package-manager</li>
<li>2° Visual code - https://code.visualstudio.com/download</li>
<li>3° Git - https://git-scm.com/downloads </li>  
<li>4° GitHub - Realizar o cadastro(o git e o gitHub é só mesmo para compartilhar o projeto, caso não queira pode desconsiderar as instalações neste momento</li>
</ul>
<p>Veja as versões que uso neste projeto</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/Versoes2.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>

<p>Vamos começar o nosso desafio, abrindo o <strong>Prompt de Comando</strong> para criarmos a estrutura de pastas, onde guardaremos o nosso projeto e vamos instalar as bibliotecas.
Trata-se de algo pessoal e pode ser estruturado da forma que for mais confortavel para você.
</p>

<h2>Comandos iniciais no Prompt</h2>
<p>1º Criar a pasta =></p> 
<p>
  
  ```
  mkdir wars
  ```
</p> 
 <p> 2º Entrar na pasta => </p>
<p>

   ```
  cd ./wars/
 ```
</p>

<p>3° Criar o projeto =></p> 
<p>
  
  ``` 
  npm init
   ```
  </p>
<p>  Obs: Na internet, há diversos tutoriais disponíveis que podem auxiliar no passo a passo para a realização desses procedimentos.</p>
<p>Acima eu passo os comandos para criação de pasta, acesso a pasta e tambem como iniciar um projeto nodejs na pasta desejada, isso
tudo pelo prompt, mais voce pode criar a sua propria estrutura de pastas da maneira que for mais confortavel para sua experiencia de desenvolvimento.</p>
<p> Veja na imagem abaixo como ficou no meu pc, para exemplificar melhor o processo:  </p>

<p><br/>
 <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img1a.jpg" alt="Iniciando o projeto" /></p>
 <h2>Instalações das bibliotecas</h2>
  
<p> 1º express => </p>
<p>
  
  ```
  npm i express
 ```
</p>
<p>2º nodemon =></p> 
<p>

   ```
  npm i nodemon
 ```
</p>
<p>3° cors =></p> 
<p>

   ```
  npm i cors
 ```
</p>
<p>Veja como ficou a minha instalação</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img2a.jpg" alt="Instalações das bibliotecas" /></p>
<p>Chegou até aqui! Tudo tranquilo? Tá suave? Se divertindo? Então vamos lá...</p>
<p>Para ver se deu tudo certo voce pode fazer os seguintes comandos, obeserve que na img1 - 'minhas versões', mostro o resultado destes comandos no meu prompt</p>

<p>1º Para ver se o git esta instalado</p>
<p>

  ```
  git --version
```
</p>
<p>2º Para ver se o node esta instalado</p>
<p>

  ```
  node --version
```
</p> 
<p>3°Para ver se visual code esta instalado</p>
<p>

  ```
  code --version
```
</p>

<h2>Abrindo o visual code</h2>
<p>
  
   ```
  code .
 ```
</p> 
<p>Obs: se o comando <strong>code .</strong> não abrir o visual code automaticamente , reinstale o programa.Comigo resolveu.</p>
<p>
  <p>Imagem do visual code aberto após o comando code .</p>
   <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img3a.jpg" alt="Visualização do projeto no visual code" /></p>  
   Obs:Compare sua tela com a minha, acompanhando as setas que indico na imagem para observar os pontos a serem considerados.
</p>
<h2>PRONTO!!!!!!!! TUDO CERTO !!!!! VAMOS COMEÇAR???</h2>
<p>Prometo tentar ser o mais didatico possivel, mais quero que entendam que tambem estou começando a trabalhar com estas tecnologias.</p>
<p>Na pagina <strong>serve.js</strong> efetue os seguintes comandos: <br /> <br />
<h2>Criando o servidor</h2>
 <p>
   
  ```
    const express =require('express');
    const app = express();
    const app.use(express);
  ```
</p>

<h2>Abrindo uma porta para o servidor</h2>
  
<p>

  ```
    app.listen(3000,() =>{
         console.log('Testando o Servidor');
 });
  ```
 </p>

<h2>Criando uma rota</h2>
<p>

  ```
    app.get('/', (req,res) =>{
         res.send('starWars');{
    });
  ```
</p>

<h2>Inicializando o servidor</h2>
<p>No terminal do visual code digite =></p>
<p>

  ```
    npm run start
  ```
</p>

  <p>Na imagem 5 os procedimentos podem ser observado no meu pc</p>
  <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img4a.jpg" alt="Iniciando o servidor" /></p>

<h2>Visão Frontend</h2>
<p>Pode deixar o visualcode do backend aberto, e abra novamente o prompt do seu computador.</p>
<p>Nele digite : <strong>npx create-react-app app</strong></p>
<p>Aguarde... demora um pouquinho!</p>
<p>No final deve apresentar algo semelhante a tela abaixo! Obs: Selecione a pasta que voce quer baixar com o comando <strong>cd ./pasta/.</strong> </p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img1.jpg" alt="Instalando o react" /></p>
<p>img:8</p>
<p>Vamos instalar agora a biblioteca axios</p>
<p>Entre na pasta app</p>
<p>Para instalar o axios escreva no prompt: <strong>npm i axios</strong></p>
<p>Já no visual code observe as pasta e os arquivos pela imagem apresentada.</p>
<p>Veja que muita coisa retiramos, por não precisar para o nosso projeto. </p>
<p>Mais é opcional!</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img3.jpg" alt="Tela do visual code apresentando o React" /></p>
<p>img:9</p>
<h3>Comandos no frontend! Lembrando que o backend esta rodando e, ativo na porta 3000</h3>
<ul>
   <li>
     <p>1º Primeiro vamos ativar o nosso servidor no Front End. No terminal digite na pasta app(se voce instalou o react na pasta app veja img 8): <strong> npm star</strong></p>
     <p>Deve aparecer uma mensagem informando que a porta 3000 esta em uso, apert y que vai direcionar para outra porta.</p>
     <p>Não dando erro o servidor estara ligado e operante</p>
     <p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img4.jpg" alt="Acionando o servidor" /></p>
     <p>img:10</p>
   </li>
  <li>    
     <p>2º Lembre-se que no frontend codificamos, mais ele se caracteriza mais pela parte visual.</p>
     <p>Portanto para isso vamos criar um formulario basico para teste</p>
     <p>
       
    ```    
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
     
     ```    
   </li> 
   <li> Resultado:</li>
   <li> <p> <img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img5.jpg" alt="Teste de servidor" /></p>  
   <p>img:11</p>   
   </li>
 </ul> 
 <h3>Vamos testar o botão do formulario .</h3>
 <p>Para isso criamos uma função com algum texto, colocamos um console log digitando <strong>console.log(funcaoCriada());</strong> e, clicamos.Verificamos no console se houve resposta atraves do texto passado na função.</p>
 <p>

<i>function App() {</i><br />
   <i> const [personagem, setPersonagem] = useState(''); </i>  <br /> 
   <i>  const handlePesquisar = async (e) =>{</i>  <br />
     
      <i>  e.preventDefault();</i>  <br />

           <i>console.log(personagem);</i>   <br /> 

         <i> const response = await axios.post('http://localhost:3000/pesquisar',JSON.stringify({personagem}),    {</i>  <br />
       <i>  headers:{ 'Content-Type' : 'application/json'}</i><br />      
     <i>}</i>  <br />
  <i>);</i><br />
<i>};</i><br />
   
 </p>
 <p>Resultado.</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testeCliqueNoBotao.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
 <p>Img:12</p>
 <h2>Momento reflexão</h2>
 <p>Após instalar os aplicativos e as bibliotecas necessárias, configuramos um listener para o nosso servidor back-end na porta 3000. Testamos o servidor acessando o endereço: <a href="http://localhost:3000">http://localhost:3000</a>. Além disso, configuramos uma rota no back-end e criamos um array de dados que foi consumido perfeitamente pela nossa API. No front-end, inicializamos o servidor, provavelmente na porta 3001, e testamos no navegador acessando: <a href="http://localhost:3001">http://localhost:3001</a>. Também criamos um formulário básico e testamos a funcionalidade do nosso botão.</p>
 <p>
   É importante lembrar que nosso desafio consiste em buscar um personagem pelo nome em uma API externa (Star Wars), encaminhando a requisição por meio de nossa API. Esta, por sua vez, retornará ao front-end os dados e as características do personagem. Junto com essas informações, o personagem virá acompanhado de um botão/link que, ao ser clicado, permitirá adicioná-lo a uma base de dados de favoritos. Essa lista de favoritos poderá ser acessada pelo front-end por meio de um botão/link dedicado.
 </p>
 <p>Mais ou menos assim</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/index2.jpg" alt="Rascunho de tela do app" /></p>
 <p><img:13</p>
<p>Entendido o problema vamos do velho jargão de programador "vamos dividir para conquista"!</p>                         
<p>API criada , servidores iniciado , criamos o ouvido no Back End (metodo get) e a boca no Front End (formulario)</p>
<p>Vamos testar nossa API consumindo a API da starWars</p>
  
<h2>Teste dos endpoints</h2>
<p>
   <p>
      Um personagem.<br />
     ```
    
       app.get('/', async(req,res) => {  
              const{data} = await axios('https://swapi.dev/api/people/1')
              return res.json(data)
        });
     ```
   </p>
    <p>
     Todos os personagens.Volta um objeto<br />
      
      ```
       app.get('/', async(req,res) => { 
               const{data} = await axios('https://swapi.dev/api/people/')
               return res.json(data) 
        });
 
      ```
</p>
   <p>
     Todos os personagem. Mais volta um array.<br />
     
     ```
      app.get('/', async(req,res) => { 
              const{data} = await axios('https://swapi.dev/api/people/')
              return res.json(data.results)
        });
     ```
</p>
  <ul>
   <li><strong>/people/1 </strong>-- obter um recurso específico de pessoas</li>
   <li><strong>/people/</strong> -- obtenha todos os recursos das pessoas</li>
   <li><strong>/people/results/</strong> -- um array com os dados dos personagens</li>
  <li> Selecionando apenas um personagem</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndPoint1.jpg" alt="Teste endpoint 1" /> 
    <p>img:14</p></li>
 
  <li>Voltando toda a estrutura da API em formato de objeto</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndpoint2.jpg" alt="Teste endpoint 2" />
  <p>img:15</p></li>
  <li>Retorna um array somente com os personagens (opção escolhida para darmos prosseguimento)</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEnpoint3.jpg" alt="Teste endpoint 3" />
  <p>img:16</p>
  </li>
 </ul> 
<h2>Vamos testar a comunicação entre backend e frontend</h2>
<p>
  
```   
 function App() { 
               <i>const handlePesquisar = async (e) =>{   
                 <i> const response = await axios.post('http://localhost:3000/pesquisar'),
                 <i> headers:{ 'Content-Type' : 'application/json'}   
          }
      );
 }; 
       return (
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
                                            onClick={(e) => handlePesquisar(e)}>
                                            Pesquisar
                                         </button>
                                     </form>
                                 </div>   
                            </header>
                       </div>
                );
           }

``` 
</p>
<p>Aqui colocamos um evento onClick no formulario que dispara uma função que faz essa comunicação com o Back-End e
recebe a resposta.</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/enviandoOnomeParaOservidor.jpg" alt="Enviando o nome para o servidor" /></p>
<p><img:17</p>
<h2>Vamos testar a comunicação entre Front-End => backend => ApiStarwars => Back-End => Front-End</h2>
<p>
  
  ```  
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
                    onClick={(e) => handlePesquisar(e)}>
                    Pesquisar
                   </button>
                </form>
           </div>    

 ```    
</p>
<p>Ao ser acionada pelo cliente neste momento sem nome de personagem, minha API aciona uma função que busca na API starWars os dados e retorna para
o cliente todos os personagens em um array</p>
<p>Veja a imagem abaixo</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracaoBackendFrontendAPIstarWars.jpg" alt="Integração frontEnd, bacKend e API" /></p>
        <p>img:18</p>
<h3>Vencida esta etapa vamos adiante!</h3>
<p>Nossa API já esta comunicando com o Front atraves de um retorno da API starwAR.</p>
<p>Esta na hora de comerçarmos trabalhar o retorno da API externa, ou seja, devolver ao cliente somente o que ele solicitou.</p>
<p>Como mostramos a seguir:</p>
<p>
  
  ```
        app.get('/', async(req,res) => {
 
               const{data} = await axios('https://swapi.dev/api/people/')  
                            let testePesquisa = data.results;
                            const retornoPesquisa = 
                            testePesquisa.find((persona) => persona.name === "Luke Skywalker"); 

                            return res.json(retornoPesquisa);
          }); 
```
</p>
<p>Aqui utilizamos o methodo find passando o nome que vem do Front-End para selecionarmos o personagem escolhido e devolvermos o resultado ao cliente.</p>
<p>Veja a imagem</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/pesquisaPorNome.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
        <p>img:19</p> 
</p>

<h2>Após os testes vamos implementar a funcionalidades do projeto</h2>
<p>Devido a outras obrigações, logo volto para explicar as implementações </p>
<p>Abaixo uma imagem para ir acompanhando o desenvolvimento</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracao4.jpg" alt="Implementando as funcionalidades" /></p>
<h2>Contribuições são bem vindas</h2>
<p>Por ser o nosso primeiro projeto com essas tecnologias , não concluimos o desafio com todo processo realizado , caso seja do seu interesse .<br />
  Vamos precisar para terminar:
</p>
<ul>
  <li>Implementar o aplicativo como mostrado no prototipo</li>
  <li>Apresentar a lista de filmes com os respectivos nomes</li>
 
 
 </ul> 

 <h2>Conclusão</h2> 
 <p>
   Desenvolvendo com Paixão<br/>
Desenvolver é um ciclo constante de teste => implementação => teste => implementação. Isso requer estudo, paciência e, claro, muito café! ☕️ <br/>
Para aqueles que amam programar, o mundo se abre em um leque infinito de possibilidades. Temos a incrível oportunidade de transformar ideias 
em realidade, seja criando uma API, um jogo, um aplicativo ou um site, entre outras coisas.<br/>
Pessoalmente, gosto de desenvolver e aprender, e sempre fico maravilhado com as novas possibilidades que surgem. Mesmo quando não consigo completar um
desafio dentro do prazo, fico animado por ter sido apresentado a ferramentas que eu conhecia, mas com as quais ainda não havia trabalhado.<br/>
Para os meus amigos devs.<br />
Aqui, vou compartilhar alguns dos projetos que desenvolvi durante alguns anos e, espero que eles possam contribuir de alguma forma com a comunidade de desnvolvedores de nosso Brasil.<br/>
<h2>Um forte abraço e até a próxima!</h2>
  
      
 </p>
Warning: atualizado em:
<ul> 
  <li>30/09/2024 Implementação das funcionalidade do projeto;Atualizado os arquivos das pastas backEnd e frontEnd; Corrigindo a apresentação dos blocos de codigos</li>
  <li>24/09/2024 Melhorando o texto, Observação; O gif do prototipo não aperece de imediato, temos que dar varios refresh na pagina para ele aparecer;</li>
  <li>22/09/2024 * Melhorias no texto; prototipo implementado;incluido pasta de testes;incluido checklist de acompanhamento; criação de Badge para o nodeJS</li>
  <li>19/09/2024 * Melhorias no texto; Providenciando um prototipo utilizando um gif animado</li>
  <li>18/09/2024 * melhorei a descrição; criação de Badges para as tecnologias react e express; correção gramatical, melhorias e correções no texto;</li>
</ul>

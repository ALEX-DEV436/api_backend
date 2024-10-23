#"Desenvolvimento de uma Aplicação Full Stack com Node.js e React: Utilizando uma API para Integração entre Front-end e Back-end"

<h2>Prepare-se para uma empolgante jornada pelo universo da tecnologia! Neste projeto, vamos entender juntos, o que é? Api, Node.js, React,Rest, Express, Nodemon, Cors, Git, GitHub. Estou animado para compartilhar minhas descobertas. Junte-se a mim e vamos descobrir como desbravar essas tecnologias e expandir os horizontes no desenvolvimento e compartilhamento de nossas aplicações. O futuro nos aguarda! Vamos nessa! 🚀</h2>
Warning: atualizado em 21/10/2024 trabalhando no codigo, melhorando o readme<br />
Obs: outras atualizações estão no final da pagina.
<h3>Descrição</h3>
<p>Bem-vindos;</p>
<p>
Aqui você encontrará um ambiente de informação e muita animação para o desenvolvimento de uma API&nbsp;&nbsp;(Application Programming Interface), uma tecnologia muito utilizada no mercado de trabalho.&nbsp;Já tenho experiência como desenvolvedor Full stack, entretanto estou começando exatamente agora a trabalhar com essas ferramentas, pois sempre desenvolvi de forma tradicional (sem frameworks) e, para uso pessoal. É uma oportunidade única para voce que quer aprender!&nbsp;&nbsp;Pois vamos juntos conhecer essas tecnologias.&nbsp;&nbsp;Acompanhe toda a metodologia que utilizo quando enfrento um desafio para conhecer novas ferramentas de trabalho.</p>
<p>
Vamos desenvolver uma API muito bacana utilizando NodeJs para o Back-End e o framework React no Front-End. Nossa API deverá se comunicar com uma API externa (utilizaremos a da Star Wars) para atender às solicitações dos usuários que tenham acesso ao nosso sistema. Esta aplicação deverá seguir as diretrizes REST, garantindo que a comunicação entre o servidor e o cliente seja suave e padronizada.<p>
<p>
Um adendo:&nbsp;&nbsp;apesar de desenvolver aplicações web há muitos anos, eu nunca trabalhei com essas ferramentas. Ou seja, é uma ótima oportunidade para quem está começando. Trata-se do início de uma jornada, onde a próxima estação é o desenvolvimento de uma aplicação:&nbsp;&nbsp;completa,funcional e, com bastante aprendizado. Vamos trabalhar juntos na frente e nos bastidores de um sistema. Resolveremos um problema e, no final, sairemos melhores do que entramos, aprendendo novos conhecimentos que vão ser super úteis no mercado atualmente.<p>
<p>
Animados?&nbsp;&nbsp;Espero que sim!!!&nbsp;&nbsp; Você vai vivenciar uma experiência única e empolgante... A inquietude na vida de um desenvolvedor Full Stack!!!&nbsp;&nbsp; Não ficamos presos (digo restritamente... pois precisamos entender os princípios que regem cada tema; não dá para criar um site e colocar o texto amarelo sobre um vermelho cintilante) a nenhuma linguagem ou conceito de design.O escopo de nossa atuação é imenso, somos livres para desenvolver o que nos inspirar. Antes deste projeto, por exemplo, eu já estava criando um game com C# e Unity e, logo colocarei ele aqui também no GitHub. Mais neste momento, vamos focar neste projeto. Venha comigo nesta jornada e, "juntos e tambem misturados" vamos descobrir as possibilidades e oportunidades que essas novas ferramentas (digo "novas" para mim) podem oferecer.&nbsp;&nbsp;Vai ser muitooo!&nbsp;&nbsp;divertido!!!&nbsp;&nbsp;let's go!  
</p>
<h2>Prototipo</h2>
<p>Fala devs, não ficou muito bem sincronizado mais já podemos ter uma ideia de como vai ficar a nossa aplicação. Até o final do projeto ele deve ficar perfeito.Neste gif vcs já vão poder acompanhar um pouco da minha metodologia de trabalho,
1º penso na ideia/conceito 2º executo/implemento 3º vou lapidando/cor,fonte,desenhos(no caso do prototipo). Vou tentar colocar as versões do gif na base do projeto, é interessante para vcs verem a evolução do trabalho. Baixem os gifs e estudem as
  imagens internas! Um forte abraço!
</p>
<p>
  <img src="http://www.soumaisconquista.com/gitHub/gifAnimado/prototipo14.gif" alt="Prototipo do sistema em gif animado" /><br /> 
</p>
<p>Para organizamos nosso projeto até a sua conclusão, vamos a um checklist basico:</p>
<p>
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Iniciar o projeto; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Instalar as bibliotecas; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Express; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar servidor com o express no Back-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma rota para acessar nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Nodemon para sempre reiniciar nosso servidor; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Servir a API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o Cors; <br /> 
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar o projeto no React-Front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Habilitar o servidor no Front-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar servidor com o express no Front-End; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Desenvolver a forma de entrada da pesquisa; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar estilo para o formulario e pagina; <br /> <br />
  <strong>Testes de introdução as tecnologias</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Testar clique no botão; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma base de dados no back end para ser consumida no front-end; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Criar uma base de dados para ser consumida por nossa API; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Uso do try e o catch; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Utilizando o Axio; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de acesso a API da Star Wars; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de endpoints fornecidos na documentação da API Star Wars; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de retornos dos end points.Que tipos retornam?; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de pesquisa pelo nome do personagem; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de consumo da API externa , atraves de nossa API; <br /><br />
  <strong>Testes de desenvolvimento</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para consulta pelo nome da API  Star Wars na tela do usuario; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para cadastramento de personagem na lista de favoritos; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para mostrar lista de personagem; <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Teste de função para busca de dados do personagem após ser clicado na lista; <br /> <br />
  <strong>Testes de implementação</strong><br /> <br />
  [<img src="http://www.soumaisconquista.com/gitHub/ticado2.png" alt="Realizado" />]&nbsp;Apresentar o aplicativo como mostrado no prototipo; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Implementar logica de erro de: Digitação, Ausencia de personagem, Nome invalido; <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Implementar logica de apresentação do nome dos filmes em vez de URL <br />
  [&nbsp;&nbsp;&nbsp;]&nbsp;Trazer os conceito de componentes para o projeto; <br />  
  [&nbsp;&nbsp;&nbsp;]&nbsp;Desenvolver uma API rest para atualização da lista de personagens cadastrado; <br />  
</p>
<h3>API starWar - Vamos conhece-la um pouco já de inicio!</h3>
<p>
  A API de Star Wars, ou "swapi" (Swah-pee) é a primeira fonte de dados quantificada e acessível programaticamente do mundo para todos os dados do universo canônico de Star Wars!Disponível em: https://swapi.dev/. Acesso em: 09 out. 2024.
</p>
<p>A API oferece o seguinte endpoints na sua documentação, entretanto com os teste realizados optamos utilizar outros, como veremos adiante.
<br/>Disponível em: https://swapi.dev/api/  . Acesso em: 09 out. 2024.
 <ul>
   <li>/people/ -- obtenha todos os recursos de um personagem</li>
   <li>/people/:id/ -- obter um recurso específico de um personagem</li>
   <li>/people/schema/ -- exibir o esquema JSON para lista de personagens</li>
 </ul> 
<h2>Partindo dessas primeiras informações!!&nbsp;&nbsp;<strong>Qual seria de fato o nosso desafio?</strong></h2>
Vamos criar uma API Rest que permitirá aos fãns da série Star Wars buscar seus personagens favoritos, através de um Front-End interativo, que deve facilitar a busca e, cadastra-lo em uma lista.
Ao receber os dados da pesquisa do usuario! Nossa aplicação Front-End, comunicará com a nossa API no Back-End, que, por sua vez, faz uma solicitação à API oficial da Star Wars para obter o personagem. A pesquisa deve ser realizada pelo nome.Observem, vamos utilizar a Api da Star - Wars como nosso banco de dados. Vamos receber os dados da API externa, formata-los e responder ao nosso Front-End, que por sua vez repassará para o usuário a informação.

As principais funcionalidades da aplicação incluem:
<ul>
<li><strong>Busca de Personagens:</strong> O cliente deve buscar pelo nome o personagem. Nossa API recebe essa solicitação e busca a resposta na API da star - Wars .</li>

<li><strong>Cadastro de personagem:</strong> Após a nossa API apresentar os resultados ao usuário, será disponibilizado um botão/link que permitirá adicionar o personagem à uma lista de favoritos.</li>

<li><strong>Visualização da lista de Favoritos:</strong> Será fornecido ao usuário um segundo botão/link que o possibilitará  visualizar e selecionar o seu personagem favorito, proporcionando assim uma experiência rica e personalizada.</li>
</ul>
Vamos integrar(bom demais) as tecnologias Node.js e React, criando uma aplicação completa entre Front-End e Back-End, fornecendo(espero) uma experiência rica, fluida e dinâmica para os nossos usuários.
</p>

<h3>Tecnologias utilizadas</h3>
<p><img src="http://www.soumaisconquista.com/gitHub/Badges/Badges_REACT.png" alt="Badges_REACT" />&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/badges_express.png" alt="Badges_express" />
&nbsp;&nbsp;&nbsp;<img src="http://www.soumaisconquista.com/gitHub/Badges/badges_nodejs.png" alt="Badges_nodeJS" />
</p>
<ol>
  <li><strong>NodeJs:</strong> Para o desenvolvimento de toda nossa aplicação.</li>
  <li><strong>React:</strong> Framework para construção de nossa interface.</li>
  <li><strong>Express:</strong> Biblioteca para criar o nosso servidor.</li> 
  <li><strong>Nodemon:</strong> Biblioteca para manter o nosso servidor ativo.</li>
  <li><strong>Cors:</strong> Biblioteca que permite fazer solicitações ao servidor, implantado em domínios diferente </li>
  <li><strong>Git:</strong> Ajuda no desenvovimento de projetos por equipes.</li>
  <li><strong>GitHub:</strong> Compartilhamento de projetos e códigos.</li>
  <li><strong>REST:</strong> Diretrizes para padronizar a comunicação entre a API e o cliente.</li>
 </ol> 

<h2>Introdução</h2>

<p>Minhas primeiras providências ao iniciar qualquer projeto (não apenas os tecnológicos) é a busca por informações relevantes. Essa lição eu aprendi durante minha época de estudante e permanece comigo até hoje: "Informação é poder!"

Buscar conhecimento e entender qual é o contexto que vamos trabalhar. Antes de avançarmos!... É fundamental para o sucesso de um projeto. Ao reunir dados e insights, podemos tomar decisões mais assertivas e criar soluções mais eficazes.</p>

<p>Revise novamente o desafio e pense!... Pense novamente!...&nbsp;Quais perguntas devemos fazer? A principio, tudo é novo!&nbsp; Uma pergunta eficaz já é um grande passo na resolução de um problema.<br/>  
  <p>Para quem está começando! Começe com o basico e, se é muita coisa para aprender, faça a divisão do problema em parte menores, vá resolvendo cada parte, assim desta
  forma todo o problema é resolvido</p>
<p>Como essas ferramentas não fazem parte da minha rotina de trabalho, começo perguntando para cada tecnologia que vou usar: <br /><br />
  1º -O que é? <br />
  2º - O que faz?  <br />
  3º - E como faz? <br /><br />
 </p>
 <p>
   Para exemplo vamos pegar o nodeJS, observe:<br /><br />
  1º O que é?<br /><br />  
   Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 
   A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.Disponível em: https://pt.wikipedia.org/wiki/Node.js  . Acesso em: 09 out. 2024.<br /><br />
  2º O que faz ou para que serve?<br /><br />
   O Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador. Quando executamos um comando escrito 
   em JavaScript, o Node.js interpreta esse comando e faz a sua conversão para a linguagem de máquina a ser executada pelo computador.<br /><br />
   3º E como faz ou como posso usar?<br /><br />
  <p> Abra o terminal ou prompt de comando (com o Node.js instalado) e navegue até o diretório onde deseja criar seu projeto. Em seguida, execute o comando<br /></p>
   
   ```
    npm init
```
   
   <p>Responda às perguntas do assistente de configuração para criar um arquivo package onde é guardado as informações do projeto.</p>
  

 <p> Veja que uma rapida consulta na web e, já conseguimos respostas para nossas perguntas iniciais , já podemos dizer então que o Node.js é multiplataforma, o codigo não é compilado, usa a linguagem Java Script e roda fora do navegador,utiliza arquitetura assíncrona e orientada por eventos.
 Voce pode esta pensando! Assincrona? Orientada por eventos? Esta me xingando!!! Veja no site da IBM uma explicação:&nbsp;&nbsp;<a href="https://www.ibm.com/br-pt/topics/event-driven-architecture">IBM</a>
 </p>
<p>Na verdade particularmente já tinha visto ou lido sobre todas estas tecnologias. Mais de fato, não ter realizado nenhum trabalho com elas.No momento estava voltado para c# e unity na criação de jogos digitais, mais surgiu esse desafio e, deixei o game um pouquinho de lado. Mas, aguardem, pois vou termina-lo e colocar aqui no gitHUB tambem, é bem simples mais é o primeiro que faço na unity.</p>
<p>Voltando ao desafio! Para responder a essas perguntas, temos ajuda, vamos ao: pai, mãe, irmão, professor... de todo dev.A famosa "web", 
  com seus recursos ilimitados e, muita, mais muita mesmo... disponibilidade em nos auxiliar, apresento-lhes os meus personagens favoritos da web : youtube, foruns, documentação, blogs, cursos on-line, tudo gratis(nem todos os cursos) e disponivel 24 horas todos os dias(não sei se lembrei de todos.) </p>
<h2>A dica aqui é: ESTUDE,teste,ESTUDE, teste...</h2>
<h3>Fontes pesquisadas para este trabalho</h3>
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
 <h5>Estude cada plataforma e confira o que pode ser útil para o projeto. Você pode encontrar coisas bem interessantes! </h5>
 <p>Obs:O visual code não precisei estudar, pois já utilizo ele para criação de games junto com a unity.Caso voce não o conheça acrecente a lista por gentileza</p>
 <p>Realizada essa etapa vamos botar a mão na massa(cozinho tb)!Ops, desculpe! no codigo</p>
 <p>Antes de iniciar qualquer fase na programação, é fundamental preparar adequadamente o ambiente de trabalho verificando nossas ferramentas de trabalho. No nosso caso, isso envolve o download e a instalação das bibliotecas necessárias para o projeto.Claro que conforme avançamos no projeto podemos ter que instalar outras, mais de acordo com a nescessidade.

Essa etapa inicial é crucial e obrigatoria, não avance sem completa-la com exito.Pois garante que todas as ferramentas e dependências (iniciais) estejam prontamente disponíveis para execução e conclusão de nosso desafio, permitindo um fluxo de trabalho mais eficiente e evitando possíveis obstáculos durante o nosso trabalho.<br />
</p>
<h2>Setup</h2>
<h3>Iniciando os trabalhos</h3>
<h4>Instalação dos aplicativos</h4>
<ul>
<li>1° Node - https://nodejs.org/en/download/package-manager</li>
<li>2° Visual code - https://code.visualstudio.com/download</li>
<li>3° Git - https://git-scm.com/downloads </li>  
<li>4° GitHub - Realizar o cadastro(o git e o gitHub é só mesmo para compartilhar o projeto, caso não queira pode desconsiderar as instalações neste momento</li>
</ul>
<p>Veja as versões que uso neste projeto</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/Versoes2.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>

<p>Vamos começar!!!!, abrindo o <strong>Prompt de Comando</strong> para criarmos a estrutura de pastas, onde guardaremos o nosso projeto e tambem vamos instalar as bibliotecas.
Trata-se de algo pessoal e pode ser estruturado da forma que for mais confortavel para você.
</p>

<h4>Comandos iniciais no Prompt para criarmos um projeto Node.js</h4>
<h5>1º&nbsp;&nbsp;Criar a pasta =>Pode criar sua pasta com o nome de sua preferencia</h5> 
<p>
  
  ```
  mkdir suaPasta
  ```
</p> 
 <h5>2º&nbsp;&nbsp;Entrar na pasta => Despois de criar voce precisa entrar na pasta para o proximo passo </h5>
<p>

   ```
  cd ./suaPasta/
 ```
</p>

<h5>3°&nbsp;&nbsp;Criar o projeto => Com este comando o seu projeto sera criado</h5>
<p>
  
  ``` 
  npm init
   ```
  </p>
<p>Acima eu passo os comandos para criação de pasta, acesso a pasta e tambem como iniciar um projeto Node.js em uma pasta, isso
tudo pelo prompt.Existe outras formas de criação de projeto, mais esta é a mais utilizada.</p>
<p> Veja na imagem abaixo como ficou no meu pc, para exemplificar melhor o processo:  </p>

<p><br/>
 <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img1a.jpg" alt="Iniciando o projeto" /></p>
 <p>As bibliotecas são partes importantes na construção de uma API , pois facilitam na criação de servidor e tambem na comunicação entre
    as partes , em todas as fontes pesquisadas foram utilizadas e por isso coloco aqui as que vamos utilizar neste projeto;</p>
 <h4>Instalações das bibliotecas</h4>
  
<h5>1º&nbsp;&nbsp;express =></h5>
<p>
  
  ```
  npm i express
 ```
</p>
<h5>2º&nbsp;&nbsp;nodemon =></h5> 
<p>

   ```
  npm i nodemon
 ```
</p>
<h5>3°&nbsp;&nbsp;cors =></h5> 
<p>

   ```
  npm i cors
 ```
</p>
<p>Veja como ficou as minhas instalações</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img2a.jpg" alt="Instalações das bibliotecas" /></p>
<p>Chegou até aqui! Tudo tranquilo? Tá, suave na nave? Se divertindo? Então vamos lá...</p>
<p>Para ver se deu tudo certo voce pode realizar os seguintes comandos, na img1 - 'minhas versões', mostro o resultado no prompt da minha maquina</p>

<h5>1º&nbsp;&nbsp;Para ver se o git esta instalado</h5>
<p>

  ```
  git --version
```
</p>
<h5>2º&nbsp;&nbsp;Para ver se o Node.js esta instalado</h5>
<p>

  ```
  node --version
```
</p> 
<h5>3°&nbsp;&nbsp;Para ver se visual code esta instalado</h5>
<p>

  ```
  code --version
```
</p>
<p>Vamos entra no projeto atraves do visual code, para começarmos a trabalhar</p>
<h4>Abrindo o visual code</h4>
<p>
  
   ```
  code .
 ```
</p> 
<p>Obs: se o comando <strong><i>code .</i></strong> não abrir o visual code automaticamente , reinstale o visual code.Comigo resolveu.</p>
<p>Veja que criei uma pasta '<strong><i>src</i></strong>' dentro dela coloquei o arquivo '<strong><i>serve.js</i></strong>' e fiz a edição do arquivo '<strong><i>package.json</i></strong>' introduzindo a seguinte linha de codigo
'<strong><i>,"start": "nodemon src/serve.js</i>"</strong>'</p>
<p>
  <p>Imagem do visual code aberto após o comando code .</p>
   <img src="http://www.soumaisconquista.com/gitHub/imgBackend/img3a.jpg" alt="Visualização do projeto no visual code" /></p>  
   Obs:Compare sua tela com a minha, acompanhando as setas que indico na imagem para observar os pontos a serem considerados.
</p>
<h4>PRONTO!!!!!!!! TUDO CERTO !!!!! VAMOS COMEÇAR A CODAR???</h4>
<p>Prometo tentar ser o mais didatico possivel, mais quero que entendam que tambem estou começando a trabalhar com estas tecnologias e, portanto não tenho como
passar as informações como expert no assunto, o que for aprendendo vou tentar compartilhar.</p>
<h4>Antes de colocar a mão no codigo vamos entender rapidamente o que é uma API. Na minha percepção!</h4>
<p>
  Api, uma tecnologia muito presente no mercado de trabalho, minhas primeiras impressões é trata-se de algo que fica entre a fonte real de uma base de dados e o cliente ou solicitante. Fiz uma analogia na minha cabeça para entender melhor o conceito. Vamos pensar em tomates! Imagine voce com vontade de comer uma salada! Abre a geladeira e não têm nenhum tomate. Provalvemente vai até a quintanda para compra-lo. Enquanto come sua salada, começa a pensar: como esse tomate chegou à sua mesa? O caminho que ele seguiu até vira a minha salada?</p>
<p>
Na grande maioria das vezes, ele é plantado em uma fazenda por um agricultor e, você não tem acesso ao agricultor...O quitandeiro também não... Entra em cena um terceiro personagem, o atravessador, que pega o tomate do agricultor, repassa para o quitandeiro, que, por sua vez, disponibiliza para você comprar. Nessa história, já temos três personas de nosso projeto o usuário, o front-end e a Api! Consegue identificá-los? No rodape do projeto, deixei a resposta! Mas estamos criando nossa própria API! Como fica? Precisamos incluir mais duas personas!Então vamos continuar a nossa história!Vamos imaginar que o quitandeiro não pega diretamente do nosso atravessador acima; ele compra de um mercado/atacadão, que por sua vez possui um fornecedor que obtém os tomates diretamente de nosso atravessador. Já consegue identificar o back-end e nossa API?</p>
<p>
Para finalizar-mos, como explicar nessa história que uma API se trata de uma interface que trata os dados? Bom, nosso atravessador e fornecedor, que são os que ganham mais dinheiro, possuem uma base (galpão) que trata os tomates antes de repassá-los, pois, conforme a 
  categoria de clientes, os tomates devem ser selecionados e limpos. E agora consegue identificar a APi sendo uma interface? Na minha cabeça deu certo!!!
</p>
<h3>Visão - Back-End</h3> 
<h4>Implementando nossa API</h4>
<p>Na pagina <strong><i>serve.js</i></strong> efetue os seguintes comandos: <br /> <br />
<h5>Criando o servidor</h5>
 <p>
   
  ```
    const express =require('express');
     app = express();
    app.use(express);
  ```
</p>

<h5>Abrindo uma porta para o servidor</h5>
  
<p>

  ```
    app.listen(3000,() =>{
         console.log('Testando o Servidor');
 });
  ```
 </p>

<h5>Construindo uma rota para o consumo de nossa API</h5>
<p>

  ```
    app.get('/', (req,res) =>{
         res.send('starWars');
    });
  ```
</p>
<h5>Inicializando o servidor</h5>
<p>Abra o terminal do visual code e digite =></p>
<p>

  ```
    npm run start
  ```
</p>
<p>Resumidamente uma API já foi criada, quando ouvirem criar e consumir uma API já estamos fazendo isso, veja
  na img 05 , no navegador ao digitar 'http://localhost:3000/' aparece a mensagem 'starWars', ou seja a mensagem esta sendo originada de nossa interface.
</p>
  <p>Na imagem abaixo os procedimentos podem ser observados.</p>
  <p><img src="http://www.soumaisconquista.com/gitHub/imgBackend/img4a.jpg" alt="Iniciando o servidor" /></p>

<h3>Visão - Front-End</h3> 
<h4>Implementamos nossa APi no Back-End, agora vamos ao Front-End</h4>
<p>
  Após criar a API, decidi começar no React com a interface da aplicação, pois é ponto de entrada de nosso sistema, nosso gatilho que inicia toda a sequencia de
  ações e decisões que vamos desenvolver.
</p>
<p>Pode deixar a tela do Back-End aberto, e abra novamente o prompt de comando do seu computador.</p>
<p>Nele digite : 
  
  ```
  npx create-react-app app
  ```
</p>
<p>Aguarde... demora um pouquinho!</p>
<p>No final deve apresentar algo semelhante a tela abaixo! Obs: Selecione a pasta que voce quer baixar com o comando <strong>cd ./pasta/.</strong> </p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img1a.jpg" alt="Instalando o react" /></p>
<p>Vamos instalar agora a biblioteca axios</p>
<p>Entre na pasta app</p>
<p>
  Para instalar o axios escreva no prompt:
</p>
<p>
  
  ```
 npm i axios
 ```
</p>
<h4>Abrindo o visual code</h4>
<p>
  
   ```
  code .
 ```
</p> 
<p>Já no visual code observe as pasta e os arquivos pela imagem apresentada.</p>
<p>Veja que muita coisa retiramos, por não precisar para o nosso projeto. </p>
<p>Mais é opcional!</p>
<p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img3a.jpg" alt="Tela do visual code apresentando o React" /></p>
<h3>Comandos no frontend! </h3>

  <p><p>1º Primeiro vamos ativar o nosso servidor no Front End. No terminal digite na pasta app(se voce instalou o react na pasta app veja img 8):</p> </p> 
  <p>    
    
       ```
       npm star
       ```
     </p> 
     
  <p>  
    <p>Deve aparecer uma mensagem informando que a porta 3000 esta em uso, apert y que vai direcionar para outra porta.</p>
     <p>Não dando erro o servidor vai esta ligado e operante </p>
     <p><img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img4a.jpg" alt="Acionando o servidor" /></p>
     <p>2º Quando vou começar uma aplicação nova, sempre inicio pelo ponto de entrada.Pois é apartir deste ponto que o nosso sistema vai rodar. Não funcionando corretamente 
     todo o nosso sistema fica comprometido</p>
     <p>Portanto para isso vamos criar um formulario basico de entrada para teste</p>
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
                      >Pesquisar
                   </button>
                </form>
           </div>
    ```  
     </p>     
   </p> 
<p> Resultado:</p>
<p> <p> <img src="http://www.soumaisconquista.com/gitHub/imgfrontend/img5a.jpg" alt="Teste de servidor" /></p>  
</p>
 <h4>Testes de introdução as tecnologias</h4>
 <h6>Vamos testar o botão do formulario .</h6>
 <p>Para isso criamos uma função com algum texto, colocamos um console log digitando <strong>console.log(funcaoCriada());</strong> e, clicamos.Verificamos no console se houve resposta atraves do texto passado na função.</p>
 <p>
   
              ```
             function App() {
                const [personagem, setPersonagem] = useState('');
                const handlePesquisar = async (e) =>{     
                e.preventDefault();
                console.log(personagem);
                const response = await axios.post('http://localhost:3000/pesquisar',JSON.stringify({personagem}),   
                                                   headers:{ 'Content-Type' : 'application/json'}     
                       }
                 );
            };
             ```   
 </p> 
 <p>Resultado.</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/apiFron/testeCliqueNoBotao2.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>


 
 
 
 
 
 <h2>Momento reflexão</h2>
 <p>Após instalar os aplicativos e as bibliotecas necessárias, configuramos um listener para o nosso servidor back-end na porta 3000. Testamos o servidor acessando o endereço: <a href="http://localhost:3000">http://localhost:3000</a>. Além disso, configuramos uma rota no back-end e criamos um array de dados que foi consumido perfeitamente pela nossa API. No front-end, inicializamos o servidor, provavelmente na porta 3001, e testamos no navegador acessando: <a href="http://localhost:3001">http://localhost:3001</a>. Também criamos um formulário básico e testamos a funcionalidade do nosso botão.</p>
 <p>
   É importante lembrar que nosso desafio consiste em buscar um personagem pelo nome em uma API externa (Star Wars), encaminhando a requisição por meio de nossa API. Esta, por sua vez, retornará ao front-end os dados e as características do personagem. Junto com essas informações, o personagem virá acompanhado de um botão/link que, ao ser clicado, permitirá adicioná-lo a uma base de dados de favoritos. Essa lista de favoritos poderá ser acessada pelo front-end por meio de um botão/link dedicado.
 </p>
 <p>Mais ou menos assim</p>
 <p><img src="http://www.soumaisconquista.com/gitHub/index2a.jpg" alt="Rascunho de tela do app" /></p>
 <p><img:13</p>
<p>Entendido o problema vamos do velho jargão de programador "vamos dividir para conquista"!</p>                         
<p>API criada , servidores iniciado , criamos o ouvido no Back End (metodo get) e a boca no Front End (formulario)</p>
<p>Vamos testar nossa API consumindo a API da starWars</p>
  
<h3>Teste dos endpoints</h3>
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
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndPoint1a.jpg" alt="Teste endpoint 1" /> 
  <li>Voltando toda a estrutura da API em formato de objeto</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEndpoint2a.jpg" alt="Teste endpoint 2" /> 
  <li>Retorna um array somente com os personagens (opção escolhida para darmos prosseguimento)</li>
  <li><img src="http://www.soumaisconquista.com/gitHub/apiFron/testandoEnpoint3a.jpg" alt="Teste endpoint 3" />
  
  </li>
 </ul> 
<h3>Vamos testar a comunicação entre backend e frontend</h3>
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
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/enviandoOnomeParaOservidora.jpg" alt="Enviando o nome para o servidor" /></p>
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
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracaoBackendFrontendAPIstarWarsa.jpg" alt="Integração frontEnd, bacKend e API" /></p>     
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
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/pesquisaPorNomea.jpg" alt="Versões das tecnologias utilizadas do projeto" /></p>
      
</p>
<h4>Testes de desenvolvimento</h4>
<h3>Testes de implementação de funcionalidades</h3>
<p>Depois de vários testes de conhecimento da ferramenta, vamos para os testes de funcionalidades. Nesta parte, no arquivo 'serve', fiz as funções que 
  são responsáveis pela busca e cadastramento dos personagens, assim como pela exibição da lista de favoritos. 
  Não tive a preocupação de criar componentes e separar os serviços; apenas fiz um rascunho de como será a implementação das funções da nossa aplicação.
</p>
<p>Abaixo uma imagem para ir acompanhando o desenvolvimento</p>
<p><img src="http://www.soumaisconquista.com/gitHub/apiFron/integracao4a.jpg" alt="Implementando as funcionalidades" /></p>
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
 <p>
   RESPOSTAS:<br />
   Você  => Usuário;<br />
   Quitandeiro => Front-End;<br />
   Atravessador => API;<br />
   Mercado => Back-End; <br />
   Fornecedor => nossa API<br />
   Base => Interface<br />
 </p>
Warning: atualizado em:
<ul> 
  <li>15/10/2024 trabalhando no codigo, criando definição de API, corrigindo o readme</li>
  <li>14/10/2024 trabalhando no codigo, corrigindo o README</li>
  <li>13/10/2024 trabalhando no codigo, corrigindo o README</li>
  <li>11/10/2024 trabalhando no codigo, corrigindo o README</li>
  <li>09/10/2024 Organizando o README, corrigindo titulo, melhorando os textos,trabalhando no codigo</li>
  <li>01/10/2024 Organizando o README, corrigindo a apresentaçãos dos codigos, melhorando as imagens, melhorando os textos, lapidando o prototipo, a primeira após a publicação</li>
  <li>30/09/2024 Implementação das funcionalidade do projeto;Atualizado os arquivos das pastas backEnd e frontEnd; Corrigindo a apresentação dos blocos de codigos</li>
  <li>24/09/2024 Melhorando o texto, Observação; O gif do prototipo não aperece de imediato, temos que dar varios refresh na pagina para ele aparecer;</li>
  <li>22/09/2024 * Melhorias no texto; prototipo implementado;incluido pasta de testes;incluido checklist de acompanhamento; criação de Badge para o nodeJS</li>
  <li>19/09/2024 * Melhorias no texto; Providenciando um prototipo utilizando um gif animado</li>
  <li>18/09/2024 * melhorei a descrição; criação de Badges para as tecnologias react e express; correção gramatical, melhorias e correções no texto;</li>
</ul>

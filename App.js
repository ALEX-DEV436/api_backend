import './App.css';
import {useState} from 'react';
import axios from 'axios';
import coracao from './coracao.png'
 
let pg =0;
 
function App(){   
   
  let [personagem, setPersonagem] = useState('');
  

  const handlePesquisar = async (e) =>{
  
      e.preventDefault();
  
     //console.log(personagem);
      const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem})
      ,
      {
          headers:{ 'Content-Type' : 'application/json'}
      }
  );
 
        if(response.data=='retorno'){
           //console.log('buscou API');
           pg++;
          buscaApi();
        }
  };

let list = [];
 const [nome, setNome] = useState('');
 const [filmes, setFilmes] = useState('');
 const [cadastrado, setCadastrado] = useState('');
 const [lista, setLista] = useState('');
 
  function buscaApi(){  

  axios 
  .get(`http://localhost:3000/${pg}`)
  .then((response) =>{
  let users =response.data;   
  //console.log(typeof users);   
  console.log(users); 
  setNome(users.name);  
  setFilmes(users.films);
  
  
 })
  .catch((error) => console.log(error))
  .finally('');

  
}

const cadastraPersonagem = async()=>{
  const response = await axios.post('http://localhost:3000/personagem',JSON.stringify({nome,pg})
    ,
    {
        headers:{ 'Content-Type' : 'application/json'}
    }
);
  console.log(response.data);
  setCadastrado(response.data);
}


function listaDeFavoritos(){  

  axios 
  .get('http://localhost:3000/lista')
  .then((response) =>{
   list =response.data;
  
  setLista(list[0]); 
  //console.log(list[0][0,0]);
   
 })
  .catch((error) => console.log(error))
  .finally('');

  
}

    return (
    <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><button  type='submit' onClick={() => listaDeFavoritos()}>Lista de Favoritos</button></div>
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
                <div className='personagem'>  
                <p>Personagem <hr /></p>                   
                      <table>
                          <tr>
                              <td >Nome:</td>
                              <td>{nome}</td>
                              <td><button src={coracao } type='submit' onClick={() => cadastraPersonagem(nome, pg)}>Cadastrar</button> </td>
                          </tr>
                          <tr>
                              <td>Filmes:</td>
                              <td colspan="2">{filmes[0]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[0]}</td>                         
                          </tr>
                      </table>
                      <br />
                <p>Cadastro de favoritos <hr /></p>
                <p>{cadastrado}</p>  
                <p><br /></p>      
                <p>Lista de favoritos <hr /></p>            
                {lista[0]}<br /> 
                {lista[1]}<br />  
                {lista[2]}<br />  
                {lista[3]}<br />                
                      
                </div>
           </div>      
      </header>
    </div>
  );
}

export default App;

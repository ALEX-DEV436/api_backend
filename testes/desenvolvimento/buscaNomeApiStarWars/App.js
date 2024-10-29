import './App.css';
import {useState} from 'react';
import axios from 'axios';

 
let pg =0;
 
function App(){   
   
 let [personagem, setPersonagem] = useState('');
const [nome, setNome] = useState('');
 const [filmes, setFilmes] = useState('');

  const handlePesquisar = async (e) =>{  
      e.preventDefault();    
      const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem})
      ,
      {
          headers:{ 'Content-Type' : 'application/json'}
      }
  );
 
        if(response.data=='retorno'){          
           pg++;
          buscaApi();
        }
  };


 
 
 
  function buscaApi(){  

  axios 
  .get(`http://localhost:3000/${pg}`)
  .then((response) =>{
  let users =response.data; 
  console.log(users); 
  setNome(users.name);  
  setFilmes(users.films);
  
  
 })
  .catch((error) => console.log(error))
  .finally('');

  
}


    return (
    <div className="App">
      <header className="App-header">
         <div className='conteiner-form'>
            <div className='adic_favoritos'><button  type='submit' >Lista de Favoritos</button></div>
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
                          </tr>
                          <tr>
                              <td>Filmes:</td>
                              <td colspan="2">{filmes[0]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[1]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[2]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[3]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[4]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[5]}</td>                         
                          </tr>
                          <tr>
                              <td></td>
                              <td colspan="2">{filmes[6]}</td>                         
                          </tr>
                      </table>
                      <br />                                
                      
                </div>
           </div>      
      </header>
    </div>
  );
}

export default App;
import './App.css';
import {useState} from 'react';
import axios from 'axios';





function App() {

    const [personagem, setPersonagem] = useState('');
  
    const handlePesquisar = async (e) =>{

    e.preventDefault();

    console.log(personagem);
    const response = await axios.post('http://localhost:3000/pesquisar',JSON.stringify({personagem}),
    {
        headers:{ 'Content-Type' : 'application/json'}
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
                onClick={(e) => handlePesquisar(e)}
                >Pesquisar</button>
                </form>
           </div>
        <div className='conteiner-lista'>
                  <lu>
                  <li className='adic_favoritos'><a href='*'>Adicionar aos Favoritos</a></li>
                  <li className='tit_personagem'>Personagem</li>
                  <li>Nome: Luke Skywalker</li>
                  <li>Altura: 1.72</li>
                  <li>Peso: 77</li>
                  <li>Cor do Cabelo: blond</li>
                  <li>Cor dos olhos: blue</li>
                  </lu>
           </div>
      </header>
    </div>
  );
}

export default App;

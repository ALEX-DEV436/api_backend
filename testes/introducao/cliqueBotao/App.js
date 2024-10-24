import './App.css';
import { useState } from 'react';



function App() { 
   
 const [personagem, setPersonagem] = useState('');
  const handlePesquisar = async (e) =>{     
     e.preventDefault();
  
     console.log('O botão foi clicado');
 
  };
 return (       
  <div className="App">
    <header className="App-header">
       <div className='conteiner-form'>          
            <h1>Lista de personagens da saga starWars</h1>    
                <form className ='formulario'>
                   <input 
                      id='inputID'
                      type='text'
                      name='personagem'
                      placeholder='Nome do personagem'
                      required onChange={(e) => setPersonagem(e.target.value) }
                   />
                  <button 
                     className='btn-login'
                     type='submit'
                     onClick={(e) => handlePesquisar(e)}>Pesquisar
                 </button>
              </form> 
       </div>
   </header>       
</div>
  );
}

export default App;

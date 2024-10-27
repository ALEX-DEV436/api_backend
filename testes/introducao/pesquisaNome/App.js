import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App(){ 

const [personagem, setPersonagem] = useState('');

const handlePesquisar = async (e) =>{      
   e.preventDefault();

   const response = await axios.post('http://localhost:3000/',JSON.stringify({personagem})
   ,
    {
        headers:{ 'Content-Type' : 'application/json'}
    }
   );
   console.log(response);
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

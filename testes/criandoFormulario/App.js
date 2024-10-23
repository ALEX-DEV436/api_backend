import './App.css';

function App() {
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
   </header>       
</div>
  );
}

export default App;

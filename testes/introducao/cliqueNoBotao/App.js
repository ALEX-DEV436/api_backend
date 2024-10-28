
function App() {     
   const handlePesquisar = async (e) =>{     
        e.preventDefault();  
        console.log('O botão foi clicado'); 
   };

return (       
   <div className="App">
       <header className="App-header">
          <div>          
              <h2>Lista de personagens <br/> da saga starWars</h2>    
              <form>
                  <input 
                     id='inputID'
                     type='text'
                     name='personagem'
                     placeholder='Nome do personagem'
                     required 
                  />
                 <button                    
                    type='submit'
                    onClick={(e) => handlePesquisar(e)}>Testar clique
                 </button>
            </form> 
         </div>
     </header>       
 </div>
);
}
export default App;

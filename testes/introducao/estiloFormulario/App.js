import './App.css';

function App() {     
   const handlePesquisar = async (e) =>{     
        e.preventDefault();  
       
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
             />
             <button 
             className='btn-login'
             type='submit'
             onClick={(e) => handlePesquisar(e)}
             >Pesquisar</button>
             </form>
        </div>      
   </header>
 </div>
);
}
export default App;

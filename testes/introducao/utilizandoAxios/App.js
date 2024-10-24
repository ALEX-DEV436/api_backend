import './App.css';
import axios from 'axios';

function App() { 
  
        axios.get('http://localhost:3000/')
         .then((response) =>{
         const retorno =response.data;  
         console.log(retorno);
    
    })
         .catch((error) => console.log(error))
         .finally('');
 
  
}

export default App;

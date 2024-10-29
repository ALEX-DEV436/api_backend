const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const cors = require('cors');
app.use(cors());
	
let personagem = '';
let pg =0;


app.post('/', (req,res,next)=>{      
    personagem = req.body;     
    let person = personagem;   
     
    if(personagem != ''){
         pg++;
         buscaPersonagem(person);
          res.send('retorno'); 
     }else{
           res.send('campo vazio'); 
     }
    
 });


 function buscaPersonagem(person){     
   
 app.get(`/${pg}`, async(req,res) => {        
       
      let response = await axios(`https://swapi.dev/api/people/?search=${person.personagem}`) 
    
      try{ 
         let users = response.data.results[0];         
         res.send(users);   
         
       
      } catch{

      }     
    
   
  });  
}     
     
     app.listen(3000, () =>{
              console.log('porta 3000');
 
 });
 
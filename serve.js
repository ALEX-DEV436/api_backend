const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const cors = require('cors');
app.use(cors());
var router = express.Router();
	
let personagem = '';
let cout =0;
let pg =0;
let nomes = [];
let paginas = [];
let listaPersonagem = [nomes,paginas];


app.post('/', (req,res,next)=>{      
    personagem = req.body;     
    let person = personagem;
    //console.log(typeof person);   
     
    if(personagem != ''){
         pg++;
         buscaPersonagem(person);
          res.send('retorno'); 
     }else{
           res.send('campo vazio'); 
     }
    //console.log(person.personagem);
 });


 function buscaPersonagem(person){     
   
 app.get(`/${pg}`, async(req,res) => {        
     //console.log('chama api novamente');    
     //console.log(cout);   
      let response = await axios(`https://swapi.dev/api/people/?search=${person.personagem}`) 
    
      try{ 
         let users = response.data.results[0];        
         //console.log(typeof users);   
         res.send(users);   
         
       
      } catch{

      }     
    
   
  });     



 
}     


app.post('/personagem', (req,res)=>{ 
     console.log('entrou na lista')     
     nome = req.body; 
     nomes.push(nome.nome) 
     paginas.push(pg);    
     console.log(listaPersonagem);
     res.send('Personagem cadastrado com sucesso') 
   
    

 })  
  
   
     app.get('/lista', async(req,res) => {          
           res.send(listaPersonagem);   
   
 });     

     
     app.listen(3000, () =>{
              console.log('porta 3000');
 
 });
 
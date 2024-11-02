const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const cors = require('cors');
app.use(cors());

    
let personagem = '';
let cout =0;
let pg =0;
let nomes = [];
let paginas = [];
let listaPersonagem = [nomes,paginas];

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
                            if(users != undefined) {        
                            res.send(users); 
                            }else{   
                            res.send('Personagem não localizado'); 
                           
                            }  
                    } catch{
                  }     
               });      
            }     


app.post('/personagem', (req,res)=>{               
                         nome = req.body; 
                         let link =`${nome.nome}`;
                         nomes.push(link); 
                         paginas.push(pg);      
                         res.send('Personagem cadastrado com sucesso') 
            })  
     
app.get('/lista', async(req,res) => {          
                         res.send(listaPersonagem);   
                    }); 
 
function listaFavoritos(){        
          app.get('/1', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');   
                    });
    
          app.get('/2', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
                     
          app.get('/3', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
       
          app.get('/4', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
       
          app.get('/5', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
       
          app.get('/6', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
      
          app.get('/7', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
       
          app.get('/8', async(req,res) => {                 
                        res.send('lista de favoritos a caminho');     
                    });
       
          app.get('/9', async(req,res) => {                 
                       res.send('lista de favoritos a caminho');     
                    });
        
          app.get('/10', async(req,res) => {                 
                       res.send('lista de favoritos a caminho');     
                    });
      };
          
app.get('/favoritos', async(req,res) => {  
                      listaFavoritos();             
                 }); 
       
app.listen(3000, () =>{
                     console.log('porta 3000'); 
                 });
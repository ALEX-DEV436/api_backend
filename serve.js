const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
app.use(cors());


app.post('/pesquisar', (req,res)=>{ 
    
    const { personagem} = req.body;
    res.send("Recebendo a Consulta no servidor");
    
    
 });


 app.get('/', async(req,res) => {
  
    const{data} = await axios('https://swapi.dev/api/people/')
     
    let testePesquisa = data.results;
    const retornoPesquisa = 
    testePesquisa.find((persona) => persona.name === "Luke Skywalker");   
    return res.json(retornoPesquisa);
 });
 
app.listen(3000, () =>{
    console.log('porta 3000');
 
 });
 
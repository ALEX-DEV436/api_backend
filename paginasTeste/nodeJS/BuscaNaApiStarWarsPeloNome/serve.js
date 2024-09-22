const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const cors = require('cors');


app.use(cors());

app.post('/', (req,res)=>{ 
    
     const { personagem} = req.body;
     res.send("Recebendo a Consulta no servidor");
    
    
 });
 	
 
		
 const personagem ="Luke Skywalker";

 app.get('/', async(req,res) => {    
     
      const{data} = await axios(`https://swapi.dev/api/people/?search=${personagem}`);     
      return res.json(data);
 });



 app.listen(3000, () =>{
      console.log('porta 3000');
 
 });
 
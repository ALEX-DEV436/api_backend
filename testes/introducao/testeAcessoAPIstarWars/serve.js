const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const axios = require('axios');



app.get('/', async(req,res)=>{  
    const response = await axios('https://swapi.dev/api/people/')    
    try{         
         res.send(response.data);       
  } catch{
         res.send("Usando Catch e try");

  }    
   
});

app.listen(3000, () =>{
    console.log('Servidor rodando');

});

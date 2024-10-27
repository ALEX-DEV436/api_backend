const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const axios = require('axios');

app.post('/', (req,res)=>{ 
    const { personagem} = req.body;
    res.send(`O personagem pesquisado é:${personagem}`);
   
   
});


app.listen(3000, () =>{
    console.log('Servidor rodando');

});

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const axios = require('axios');

app.get('/', async(req,res) => { 
    const{data} = await axios('https://swapi.dev/api/people/')
    return res.json(data.results) 
}); 

app.listen(3000, () =>{
    console.log('Servidor rodando');

});

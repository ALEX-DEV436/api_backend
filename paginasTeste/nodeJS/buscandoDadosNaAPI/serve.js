const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());



 app.get('/', async(req,res) => {
  
      const{data} = await axios('https://swapi.dev/api/people/')     
       
      return res.json(data);
 });
 

 app.listen(3000, () =>{
      console.log('porta 3000');
 
 });
 
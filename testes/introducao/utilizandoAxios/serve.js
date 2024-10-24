const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.get('/', (req,res)=>{     
    
    res.send('Resposta do servidor');
   
   
});


app.listen(3000, () =>{
    console.log('Servidor rodando');

});

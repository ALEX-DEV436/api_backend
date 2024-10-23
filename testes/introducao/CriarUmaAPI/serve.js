const express = require('express');
const app = express();
app.use(express.json());



app.get('/', (req,res) =>{
    res.send('HomeWorld - starWars');
});



app.listen(3000, () =>{
    console.log('Testando o Servidor');

});

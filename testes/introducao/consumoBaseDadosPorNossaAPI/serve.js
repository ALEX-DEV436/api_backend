const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const dados = {
    "Nome": "Luke Skywalker",
	"Altura": "172",
	"Peso": "77",
	"Cabelo": "loiro",
	"Cor da pele": "branca",
	"Olhos": "azul",
	"gênero": "masculino",
}

app.get('/', (req,res)=>{     
    
    res.send(dados);
   
   
});


app.listen(3000, () =>{
    console.log('Servidor rodando');

});

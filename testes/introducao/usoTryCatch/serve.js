const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const dado = {
    "Nome": "Luke Skywalker",
	"Altura": "172",
	"Peso": "77",
	"Cabelo": "loiro",
	"Cor da pele": "branca",
	"Olhos": "azul",
	"gênero": "masculino",
}

app.get('/', (req,res)=>{     
    try{         
         res.send(dados);       
  } catch{
         res.send("Usando Catch e try");

  }    
   
});

app.listen(3000, () =>{
    console.log('Servidor rodando');

});

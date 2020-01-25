let express = require('express');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let app = express();
let uuid = require('uuid/v4')

app.use(express.static('public'));

app.listen(8080, function(){
    console.log("App is running");
})

let comentarios = [{
    id: uuid(),
    titulo: "Hola",
    contenido: "me llamo Carlitos",
    autor: "Carlos",
    fecha: new Date()
}];



app.get('/blog-api/comentarios', (req,res) => {
    let result = comentarios;
    return res.status(200).json(result);
});

app.get('/blog-api/comentarios-por-autor', (req,res) => {
    let autor = req.query.autor;
    if(autor == undefined){
        res.statusMessage = "No se ha proporcionado un autor correctamente";
        return res.status(406).send();
    }
    let result = comentarios.filter((elemento)=>{
        if(elemento.autor == autor){
            return elemento;
        }
    });
    if(result.length>0){
        return res.status(200).json(result);
    }
    else{
        res.statusMessage = "El autor no tiene comentarios";
        return res.status(404).send();
    }
});

app.post('/blog-api/nuevo-comentario', jsonParser, (req,res) => {
    if(req.body.autor==undefined||req.body.contenido==undefined||req.body.titulo==undefined){
        res.statusMessage = "No se han recibido todos los parametros";
        return res.status(406).send();
    }
    else{
        comentarios.push({autor:req.body.autor, titulo:req.body.titulo, contenido: req.body.contenido, date: new Date(), id: uuid()});
        res.statusMessage = "Comentario agregado exitosamente";
        return res.status(201).send();
    }
});



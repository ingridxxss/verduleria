const express = require('express') ;
const app = express() ;
const port = 3000 ;
const morgan = require('morgan') ;
const path = require('path') ;
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose') ;

app.use(express.static('./public'));

const user ='usuariofit';
const pasword = 'LLCJCfdA50aSwKAm';
const uri = `mongodb+srv://${user}:${pasword}@cluster0.5umcvjx.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const dbname = 'verduleria' ;

mongoose.connect( uri ,
    {useNewUrlParser: true , useUnifiedTopology: true
});

    then(()=> console.log ('Base de datos conectada'))
    .catch(e => console.log (e))

app.set('view engine' , 'ejs' )

//app.set('view', __dirname + /view)



app.listen(port,()=>{
    console.log('servidor escuchando en' , port)
})
const express = require('express');
const app = express();
const postRouter = require('./routers/post');
const dbconnect = require('./dbconnect');
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use('/api',postRouter)

app.get('/:id',(req, res)=>{
    const id = req.params.id
    if(id=='sujit'||id=='api'){res.send(`${id} is registered here ;)`)}
    res.send(`hello from server :) ${id}`)
})
dbconnect()
app.listen(4000,()=>{console.log('listening on port 4000');})

const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
//var path = require('path'); 
//app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => res.render('index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

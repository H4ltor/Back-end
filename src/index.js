const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');
const PORT = 3000
const app = express()

require("./config/mongoose.js")(app);
//require('./app/routerHandler.js')(app);

app.use(cors());
app.use(morgan('dev'));
app.use('/files', express.static("files"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello from server'
    });
});

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
    
});
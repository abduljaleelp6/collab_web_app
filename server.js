const config =  require('./app/config/config.js');
const express =  require('express');

const app =express();

const business = require('./app/routes/business.routes.js'); 
const appuser = require('./app/routes/user.routes.js'); 
let mode = '';
app.use(express.json());
app.use(business);
app.use(appuser);
console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send('Hello World !!');
});

  
  
app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})
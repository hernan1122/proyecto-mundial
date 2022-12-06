const app = require('./config/server');

require('./app/routes/news')(app);

//Iniciar el server
app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'))
})


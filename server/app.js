const http = require('http')
const fs = require('fs')
const port = 5000
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

//---------------------------------------------------

// const server = http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   fs.readFile('./routes/index.js', function(error, data) {
//     if (error) {
//       res.writeHead(404)
//       res.write('Error: File Not Found')
//     } else {
//       res.write(data)
//     }
//     res.end()
//   })
// })

app.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build/')));
// app.use(express.static(path.join(__dirname, '../client/src')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.get('/users', function (req, res) {
//   res.json({message: 'Hello World'});
//   // res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'))
// })

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.put('/login', (req, res) => {

  const User = require('./models/user');

  User.find({ username: res.req.body._username, password: res.req.body._password }).count()
  .then(function(numItems) {
    if(numItems>0)
    {
      console.log('Login Successful'); 
    }
    else
    {
      console.log('Login failed. No such account exists.'); 
    }
  });

})

app.post('/signup', (req, res) => {

  const User = require('./models/user');

  User.find({ username: res.req.body._username}).count()
  .then(function(numItems) {
    if(numItems>0)
    {
      console.log('That username is already taken.'); // Use this to debug
    }
    else
    {
      var user = new User({
        username: res.req.body._username,
        password: res.req.body._password,
        pongHighScore: res.req.body._pongHighScore,
        snakeHighScore: res.req.body._snakeHighScore
      });
      user.save();
    }
  });

})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

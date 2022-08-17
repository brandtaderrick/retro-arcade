const mongoose = require("mongoose");
const UserInDatabse = require("./models/user");

// Connect to mongodb
// mongoose.connect('mongodb://localhost:27017/myapp');

const http = require("http");
const fs = require("fs");
const port = 8080;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const UserInDatabase = require("./models/user");
var app = express();

// connect to mongoDB
const dbURI =
// Connect to mongodb
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, function (error) {
      if (error) {
        console.log("Something went wrong", error);
      } else {
        console.log("Server is listening on port " + port);
      }
    });
  })
  .catch((err) => console.log(err));

mongoose.connection
  .once("open", function () {
    console.log("Connection has been made to DB.");
  })
  .on("error", function (error) {
    console.log("Connection error:", error);
  });
//---------------------------------------------------

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build/")));
// app.use(express.static(path.join(__dirname, '../client/src')));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.get("/add-user", (req, res) => {
  const newUser = new UserInDatabase({
    username: "tester3",
    password: "tester3",
    pongHighScore: "3",
    snakeHighScore: "3",
  });

  newUser
    .save()
    .then((result) => {
      res.json({ msg: "New User Saved" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/get-users", (req, res) => {
  UserInDatabase.find()
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
});

app.get("/find-user", (req, res) => {
  UserInDatabse.find({ username: "tester3" })
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
});

app.put("/login", (req, res) => {

  UserInDatabse.find({ username: req.body._username })
    .then((results) => res.json({ message: results[0].username }))
    .catch((err) => console.log(err));
});

app.put("/signup", (req, res) => {

  console.log(req.body._username)
  console.log(req.body._password)

  let usr = req.body._username
  let psw = req.body._password

  const newUser = new UserInDatabase({
    username: usr,
    password: psw,
    pongHighScore: "0",
    snakeHighScore: "0",
  });


  newUser
    .save()
    .then((result) => {
      console.log(result)
      res.json({message: result.username });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/highscores", (req, res) => {
  res.json({
    Pong: {
      Name: [
        "xxSniper12",
        "Soldier76",
        "Snowman",
        "apollo12",
        "jmandex",
        "elpolloloco",
      ],
      Score: ["64", "45", "32", "23", "12", "2"],
      Rank: ["1", "2", "3", "4", "5", "6"],
    },

    Snake: {
      Name: [
        "fluffyDoge",
        "BitcoinMoons",
        "TeslaHireMe",
        "apollo12",
        "jmandex",
        "elpolloloco",
      ],
      Score: ["64", "45", "32", "23", "12", "2"],
      Rank: ["1", "2", "3", "4", "5", "6"],
    },
  });
});

app.post("/userhighscores", (req, res) => {
  res.json({
    Pong: {
      Name: [
        "xxSniper12",
        "Soldier76",
        "Snowman",
        "apollo12",
        "jmandex",
        "elpolloloco",
      ],
      Score: ["64", "45", "32", "23", "12", "2"],
      Rank: ["1", "2", "3", "4", "5", "6"],
    },

    Snake: {
      Name: [
        "fluffyDoge",
        "BitcoinMoons",
        "TeslaHireMe",
        "apollo12",
        "jmandex",
        "elpolloloco",
      ],
      Score: ["20", "18", "15", "13", "12", "3"],
      Rank: ["1", "2", "3", "4", "5", "6"],
    },
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

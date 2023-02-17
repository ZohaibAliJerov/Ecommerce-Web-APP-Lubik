const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const mongoose = require("./src/db/conn")
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
app.use(cors())

const bodyparser = require('body-parser');

/*assuming an express app is declared here*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(require("./src/controllers/userController"))
app.use(require("./src/models/userModel"))


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log("Server is running port 5000!");
});

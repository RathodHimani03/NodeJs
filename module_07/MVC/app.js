const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { options } = require("./routes/admin");
const app = express();


const errorController = require("./Controller/error");

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData);
app.use(shopRoutes);

// app.use(errorController.get404);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});




//set cors options
// const corsOptions ={
//   // origin:'http://127.0.0.1:5500',
//   origin:'https://example.com',

// }

// app.use(cors(corsOptions));

// app.get("/",cors(corsOptions),function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// app.head("/simple-cors", cors(), (req, res) => {
//   console.info("HEAD /simple-cors");
//   res.sendStatus(204);
// });

// app.get("/simple-cors", cors(), (req, res) => {
//   console.info("GET /simple-cors");
//   res.sendStatus(204);
// });

// const issue2options = {
//   origin: true,
//   methods: ["POST"],
//   credentials: true,
//   maxAge: 3600
// };
// app.options("/issue-2", cors(issue2options));
// app.post("/issue-2", cors(issue2options), (req, res) => {
//   console.info("POST /issue-2");
//   res.json({
//     text: "Issue #2 is fixed."
//   });
// });



app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 80");
});

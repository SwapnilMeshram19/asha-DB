const express = require("express");
const connectDb = require("./database/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 8080;
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

function logger(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

app.use(logger);

app.use("/admin", require("./routes/admin_route"));
app.use("/event", require("./routes/event_route"));
app.use("/doctor", require("./routes/doctor_route"));

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("server running on port 8080");
    });
  })
  .catch((err) => {
    console.log("error", err);
  });

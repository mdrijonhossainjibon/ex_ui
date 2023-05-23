const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

var CronJob = require("cron").CronJob;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post("/", (req, rep) => {
  rep.statusCode = 200;
  rep.json({
    "api-version": "1.0",
    StatusCode: 200,
    msg: req.params,
  });
  console.log(req.body);
});
app.get("*", (req, rep) => {
  rep.statusCode = 200;
  rep.json({ StatusCode: 404, msg: "Api Path missig" });
});

var job = new CronJob(
  "* * * * * *",
  function () {
    //console.log("You will see this message every second");
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

app.listen(5000, () => {
  console.log("Server Run Start");
});

const express = require("express");
const router = express.Router();

const app = express();

app.use(router);
router.get("/", (req, res, next) => {
  res.send({
    Message: "Welcome To Docker Session",
  });
  next();
});
const port = 9090;
app.listen(port, () => {
  console.log(`Server Is Ready AT port  ==> localHost:${port}`);
});

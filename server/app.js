const express = require("express");
const cors = require("cors");
const app = express();
// const port = 3000;
const routes = require("./routes/");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use(errorHandler)

// app.listen(port, () => {
//   console.log(`Muyen port ${port}`);
// });

module.exports = app;

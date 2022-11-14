const express = require("express");
const ConnectRouter = require("./Routes/ConnectRouter");
const app = express();
app.use(express.json());
app.use("/server",ConnectRouter);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
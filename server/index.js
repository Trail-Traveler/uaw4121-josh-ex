const express = require("express");
const path = require("path");
const { getEmployees } = require("./controllers/api");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", getEmployees);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

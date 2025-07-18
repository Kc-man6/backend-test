const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello, backend world!");
});

app.get("/about", (req, res) => {
  res.send("Hello, backend about!");
});

// app.get("/contact", (req, res) => {
//   res.send("Hello, backend contact!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

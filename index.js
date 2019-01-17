const express = require("express");
const app = express();


// app.use('/api', require('./api'))
app.get('/', (req, res, next) => {
    throw new Error("Sorry, nothing here for you.")
})

// sends index.html
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public/index.html"));
// });

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});

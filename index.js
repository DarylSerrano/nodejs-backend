const { app } = require("./src/server");

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

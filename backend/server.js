/** Server for microblog. */

const app = require("./app");
const { PORT } = require('./config');

// app.listen(process.env.PORT || 5000, function () {
//   console.log("Server is listening on port 5000");
// });
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
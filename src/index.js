const server = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
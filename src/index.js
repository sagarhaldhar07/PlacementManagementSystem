const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./utils/db.connect");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  dbConnect();
});
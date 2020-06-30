const mongoose = require("mongoose");
console.log(process.env);
// const connectionString = "mongodb://localhost:27017/test";
// const connectionString = 'mongodb+srv://common:common123@cluster0-dvsxq.mongodb.net/test'
const connectionString =
  "mongodb+srv://truongan2000pro:bemituot2k@database-fqcgl.gcp.mongodb.net/products?retryWrites=true&w=majority";
mongoose
  .connect(connectionString, {
    // options
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect success to MongoDB");
  })
  .catch((err) => {
    console.error("Connect failed to MongoDB");
    console.error(err);
  });

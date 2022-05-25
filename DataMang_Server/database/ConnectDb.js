const mongoose = require("mongoose");

const URL =
  "mongodb+srv://vicky:vicky@123@cluster0.o1i4r.mongodb.net/?retryWrites=true&w=majority";

modeule.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(URL, connectionParams);
    console.log("connection Success while connecting to DB !");
  } catch (err) {
    console.log("connection Failed while connecting to DB....");
  }
};

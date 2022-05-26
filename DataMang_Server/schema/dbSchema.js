const mongoose = require("mongoose");

const dbSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Class: {
      type: Number,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Attendance: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DataMang", dbSchema);

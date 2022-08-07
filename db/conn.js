const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/GR_RECORDS", )
    .then(() => {
        console.log("Database Connected Succesfully")
    })
    .catch((err) => {
        console.log(err)

    })

exports.module = mongoose
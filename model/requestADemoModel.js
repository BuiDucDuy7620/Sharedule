const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RequestADemoSchema = new Schema({
    // _id: mongoose.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        default: ""
    }
});
module.exports = mongoose.model("RequestADemo", RequestADemoSchema);



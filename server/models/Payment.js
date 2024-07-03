const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    Image:String

})
const Paymentmodel = mongoose.model("payments",PaymentSchema)
module.exports = Paymentmodel;
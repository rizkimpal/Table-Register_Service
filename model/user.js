const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     default: new mongoose.Types.ObjectId().toString(),
//   },
  noReg: { type: String, required: true },
  fullName: { type: String, required: true },
  email: {type: String, required: true},
  attendanceStatus: { type: String, required: false },
  role: { type: String, required: true },
  activityTime: { type: Object, required: false },
  classTime: { type: Object, required: false },
  firstCheckIn: { type: Date, required: true, default: Date.now },
  firstCheckOut: { type: Date, required: true, default: Date.now },
  lastCheckIn: { type: Date, required: false, default: Date.now },
  lastCheckOut: { type: Date, required: false, default: Date.now },
  healthStatus: { type: String, required: true },
  session: { type: Array, required: false },
  kelas: { type: Array, required: false },
  checkInPlace: { type: String, required: true },
  createdBy: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema)

module.exports = User;
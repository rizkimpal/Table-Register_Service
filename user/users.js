let users = [
    {noReg: 1, Nama : 'Rizki'},
    {noReg: 2, Nama: 'Akbar'} 
]

module.exports = users;



// let users = {
//     id: {
//         type: String,
//         required: true,
//         default: new mongoose.Types.ObjectId().toString(),
//       },
//       noReg: { type: String, required: true },
//       fullName: { type: String, required: true },
//       attendanceStatus: { type: String, required: true },
//       role: { type: String, required: true },
//       activityTime: { type: Object, required: true },
//       classTime: { type: Object, required: true },
//       firstCheckIn: { type: Date, required: true, default: Date.now },
//       firstCheckOut: { type: Date, required: true, default: Date.now },
//       lastCheckIn: { type: Date, required: true, default: Date.now },
//       lastCheckOut: { type: Date, required: true, default: Date.now },
//       healthStatus: { type: Object, required: true },
//       session: { type: Array, required: false },
//       kelas: { type: Array, required: false },
//       checkInPlace: { type: String, required: true },
//       createdBy: {
//         type: String,
//       },
//       createdDate: {
//         type: Date,
//         default: Date.now,
//       },
//       updatedDate: {
//         type: Date,
//         default: Date.now,
//       }
// }
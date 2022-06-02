const userSchema = require("../model/user");
const Email = require("./email")

const get = async (req, res) => {
  try { 
    const users = await userSchema.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log("read success");
};

const getUserbynoReg = async (req, res) => {
  try {
    const noreg = req.params.noReg
    const user = await userSchema.findOne({noReg: noreg});
    res.json(user);
    console.log("Hello", user.fullName);
     Email(user.email);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const post = async (req, res) => {
  const user = new userSchema(req.body);
  try {
    const putUser = await user.save();
    res.json(putUser);
    console.log("Welcome", putUser.fullName);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const put = async (req, res) => {
  try {
    const updateUser = await userSchema.updateOne({noReg:req.params.noReg}, {$set: req.body});
    res.status(200).json(updateUser);
    console.log("Data was Updated");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const del = async (req, res) => {
  try {
    const deleteUser = await userSchema.deleteOne({noReg:req.params.noReg});
    res.status(200).json(deleteUser);
    console.log("data was deleted")
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// const create = async (req, res) => {

// }

module.exports = { get, getUserbynoReg, post, put, del };

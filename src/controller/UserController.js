const createUser = (req, res) => {
  try {
    return res.json('login')
  } catch (error) {
    res.status(400).json("ko thay");
  }
};
module.exports = {
    createUser
}
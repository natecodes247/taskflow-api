exports.register = (req, res) => {
  res.status(200).json({ message: "User registered successfully" });
};

exports.login = (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
};


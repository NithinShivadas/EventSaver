const db = require("./database");

//-------------register Account-------------------

const regAccnt = (Name, Email, Password, dob) => {
  return db.User.findOne({ Email }).then((user) => {
    if (user) {
      return {
        statusCode: 400,
        status: false,
        message: "Already exist",
      };
    } else {
      const newUser = new db.User({
        Name,
        Email,
        Password,
        dob,
      });
      newUser.save();
      return {
        statusCode: 200,
        status: true,
        message: "Registered Successful",
      };
    }
  });
};

//------------------------Log in Account----------------------

const logAcnt = (Email, Password) => {
  return db.User.findOne({ Email: Email, Password: Password }).then((user) => {
    if (user) {
      userName = user.Name;
      userEmail = user.Email;
      //  const token=jwToken.sign({tokenAccno:logAccno},'secretkey@123')
      return {
        statusCode: 200,
        status: true,
        message: "Login Success",
        name: userName,
        email: userEmail,
        //  Token:token
      };
    } else {
      return {
        statusCode: 400,
        status: false,
        message: "Login Failed...!!!",
      };
    }
  });
};

module.exports = { regAccnt, logAcnt };

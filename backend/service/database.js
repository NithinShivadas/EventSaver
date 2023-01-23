const mongo = require("mongoose");
mongo.connect("mongodb://localhost:27017/EVENTPICKER", {
  useNewUrlParser: true,
});

//-------------modelfor user-----------------------
const User = mongo.model("User", {
  Name: String,
  Email: String,
  Password: String,
  dob: String,
});
//-------------model for event---------------------
const Event = mongo.model("Event", {
  userEmail: String,
  eventName: String,
  EventDate: String,
  eventOwner: String,
  priority: String,
});

//--------------model for deleted event-------------------
const Deletedevent = mongo.model("Deletedevent", {
  userEmail: String,
  eventName: String,
  EventDate: String,
  eventOwner: String,
  priority: String,
});

module.exports = { User, Event, Deletedevent };

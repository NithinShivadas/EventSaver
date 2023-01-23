const express = require("express");

const router = express.Router();

const db = require("./service/database");
const objectId = require("mongoose").Types.ObjectId;

//ADD EVENT
router.post("/AddEvent", (req, res) => {
  let event = new db.Event({
    userEmail: req.body.userEmail,
    eventName: req.body.eventName,
    EventDate: req.body.EventDate,
    eventOwner: req.body.eventOwner,
    priority: req.body.priority,
  });
  event.save((err, doc) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.send(doc);
    }
  });
});

//GET
router.get("/getEvent", (req, res) => {
  db.Event.find({ userEmail }, (err, doc) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send(doc);
    }
  });
});

//DELETE
router.delete("/delete/:id", (req, res) => {
  if (objectId.isValid(req.params.id)) {
    db.Event.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("error event id", err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send(`No record found with ID ${req.params.id}`);
  }
});



router.post("/deleteadd", (req, res) => {
  let delete_event = new db.Deletedevent({
    userEmail: req.body.userEmail,
    eventName: req.body.eventName,
    EventDate: req.body.EventDate,
    eventOwner: req.body.eventOwner,
    priority: req.body.priority,
  });
  delete_event.save((err, doc) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.send(doc);
    }
  });
});


router.get("/getDelEvent", (req, res) => {
  db.Deletedevent.find({ userEmail },(err, doc) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send(doc);
      console.log(doc);
    }
  });
});

module.exports = router;

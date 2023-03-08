const router = require("express").Router();
const { Message } = require("../../models");

// POST request - store a chat message into the database
// api/messages/save-message
router.post("/save-message", async (req, res) => {
  try {
    // TODO: submitted frontend req.body data to include created_by (user_id)
    // create a new message using the data submitted in the form
    const MessageData = {
      message: req.body.message,
      ticket_id: req.body.ticket_id,
      created_by: req.session.user_id,
    };
    const messageData = await Message.create(req.body);
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request - get all past messages by ticket_id and sort in ASC order (i.e. chronological order)
// api/messages/${ticket_id}
router.get("/:id", async (req, res) => {
  try {
    const pastMessages = await Message.findAll({
      where: {
        ticket_id: req.params.id,
      },
    });

    if (!pastMessages) {
      res.status(404).json({
        message: "Messages not found.",
      });
      return;
    }

    res.status(200).json(pastMessages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { User, SupportUser, Ticket, Message } = require("../../models");
const withAuth = require("../../utils/auth");


// TODO: POST request - store a chat message into the database
router.post('/save-message', async (req, res) => {
    try {
        const messageData = await Message.create(req.body); // TODO: submitted frontend req.body data to include created_by_user_id
        res.status(200).json(messageData)
        
    } catch(err) {
        res.status(500).json(err);
    }
  })

// TODO: GET request - get all past messages by ticket_id and sort in ASC order (i.e. chronological order)
router.get('/', async (req, res) => {
    try {
        // req.body

    } catch(err) {
        res.status(500).json(err);
    }
  })

module.exports = router;
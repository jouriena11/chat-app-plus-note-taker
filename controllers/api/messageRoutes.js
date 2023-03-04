const router = require("express").Router();
const { User, SupportUser, Ticket, Message } = require("../../models");
const withAuth = require("../../utils/auth");


// TODO: POST request - store a chat message into the database
router.post('/', (req, res) => {
    try {
        // req.body
        
    } catch(err) {
        res.status(500).json(err);
    }
  })

// TODO: GET request - get all past messages by ticket_id and sort in ASC order (i.e. chronological order)
router.get('/', (req, res) => {
    try {
        // req.body

    } catch(err) {
        res.status(500).json(err);
    }
  })

module.exports = router;
const router = require("express").Router();
const { Ticket, Message } = require("../../models");

// TODO: GET requests - get all tickets
router.get('/', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
})

// TODO: GET requests - get a ticket by id
router.get('/:id', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
})

// TODO: POST request - create a new ticket
router.post('/', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
})


// TODO: UPDATE request - update ticket title, status, priority
router.put('/:id', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
})

// TODO: DELETE request - delete a ticket by id
router.delete('/:id', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
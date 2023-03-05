const router = require("express").Router();
const { Ticket } = require("../../models");

// GET requests - get all tickets - to be rendered on the left side of a user dashboard
// api/ticket/all
router.get('/all', async (req, res) => {
    try {
        const allTickets = await Ticket.findAll();
        res.status(200).json(allTickets);

    } catch(err) {
        res.status(500).json(err);
    }
})

// GET requests - get a ticket by id
// api/ticket/${id}
router.get('/:id', async (req, res) => {
    try {
        const ticketData = await Ticket.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!ticketData) {
            res.status(404).json({
                message: "Ticket not found."
            });
            return;
        }

        res.status(200).json(ticketData);
        
    } catch(err) {
        res.status(500).json(err);
    }
})

// POST request - create a new ticket
// api/ticket/create-ticket
router.post('/create-ticket', async (req, res) => {
    // TODO: to auto-specify default support_user?
    try {
        const ticketData = await Ticket.create(req.body);
        res.status(200).json(ticketData);
    } catch(err) {
        res.status(500).json(err);
    }
})


// UPDATE request - update ticket title, status, priority, and/or support_user_id
// api/ticket/update/${id}
router.put('update/:id', async (req, res) => {
    try {
        // TODO: update ticket title
        // TODO: update ticket status
        // TODO: update priority
        // TODO: update support_user_id, i.e. reassign
    
    } catch(err) {
        res.status(500).json(err);
    }
})

// DELETE request - delete a ticket by id
// api/ticket/delete/${id}
router.delete('delete/:id', async (req, res) => {
    try {
        const delTicket = await Ticket.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: "Your ticket has been deleted.",
            rows_deleted: delTicket // 1
        })
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
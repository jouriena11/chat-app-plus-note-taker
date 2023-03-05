const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ticketRoutes = require('./ticketRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/user', userRoutes);
router.use('/ticket', ticketRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
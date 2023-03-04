const router = require('express').Router();
const userRoutes = require('./userRoutes');
const supportUserRoutes = require('./supportUserRoutes');
const ticketRoutes = require('./ticketRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/support-user', supportUserRoutes);
router.use('/ticket', ticketRoutes);
router.use('messages', messageRoutes);

module.exports = router;
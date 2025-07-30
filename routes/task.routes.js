const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/task.controller');
const protect = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(protect); // all routes below are protected

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

const express = require('express');
const {
  createUser,
  getAllUser,
  updateUserById,
  deleteUserById,
  updateUserStats,
  updateFavoriteToppings
} = require('../controller/userController');

const router = express.Router();

router.get('/users', getAllUser);
router.post('/users', createUser);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);
router.patch('/users/:id/stats', updateUserStats);
router.patch('/users/:id/toppings', updateFavoriteToppings);

module.exports = router;
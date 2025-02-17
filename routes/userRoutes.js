const express = require('express')
const {createUser,getAllUser,delteUserById,updateUserById,deleteAll} = require('../controller/userController')
const router = express.Router()

router.get('/',getAllUser)
router.post('/',createUser)
router.delete('/',deleteAll)
router.delete('/:id',delteUserById)
router.put('/:id',updateUserById)

module.exports = router;
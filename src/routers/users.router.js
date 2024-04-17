const userRouter = require('express').Router()

const userController = require('../controllers/users.controller')

userRouter.get('/', userController.listAllUsers)
userRouter.get('/create', (req, res)=>{
    return res.render('users/create', {title:"Create Users"})
})
userRouter.post('/', userController.createUser)
userRouter.get('/:id', userController.detailUser)
userRouter.post('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter
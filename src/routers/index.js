const router = require('express').Router()
const userController = require('../controllers/users.controller')

router.get('/', (req, res) => {
  return res.render('index', { title: null })
})

router.use('/users', require('./users.router'))

router.get('/create', (req, res) => {
  return res.render('users/create', { title: 'Create Users' })
})
router.post('/create', userController.createUser)

router.get('/about-us', (req, res) => {
  return res.render('about-us', { title: 'About Us' })
})

module.exports = router

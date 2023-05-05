const router = require('express').Router()

const {
    getUserProfile
} = require ('../controllers/userController')

router.get('/', getUserProfile)

module.exports = router
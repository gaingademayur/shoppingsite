const express = require('express')
var router = express()
const feedbackcontroller = require('./controller/feedback')
const loginController = require('./controller/authenticationController')
const shopController = require('./controller/shopController')

const bodyparser = require('body-parser');
router.use(bodyparser.json())
console.log('hello router')

router.post('/create',feedbackcontroller.create)

router.get('/getall',feedbackcontroller.getall)

router.put('/update/:id', feedbackcontroller.update)

router.delete('/delete/:id', feedbackcontroller.remove)

router.post('/login',loginController.login)

router.post('/newregister',loginController.newregister)

router.get('/shop',shopController.shop)

router.post('/insertitem',shopController.insertitem)

router.get('/pricefilter/:price',shopController.pricefilter)

router.get('/genderfilter/:gender',shopController.genderfilter)

module.exports = router
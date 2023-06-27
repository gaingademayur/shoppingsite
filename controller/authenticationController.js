const loginModel = require('../models/loginModel')

function login(req, res){
    const res1 = loginModel.find().then((result) => {
        let auth = authenticate(req.body.username, req.body.password, result, res)
    }).catch((error) => {
        // res.send(error)
    });
}

function authenticate(username, password, result, res){
    console.log(username+'username')
    console.log(password+'password')
    console.log(result+'result'+typeof(result));
    result.forEach(element => {
        if(element.username == username && element.password == password){
            console.log("authentication complete")
            res.redirect("/route/shop")
            }
    });
    res.send('fishy')
}

function newregister(req, res){
    const loginObj = new loginModel
    loginObj.username = req.body.username
    loginObj.password = req.body.password
    loginObj.save().then((result) =>{
        console.log('one data inserted')
        res.send('success')
    }).catch((error) => {
        console.log('error')
        res.send('error')
    });
}

module.exports = { login, newregister };
const shopModel = require('../models/shopModel')

function shop(req, res) {
    shopModel.find().then((result) => {
            console.log('success')  

        console.log(result)
        res.send(result)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    });
}

function insertitem(req, res) {
    const myShop = new shopModel
    myShop.name = req.body.name
    myShop.description = req.body.description
    myShop.gender = req.body.gender
    myShop.price = req.body.price
    console.log(myShop)
    myShop.save().then((result) => {
        // res.send('result')
        res.redirect('/route/shop')
        console.log('1 doc inserted')
    }).catch((error) => {
        res.send('error')
        console.log(error)
    });
}

function pricefilter(req, res) {
    const resultAll = shopModel.find().then((result) => {
        console.log(result)
        var filteredArray = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].price > req.params.price) {
                filteredArray.push(result[i]);
            }
        }
        console.log(filteredArray)
        // const myResult = resultAll.filter(obj => result.price > req.params.price)
        res.send(filteredArray)
    }).catch((error) => {
        res.send(error)
    });
    console.log(typeof (resultAll))

}

function genderfilter(req, res){
    const resultALl = shopModel.find().then((result)=> {
        console.log(result)
        var filteredArray = [];
        for(let i = 0; i < result.length; i++){
            if(result[i].gender == req.params.gender){
                filteredArray.push(result[i])
            }
        }
        res.send(filteredArray)
    }).catch((error)=> {
        res.send(error)
    });
}

module.exports = { shop, insertitem, pricefilter, genderfilter }
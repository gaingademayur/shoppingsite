const feedback_post = require('../models/feedback')
const mongoose = require('mongoose')
const CircularJSON = require('circular-json')

function create(req, res, next) {
  const feedback_post = require('../models/feedback')
  let feedbackObj = new feedback_post();
  console.log('hello controller')
  feedbackObj.name = req.body.name;
  feedbackObj.feedback = req.body.feedback;
  feedbackObj.save().then((result) => {
    res.send('one doc inserted')
  }).catch((error) => {
    res.send(error)
  });
}


function getall(req, res) {
  const feedback_post = require('../models/feedback')
  console.log('getall res')

  feedback_post.find().then((result) => {
    console.log('getall res')
    res.send(result)
  }).catch((err) => {
    res.send(err)
  });
}

function update(req, res) {
  const id = req.params.id
  console.log(id)
  let myObject = { "feedback": req.body.feedback };
  const objfeedback = 'req.body.feedback'

  feedback_post.replaceOne({ _id: req.params.id }, {"feedback": req.body.feedback}).then((result) => {
    res.send(result)
  }).catch((error) => {
    res.send(error)
  });
}

function remove(req, res) {
  const id = req.params.id
  const res2 = feedback_post.findByIdAndDelete(id).then((result) => {
    console.log(result)
    res.send('success')
  }).catch((error) => {
    console.log(error)
    res.send('error')
  })
}


module.exports = { create, getall, update, remove };
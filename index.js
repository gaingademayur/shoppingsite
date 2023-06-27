const Joi = require('joi');
const mongoose = require('mongoose');
const mongo = require('mongodb')
const express = require('express');
const router = require('./routes')

const app = express();
app.use(express.json());

const my_post = require("./models/post.js");
const feedback_post = require("./models/feedback.js")

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const DB = "mongodb+srv://gaingademayur:ZEj1bOJBt9tuNwNy@cluster0.0rlzavx.mongodb.net/my-database?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log('connection successful!');
}).catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    my_post.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The given id is not found');
    else res.send(course);
});

app.post('/api/courses', (req, res) => {
    console.log(req.body.name);
    // const { error } = validateCourse(req.body);
    var PostModel = new my_post();

    PostModel.name = req.body.name;
    PostModel.city = req.body.city;
    PostModel.age = req.body.age;
    PostModel.save();
    console.log('success');
});
app.put('/api/course/:id', (req, res) => {
    // const course = courses.find(c => c.id === parseInt(req.params.id));
    // if (course.error) res.send('id not found');

    // const validation = validateCourse(req.body);
    // // const { error } = validateCourse(req.body);

    // // if(validation.error) res.send('un valid');

    // course.name = req.body.name;
    // res.send(course);

    const courses = courses.find();
    courses.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
        if (err) {
          return res.status(500).send({error: "Problem with Updating the   Employee recored "})
        };
        res.send({success: "Updation successfull"});
      })
});

app.delete('/api/course/:id', (req, res) => {
    const courseId = courses.find(c => c.id === parseInt(req.params.id));
    console.log(courseId);
    const index = courses.indexOf(courseId);
    courses.splice(index, 1);

    res.send(courses);
});

app.post('/api/feedback', (req, res) => {
    const my_feedback = new feedback_post()
    my_feedback.name = req.body.name
    my_feedback.feedback = req.body.feedback
    my_feedback.save()
    res.send('success')
    // console.log("one feedback sent!")
})

app.get('/api/feedback', (req, res) => {
    const my_feedback = new feedback_post();
    my_feedback.find().then(result => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
});

app.put('/api/feedback/:name', (req, res) => {
    const feedback = feedback_post.find();
    console.log(feedback)
})

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use('/route',router)
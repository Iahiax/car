const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/carMarketDB', { useNewUrlParser: true, useUnifiedTopology: true });

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    price: Number,
    description: String,
    imageUrl: String
});

const Car = mongoose.model('Car', carSchema);

app.post('/addCar', (req, res) => {
    const newCar = new Car(req.body);
    newCar.save(err => {
        if (!err) {
            res.send('Car added successfully!');
        } else {
            res.send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// create a server for the client to connect to and save the customer data to a mongodb database
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Customer from './models/customer.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/customers', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
}
);

router.route('/customers').get((req, res) => {
    Customer.find((err, customers) => {
        if (err)
            console.log(err);
        else
            res.json(customers);
    });
}
);

router.route('/customers/:id').get((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (err)
            console.log(err);
        else
            res.json(customer);
    });
}
);

router.route('/customers/add').post((req, res) => {
    let customer = new Customer(req.body);
    customer.save()
        .then(customer => {
            res.status(200).json({ 'customer': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}
);

router.route('/customers/update/:id').post((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (!customer)
            return next(new Error('Could not load document'));
        else {
            customer.name = req.body.name;
            customer.address = req.body.address;
            customer.city = req.body.city;
            customer.state = req.body.state;
            customer.zip = req.body.zip;
            customer.email = req.body.email;
            customer.phone = req.body.phone;
            customer.save().then(customer => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}
);

router.route('/customers/delete/:id').get((req, res) => {
    
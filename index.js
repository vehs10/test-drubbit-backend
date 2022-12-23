const express = require('express');
const cors = require('cors');
const { restart } = require('nodemon');


const app = express();
const port = 8100;
//


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes charge
const ProductRoutes = require('./routes/product');

app.use('/product', ProductRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
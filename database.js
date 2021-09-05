const mongoose = require('mongoose');
require('dotenv').config();

const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB conectada'))
.catch(err => console.log(err));
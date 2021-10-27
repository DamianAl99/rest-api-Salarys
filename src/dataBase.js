const mongoose = require('mongoose');
require("dotenv").config();
const uri = `mongodb+srv://MasterDataBase:${process.env.BD_PASSWORD}@cluster0.e9bzw.mongodb.net/${process.env.NAME_DATABASE}?retryWrites=true&w=majority`
mongoose
        .connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        .then(db => console.log('db is connected'))
        .catch(err => console.log(err));
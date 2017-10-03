//Import the mongoose module
const mongoose = require('mongoose');
/*
///Set up default mongoose connection
//mongoose.createConnection(url);

mongoose.connect(url, { useMongoClient: true });
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log('db launch');*/

mongoose.Promise = global.Promise;

const url = "mongodb://localhost/Cyoutube";

//const url = "localhost:27017";

const options = {
    promiseLibrary: global.Promise,
    useMongoClient: true,
};

const connect = () => {

    mongoose.connect(url, options)
        .then(function () {
            const admin = new mongoose.mongo.Admin(mongoose.connection.db);
            admin.buildInfo(function (err, info) {
                if (err) {
                    console.err(`Error getting MongoDB info: ${err}`);
                } else {
                    console.log(`Connection to MongoDB (version ${info.version}) opened successfully!`);
                }
            });
        }).catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
}

module.exports = connect;
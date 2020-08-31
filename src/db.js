const mongoose = require('mongoose');

module.exports = {
    connect: DB_HOST => {
        // SETTINGS
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        // CONNECT
        mongoose.connect(DB_HOST);
        // HANDLE ERROR
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    },
    close: () => {
        mongoose.connection.close();
    }
}
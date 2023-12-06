const mongoose = require('mongoose');

module.exports = async () => {
    const url = 'mongodb+srv://sujitpandey1409:FgmVwzESZqMwcZ0I@cluster0.basojry.mongodb.net/?'
    try {
        mongoose.connect(url, {
            useNewUrlParser: true, // default recommended options
            useUnifiedTopology: true,
        })
        console.log('connected to mongoDB');
    } catch (error) {
        console.error(error);
    }
}

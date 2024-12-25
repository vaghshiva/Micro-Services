const mongoose=require('mongoose');

function connect(){
    mongoose.connect(process.env.MONGO_URL)
       .then(() => console.log('ride service Connected to MongoDB'))
       .catch(err => console.error('Failed to connect to MongoDB', err));
}
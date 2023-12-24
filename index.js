const mongoose = require('mongoose');
const User = require('./schemas/user');
require('dotenv').config()

// Connection URL
const mongoURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@maxwellslight.dumvjnt.mongodb.net/?retryWrites=true&w=majority` // Change this to your actual database name

// Connect to MongoDB
mongoose.connect(mongoURI);

// Function to insert a user into the database
async function insertUser(user) {
  try {
    // Create a new instance of the User model with the user object
    const newUser = new User(user);

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(`User inserted with _id: ${savedUser._id}`);
  } catch (error) {
    console.error('Error inserting user:', error.message);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
    console.log('Connection closed');
  }
}

// Example user object
const userObject = {
  name: 'John Doe',
  address: '123 Main St, Cityville',
  email: 'john.doe@example.com',
  orders: [{address: '123 Main St, Cityville', contents: '1 Large Reindeer'}]
};

// Call the function to insert the user into the database
insertUser(userObject);
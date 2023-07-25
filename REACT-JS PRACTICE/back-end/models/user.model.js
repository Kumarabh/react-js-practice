import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Please add a firstName'],
        min: 2,
        max: 100
    },
    lastName: {
        type: String,
        required: [true, 'Please add a lastName'],
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Please add a date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender'],
        enum: ["Male", "Female", "Other"]
    },
    contact: {
         type: String,
         required: [true, 'Please add a contact'],
         unique: true
    },
    address: {
        type: Object,
        required: [true, 'Please add an address'],
        street: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
    },
    occupation: String,
    transactions: Array,
    languages: {
        // Array of strings
        type: [String],
        required: true,
        enum: [
            'English',
            'Hindi',
            'Maithili',
            'Odia',
            'Kannada',
            'telgu',
            'other'
        ]
    },
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "admin"
    }
}, {timestamps: true})

export default mongoose.model('User', userSchema);
import mongoose from 'mongoose'
const bcrypt = require('bcrypt');



const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minLength: [2, "The first name is 2 characters miniumum."],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            minLength: [2, "The last name is 2 characters minimum"]
        },
        email: {
            type: Number,
            required: [true, "The email is required"],
            minLength: [8, "The email is 8 characters minimum"]
        },
        password: {
            type: String,
            required: [true, "The password is required"],
            minLength: [4, "The password is 4 characters minimum"]
        },
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        created_at: {
            type: Date,
            default: () => Date.now(),
            immutable: true
        }
    });

const User = model("User", userSchema)

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

// this should go after 
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

export default User
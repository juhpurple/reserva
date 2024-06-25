import mongoose, { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    email: String
})

const User = mongoose.models.User || model('User', UserSchema)

export default User

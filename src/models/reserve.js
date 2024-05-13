import {Schema, model } from 'mongoose'
const Reserveschema = new Schema ({
    date: String,
    user: { 
        type: Schema.Types.ObjectId,
        ref:'User'
  },
  house: {
    type: Schema.Types.Objectid,
    red: 'House'
  }
})

export default model('Reserve', ReserveSchema)
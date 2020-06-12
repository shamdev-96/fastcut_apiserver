'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookingSchema = new Schema({

  customer_name: {
    type: String,
    required: 'Kindly enter the number of booking'
  },
  customer_phoneNumber: {
    type: Number,
    required: 'Kindly enter the number of booking'
  },
  booking_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Bookings', BookingSchema);
  

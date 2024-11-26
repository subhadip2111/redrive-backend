const mongoose = require('mongoose');

const carBookingSchema = new mongoose.Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarDetails',
      required: true
    },
    bookingDate: {
      type: Date,
      required: true
    },
    bookingTime: {
      type: String, 
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending'
    },
    duration: {
      type: Number, // Duration in hours or days depending on your use case
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

//
// Create the CarBooking model
const CarBooking = mongoose.model('CarBooking', carBookingSchema);

module.exports = CarBooking;

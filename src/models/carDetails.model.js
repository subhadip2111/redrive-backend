const mongoose = require('mongoose');

const carDetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
      },
  carNumber: {
    type: String,
    required: [true, 'Car number is required'],
    unique: true,
    match: [/^[A-Z]{2}-[A-Z0-9]{3}-[A-Z]{3}$/, 'Invalid car number format'],
  },
  carType: {
    type: String,
    required: [true, 'Car type is required'],
    enum: ['2-wheeler', '3-wheeler', '4-wheeler', '6-wheeler', '8-wheeler', '10-wheeler', 'Other'], 
  },
  ownerName: {
    type: String,
    required: [true, 'Owner name is required'],
    minlength: [2, 'Owner name must be at least 2 characters long'],
    maxlength: [50, 'Owner name cannot exceed 50 characters'],
  },
  registrationDate: {   required: true,
    type: Date,
    default: Date.now,
  },
  make: {
    type: String,
    required: [true, 'Car make is required'],
    maxlength: [50, 'Make cannot exceed 50 characters'],
  },
  model: {
    type: String,
    required: [true, 'Car model is required'],
    maxlength: [50, 'Model cannot exceed 50 characters'],
  },
  year: {
    type: Number,
    required: [true, 'Manufacture year is required'],
    min: [1886, 'Year cannot be earlier than 1886'], // The first car was invented in 1886
    max: [new Date().getFullYear(), 'Year cannot be in the future'],
  },
  color: {
    type: String,
    required: [true, 'Color is required'],
    enum: [
      'White', 'Black', 'Silver', 'Blue', 'Red', 'Gray', 'Green', 'Yellow', 'Other',
    ], // Restrict to standard color options
  },
  mileage: {
    type: Number,
    required: [true, 'Mileage is required'],
    min: [0, 'Mileage cannot be negative'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  registrationDate: {
    type: Date,
    required: [true, 'Registration date is required'],
    validate: {
      validator: (value) => value <= new Date(),
      message: 'Registration date cannot be in the future',
    },
  },
  isInsured: {
    type: Boolean,
    default: false,
  },
  insuranceDetails: {
    policyNumber: {
      type: String,
      required: function () {
        return this.isInsured;
      },
    },
    provider: {
      type: String,
      required: function () {
        return this.isInsured;
      },
    },
    expiryDate: {
      type: Date,
      required: function () {
        return this.isInsured;
      },
      validate: {
        validator: (value) => value > new Date(),
        message: 'Insurance expiry date must be in the future',
      },
    },
  },
  serviceHistory: [
    {
      date: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
        min: [0, 'Cost cannot be negative'],
      },
    },
  ],
});

const CarDetails = mongoose.model('CarDetails', carDetailsSchema);

module.exports = CarDetails;

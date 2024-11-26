const mongoose = require('mongoose');

const driverDetailsSchema = new mongoose.Schema({
  driverLicenseNumber: {
    type: String,
    required: [true, 'Driver license number is required'],
    unique: true,
    match: [/^[A-Z0-9]{1,20}$/, 'Invalid driver license number format'], // You can customize the license number format as needed
  },

  address: {
    type: String,
    required: [true, 'Driver address is required'],
    maxlength: [255, 'Address cannot exceed 255 characters'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Driver date of birth is required'],
  },

  ProfileStatus: {
    type: String,
    enum: ['Active', 'Inactive', 'Pending', 'On Leave'],
    default: 'Pending',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model to link this driver to a user
    required: true, // Ensure the driver is associated with a user
  },
  drivingExperience: {
    type: Number,
    required: [true, 'Driver experience is required'],
    min: [0, 'Driving experience cannot be negative'],
    max: [50, 'Driving experience cannot exceed 50 years'],
  },
  documents: {
    license: {
      type: String,
      required: [true, 'Driver license document is required'],
    },
    medical: {
      type: String,
      required: [true, 'Medical certificate document is required'],
    },
    insurance: {
      type: String,
      required: [true, 'Driver insurance document is required'],
    },
  },
});

const DriverDetails = mongoose.model('DriverDetails', driverDetailsSchema);

module.exports = DriverDetails;

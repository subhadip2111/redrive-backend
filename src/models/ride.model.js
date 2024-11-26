const mongoose = require('mongoose');

// Define a schema for the ride
const rideSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    pickupLocation: {
      type: {
        type: String,
        enum: ['Point'], // GeoJSON type
        required: true,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    dropLocation: {
      type: {
        type: String,
        enum: ['Point'], // GeoJSON type
        required: true,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    distance: {
      type: Number, // Distance in kilometers or miles
      required: true,
    },
    price: {
      type: Number, // Price based on distance or any other calculation
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'canceled'],
      default: 'pending',
    },
    rideDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, 
  }
);

// Create an index on location fields for better performance with geospatial queries
rideSchema.index({ pickupLocation: '2dsphere' });
rideSchema.index({ dropLocation: '2dsphere' });

// Method to calculate the distance between pickup and drop locations
rideSchema.methods.calculateDistance = function () {
  const pickup = this.pickupLocation.coordinates;
  const drop = this.dropLocation.coordinates;

  // You can use Haversine formula or a library like 'geolib' to calculate the distance
  // Assuming the distance is already calculated and saved in the distance field
  return this.distance; // Or implement actual distance calculation logic here
};

rideSchema.methods.calculatePrice = function () {
  const pricePerKm = 5; // Example price per kilometer
  this.price = this.distance * pricePerKm;
  return this.price;
};

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;

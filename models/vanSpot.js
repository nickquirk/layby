/* eslint-disable comma-dangle */
import mongoose from 'mongoose'
// ! Schema and model

// * Schema
// 1- area schema
// 2- location schema
// 3- review schema
// 4- rating (virtual) schema

// ? Review schema with embedded owner schema
//   rating: { type: Number, required: true, min: 1, max: 5 },
const reviewSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, unique: false },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true
  }
)

// ? Location schema with embedded owner and referenced reviews
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  countryCode: { type: String, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: true },
  parking: { type: Boolean, required: true },
  freeparking: { type: Boolean, required: true },
  toilets: { type: Boolean, required: true },
  water: { type: Boolean, required: true },
  nearestFuel: { type: Number, required: true },
  nearbyActivities: { type: String },
  image: [String],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  reviews: [reviewSchema]
})

// ? Country schema with referenced owner schema and embedded review schema
const countrySchema = new mongoose.Schema({
  country: { type: String, required: true, unique: true },
  countryCode: { type: String, required: true },
  flag: { type: String, required: true },
  locations: [locationSchema],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
})

// ? Rating
locationSchema.virtual('avgRating').get(function () {
  if (!this.reviews.length) return 'None'
  const sum = this.reviews.reduce((prev, next) => {
    return prev + next.rating
  }, 0)
  return (sum / this.reviews.length).toFixed(1)
})

locationSchema.set('toJSON', {
  virtuals: true
})

// * Model
export default mongoose.model('VanSpot', countrySchema)

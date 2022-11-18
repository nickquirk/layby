import mongoose from 'mongoose'
// ! Schema and model

// * Schema
// 1- area schema
// 2- location schema
// 3- review schema
// 4- rating (virtual) schema

// ? Review schema with embedded owner schema

const reviewSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, unique: false },
    rating: { type: Number, required: true, min: 1, max: 5 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

// ? Location schema with embedded owner and referenced reviews
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  latitude: { type: Number, required: true, unique: true },
  longitude: { type: Number, required: true, unique: true },
  countryCode: { type: String, required: true, unique: false },
  currency: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  parking: { type: Boolean, required: true, unique: false },
  freeparking: { type: Boolean, required: true, unique: false },
  toilets: { type: Boolean, required: true, unique: false },
  water: { type: Boolean, required: true, unique: false },
  nearestFuel: { type: Number, required: true, unique: false },
  otherInfo: { type: String, required: true, unique: false },
  nearbyActivities: { type: String, required: true, unique: false },
  image: { type: String, required: true, unique: false },
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
  countryCode: { type: String, required: true, unique: true },
  locations: [locationSchema],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
})

// ? Rating
locationSchema.virtual('avgRating').get(function () {
  if (!this.reviews.length) return 'No ratings yet'
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

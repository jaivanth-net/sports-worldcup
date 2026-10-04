const mongoose = require('mongoose');

const footballPlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  number: Number,
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  yellowCards: { type: Number, default: 0 },
  redCards: { type: Number, default: 0 },
  isCaptain: { type: Boolean, default: false }
});

const footballMatchSchema = new mongoose.Schema({
  year: { type: Number, required: true, unique: true },
  winner: { type: String, required: true },
  runnerUp: { type: String, required: true },
  venue: String,
  city: String,
  country: String,
  score: String,
  extraTime: { type: Boolean, default: false },
  penalties: { type: Boolean, default: false },
  penaltyScore: String,
  attendance: Number,
  manOfTheMatch: String,
  goldenBoot: { name: String, team: String, goals: Number },
  goldenBall: { name: String, team: String },
  goldenGlove: { name: String, team: String },
  winnerSquad: [footballPlayerSchema],
  runnerUpSquad: [footballPlayerSchema]
});

module.exports = mongoose.model('FootballMatch', footballMatchSchema);

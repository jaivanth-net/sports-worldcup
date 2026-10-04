const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
  isCaptain: { type: Boolean, default: false },
  batting: {
    runs: Number,
    balls: Number,
    fours: Number,
    sixes: Number,
    strikeRate: Number
  },
  bowling: {
    overs: Number,
    maidens: Number,
    runs: Number,
    wickets: Number,
    economy: Number
  },
  catches: { type: Number, default: 0 }
});

const cricketMatchSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  format: { type: String, enum: ['ODI', 'T20', 'Test'], required: true },
  winner: { type: String, required: true },
  runnerUp: { type: String, required: true },
  venue: String,
  city: String,
  country: String,
  result: String,
  winnerScore: String,
  runnerUpScore: String,
  manOfTheMatch: String,
  manOfTheSeries: String,
  winnerPlayingXI: [playerSchema],
  runnerUpPlayingXI: [playerSchema]
});

cricketMatchSchema.index({ year: 1, format: 1 }, { unique: true });

module.exports = mongoose.model('CricketMatch', cricketMatchSchema);

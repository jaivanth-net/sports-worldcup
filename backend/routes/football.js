const express = require('express');
const router = express.Router();
const FootballMatch = require('../models/FootballMatch');
const fallbackFootballData = require('../data/footballData');
const { isDbConnected } = require('../config/db');

// GET overall football stats & leaderboards
router.get('/stats', async (req, res) => {
  const data = fallbackFootballData;
  const winnerCounts = {};
  let totalGoals = 0;

  data.forEach(m => {
    winnerCounts[m.winner] = (winnerCounts[m.winner] || 0) + 1;
    if (m.score) {
      const parts = m.score.split('-').map(p => parseInt(p));
      if (!isNaN(parts[0]) && !isNaN(parts[1])) {
        totalGoals += (parts[0] + parts[1]);
      }
    }
  });

  const winnersLeaderboard = Object.entries(winnerCounts)
    .map(([team, titles]) => ({ team, titles }))
    .sort((a, b) => b.titles - a.titles);

  res.json({
    totalTournaments: data.length,
    totalFinalsGoals: totalGoals,
    winnersLeaderboard
  });
});

// GET all football matches (summary)
router.get('/', async (req, res) => {
  if (isDbConnected()) {
    try {
      const matches = await FootballMatch.find()
        .select('year winner runnerUp venue city country score penalties penaltyScore attendance manOfTheMatch goldenBoot goldenBall goldenGlove')
        .sort({ year: 1 });
      
      if (matches && matches.length > 0) {
        return res.json(matches);
      }
    } catch (err) {
      // Fallback below
    }
  }
  res.json(fallbackFootballData);
});

// GET single match detail by year
router.get('/:year', async (req, res) => {
  const yearNum = parseInt(req.params.year);
  if (isDbConnected()) {
    try {
      const match = await FootballMatch.findOne({ year: yearNum });
      if (match) return res.json(match);
    } catch (err) {
      // Fallback below
    }
  }
  const fallbackMatch = fallbackFootballData.find(m => m.year === yearNum);
  if (!fallbackMatch) return res.status(404).json({ message: 'Match not found' });
  res.json(fallbackMatch);
});

module.exports = router;




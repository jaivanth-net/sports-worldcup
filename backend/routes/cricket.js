const express = require('express');
const router = express.Router();
const CricketMatch = require('../models/CricketMatch');
const fallbackCricketData = require('../data/cricketData');

// GET overall cricket stats & leaderboards
router.get('/stats', async (req, res) => {
  const data = fallbackCricketData;
  const winnerCounts = {};
  let totalMatches = data.length;

  data.forEach(m => {
    winnerCounts[m.winner] = (winnerCounts[m.winner] || 0) + 1;
  });

  const winnersLeaderboard = Object.entries(winnerCounts)
    .map(([team, titles]) => ({ team, titles }))
    .sort((a, b) => b.titles - a.titles);

  res.json({
    totalTournaments: totalMatches,
    winnersLeaderboard,
    formats: {
      ODI: data.filter(m => m.format === 'ODI').length,
      T20: data.filter(m => m.format === 'T20').length
    }
  });
});

// GET all cricket matches (summary)
router.get('/', async (req, res) => {
  try {
    const matches = await CricketMatch.find()
      .select('year format winner runnerUp venue city country result winnerScore runnerUpScore manOfTheMatch manOfTheSeries')
      .sort({ year: 1 });
    
    if (matches && matches.length > 0) {
      return res.json(matches);
    }
    res.json(fallbackCricketData);
  } catch (err) {
    res.json(fallbackCricketData);
  }
});

// GET matches by format (ODI, T20)
router.get('/format/:format', async (req, res) => {
  const fmt = req.params.format.toUpperCase();
  try {
    const matches = await CricketMatch.find({ format: fmt })
      .select('year format winner runnerUp venue city country result winnerScore runnerUpScore manOfTheMatch manOfTheSeries')
      .sort({ year: 1 });
    
    if (matches && matches.length > 0) {
      return res.json(matches);
    }
    res.json(fallbackCricketData.filter(m => m.format === fmt));
  } catch (err) {
    res.json(fallbackCricketData.filter(m => m.format === fmt));
  }
});

// GET single match detail by format and year
router.get('/:format/:year', async (req, res) => {
  const fmt = req.params.format.toUpperCase();
  const yearNum = parseInt(req.params.year);
  try {
    const match = await CricketMatch.findOne({ format: fmt, year: yearNum });
    if (match) return res.json(match);
    
    const fallbackMatch = fallbackCricketData.find(m => m.format === fmt && m.year === yearNum);
    if (!fallbackMatch) return res.status(404).json({ message: 'Match not found' });
    res.json(fallbackMatch);
  } catch (err) {
    const fallbackMatch = fallbackCricketData.find(m => m.format === fmt && m.year === yearNum);
    if (!fallbackMatch) return res.status(404).json({ message: 'Match not found' });
    res.json(fallbackMatch);
  }
});

module.exports = router;



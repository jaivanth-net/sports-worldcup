const cricketData = [
  // ═══════════════════════════════════════
  // ODI WORLD CUP
  // ═══════════════════════════════════════
  {
    year: 1975, format: "ODI", winner: "West Indies", runnerUp: "Australia",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "West Indies won by 17 runs", winnerScore: "291/8 (60 overs)", runnerUpScore: "274 (58.4 overs)",
    manOfTheMatch: "Clive Lloyd", manOfTheSeries: "Clive Lloyd",
    winnerPlayingXI: [
      { name: "Roy Fredericks", role: "Batsman", batting: { runs: 7, balls: 11, fours: 1, sixes: 0, strikeRate: 63.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Gordon Greenidge", role: "Batsman", batting: { runs: 13, balls: 24, fours: 2, sixes: 0, strikeRate: 54.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Alvin Kallicharran", role: "Batsman", batting: { runs: 12, balls: 28, fours: 1, sixes: 0, strikeRate: 42.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rohan Kanhai", role: "Batsman", batting: { runs: 55, balls: 86, fours: 5, sixes: 0, strikeRate: 64.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Clive Lloyd", role: "All-rounder", isCaptain: true, batting: { runs: 102, balls: 85, fours: 12, sixes: 2, strikeRate: 120.0 }, bowling: { overs: 12, maidens: 1, runs: 38, wickets: 1, economy: 3.17 }, catches: 1 },
      { name: "Vivian Richards", role: "Batsman", batting: { runs: 5, balls: 8, fours: 1, sixes: 0, strikeRate: 62.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 3 },
      { name: "Keith Boyce", role: "All-rounder", batting: { runs: 34, balls: 36, fours: 4, sixes: 1, strikeRate: 94.4 }, bowling: { overs: 12, maidens: 0, runs: 50, wickets: 4, economy: 4.17 }, catches: 0 },
      { name: "Bernard Julien", role: "All-rounder", batting: { runs: 26, balls: 33, fours: 2, sixes: 0, strikeRate: 78.8 }, bowling: { overs: 12, maidens: 2, runs: 58, wickets: 1, economy: 4.83 }, catches: 0 },
      { name: "Deryck Murray", role: "Wicket-keeper", batting: { runs: 14, balls: 16, fours: 1, sixes: 0, strikeRate: 87.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Vanburn Holder", role: "Bowler", batting: { runs: 6, balls: 11, fours: 0, sixes: 0, strikeRate: 54.5 }, bowling: { overs: 12, maidens: 3, runs: 65, wickets: 2, economy: 5.42 }, catches: 0 },
      { name: "Andy Roberts", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 11, maidens: 0, runs: 54, wickets: 1, economy: 4.91 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Alan Turner", role: "Batsman", batting: { runs: 40, balls: 58, fours: 5, sixes: 0, strikeRate: 69.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rick McCosker", role: "Batsman", batting: { runs: 7, balls: 16, fours: 1, sixes: 0, strikeRate: 43.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ian Chappell", role: "Batsman", isCaptain: true, batting: { runs: 62, balls: 93, fours: 6, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Greg Chappell", role: "Batsman", batting: { runs: 15, balls: 26, fours: 2, sixes: 0, strikeRate: 57.7 }, bowling: { overs: 7, maidens: 0, runs: 34, wickets: 0, economy: 4.86 }, catches: 0 },
      { name: "Doug Walters", role: "All-rounder", batting: { runs: 35, balls: 51, fours: 3, sixes: 0, strikeRate: 68.6 }, bowling: { overs: 5, maidens: 0, runs: 28, wickets: 0, economy: 5.60 }, catches: 1 },
      { name: "Ross Edwards", role: "Batsman", batting: { runs: 28, balls: 42, fours: 2, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rod Marsh", role: "Wicket-keeper", batting: { runs: 11, balls: 15, fours: 1, sixes: 0, strikeRate: 73.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Max Walker", role: "Bowler", batting: { runs: 7, balls: 13, fours: 1, sixes: 0, strikeRate: 53.8 }, bowling: { overs: 12, maidens: 1, runs: 73, wickets: 1, economy: 6.08 }, catches: 0 },
      { name: "Jeff Thomson", role: "Bowler", batting: { runs: 21, balls: 20, fours: 2, sixes: 1, strikeRate: 105.0 }, bowling: { overs: 12, maidens: 0, runs: 44, wickets: 1, economy: 3.67 }, catches: 0 },
      { name: "Dennis Lillee", role: "Bowler", batting: { runs: 16, balls: 14, fours: 2, sixes: 0, strikeRate: 114.3 }, bowling: { overs: 12, maidens: 1, runs: 55, wickets: 1, economy: 4.58 }, catches: 0 },
      { name: "Gary Gilmour", role: "All-rounder", batting: { runs: 14, balls: 18, fours: 2, sixes: 0, strikeRate: 77.8 }, bowling: { overs: 12, maidens: 2, runs: 48, wickets: 5, economy: 4.00 }, catches: 0 }
    ]
  },
  {
    year: 1979, format: "ODI", winner: "West Indies", runnerUp: "England",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "West Indies won by 92 runs", winnerScore: "286/9 (60 overs)", runnerUpScore: "194 (51 overs)",
    manOfTheMatch: "Vivian Richards", manOfTheSeries: "Vivian Richards",
    winnerPlayingXI: [
      { name: "Gordon Greenidge", role: "Batsman", batting: { runs: 9, balls: 17, fours: 1, sixes: 0, strikeRate: 52.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Desmond Haynes", role: "Batsman", batting: { runs: 20, balls: 39, fours: 2, sixes: 0, strikeRate: 51.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Vivian Richards", role: "Batsman", batting: { runs: 138, balls: 157, fours: 11, sixes: 3, strikeRate: 87.9 }, bowling: { overs: 10, maidens: 2, runs: 35, wickets: 0, economy: 3.50 }, catches: 1 },
      { name: "Alvin Kallicharran", role: "Batsman", batting: { runs: 4, balls: 10, fours: 0, sixes: 0, strikeRate: 40.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Clive Lloyd", role: "All-rounder", isCaptain: true, batting: { runs: 13, balls: 21, fours: 1, sixes: 0, strikeRate: 61.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Collis King", role: "All-rounder", batting: { runs: 86, balls: 66, fours: 10, sixes: 3, strikeRate: 130.3 }, bowling: { overs: 7, maidens: 0, runs: 30, wickets: 0, economy: 4.29 }, catches: 0 },
      { name: "Deryck Murray", role: "Wicket-keeper", batting: { runs: 5, balls: 8, fours: 0, sixes: 0, strikeRate: 62.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Andy Roberts", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 1, runs: 33, wickets: 0, economy: 3.67 }, catches: 0 },
      { name: "Joel Garner", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 11, maidens: 0, runs: 38, wickets: 5, economy: 3.45 }, catches: 0 },
      { name: "Michael Holding", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8, maidens: 0, runs: 33, wickets: 0, economy: 4.13 }, catches: 0 },
      { name: "Colin Croft", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 42, wickets: 3, economy: 4.20 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Mike Brearley", role: "Batsman", isCaptain: true, batting: { runs: 64, balls: 110, fours: 6, sixes: 0, strikeRate: 58.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Geoff Boycott", role: "Batsman", batting: { runs: 57, balls: 105, fours: 5, sixes: 0, strikeRate: 54.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Graham Gooch", role: "Batsman", batting: { runs: 32, balls: 45, fours: 4, sixes: 0, strikeRate: 71.1 }, bowling: { overs: 2, maidens: 0, runs: 12, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "David Gower", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ian Botham", role: "All-rounder", batting: { runs: 4, balls: 6, fours: 0, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 12, maidens: 2, runs: 44, wickets: 2, economy: 3.67 }, catches: 1 },
      { name: "Wayne Larkins", role: "Batsman", batting: { runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Derek Randall", role: "Batsman", batting: { runs: 15, balls: 22, fours: 2, sixes: 0, strikeRate: 68.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Phil Edmonds", role: "Bowler", batting: { runs: 5, balls: 7, fours: 0, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 12, maidens: 2, runs: 40, wickets: 0, economy: 3.33 }, catches: 0 },
      { name: "Bob Taylor", role: "Wicket-keeper", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Chris Old", role: "Bowler", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 12, maidens: 2, runs: 55, wickets: 2, economy: 4.58 }, catches: 0 },
      { name: "Bob Willis", role: "Bowler", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 12, maidens: 2, runs: 47, wickets: 1, economy: 3.92 }, catches: 0 }
    ]
  },
  {
    year: 1983, format: "ODI", winner: "India", runnerUp: "West Indies",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "India won by 43 runs", winnerScore: "183 (54.4 overs)", runnerUpScore: "140 (52 overs)",
    manOfTheMatch: "Mohinder Amarnath", manOfTheSeries: "Kapil Dev",
    winnerPlayingXI: [
      { name: "Sunil Gavaskar", role: "Batsman", batting: { runs: 2, balls: 8, fours: 0, sixes: 0, strikeRate: 25.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kris Srikkanth", role: "Batsman", batting: { runs: 38, balls: 57, fours: 5, sixes: 1, strikeRate: 66.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mohinder Amarnath", role: "All-rounder", batting: { runs: 26, balls: 80, fours: 2, sixes: 0, strikeRate: 32.5 }, bowling: { overs: 7, maidens: 0, runs: 12, wickets: 3, economy: 1.71 }, catches: 0 },
      { name: "Yashpal Sharma", role: "Batsman", batting: { runs: 11, balls: 32, fours: 0, sixes: 0, strikeRate: 34.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Sandeep Patil", role: "Batsman", batting: { runs: 27, balls: 29, fours: 4, sixes: 0, strikeRate: 93.1 }, bowling: { overs: 2, maidens: 0, runs: 9, wickets: 0, economy: 4.50 }, catches: 0 },
      { name: "Kapil Dev", role: "All-rounder", isCaptain: true, batting: { runs: 15, balls: 26, fours: 2, sixes: 0, strikeRate: 57.7 }, bowling: { overs: 11, maidens: 4, runs: 21, wickets: 1, economy: 1.91 }, catches: 1 },
      { name: "Kirti Azad", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 1, runs: 26, wickets: 0, economy: 3.71 }, catches: 0 },
      { name: "Roger Binny", role: "All-rounder", batting: { runs: 2, balls: 5, fours: 0, sixes: 0, strikeRate: 40.0 }, bowling: { overs: 9.4, maidens: 2, runs: 29, wickets: 1, economy: 3.00 }, catches: 0 },
      { name: "Syed Kirmani", role: "Wicket-keeper", batting: { runs: 14, balls: 37, fours: 1, sixes: 0, strikeRate: 37.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Madan Lal", role: "All-rounder", batting: { runs: 17, balls: 27, fours: 2, sixes: 0, strikeRate: 63.0 }, bowling: { overs: 12, maidens: 2, runs: 31, wickets: 3, economy: 2.58 }, catches: 0 },
      { name: "Balwinder Sandhu", role: "Bowler", batting: { runs: 11, balls: 16, fours: 1, sixes: 0, strikeRate: 68.8 }, bowling: { overs: 9, maidens: 1, runs: 32, wickets: 2, economy: 3.56 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Gordon Greenidge", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Desmond Haynes", role: "Batsman", batting: { runs: 13, balls: 25, fours: 2, sixes: 0, strikeRate: 52.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Vivian Richards", role: "Batsman", batting: { runs: 33, balls: 28, fours: 4, sixes: 2, strikeRate: 117.9 }, bowling: { overs: 7, maidens: 0, runs: 36, wickets: 0, economy: 5.14 }, catches: 0 },
      { name: "Clive Lloyd", role: "All-rounder", isCaptain: true, batting: { runs: 8, balls: 17, fours: 0, sixes: 0, strikeRate: 47.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Larry Gomes", role: "Batsman", batting: { runs: 5, balls: 13, fours: 0, sixes: 0, strikeRate: 38.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jeff Dujon", role: "Wicket-keeper", batting: { runs: 25, balls: 73, fours: 2, sixes: 0, strikeRate: 34.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Malcolm Marshall", role: "Bowler", batting: { runs: 18, balls: 51, fours: 2, sixes: 0, strikeRate: 35.3 }, bowling: { overs: 11, maidens: 1, runs: 24, wickets: 0, economy: 2.18 }, catches: 0 },
      { name: "Andy Roberts", role: "Bowler", batting: { runs: 4, balls: 11, fours: 0, sixes: 0, strikeRate: 36.4 }, bowling: { overs: 10, maidens: 3, runs: 32, wickets: 1, economy: 3.20 }, catches: 0 },
      { name: "Joel Garner", role: "Bowler", batting: { runs: 5, balls: 11, fours: 0, sixes: 0, strikeRate: 45.5 }, bowling: { overs: 12, maidens: 4, runs: 24, wickets: 1, economy: 2.00 }, catches: 0 },
      { name: "Michael Holding", role: "Bowler", batting: { runs: 6, balls: 10, fours: 1, sixes: 0, strikeRate: 60.0 }, bowling: { overs: 6, maidens: 0, runs: 28, wickets: 2, economy: 4.67 }, catches: 0 },
      { name: "Faoud Bacchus", role: "Batsman", batting: { runs: 8, balls: 26, fours: 0, sixes: 0, strikeRate: 30.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 }
    ]
  },
  {
    year: 1987, format: "ODI", winner: "Australia", runnerUp: "England",
    venue: "Eden Gardens", city: "Kolkata", country: "India",
    result: "Australia won by 7 runs", winnerScore: "253/5 (50 overs)", runnerUpScore: "246/8 (50 overs)",
    manOfTheMatch: "David Boon", manOfTheSeries: "David Boon",
    winnerPlayingXI: [
      { name: "David Boon", role: "Batsman", batting: { runs: 75, balls: 125, fours: 7, sixes: 0, strikeRate: 60.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Geoff Marsh", role: "Batsman", batting: { runs: 14, balls: 30, fours: 1, sixes: 0, strikeRate: 46.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Dean Jones", role: "Batsman", batting: { runs: 33, balls: 57, fours: 1, sixes: 0, strikeRate: 57.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Allan Border", role: "All-rounder", isCaptain: true, batting: { runs: 31, balls: 42, fours: 3, sixes: 0, strikeRate: 73.8 }, bowling: { overs: 7, maidens: 0, runs: 35, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Mike Veletta", role: "Batsman", batting: { runs: 45, balls: 31, fours: 3, sixes: 2, strikeRate: 145.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Steve Waugh", role: "All-rounder", batting: { runs: 18, balls: 16, fours: 2, sixes: 0, strikeRate: 112.5 }, bowling: { overs: 10, maidens: 0, runs: 37, wickets: 2, economy: 3.70 }, catches: 0 },
      { name: "Simon O'Donnell", role: "All-rounder", batting: { runs: 21, balls: 14, fours: 2, sixes: 1, strikeRate: 150.0 }, bowling: { overs: 10, maidens: 1, runs: 35, wickets: 1, economy: 3.50 }, catches: 0 },
      { name: "Greg Dyer", role: "Wicket-keeper", batting: { runs: 6, balls: 5, fours: 1, sixes: 0, strikeRate: 120.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Craig McDermott", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 2, runs: 51, wickets: 1, economy: 5.10 }, catches: 0 },
      { name: "Tim May", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 46, wickets: 0, economy: 4.60 }, catches: 0 },
      { name: "Bruce Reid", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 40, wickets: 1, economy: 4.00 }, catches: 1 }
    ],
    runnerUpPlayingXI: [
      { name: "Graham Gooch", role: "Batsman", batting: { runs: 35, balls: 57, fours: 4, sixes: 0, strikeRate: 61.4 }, bowling: { overs: 3, maidens: 0, runs: 13, wickets: 0, economy: 4.33 }, catches: 0 },
      { name: "Tim Robinson", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mike Gatting", role: "Batsman", isCaptain: true, batting: { runs: 41, balls: 45, fours: 4, sixes: 0, strikeRate: 91.1 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Bill Athey", role: "Batsman", batting: { runs: 58, balls: 103, fours: 4, sixes: 0, strikeRate: 56.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Allan Lamb", role: "Batsman", batting: { runs: 45, balls: 55, fours: 4, sixes: 1, strikeRate: 81.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "John Emburey", role: "Bowler", batting: { runs: 10, balls: 12, fours: 1, sixes: 0, strikeRate: 83.3 }, bowling: { overs: 10, maidens: 2, runs: 44, wickets: 0, economy: 4.40 }, catches: 0 },
      { name: "Phillip DeFreitas", role: "All-rounder", batting: { runs: 17, balls: 10, fours: 2, sixes: 0, strikeRate: 170.0 }, bowling: { overs: 10, maidens: 1, runs: 34, wickets: 2, economy: 3.40 }, catches: 0 },
      { name: "Neil Foster", role: "Bowler", batting: { runs: 7, balls: 6, fours: 1, sixes: 0, strikeRate: 116.7 }, bowling: { overs: 10, maidens: 1, runs: 38, wickets: 1, economy: 3.80 }, catches: 0 },
      { name: "Paul Downton", role: "Wicket-keeper", batting: { runs: 9, balls: 17, fours: 0, sixes: 0, strikeRate: 52.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Eddie Hemmings", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 48, wickets: 2, economy: 4.80 }, catches: 0 },
      { name: "Gladstone Small", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 48, wickets: 2, economy: 4.80 }, catches: 0 }
    ]
  },
  {
    year: 1992, format: "ODI", winner: "Pakistan", runnerUp: "England",
    venue: "Melbourne Cricket Ground", city: "Melbourne", country: "Australia",
    result: "Pakistan won by 22 runs", winnerScore: "249/6 (50 overs)", runnerUpScore: "227 (49.2 overs)",
    manOfTheMatch: "Wasim Akram", manOfTheSeries: "Martin Crowe",
    winnerPlayingXI: [
      { name: "Aamer Sohail", role: "Batsman", batting: { runs: 4, balls: 7, fours: 1, sixes: 0, strikeRate: 57.1 }, bowling: { overs: 3, maidens: 0, runs: 19, wickets: 0, economy: 6.33 }, catches: 0 },
      { name: "Ramiz Raja", role: "Batsman", batting: { runs: 8, balls: 27, fours: 1, sixes: 0, strikeRate: 29.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Imran Khan", role: "All-rounder", isCaptain: true, batting: { runs: 72, balls: 110, fours: 5, sixes: 1, strikeRate: 65.5 }, bowling: { overs: 6.2, maidens: 0, runs: 43, wickets: 1, economy: 6.79 }, catches: 0 },
      { name: "Javed Miandad", role: "Batsman", batting: { runs: 58, balls: 98, fours: 3, sixes: 0, strikeRate: 59.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Inzamam-ul-Haq", role: "Batsman", batting: { runs: 42, balls: 35, fours: 4, sixes: 1, strikeRate: 120.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Wasim Akram", role: "All-rounder", batting: { runs: 33, balls: 18, fours: 4, sixes: 1, strikeRate: 183.3 }, bowling: { overs: 10, maidens: 0, runs: 49, wickets: 3, economy: 4.90 }, catches: 0 },
      { name: "Saleem Malik", role: "Batsman", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ijaz Ahmed", role: "Batsman", batting: { runs: 2, balls: 6, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Moin Khan", role: "Wicket-keeper", batting: { runs: 20, balls: 14, fours: 2, sixes: 1, strikeRate: 142.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Mushtaq Ahmed", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 41, wickets: 1, economy: 4.10 }, catches: 0 },
      { name: "Aqib Javed", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 37, wickets: 0, economy: 3.70 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Ian Botham", role: "All-rounder", batting: { runs: 0, balls: 6, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 42, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Graham Gooch", role: "Batsman", isCaptain: true, batting: { runs: 29, balls: 66, fours: 1, sixes: 0, strikeRate: 43.9 }, bowling: { overs: 10, maidens: 2, runs: 28, wickets: 0, economy: 2.80 }, catches: 0 },
      { name: "Graeme Hick", role: "Batsman", batting: { runs: 17, balls: 36, fours: 1, sixes: 0, strikeRate: 47.2 }, bowling: { overs: 6, maidens: 0, runs: 29, wickets: 0, economy: 4.83 }, catches: 0 },
      { name: "Neil Fairbrother", role: "Batsman", batting: { runs: 62, balls: 70, fours: 3, sixes: 0, strikeRate: 88.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Allan Lamb", role: "Batsman", batting: { runs: 31, balls: 41, fours: 2, sixes: 0, strikeRate: 75.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Chris Lewis", role: "All-rounder", batting: { runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 2, runs: 40, wickets: 0, economy: 4.00 }, catches: 1 },
      { name: "Dermot Reeve", role: "All-rounder", batting: { runs: 15, balls: 24, fours: 1, sixes: 0, strikeRate: 62.5 }, bowling: { overs: 5, maidens: 1, runs: 22, wickets: 1, economy: 4.40 }, catches: 0 },
      { name: "Derek Pringle", role: "All-rounder", batting: { runs: 18, balls: 25, fours: 2, sixes: 0, strikeRate: 72.0 }, bowling: { overs: 10, maidens: 3, runs: 22, wickets: 1, economy: 2.20 }, catches: 0 },
      { name: "Alec Stewart", role: "Wicket-keeper", batting: { runs: 7, balls: 8, fours: 1, sixes: 0, strikeRate: 87.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Phil DeFreitas", role: "Bowler", batting: { runs: 10, balls: 14, fours: 0, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Richard Illingworth", role: "Bowler", batting: { runs: 14, balls: 8, fours: 2, sixes: 0, strikeRate: 175.0 }, bowling: { overs: 10, maidens: 0, runs: 45, wickets: 1, economy: 4.50 }, catches: 0 }
    ]
  },
  {
    year: 1996, format: "ODI", winner: "Sri Lanka", runnerUp: "Australia",
    venue: "Gaddafi Stadium", city: "Lahore", country: "Pakistan",
    result: "Sri Lanka won by 7 wickets", winnerScore: "245/3 (46.2 overs)", runnerUpScore: "241/7 (50 overs)",
    manOfTheMatch: "Aravinda de Silva", manOfTheSeries: "Sanath Jayasuriya",
    winnerPlayingXI: [
      { name: "Sanath Jayasuriya", role: "All-rounder", batting: { runs: 9, balls: 12, fours: 2, sixes: 0, strikeRate: 75.0 }, bowling: { overs: 3, maidens: 0, runs: 28, wickets: 0, economy: 9.33 }, catches: 0 },
      { name: "Romesh Kaluwitharana", role: "Wicket-keeper", batting: { runs: 6, balls: 14, fours: 1, sixes: 0, strikeRate: 42.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Asanka Gurusinha", role: "Batsman", batting: { runs: 65, balls: 99, fours: 7, sixes: 0, strikeRate: 65.7 }, bowling: { overs: 2, maidens: 0, runs: 14, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Aravinda de Silva", role: "Batsman", batting: { runs: 107, balls: 124, fours: 13, sixes: 0, strikeRate: 86.3 }, bowling: { overs: 10, maidens: 0, runs: 42, wickets: 3, economy: 4.20 }, catches: 0 },
      { name: "Arjuna Ranatunga", role: "Batsman", isCaptain: true, batting: { runs: 47, balls: 37, fours: 4, sixes: 1, strikeRate: 127.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Hashan Tillakaratne", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Roshan Mahanama", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Chaminda Vaas", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8, maidens: 0, runs: 36, wickets: 0, economy: 4.50 }, catches: 0 },
      { name: "Kumar Dharmasena", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 47, wickets: 0, economy: 4.70 }, catches: 0 },
      { name: "Muttiah Muralitharan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 31, wickets: 1, economy: 3.10 }, catches: 0 },
      { name: "Ravindra Pushpakumara", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 43, wickets: 3, economy: 6.14 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Mark Taylor", role: "Batsman", isCaptain: true, batting: { runs: 74, balls: 83, fours: 8, sixes: 1, strikeRate: 89.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mark Waugh", role: "Batsman", batting: { runs: 12, balls: 14, fours: 2, sixes: 0, strikeRate: 85.7 }, bowling: { overs: 5, maidens: 0, runs: 24, wickets: 0, economy: 4.80 }, catches: 0 },
      { name: "Ricky Ponting", role: "Batsman", batting: { runs: 45, balls: 73, fours: 2, sixes: 0, strikeRate: 61.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Stuart Law", role: "Batsman", batting: { runs: 22, balls: 27, fours: 1, sixes: 0, strikeRate: 81.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Steve Waugh", role: "All-rounder", batting: { runs: 13, balls: 19, fours: 0, sixes: 0, strikeRate: 68.4 }, bowling: { overs: 6, maidens: 0, runs: 32, wickets: 0, economy: 5.33 }, catches: 0 },
      { name: "Michael Bevan", role: "Batsman", batting: { runs: 36, balls: 30, fours: 3, sixes: 1, strikeRate: 120.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ian Healy", role: "Wicket-keeper", batting: { runs: 20, balls: 28, fours: 1, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Shane Warne", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 58, wickets: 0, economy: 5.80 }, catches: 0 },
      { name: "Paul Reiffel", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8, maidens: 1, runs: 35, wickets: 0, economy: 4.38 }, catches: 0 },
      { name: "Damien Fleming", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 43, wickets: 1, economy: 6.14 }, catches: 0 },
      { name: "Glenn McGrath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8.2, maidens: 2, runs: 28, wickets: 0, economy: 3.36 }, catches: 0 }
    ]
  },
  {
    year: 1999, format: "ODI", winner: "Australia", runnerUp: "Pakistan",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "Australia won by 8 wickets", winnerScore: "133/2 (20.1 overs)", runnerUpScore: "132 (39 overs)",
    manOfTheMatch: "Shane Warne", manOfTheSeries: "Lance Klusener",
    winnerPlayingXI: [
      { name: "Mark Waugh", role: "Batsman", batting: { runs: 37, balls: 51, fours: 6, sixes: 0, strikeRate: 72.5 }, bowling: { overs: 3, maidens: 0, runs: 15, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Adam Gilchrist", role: "Wicket-keeper", batting: { runs: 54, balls: 36, fours: 8, sixes: 1, strikeRate: 150.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Ricky Ponting", role: "Batsman", batting: { runs: 24, balls: 27, fours: 3, sixes: 0, strikeRate: 88.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Darren Lehmann", role: "Batsman", batting: { runs: 13, balls: 7, fours: 1, sixes: 1, strikeRate: 185.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Steve Waugh", role: "All-rounder", isCaptain: true, batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 5, maidens: 1, runs: 12, wickets: 0, economy: 2.40 }, catches: 0 },
      { name: "Michael Bevan", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Tom Moody", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 1, runs: 23, wickets: 1, economy: 3.29 }, catches: 0 },
      { name: "Shane Warne", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 2, runs: 33, wickets: 4, economy: 3.67 }, catches: 0 },
      { name: "Paul Reiffel", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 6, maidens: 0, runs: 18, wickets: 1, economy: 3.00 }, catches: 0 },
      { name: "Damien Fleming", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 6, maidens: 2, runs: 12, wickets: 3, economy: 2.00 }, catches: 0 },
      { name: "Glenn McGrath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3.1, maidens: 1, runs: 13, wickets: 1, economy: 4.11 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Saeed Anwar", role: "Batsman", batting: { runs: 15, balls: 26, fours: 2, sixes: 0, strikeRate: 57.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Wajahatullah Wasti", role: "Batsman", batting: { runs: 1, balls: 11, fours: 0, sixes: 0, strikeRate: 9.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Abdul Razzaq", role: "All-rounder", batting: { runs: 17, balls: 32, fours: 1, sixes: 0, strikeRate: 53.1 }, bowling: { overs: 4, maidens: 0, runs: 28, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Inzamam-ul-Haq", role: "Batsman", batting: { runs: 15, balls: 23, fours: 2, sixes: 0, strikeRate: 65.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ijaz Ahmed", role: "Batsman", batting: { runs: 22, balls: 34, fours: 2, sixes: 0, strikeRate: 64.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Moin Khan", role: "Wicket-keeper", batting: { runs: 6, balls: 9, fours: 1, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shahid Afridi", role: "All-rounder", batting: { runs: 13, balls: 14, fours: 2, sixes: 0, strikeRate: 92.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Wasim Akram", role: "All-rounder", isCaptain: true, batting: { runs: 8, balls: 14, fours: 1, sixes: 0, strikeRate: 57.1 }, bowling: { overs: 7, maidens: 0, runs: 40, wickets: 1, economy: 5.71 }, catches: 0 },
      { name: "Azhar Mahmood", role: "All-rounder", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 15, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Shoaib Akhtar", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 22, wickets: 1, economy: 7.33 }, catches: 0 },
      { name: "Saqlain Mushtaq", role: "Bowler", batting: { runs: 0, balls: 6, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 5.1, maidens: 0, runs: 17, wickets: 0, economy: 3.29 }, catches: 0 }
    ]
  },
  {
    year: 2003, format: "ODI", winner: "Australia", runnerUp: "India",
    venue: "Wanderers Stadium", city: "Johannesburg", country: "South Africa",
    result: "Australia won by 125 runs", winnerScore: "359/2 (50 overs)", runnerUpScore: "234 (39.2 overs)",
    manOfTheMatch: "Ricky Ponting", manOfTheSeries: "Sachin Tendulkar",
    winnerPlayingXI: [
      { name: "Adam Gilchrist", role: "Wicket-keeper", batting: { runs: 57, balls: 48, fours: 8, sixes: 1, strikeRate: 118.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Matthew Hayden", role: "Batsman", batting: { runs: 37, balls: 54, fours: 5, sixes: 0, strikeRate: 68.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ricky Ponting", role: "Batsman", isCaptain: true, batting: { runs: 140, balls: 121, fours: 4, sixes: 8, strikeRate: 115.7 }, bowling: { overs: 2, maidens: 0, runs: 12, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Damien Martyn", role: "Batsman", batting: { runs: 88, balls: 84, fours: 7, sixes: 1, strikeRate: 104.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Darren Lehmann", role: "Batsman", batting: { runs: 36, balls: 17, fours: 4, sixes: 1, strikeRate: 211.8 }, bowling: { overs: 5, maidens: 0, runs: 31, wickets: 0, economy: 6.20 }, catches: 0 },
      { name: "Andrew Symonds", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 18, wickets: 2, economy: 4.50 }, catches: 0 },
      { name: "Michael Bevan", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 15, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Andy Bichel", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 50, wickets: 2, economy: 7.14 }, catches: 0 },
      { name: "Brett Lee", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 31, wickets: 0, economy: 4.43 }, catches: 0 },
      { name: "Glenn McGrath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8.2, maidens: 0, runs: 52, wickets: 3, economy: 6.24 }, catches: 0 },
      { name: "Jason Gillespie", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 25, wickets: 0, economy: 8.33 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Sachin Tendulkar", role: "Batsman", batting: { runs: 4, balls: 5, fours: 1, sixes: 0, strikeRate: 80.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virender Sehwag", role: "Batsman", batting: { runs: 82, balls: 81, fours: 10, sixes: 3, strikeRate: 101.2 }, bowling: { overs: 5, maidens: 0, runs: 26, wickets: 0, economy: 5.20 }, catches: 0 },
      { name: "Sourav Ganguly", role: "All-rounder", isCaptain: true, batting: { runs: 24, balls: 25, fours: 3, sixes: 0, strikeRate: 96.0 }, bowling: { overs: 3, maidens: 0, runs: 24, wickets: 0, economy: 8.00 }, catches: 0 },
      { name: "Rahul Dravid", role: "Batsman", batting: { runs: 47, balls: 57, fours: 4, sixes: 0, strikeRate: 82.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Yuvraj Singh", role: "All-rounder", batting: { runs: 24, balls: 34, fours: 1, sixes: 1, strikeRate: 70.6 }, bowling: { overs: 2, maidens: 0, runs: 20, wickets: 0, economy: 10.00 }, catches: 0 },
      { name: "Mohammad Kaif", role: "Batsman", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Dinesh Mongia", role: "All-rounder", batting: { runs: 12, balls: 13, fours: 2, sixes: 0, strikeRate: 92.3 }, bowling: { overs: 10, maidens: 0, runs: 51, wickets: 1, economy: 5.10 }, catches: 0 },
      { name: "Harbhajan Singh", role: "Bowler", batting: { runs: 7, balls: 6, fours: 1, sixes: 0, strikeRate: 116.7 }, bowling: { overs: 9, maidens: 0, runs: 49, wickets: 2, economy: 5.44 }, catches: 0 },
      { name: "Zaheer Khan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 67, wickets: 1, economy: 9.57 }, catches: 0 },
      { name: "Javagal Srinath", role: "Bowler", batting: { runs: 12, balls: 7, fours: 2, sixes: 0, strikeRate: 171.4 }, bowling: { overs: 7, maidens: 0, runs: 57, wickets: 0, economy: 8.14 }, catches: 0 },
      { name: "Ashish Nehra", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 57, wickets: 2, economy: 8.14 }, catches: 0 }
    ]
  },
  {
    year: 2007, format: "ODI", winner: "Australia", runnerUp: "Sri Lanka",
    venue: "Kensington Oval", city: "Bridgetown", country: "Barbados",
    result: "Australia won by 53 runs (D/L method)", winnerScore: "281/4 (38 overs)", runnerUpScore: "215/8 (36 overs)",
    manOfTheMatch: "Adam Gilchrist", manOfTheSeries: "Glenn McGrath",
    winnerPlayingXI: [
      { name: "Adam Gilchrist", role: "Wicket-keeper", batting: { runs: 149, balls: 104, fours: 13, sixes: 8, strikeRate: 143.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Matthew Hayden", role: "Batsman", batting: { runs: 38, balls: 49, fours: 3, sixes: 1, strikeRate: 77.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ricky Ponting", role: "Batsman", isCaptain: true, batting: { runs: 37, balls: 42, fours: 5, sixes: 0, strikeRate: 88.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Michael Clarke", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 22, wickets: 0, economy: 7.33 }, catches: 0 },
      { name: "Andrew Symonds", role: "All-rounder", batting: { runs: 23, balls: 21, fours: 3, sixes: 0, strikeRate: 109.5 }, bowling: { overs: 1, maidens: 0, runs: 9, wickets: 0, economy: 9.00 }, catches: 0 },
      { name: "Mike Hussey", role: "Batsman", batting: { runs: 25, balls: 14, fours: 3, sixes: 0, strikeRate: 178.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Brad Haddin", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Brad Hogg", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 47, wickets: 1, economy: 6.71 }, catches: 0 },
      { name: "Nathan Bracken", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 1, runs: 27, wickets: 1, economy: 3.86 }, catches: 0 },
      { name: "Shaun Tait", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 42, wickets: 1, economy: 6.00 }, catches: 0 },
      { name: "Glenn McGrath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 38, wickets: 3, economy: 5.43 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Upul Tharanga", role: "Batsman", batting: { runs: 6, balls: 14, fours: 1, sixes: 0, strikeRate: 42.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Sanath Jayasuriya", role: "All-rounder", batting: { runs: 63, balls: 67, fours: 8, sixes: 1, strikeRate: 94.0 }, bowling: { overs: 3, maidens: 0, runs: 29, wickets: 1, economy: 9.67 }, catches: 0 },
      { name: "Kumar Sangakkara", role: "Wicket-keeper", batting: { runs: 54, balls: 46, fours: 5, sixes: 1, strikeRate: 117.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Mahela Jayawardene", role: "Batsman", isCaptain: true, batting: { runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Marvan Atapattu", role: "Batsman", batting: { runs: 25, balls: 20, fours: 3, sixes: 0, strikeRate: 125.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Tillakaratne Dilshan", role: "All-rounder", batting: { runs: 11, balls: 11, fours: 1, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 5, maidens: 0, runs: 41, wickets: 0, economy: 8.20 }, catches: 0 },
      { name: "Russel Arnold", role: "Batsman", batting: { runs: 17, balls: 13, fours: 1, sixes: 1, strikeRate: 130.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Chaminda Vaas", role: "Bowler", batting: { runs: 16, balls: 12, fours: 2, sixes: 0, strikeRate: 133.3 }, bowling: { overs: 8, maidens: 0, runs: 52, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Nuwan Kulasekara", role: "Bowler", batting: { runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 8, maidens: 0, runs: 49, wickets: 0, economy: 6.13 }, catches: 0 },
      { name: "Muttiah Muralitharan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 31, wickets: 1, economy: 4.43 }, catches: 0 },
      { name: "Lasith Malinga", role: "Bowler", batting: { runs: 3, balls: 3, fours: 0, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 7, maidens: 0, runs: 49, wickets: 1, economy: 7.00 }, catches: 0 }
    ]
  },
  {
    year: 2011, format: "ODI", winner: "India", runnerUp: "Sri Lanka",
    venue: "Wankhede Stadium", city: "Mumbai", country: "India",
    result: "India won by 6 wickets", winnerScore: "277/4 (48.2 overs)", runnerUpScore: "274/6 (50 overs)",
    manOfTheMatch: "MS Dhoni", manOfTheSeries: "Yuvraj Singh",
    winnerPlayingXI: [
      { name: "Virender Sehwag", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Sachin Tendulkar", role: "Batsman", batting: { runs: 18, balls: 14, fours: 2, sixes: 1, strikeRate: 128.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Gautam Gambhir", role: "Batsman", batting: { runs: 97, balls: 122, fours: 9, sixes: 0, strikeRate: 79.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virat Kohli", role: "Batsman", batting: { runs: 35, balls: 49, fours: 4, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "MS Dhoni", role: "Wicket-keeper", isCaptain: true, batting: { runs: 91, balls: 79, fours: 8, sixes: 2, strikeRate: 115.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Yuvraj Singh", role: "All-rounder", batting: { runs: 21, balls: 24, fours: 2, sixes: 0, strikeRate: 87.5 }, bowling: { overs: 2, maidens: 0, runs: 6, wickets: 0, economy: 3.00 }, catches: 0 },
      { name: "Suresh Raina", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 1, maidens: 0, runs: 2, wickets: 0, economy: 2.00 }, catches: 0 },
      { name: "Harbhajan Singh", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 50, wickets: 1, economy: 5.00 }, catches: 0 },
      { name: "Zaheer Khan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 60, wickets: 2, economy: 6.00 }, catches: 0 },
      { name: "Munaf Patel", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 1, runs: 41, wickets: 0, economy: 4.56 }, catches: 1 },
      { name: "Sreesanth", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8, maidens: 0, runs: 52, wickets: 2, economy: 6.50 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Upul Tharanga", role: "Batsman", batting: { runs: 2, balls: 20, fours: 0, sixes: 0, strikeRate: 10.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Tillakaratne Dilshan", role: "All-rounder", batting: { runs: 33, balls: 49, fours: 3, sixes: 0, strikeRate: 67.3 }, bowling: { overs: 3, maidens: 0, runs: 27, wickets: 0, economy: 9.00 }, catches: 0 },
      { name: "Kumar Sangakkara", role: "Wicket-keeper", isCaptain: true, batting: { runs: 48, balls: 67, fours: 5, sixes: 0, strikeRate: 71.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Mahela Jayawardene", role: "Batsman", batting: { runs: 103, balls: 88, fours: 13, sixes: 0, strikeRate: 117.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Thilan Samaraweera", role: "Batsman", batting: { runs: 21, balls: 34, fours: 1, sixes: 0, strikeRate: 61.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Chamara Kapugedera", role: "Batsman", batting: { runs: 1, balls: 3, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Nuwan Kulasekara", role: "All-rounder", batting: { runs: 32, balls: 30, fours: 3, sixes: 0, strikeRate: 106.7 }, bowling: { overs: 8.2, maidens: 0, runs: 64, wickets: 2, economy: 7.68 }, catches: 0 },
      { name: "Thisara Perera", role: "All-rounder", batting: { runs: 22, balls: 9, fours: 2, sixes: 1, strikeRate: 244.4 }, bowling: { overs: 8, maidens: 0, runs: 55, wickets: 2, economy: 6.88 }, catches: 0 },
      { name: "Lasith Malinga", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 0, runs: 42, wickets: 0, economy: 4.67 }, catches: 0 },
      { name: "Suraj Randiv", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 43, wickets: 0, economy: 4.30 }, catches: 0 },
      { name: "Muttiah Muralitharan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 39, wickets: 1, economy: 3.90 }, catches: 0 }
    ]
  },
  {
    year: 2015, format: "ODI", winner: "Australia", runnerUp: "New Zealand",
    venue: "Melbourne Cricket Ground", city: "Melbourne", country: "Australia",
    result: "Australia won by 7 wickets", winnerScore: "186/3 (33.1 overs)", runnerUpScore: "183 (45 overs)",
    manOfTheMatch: "James Faulkner", manOfTheSeries: "Mitchell Starc",
    winnerPlayingXI: [
      { name: "Aaron Finch", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "David Warner", role: "Batsman", batting: { runs: 45, balls: 46, fours: 5, sixes: 1, strikeRate: 97.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Steven Smith", role: "Batsman", batting: { runs: 56, balls: 71, fours: 6, sixes: 0, strikeRate: 78.9 }, bowling: { overs: 3, maidens: 0, runs: 21, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Michael Clarke", role: "Batsman", isCaptain: true, batting: { runs: 74, balls: 72, fours: 8, sixes: 0, strikeRate: 102.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shane Watson", role: "All-rounder", batting: { runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 19, wickets: 0, economy: 4.75 }, catches: 0 },
      { name: "Glenn Maxwell", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 18, wickets: 0, economy: 9.00 }, catches: 0 },
      { name: "James Faulkner", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 1, runs: 36, wickets: 3, economy: 4.00 }, catches: 0 },
      { name: "Brad Haddin", role: "Wicket-keeper", batting: { runs: 1, balls: 4, fours: 0, sixes: 0, strikeRate: 25.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Mitchell Johnson", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 2, runs: 30, wickets: 3, economy: 3.33 }, catches: 0 },
      { name: "Mitchell Starc", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 8, maidens: 1, runs: 28, wickets: 2, economy: 3.50 }, catches: 0 },
      { name: "Josh Hazlewood", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9, maidens: 0, runs: 30, wickets: 2, economy: 3.33 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Martin Guptill", role: "Batsman", batting: { runs: 15, balls: 21, fours: 1, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Brendon McCullum", role: "Batsman", isCaptain: true, batting: { runs: 12, balls: 11, fours: 2, sixes: 0, strikeRate: 109.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kane Williamson", role: "Batsman", batting: { runs: 12, balls: 29, fours: 1, sixes: 0, strikeRate: 41.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ross Taylor", role: "Batsman", batting: { runs: 40, balls: 72, fours: 2, sixes: 0, strikeRate: 55.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Grant Elliott", role: "All-rounder", batting: { runs: 83, balls: 82, fours: 7, sixes: 2, strikeRate: 101.2 }, bowling: { overs: 5, maidens: 0, runs: 37, wickets: 1, economy: 7.40 }, catches: 0 },
      { name: "Corey Anderson", role: "All-rounder", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 19, wickets: 0, economy: 9.50 }, catches: 0 },
      { name: "Luke Ronchi", role: "Wicket-keeper", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Daniel Vettori", role: "Bowler", batting: { runs: 2, balls: 6, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 10, maidens: 0, runs: 38, wickets: 0, economy: 3.80 }, catches: 0 },
      { name: "Tim Southee", role: "Bowler", batting: { runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 9.1, maidens: 1, runs: 39, wickets: 1, economy: 4.25 }, catches: 0 },
      { name: "Matt Henry", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 0, runs: 46, wickets: 1, economy: 6.57 }, catches: 0 },
      { name: "Trent Boult", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 40, wickets: 1, economy: 4.00 }, catches: 0 }
    ]
  },
  {
    year: 2019, format: "ODI", winner: "England", runnerUp: "New Zealand",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "Match tied, Super Over tied, England won on boundary count", winnerScore: "241 (50 overs)", runnerUpScore: "241/8 (50 overs)",
    manOfTheMatch: "Ben Stokes", manOfTheSeries: "Kane Williamson",
    winnerPlayingXI: [
      { name: "Jason Roy", role: "Batsman", batting: { runs: 17, balls: 22, fours: 2, sixes: 0, strikeRate: 77.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jonny Bairstow", role: "Batsman", batting: { runs: 36, balls: 55, fours: 5, sixes: 0, strikeRate: 65.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Joe Root", role: "Batsman", batting: { runs: 7, balls: 30, fours: 0, sixes: 0, strikeRate: 23.3 }, bowling: { overs: 1, maidens: 0, runs: 2, wickets: 0, economy: 2.00 }, catches: 0 },
      { name: "Eoin Morgan", role: "Batsman", isCaptain: true, batting: { runs: 9, balls: 22, fours: 0, sixes: 0, strikeRate: 40.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ben Stokes", role: "All-rounder", batting: { runs: 84, balls: 98, fours: 5, sixes: 2, strikeRate: 85.7 }, bowling: { overs: 9, maidens: 1, runs: 49, wickets: 2, economy: 5.44 }, catches: 1 },
      { name: "Jos Buttler", role: "Wicket-keeper", batting: { runs: 59, balls: 60, fours: 3, sixes: 2, strikeRate: 98.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Chris Woakes", role: "All-rounder", batting: { runs: 2, balls: 6, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 10, maidens: 1, runs: 37, wickets: 3, economy: 3.70 }, catches: 0 },
      { name: "Liam Plunkett", role: "Bowler", batting: { runs: 10, balls: 18, fours: 1, sixes: 0, strikeRate: 55.6 }, bowling: { overs: 10, maidens: 0, runs: 42, wickets: 1, economy: 4.20 }, catches: 0 },
      { name: "Jofra Archer", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 42, wickets: 1, economy: 4.20 }, catches: 0 },
      { name: "Adil Rashid", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 59, wickets: 0, economy: 5.90 }, catches: 0 },
      { name: "Mark Wood", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 49, wickets: 1, economy: 4.90 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Martin Guptill", role: "Batsman", batting: { runs: 19, balls: 18, fours: 2, sixes: 1, strikeRate: 105.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Henry Nicholls", role: "Batsman", batting: { runs: 55, balls: 77, fours: 6, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kane Williamson", role: "Batsman", isCaptain: true, batting: { runs: 30, balls: 53, fours: 2, sixes: 0, strikeRate: 56.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ross Taylor", role: "Batsman", batting: { runs: 15, balls: 31, fours: 1, sixes: 0, strikeRate: 48.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Tom Latham", role: "Wicket-keeper", batting: { runs: 47, balls: 56, fours: 3, sixes: 0, strikeRate: 83.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "James Neesham", role: "All-rounder", batting: { runs: 19, balls: 25, fours: 2, sixes: 0, strikeRate: 76.0 }, bowling: { overs: 7, maidens: 0, runs: 43, wickets: 3, economy: 6.14 }, catches: 0 },
      { name: "Colin de Grandhomme", role: "All-rounder", batting: { runs: 16, balls: 28, fours: 1, sixes: 0, strikeRate: 57.1 }, bowling: { overs: 10, maidens: 2, runs: 25, wickets: 1, economy: 2.50 }, catches: 0 },
      { name: "Mitchell Santner", role: "All-rounder", batting: { runs: 5, balls: 5, fours: 0, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 10, maidens: 0, runs: 40, wickets: 0, economy: 4.00 }, catches: 0 },
      { name: "Matt Henry", role: "Bowler", batting: { runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.0 }, bowling: { overs: 10, maidens: 2, runs: 40, wickets: 1, economy: 4.00 }, catches: 0 },
      { name: "Lockie Ferguson", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 50, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Trent Boult", role: "Bowler", batting: { runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 }, bowling: { overs: 10, maidens: 1, runs: 40, wickets: 2, economy: 4.00 }, catches: 0 }
    ]
  },
  {
    year: 2023, format: "ODI", winner: "Australia", runnerUp: "India",
    venue: "Narendra Modi Stadium", city: "Ahmedabad", country: "India",
    result: "Australia won by 6 wickets", winnerScore: "241/4 (43 overs)", runnerUpScore: "240 (50 overs)",
    manOfTheMatch: "Travis Head", manOfTheSeries: "Virat Kohli",
    winnerPlayingXI: [
      { name: "Travis Head", role: "Batsman", batting: { runs: 137, balls: 120, fours: 15, sixes: 4, strikeRate: 114.2 }, bowling: { overs: 3, maidens: 0, runs: 21, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "David Warner", role: "Batsman", batting: { runs: 7, balls: 8, fours: 1, sixes: 0, strikeRate: 87.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Marnus Labuschagne", role: "Batsman", batting: { runs: 58, balls: 110, fours: 4, sixes: 0, strikeRate: 52.7 }, bowling: { overs: 3, maidens: 0, runs: 10, wickets: 0, economy: 3.33 }, catches: 1 },
      { name: "Steven Smith", role: "Batsman", batting: { runs: 4, balls: 11, fours: 0, sixes: 0, strikeRate: 36.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Glenn Maxwell", role: "All-rounder", batting: { runs: 23, balls: 14, fours: 2, sixes: 1, strikeRate: 164.3 }, bowling: { overs: 6, maidens: 0, runs: 31, wickets: 2, economy: 5.17 }, catches: 0 },
      { name: "Pat Cummins", role: "Bowler", isCaptain: true, batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 34, wickets: 2, economy: 3.40 }, catches: 0 },
      { name: "Mitchell Starc", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 55, wickets: 3, economy: 5.50 }, catches: 0 },
      { name: "Josh Hazlewood", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 2, runs: 31, wickets: 2, economy: 3.10 }, catches: 0 },
      { name: "Adam Zampa", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 42, wickets: 0, economy: 4.20 }, catches: 0 },
      { name: "Josh Inglis", role: "Wicket-keeper", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Mitchell Marsh", role: "All-rounder", batting: { runs: 5, balls: 6, fours: 1, sixes: 0, strikeRate: 83.3 }, bowling: { overs: 1, maidens: 0, runs: 12, wickets: 0, economy: 12.00 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Rohit Sharma", role: "Batsman", isCaptain: true, batting: { runs: 47, balls: 31, fours: 4, sixes: 3, strikeRate: 151.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shubman Gill", role: "Batsman", batting: { runs: 4, balls: 6, fours: 1, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virat Kohli", role: "Batsman", batting: { runs: 54, balls: 63, fours: 6, sixes: 0, strikeRate: 85.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shreyas Iyer", role: "Batsman", batting: { runs: 4, balls: 18, fours: 0, sixes: 0, strikeRate: 22.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "KL Rahul", role: "Wicket-keeper", batting: { runs: 66, balls: 107, fours: 2, sixes: 0, strikeRate: 61.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Suryakumar Yadav", role: "Batsman", batting: { runs: 18, balls: 28, fours: 1, sixes: 1, strikeRate: 64.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ravindra Jadeja", role: "All-rounder", batting: { runs: 9, balls: 22, fours: 0, sixes: 0, strikeRate: 40.9 }, bowling: { overs: 10, maidens: 0, runs: 43, wickets: 0, economy: 4.30 }, catches: 0 },
      { name: "Jasprit Bumrah", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 1, runs: 43, wickets: 2, economy: 4.30 }, catches: 0 },
      { name: "Mohammed Shami", role: "Bowler", batting: { runs: 6, balls: 6, fours: 0, sixes: 1, strikeRate: 100.0 }, bowling: { overs: 10, maidens: 1, runs: 57, wickets: 2, economy: 5.70 }, catches: 0 },
      { name: "Mohammed Siraj", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 7, maidens: 1, runs: 43, wickets: 0, economy: 6.14 }, catches: 0 },
      { name: "Kuldeep Yadav", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 10, maidens: 0, runs: 43, wickets: 1, economy: 4.30 }, catches: 0 }
    ]
  },

  // ═══════════════════════════════════════
  // T20 WORLD CUP
  // ═══════════════════════════════════════
  {
    year: 2007, format: "T20", winner: "India", runnerUp: "Pakistan",
    venue: "Wanderers Stadium", city: "Johannesburg", country: "South Africa",
    result: "India won by 5 runs", winnerScore: "157/5 (20 overs)", runnerUpScore: "152 (19.3 overs)",
    manOfTheMatch: "Irfan Pathan", manOfTheSeries: "Shahid Afridi",
    winnerPlayingXI: [
      { name: "Gautam Gambhir", role: "Batsman", batting: { runs: 75, balls: 54, fours: 8, sixes: 2, strikeRate: 138.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Yusuf Pathan", role: "All-rounder", batting: { runs: 15, balls: 8, fours: 1, sixes: 1, strikeRate: 187.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Robin Uthappa", role: "Batsman", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Yuvraj Singh", role: "All-rounder", batting: { runs: 14, balls: 19, fours: 0, sixes: 1, strikeRate: 73.7 }, bowling: { overs: 1, maidens: 0, runs: 12, wickets: 0, economy: 12.00 }, catches: 0 },
      { name: "MS Dhoni", role: "Wicket-keeper", isCaptain: true, batting: { runs: 6, balls: 5, fours: 1, sixes: 0, strikeRate: 120.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Rohit Sharma", role: "Batsman", batting: { runs: 30, balls: 16, fours: 1, sixes: 3, strikeRate: 187.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Irfan Pathan", role: "All-rounder", batting: { runs: 3, balls: 9, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 4, maidens: 0, runs: 16, wickets: 3, economy: 4.00 }, catches: 0 },
      { name: "Harbhajan Singh", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 36, wickets: 1, economy: 9.00 }, catches: 0 },
      { name: "Joginder Sharma", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3.3, maidens: 0, runs: 20, wickets: 1, economy: 5.71 }, catches: 0 },
      { name: "RP Singh", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 26, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Sreesanth", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 39, wickets: 2, economy: 9.75 }, catches: 1 }
    ],
    runnerUpPlayingXI: [
      { name: "Mohammad Hafeez", role: "All-rounder", batting: { runs: 1, balls: 4, fours: 0, sixes: 0, strikeRate: 25.0 }, bowling: { overs: 2, maidens: 0, runs: 16, wickets: 1, economy: 8.00 }, catches: 0 },
      { name: "Imran Nazir", role: "Batsman", batting: { runs: 33, balls: 22, fours: 3, sixes: 2, strikeRate: 150.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kamran Akmal", role: "Wicket-keeper", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Younis Khan", role: "Batsman", batting: { runs: 24, balls: 20, fours: 3, sixes: 0, strikeRate: 120.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shoaib Malik", role: "All-rounder", isCaptain: true, batting: { runs: 8, balls: 14, fours: 0, sixes: 0, strikeRate: 57.1 }, bowling: { overs: 4, maidens: 0, runs: 21, wickets: 0, economy: 5.25 }, catches: 0 },
      { name: "Shahid Afridi", role: "All-rounder", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 19, wickets: 1, economy: 4.75 }, catches: 0 },
      { name: "Misbah-ul-Haq", role: "Batsman", batting: { runs: 43, balls: 38, fours: 4, sixes: 1, strikeRate: 113.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Yasir Arafat", role: "All-rounder", batting: { runs: 15, balls: 6, fours: 1, sixes: 1, strikeRate: 250.0 }, bowling: { overs: 4, maidens: 0, runs: 35, wickets: 2, economy: 8.75 }, catches: 0 },
      { name: "Sohail Tanvir", role: "Bowler", batting: { runs: 12, balls: 4, fours: 0, sixes: 2, strikeRate: 300.0 }, bowling: { overs: 4, maidens: 0, runs: 30, wickets: 0, economy: 7.50 }, catches: 0 },
      { name: "Umar Gul", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 28, wickets: 1, economy: 7.00 }, catches: 0 },
      { name: "Mohammad Asif", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 15, wickets: 0, economy: 7.50 }, catches: 0 }
    ]
  },
  {
    year: 2009, format: "T20", winner: "Pakistan", runnerUp: "Sri Lanka",
    venue: "Lord's Cricket Ground", city: "London", country: "England",
    result: "Pakistan won by 8 wickets", winnerScore: "139/2 (18.4 overs)", runnerUpScore: "138/6 (20 overs)",
    manOfTheMatch: "Shahid Afridi", manOfTheSeries: "Tillakaratne Dilshan",
    winnerPlayingXI: [
      { name: "Kamran Akmal", role: "Wicket-keeper", batting: { runs: 37, balls: 28, fours: 3, sixes: 2, strikeRate: 132.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Shahzaib Hasan", role: "Batsman", batting: { runs: 19, balls: 18, fours: 2, sixes: 0, strikeRate: 105.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shoaib Malik", role: "All-rounder", batting: { runs: 24, balls: 18, fours: 3, sixes: 0, strikeRate: 133.3 }, bowling: { overs: 1, maidens: 0, runs: 7, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Misbah-ul-Haq", role: "Batsman", batting: { runs: 6, balls: 11, fours: 0, sixes: 0, strikeRate: 54.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shahid Afridi", role: "All-rounder", batting: { runs: 54, balls: 40, fours: 2, sixes: 5, strikeRate: 135.0 }, bowling: { overs: 4, maidens: 0, runs: 19, wickets: 1, economy: 4.75 }, catches: 0 },
      { name: "Younis Khan", role: "Batsman", isCaptain: true, batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Abdul Razzaq", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 0, economy: 5.00 }, catches: 0 },
      { name: "Saeed Ajmal", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 25, wickets: 1, economy: 6.25 }, catches: 0 },
      { name: "Umar Gul", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 28, wickets: 2, economy: 7.00 }, catches: 0 },
      { name: "Mohammad Amir", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 31, wickets: 1, economy: 7.75 }, catches: 0 },
      { name: "Iftikhar Anjum", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 1, runs: 20, wickets: 1, economy: 5.00 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Tillakaratne Dilshan", role: "All-rounder", batting: { runs: 32, balls: 31, fours: 3, sixes: 1, strikeRate: 103.2 }, bowling: { overs: 1, maidens: 0, runs: 11, wickets: 0, economy: 11.00 }, catches: 0 },
      { name: "Sanath Jayasuriya", role: "All-rounder", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 24, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Kumar Sangakkara", role: "Wicket-keeper", isCaptain: true, batting: { runs: 64, balls: 52, fours: 6, sixes: 1, strikeRate: 123.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mahela Jayawardene", role: "Batsman", batting: { runs: 17, balls: 14, fours: 2, sixes: 0, strikeRate: 121.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jehan Mubarak", role: "Batsman", batting: { runs: 6, balls: 8, fours: 0, sixes: 0, strikeRate: 75.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Angelo Mathews", role: "All-rounder", batting: { runs: 2, balls: 2, fours: 0, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 1, economy: 5.50 }, catches: 0 },
      { name: "Nuwan Kulasekara", role: "Bowler", batting: { runs: 6, balls: 4, fours: 1, sixes: 0, strikeRate: 150.0 }, bowling: { overs: 3.4, maidens: 0, runs: 27, wickets: 0, economy: 7.36 }, catches: 0 },
      { name: "Thisara Perera", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 30, wickets: 0, economy: 7.50 }, catches: 0 },
      { name: "Muttiah Muralitharan", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 24, wickets: 1, economy: 6.00 }, catches: 0 },
      { name: "Lasith Malinga", role: "Bowler", batting: { runs: 2, balls: 4, fours: 0, sixes: 0, strikeRate: 50.0 }, bowling: { overs: 3, maidens: 0, runs: 31, wickets: 0, economy: 10.33 }, catches: 0 },
      { name: "Ajantha Mendis", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 }
    ]
  },
  {
    year: 2010, format: "T20", winner: "England", runnerUp: "Australia",
    venue: "Kensington Oval", city: "Bridgetown", country: "Barbados",
    result: "England won by 7 wickets", winnerScore: "148/3 (17 overs)", runnerUpScore: "147/6 (20 overs)",
    manOfTheMatch: "Craig Kieswetter", manOfTheSeries: "Kevin Pietersen",
    winnerPlayingXI: [
      { name: "Craig Kieswetter", role: "Wicket-keeper", batting: { runs: 63, balls: 49, fours: 3, sixes: 3, strikeRate: 128.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Michael Lumb", role: "Batsman", batting: { runs: 27, balls: 17, fours: 4, sixes: 1, strikeRate: 158.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kevin Pietersen", role: "Batsman", batting: { runs: 47, balls: 31, fours: 3, sixes: 3, strikeRate: 151.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Paul Collingwood", role: "All-rounder", isCaptain: true, batting: { runs: 12, balls: 10, fours: 0, sixes: 1, strikeRate: 120.0 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Eoin Morgan", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Luke Wright", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 15, wickets: 0, economy: 7.50 }, catches: 0 },
      { name: "Tim Bresnan", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 25, wickets: 1, economy: 6.25 }, catches: 0 },
      { name: "Graeme Swann", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 2, economy: 5.00 }, catches: 0 },
      { name: "Stuart Broad", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 24, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Ryan Sidebottom", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 26, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Michael Yardy", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 0, economy: 5.50 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "David Warner", role: "Batsman", batting: { runs: 2, balls: 4, fours: 0, sixes: 0, strikeRate: 50.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shane Watson", role: "All-rounder", batting: { runs: 2, balls: 7, fours: 0, sixes: 0, strikeRate: 28.6 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 0, economy: 5.50 }, catches: 0 },
      { name: "Michael Clarke", role: "Batsman", isCaptain: true, batting: { runs: 27, balls: 29, fours: 1, sixes: 0, strikeRate: 93.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Cameron White", role: "All-rounder", batting: { runs: 30, balls: 22, fours: 2, sixes: 1, strikeRate: 136.4 }, bowling: { overs: 3, maidens: 0, runs: 23, wickets: 2, economy: 7.67 }, catches: 0 },
      { name: "Brad Haddin", role: "Wicket-keeper", batting: { runs: 1, balls: 4, fours: 0, sixes: 0, strikeRate: 25.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Michael Hussey", role: "Batsman", batting: { runs: 59, balls: 54, fours: 2, sixes: 3, strikeRate: 109.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Steve Smith", role: "All-rounder", batting: { runs: 9, balls: 3, fours: 2, sixes: 0, strikeRate: 300.0 }, bowling: { overs: 4, maidens: 0, runs: 28, wickets: 1, economy: 7.00 }, catches: 0 },
      { name: "Mitchell Johnson", role: "Bowler", batting: { runs: 5, balls: 1, fours: 1, sixes: 0, strikeRate: 500.0 }, bowling: { overs: 2, maidens: 0, runs: 22, wickets: 0, economy: 11.00 }, catches: 0 },
      { name: "Nathan Hauritz", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 },
      { name: "Dirk Nannes", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 23, wickets: 0, economy: 7.67 }, catches: 0 },
      { name: "Shaun Tait", role: "Bowler", batting: { runs: 3, balls: 1, fours: 0, sixes: 0, strikeRate: 300.0 }, bowling: { overs: 4, maidens: 0, runs: 31, wickets: 0, economy: 7.75 }, catches: 0 }
    ]
  },
  {
    year: 2012, format: "T20", winner: "West Indies", runnerUp: "Sri Lanka",
    venue: "R. Premadasa Stadium", city: "Colombo", country: "Sri Lanka",
    result: "West Indies won by 36 runs", winnerScore: "137/6 (20 overs)", runnerUpScore: "101 (16.4 overs)",
    manOfTheMatch: "Marlon Samuels", manOfTheSeries: "Shane Watson",
    winnerPlayingXI: [
      { name: "Chris Gayle", role: "Batsman", batting: { runs: 3, balls: 16, fours: 0, sixes: 0, strikeRate: 18.8 }, bowling: { overs: 1, maidens: 0, runs: 10, wickets: 0, economy: 10.00 }, catches: 0 },
      { name: "Johnson Charles", role: "Batsman", batting: { runs: 13, balls: 11, fours: 1, sixes: 1, strikeRate: 118.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Marlon Samuels", role: "All-rounder", batting: { runs: 78, balls: 56, fours: 3, sixes: 6, strikeRate: 139.3 }, bowling: { overs: 4, maidens: 0, runs: 15, wickets: 1, economy: 3.75 }, catches: 0 },
      { name: "Dwayne Bravo", role: "All-rounder", batting: { runs: 19, balls: 18, fours: 1, sixes: 0, strikeRate: 105.6 }, bowling: { overs: 4, maidens: 0, runs: 17, wickets: 2, economy: 4.25 }, catches: 0 },
      { name: "Kieron Pollard", role: "All-rounder", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 15, wickets: 0, economy: 3.75 }, catches: 0 },
      { name: "Darren Sammy", role: "All-rounder", isCaptain: true, batting: { runs: 26, balls: 15, fours: 0, sixes: 3, strikeRate: 173.3 }, bowling: { overs: 0.4, maidens: 0, runs: 2, wickets: 2, economy: 3.00 }, catches: 0 },
      { name: "Andre Russell", role: "All-rounder", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 12, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Denesh Ramdin", role: "Wicket-keeper", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Samuel Badree", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 1, economy: 5.00 }, catches: 0 },
      { name: "Sunil Narine", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 1, runs: 9, wickets: 3, economy: 2.25 }, catches: 0 },
      { name: "Ravi Rampaul", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Tillakaratne Dilshan", role: "All-rounder", batting: { runs: 3, balls: 5, fours: 0, sixes: 0, strikeRate: 60.0 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 0, economy: 5.75 }, catches: 0 },
      { name: "Mahela Jayawardene", role: "Batsman", isCaptain: true, batting: { runs: 33, balls: 28, fours: 5, sixes: 0, strikeRate: 117.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kumar Sangakkara", role: "Wicket-keeper", batting: { runs: 22, balls: 17, fours: 2, sixes: 1, strikeRate: 129.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jeevan Mendis", role: "All-rounder", batting: { runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.0 }, bowling: { overs: 2, maidens: 0, runs: 11, wickets: 0, economy: 5.50 }, catches: 0 },
      { name: "Lahiru Thirimanne", role: "Batsman", batting: { runs: 13, balls: 15, fours: 2, sixes: 0, strikeRate: 86.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Angelo Mathews", role: "All-rounder", batting: { runs: 15, balls: 17, fours: 0, sixes: 1, strikeRate: 88.2 }, bowling: { overs: 4, maidens: 1, runs: 21, wickets: 2, economy: 5.25 }, catches: 0 },
      { name: "Thisara Perera", role: "All-rounder", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 32, wickets: 1, economy: 8.00 }, catches: 0 },
      { name: "Nuwan Kulasekara", role: "Bowler", batting: { runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 4, maidens: 0, runs: 29, wickets: 2, economy: 7.25 }, catches: 0 },
      { name: "Rangana Herath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Ajantha Mendis", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 13, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Lasith Malinga", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 30, wickets: 0, economy: 7.50 }, catches: 0 }
    ]
  },
  {
    year: 2014, format: "T20", winner: "Sri Lanka", runnerUp: "India",
    venue: "Sher-e-Bangla National Stadium", city: "Dhaka", country: "Bangladesh",
    result: "Sri Lanka won by 6 wickets", winnerScore: "134/4 (17.5 overs)", runnerUpScore: "130/4 (20 overs)",
    manOfTheMatch: "Kumar Sangakkara", manOfTheSeries: "Virat Kohli",
    winnerPlayingXI: [
      { name: "Kusal Perera", role: "Batsman", batting: { runs: 5, balls: 6, fours: 1, sixes: 0, strikeRate: 83.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Tillakaratne Dilshan", role: "All-rounder", batting: { runs: 18, balls: 18, fours: 2, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 1, maidens: 0, runs: 11, wickets: 0, economy: 11.00 }, catches: 0 },
      { name: "Kumar Sangakkara", role: "Wicket-keeper", batting: { runs: 52, balls: 35, fours: 4, sixes: 2, strikeRate: 148.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Mahela Jayawardene", role: "Batsman", batting: { runs: 24, balls: 24, fours: 1, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Thisara Perera", role: "All-rounder", batting: { runs: 23, balls: 14, fours: 1, sixes: 2, strikeRate: 164.3 }, bowling: { overs: 4, maidens: 0, runs: 29, wickets: 1, economy: 7.25 }, catches: 0 },
      { name: "Angelo Mathews", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3, maidens: 0, runs: 16, wickets: 1, economy: 5.33 }, catches: 0 },
      { name: "Lasith Malinga", role: "Bowler", isCaptain: true, batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 1, economy: 5.00 }, catches: 0 },
      { name: "Sachithra Senanayake", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 18, wickets: 0, economy: 4.50 }, catches: 0 },
      { name: "Rangana Herath", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 0, economy: 5.75 }, catches: 0 },
      { name: "Nuwan Kulasekara", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 2, economy: 5.50 }, catches: 0 },
      { name: "Seekkuge Prasanna", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 1, maidens: 0, runs: 11, wickets: 0, economy: 11.00 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Rohit Sharma", role: "Batsman", batting: { runs: 29, balls: 26, fours: 2, sixes: 1, strikeRate: 111.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shikhar Dhawan", role: "Batsman", batting: { runs: 3, balls: 9, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virat Kohli", role: "Batsman", batting: { runs: 77, balls: 58, fours: 5, sixes: 2, strikeRate: 132.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Yuvraj Singh", role: "All-rounder", batting: { runs: 11, balls: 21, fours: 0, sixes: 0, strikeRate: 52.4 }, bowling: { overs: 2, maidens: 0, runs: 13, wickets: 0, economy: 6.50 }, catches: 0 },
      { name: "MS Dhoni", role: "Wicket-keeper", isCaptain: true, batting: { runs: 8, balls: 6, fours: 1, sixes: 0, strikeRate: 133.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Suresh Raina", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ravindra Jadeja", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 15, wickets: 0, economy: 3.75 }, catches: 0 },
      { name: "Ravichandran Ashwin", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 2, economy: 5.50 }, catches: 0 },
      { name: "Bhuvneshwar Kumar", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3.5, maidens: 0, runs: 33, wickets: 1, economy: 8.61 }, catches: 0 },
      { name: "Amit Mishra", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 32, wickets: 0, economy: 8.00 }, catches: 0 },
      { name: "Mohammed Shami", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 }
    ]
  },
  {
    year: 2016, format: "T20", winner: "West Indies", runnerUp: "England",
    venue: "Eden Gardens", city: "Kolkata", country: "India",
    result: "West Indies won by 4 wickets", winnerScore: "161/6 (19.4 overs)", runnerUpScore: "155/9 (20 overs)",
    manOfTheMatch: "Marlon Samuels", manOfTheSeries: "Virat Kohli",
    winnerPlayingXI: [
      { name: "Johnson Charles", role: "Batsman", batting: { runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Chris Gayle", role: "Batsman", batting: { runs: 4, balls: 4, fours: 1, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 1, maidens: 0, runs: 7, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Marlon Samuels", role: "All-rounder", batting: { runs: 85, balls: 66, fours: 3, sixes: 6, strikeRate: 128.8 }, bowling: { overs: 4, maidens: 0, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 },
      { name: "Lendl Simmons", role: "Batsman", batting: { runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Dwayne Bravo", role: "All-rounder", batting: { runs: 25, balls: 12, fours: 0, sixes: 3, strikeRate: 208.3 }, bowling: { overs: 4, maidens: 0, runs: 37, wickets: 2, economy: 9.25 }, catches: 0 },
      { name: "Darren Sammy", role: "All-rounder", isCaptain: true, batting: { runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.7 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 1, economy: 8.50 }, catches: 0 },
      { name: "Andre Russell", role: "All-rounder", batting: { runs: 1, balls: 3, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 2, economy: 5.00 }, catches: 0 },
      { name: "Carlos Brathwaite", role: "All-rounder", batting: { runs: 24, balls: 10, fours: 0, sixes: 4, strikeRate: 240.0 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 3, economy: 5.75 }, catches: 0 },
      { name: "Denesh Ramdin", role: "Wicket-keeper", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Samuel Badree", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 0, economy: 5.50 }, catches: 0 },
      { name: "Sulieman Benn", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 1, maidens: 0, runs: 19, wickets: 0, economy: 19.00 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Jason Roy", role: "Batsman", batting: { runs: 54, balls: 36, fours: 4, sixes: 3, strikeRate: 150.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Alex Hales", role: "Batsman", batting: { runs: 1, balls: 3, fours: 0, sixes: 0, strikeRate: 33.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Joe Root", role: "Batsman", batting: { runs: 54, balls: 36, fours: 2, sixes: 2, strikeRate: 150.0 }, bowling: { overs: 4, maidens: 0, runs: 18, wickets: 2, economy: 4.50 }, catches: 0 },
      { name: "Eoin Morgan", role: "Batsman", isCaptain: true, batting: { runs: 5, balls: 10, fours: 0, sixes: 0, strikeRate: 50.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jos Buttler", role: "Wicket-keeper", batting: { runs: 36, balls: 22, fours: 0, sixes: 3, strikeRate: 163.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Ben Stokes", role: "All-rounder", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3.4, maidens: 0, runs: 34, wickets: 1, economy: 9.27 }, catches: 0 },
      { name: "Moeen Ali", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 19, wickets: 0, economy: 9.50 }, catches: 0 },
      { name: "Chris Jordan", role: "All-rounder", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 },
      { name: "Adil Rashid", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 26, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Liam Plunkett", role: "Bowler", batting: { runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 33, wickets: 3, economy: 8.25 }, catches: 0 },
      { name: "David Willey", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 }
    ]
  },
  {
    year: 2021, format: "T20", winner: "Australia", runnerUp: "New Zealand",
    venue: "Dubai International Cricket Stadium", city: "Dubai", country: "UAE",
    result: "Australia won by 8 wickets", winnerScore: "173/2 (18.5 overs)", runnerUpScore: "172/4 (20 overs)",
    manOfTheMatch: "Mitchell Marsh", manOfTheSeries: "David Warner",
    winnerPlayingXI: [
      { name: "David Warner", role: "Batsman", batting: { runs: 53, balls: 38, fours: 4, sixes: 3, strikeRate: 139.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Aaron Finch", role: "Batsman", isCaptain: true, batting: { runs: 5, balls: 7, fours: 1, sixes: 0, strikeRate: 71.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mitchell Marsh", role: "All-rounder", batting: { runs: 77, balls: 50, fours: 6, sixes: 4, strikeRate: 154.0 }, bowling: { overs: 2, maidens: 0, runs: 14, wickets: 0, economy: 7.00 }, catches: 0 },
      { name: "Glenn Maxwell", role: "All-rounder", batting: { runs: 28, balls: 18, fours: 1, sixes: 2, strikeRate: 155.6 }, bowling: { overs: 4, maidens: 0, runs: 31, wickets: 0, economy: 7.75 }, catches: 0 },
      { name: "Steven Smith", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Marcus Stoinis", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 13, wickets: 1, economy: 6.50 }, catches: 0 },
      { name: "Matthew Wade", role: "Wicket-keeper", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Pat Cummins", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 1, runs: 27, wickets: 0, economy: 6.75 }, catches: 0 },
      { name: "Mitchell Starc", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 44, wickets: 1, economy: 11.00 }, catches: 0 },
      { name: "Josh Hazlewood", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 29, wickets: 1, economy: 7.25 }, catches: 0 },
      { name: "Adam Zampa", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 26, wickets: 1, economy: 6.50 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Martin Guptill", role: "Batsman", batting: { runs: 28, balls: 35, fours: 1, sixes: 2, strikeRate: 80.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Daryl Mitchell", role: "All-rounder", batting: { runs: 72, balls: 47, fours: 4, sixes: 4, strikeRate: 153.2 }, bowling: { overs: 2, maidens: 0, runs: 20, wickets: 0, economy: 10.00 }, catches: 0 },
      { name: "Kane Williamson", role: "Batsman", isCaptain: true, batting: { runs: 85, balls: 48, fours: 10, sixes: 3, strikeRate: 177.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Devon Conway", role: "Batsman", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Glenn Phillips", role: "Batsman", batting: { runs: 18, balls: 7, fours: 2, sixes: 1, strikeRate: 257.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "James Neesham", role: "All-rounder", batting: { runs: 13, balls: 8, fours: 0, sixes: 1, strikeRate: 162.5 }, bowling: { overs: 3, maidens: 0, runs: 28, wickets: 0, economy: 9.33 }, catches: 0 },
      { name: "Tim Southee", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 3.5, maidens: 0, runs: 24, wickets: 0, economy: 6.55 }, catches: 0 },
      { name: "Adam Milne", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 34, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Ish Sodhi", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 36, wickets: 0, economy: 9.00 }, catches: 0 },
      { name: "Trent Boult", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 30, wickets: 2, economy: 7.50 }, catches: 0 },
      { name: "Tom Latham", role: "Wicket-keeper", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 }
    ]
  },
  {
    year: 2022, format: "T20", winner: "England", runnerUp: "Pakistan",
    venue: "Melbourne Cricket Ground", city: "Melbourne", country: "Australia",
    result: "England won by 5 wickets", winnerScore: "138/5 (19 overs)", runnerUpScore: "137/8 (20 overs)",
    manOfTheMatch: "Sam Curran", manOfTheSeries: "Sam Curran",
    winnerPlayingXI: [
      { name: "Alex Hales", role: "Batsman", batting: { runs: 27, balls: 26, fours: 1, sixes: 2, strikeRate: 103.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Jos Buttler", role: "Wicket-keeper", isCaptain: true, batting: { runs: 26, balls: 17, fours: 1, sixes: 2, strikeRate: 152.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Phil Salt", role: "Batsman", batting: { runs: 10, balls: 9, fours: 1, sixes: 0, strikeRate: 111.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ben Stokes", role: "All-rounder", batting: { runs: 52, balls: 49, fours: 5, sixes: 1, strikeRate: 106.1 }, bowling: { overs: 3, maidens: 0, runs: 15, wickets: 1, economy: 5.00 }, catches: 0 },
      { name: "Harry Brook", role: "Batsman", batting: { runs: 20, balls: 11, fours: 2, sixes: 1, strikeRate: 181.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Moeen Ali", role: "All-rounder", batting: { runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.0 }, bowling: { overs: 4, maidens: 0, runs: 19, wickets: 0, economy: 4.75 }, catches: 0 },
      { name: "Liam Livingstone", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 1, maidens: 0, runs: 10, wickets: 0, economy: 10.00 }, catches: 0 },
      { name: "Sam Curran", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 12, wickets: 3, economy: 3.00 }, catches: 0 },
      { name: "Chris Woakes", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 23, wickets: 0, economy: 11.50 }, catches: 0 },
      { name: "Adil Rashid", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 22, wickets: 2, economy: 5.50 }, catches: 0 },
      { name: "Mark Wood", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 34, wickets: 1, economy: 8.50 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Mohammad Rizwan", role: "Wicket-keeper", batting: { runs: 15, balls: 14, fours: 2, sixes: 0, strikeRate: 107.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Babar Azam", role: "Batsman", isCaptain: true, batting: { runs: 32, balls: 28, fours: 3, sixes: 1, strikeRate: 114.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Mohammad Haris", role: "Batsman", batting: { runs: 8, balls: 8, fours: 1, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shan Masood", role: "Batsman", batting: { runs: 38, balls: 28, fours: 4, sixes: 1, strikeRate: 135.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Iftikhar Ahmed", role: "All-rounder", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 24, wickets: 1, economy: 6.00 }, catches: 0 },
      { name: "Shadab Khan", role: "All-rounder", batting: { runs: 20, balls: 14, fours: 1, sixes: 1, strikeRate: 142.9 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 1, economy: 5.00 }, catches: 0 },
      { name: "Mohammad Nawaz", role: "All-rounder", batting: { runs: 5, balls: 5, fours: 0, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 1, economy: 5.75 }, catches: 0 },
      { name: "Mohammad Wasim Jr", role: "All-rounder", batting: { runs: 4, balls: 8, fours: 0, sixes: 0, strikeRate: 50.0 }, bowling: { overs: 2, maidens: 0, runs: 15, wickets: 0, economy: 7.50 }, catches: 0 },
      { name: "Shaheen Shah Afridi", role: "Bowler", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 24, wickets: 0, economy: 6.00 }, catches: 0 },
      { name: "Haris Rauf", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 30, wickets: 1, economy: 7.50 }, catches: 0 },
      { name: "Naseem Shah", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 14, wickets: 0, economy: 7.00 }, catches: 0 }
    ]
  },
  {
    year: 2024, format: "T20", winner: "India", runnerUp: "South Africa",
    venue: "Kensington Oval", city: "Bridgetown", country: "Barbados",
    result: "India won by 7 runs", winnerScore: "176/7 (20 overs)", runnerUpScore: "169/8 (20 overs)",
    manOfTheMatch: "Virat Kohli", manOfTheSeries: "Jasprit Bumrah",
    winnerPlayingXI: [
      { name: "Virat Kohli", role: "Batsman", batting: { runs: 76, balls: 59, fours: 6, sixes: 2, strikeRate: 128.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rohit Sharma", role: "Batsman", isCaptain: true, batting: { runs: 9, balls: 7, fours: 1, sixes: 0, strikeRate: 128.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rishabh Pant", role: "Wicket-keeper", batting: { runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Suryakumar Yadav", role: "Batsman", batting: { runs: 47, balls: 36, fours: 2, sixes: 3, strikeRate: 130.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Axar Patel", role: "All-rounder", batting: { runs: 47, balls: 31, fours: 1, sixes: 4, strikeRate: 151.6 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 0, economy: 5.75 }, catches: 0 },
      { name: "Shivam Dube", role: "All-rounder", batting: { runs: 27, balls: 16, fours: 3, sixes: 1, strikeRate: 168.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Hardik Pandya", role: "All-rounder", batting: { runs: 5, balls: 6, fours: 0, sixes: 0, strikeRate: 83.3 }, bowling: { overs: 4, maidens: 0, runs: 20, wickets: 3, economy: 5.00 }, catches: 0 },
      { name: "Ravindra Jadeja", role: "All-rounder", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 37, wickets: 0, economy: 9.25 }, catches: 0 },
      { name: "Arshdeep Singh", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 1, runs: 20, wickets: 2, economy: 5.00 }, catches: 0 },
      { name: "Kuldeep Yadav", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 37, wickets: 0, economy: 9.25 }, catches: 0 },
      { name: "Jasprit Bumrah", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 18, wickets: 2, economy: 4.50 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Reeza Hendricks", role: "Batsman", batting: { runs: 4, balls: 5, fours: 1, sixes: 0, strikeRate: 80.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Quinton de Kock", role: "Wicket-keeper", batting: { runs: 39, balls: 31, fours: 3, sixes: 2, strikeRate: 125.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Aiden Markram", role: "All-rounder", isCaptain: true, batting: { runs: 52, balls: 36, fours: 5, sixes: 1, strikeRate: 144.4 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 },
      { name: "Tristan Stubbs", role: "Batsman", batting: { runs: 31, balls: 21, fours: 2, sixes: 2, strikeRate: 147.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Heinrich Klaasen", role: "Batsman", batting: { runs: 52, balls: 27, fours: 2, sixes: 5, strikeRate: 192.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "David Miller", role: "Batsman", batting: { runs: 21, balls: 17, fours: 0, sixes: 2, strikeRate: 123.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Marco Jansen", role: "All-rounder", batting: { runs: 2, balls: 5, fours: 0, sixes: 0, strikeRate: 40.0 }, bowling: { overs: 4, maidens: 0, runs: 49, wickets: 1, economy: 12.25 }, catches: 0 },
      { name: "Keshav Maharaj", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 23, wickets: 2, economy: 5.75 }, catches: 0 },
      { name: "Kagiso Rabada", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 40, wickets: 0, economy: 10.00 }, catches: 0 },
      { name: "Anrich Nortje", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 4, maidens: 0, runs: 26, wickets: 2, economy: 6.50 }, catches: 0 },
      { name: "Tabraiz Shamsi", role: "Bowler", batting: { runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 2, maidens: 0, runs: 17, wickets: 0, economy: 8.50 }, catches: 0 }
    ]
  },

  // ═══════════════════════════════════════
  // TEST CHAMPIONSHIP
  // ═══════════════════════════════════════
  {
    year: 2021, format: "Test", winner: "New Zealand", runnerUp: "India",
    venue: "The Rose Bowl", city: "Southampton", country: "England",
    result: "New Zealand won by 8 wickets", winnerScore: "249 & 140/2", runnerUpScore: "217 & 170",
    manOfTheMatch: "Kyle Jamieson", manOfTheSeries: "Kyle Jamieson",
    winnerPlayingXI: [
      { name: "Tom Latham", role: "Batsman", batting: { runs: 30, balls: 104, fours: 4, sixes: 0, strikeRate: 28.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Devon Conway", role: "Batsman", batting: { runs: 54, balls: 153, fours: 6, sixes: 0, strikeRate: 35.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Kane Williamson", role: "Batsman", isCaptain: true, batting: { runs: 49, balls: 177, fours: 2, sixes: 0, strikeRate: 27.7 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ross Taylor", role: "Batsman", batting: { runs: 47, balls: 118, fours: 5, sixes: 0, strikeRate: 39.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Henry Nicholls", role: "Batsman", batting: { runs: 7, balls: 25, fours: 1, sixes: 0, strikeRate: 28.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "BJ Watling", role: "Wicket-keeper", batting: { runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 3 },
      { name: "Colin de Grandhomme", role: "All-rounder", batting: { runs: 13, balls: 23, fours: 2, sixes: 0, strikeRate: 56.5 }, bowling: { overs: 12, maidens: 3, runs: 28, wickets: 1, economy: 2.33 }, catches: 0 },
      { name: "Kyle Jamieson", role: "All-rounder", batting: { runs: 21, balls: 16, fours: 4, sixes: 0, strikeRate: 131.3 }, bowling: { overs: 44, maidens: 13, runs: 91, wickets: 7, economy: 2.07 }, catches: 0 },
      { name: "Tim Southee", role: "Bowler", batting: { runs: 4, balls: 4, fours: 1, sixes: 0, strikeRate: 100.0 }, bowling: { overs: 42, maidens: 14, runs: 88, wickets: 4, economy: 2.10 }, catches: 0 },
      { name: "Neil Wagner", role: "Bowler", batting: { runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 }, bowling: { overs: 34, maidens: 7, runs: 83, wickets: 2, economy: 2.44 }, catches: 0 },
      { name: "Trent Boult", role: "Bowler", batting: { runs: 15, balls: 18, fours: 3, sixes: 0, strikeRate: 83.3 }, bowling: { overs: 33, maidens: 9, runs: 80, wickets: 3, economy: 2.42 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Shubman Gill", role: "Batsman", batting: { runs: 28, balls: 64, fours: 3, sixes: 0, strikeRate: 43.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rohit Sharma", role: "Batsman", batting: { runs: 34, balls: 96, fours: 3, sixes: 0, strikeRate: 35.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Cheteshwar Pujara", role: "Batsman", batting: { runs: 8, balls: 54, fours: 0, sixes: 0, strikeRate: 14.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virat Kohli", role: "Batsman", isCaptain: true, batting: { runs: 44, balls: 164, fours: 2, sixes: 0, strikeRate: 26.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ajinkya Rahane", role: "Batsman", batting: { runs: 49, balls: 114, fours: 5, sixes: 0, strikeRate: 43.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Rishabh Pant", role: "Wicket-keeper", batting: { runs: 41, balls: 127, fours: 4, sixes: 0, strikeRate: 32.3 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 2 },
      { name: "Ravindra Jadeja", role: "All-rounder", batting: { runs: 15, balls: 42, fours: 1, sixes: 0, strikeRate: 35.7 }, bowling: { overs: 18, maidens: 7, runs: 33, wickets: 1, economy: 1.83 }, catches: 0 },
      { name: "Ravichandran Ashwin", role: "Bowler", batting: { runs: 22, balls: 39, fours: 3, sixes: 0, strikeRate: 56.4 }, bowling: { overs: 37.4, maidens: 8, runs: 81, wickets: 4, economy: 2.15 }, catches: 0 },
      { name: "Ishant Sharma", role: "Bowler", batting: { runs: 4, balls: 16, fours: 0, sixes: 0, strikeRate: 25.0 }, bowling: { overs: 25, maidens: 5, runs: 48, wickets: 3, economy: 1.92 }, catches: 0 },
      { name: "Mohammed Shami", role: "Bowler", batting: { runs: 0, balls: 9, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 25, maidens: 5, runs: 64, wickets: 4, economy: 2.56 }, catches: 0 },
      { name: "Jasprit Bumrah", role: "Bowler", batting: { runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 32, maidens: 10, runs: 58, wickets: 4, economy: 1.81 }, catches: 0 }
    ]
  },
  {
    year: 2023, format: "Test", winner: "Australia", runnerUp: "India",
    venue: "The Oval", city: "London", country: "England",
    result: "Australia won by 209 runs", winnerScore: "469 & 270/8d", runnerUpScore: "296 & 234",
    manOfTheMatch: "Travis Head", manOfTheSeries: "Travis Head",
    winnerPlayingXI: [
      { name: "David Warner", role: "Batsman", batting: { runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Usman Khawaja", role: "Batsman", batting: { runs: 141, balls: 321, fours: 12, sixes: 0, strikeRate: 43.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 1 },
      { name: "Marnus Labuschagne", role: "Batsman", batting: { runs: 36, balls: 74, fours: 4, sixes: 0, strikeRate: 48.6 }, bowling: { overs: 8, maidens: 1, runs: 17, wickets: 0, economy: 2.13 }, catches: 0 },
      { name: "Steven Smith", role: "Batsman", batting: { runs: 121, balls: 268, fours: 9, sixes: 0, strikeRate: 45.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Travis Head", role: "Batsman", batting: { runs: 163, balls: 174, fours: 20, sixes: 2, strikeRate: 93.7 }, bowling: { overs: 10, maidens: 3, runs: 30, wickets: 3, economy: 3.00 }, catches: 0 },
      { name: "Cameron Green", role: "All-rounder", batting: { runs: 26, balls: 43, fours: 3, sixes: 0, strikeRate: 60.5 }, bowling: { overs: 10, maidens: 1, runs: 41, wickets: 0, economy: 4.10 }, catches: 0 },
      { name: "Alex Carey", role: "Wicket-keeper", batting: { runs: 48, balls: 79, fours: 4, sixes: 0, strikeRate: 60.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 4 },
      { name: "Pat Cummins", role: "Bowler", isCaptain: true, batting: { runs: 12, balls: 28, fours: 1, sixes: 0, strikeRate: 42.9 }, bowling: { overs: 43, maidens: 11, runs: 99, wickets: 4, economy: 2.30 }, catches: 0 },
      { name: "Mitchell Starc", role: "Bowler", batting: { runs: 14, balls: 22, fours: 2, sixes: 0, strikeRate: 63.6 }, bowling: { overs: 39, maidens: 8, runs: 123, wickets: 4, economy: 3.15 }, catches: 0 },
      { name: "Nathan Lyon", role: "Bowler", batting: { runs: 30, balls: 47, fours: 4, sixes: 0, strikeRate: 63.8 }, bowling: { overs: 72, maidens: 14, runs: 186, wickets: 5, economy: 2.58 }, catches: 0 },
      { name: "Scott Boland", role: "Bowler", batting: { runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 31, maidens: 11, runs: 62, wickets: 3, economy: 2.00 }, catches: 0 }
    ],
    runnerUpPlayingXI: [
      { name: "Rohit Sharma", role: "Batsman", isCaptain: true, batting: { runs: 15, balls: 31, fours: 2, sixes: 0, strikeRate: 48.4 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Shubman Gill", role: "Batsman", batting: { runs: 13, balls: 23, fours: 2, sixes: 0, strikeRate: 56.5 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Cheteshwar Pujara", role: "Batsman", batting: { runs: 27, balls: 69, fours: 3, sixes: 0, strikeRate: 39.1 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Virat Kohli", role: "Batsman", batting: { runs: 49, balls: 112, fours: 5, sixes: 0, strikeRate: 43.8 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ajinkya Rahane", role: "Batsman", batting: { runs: 46, balls: 108, fours: 4, sixes: 0, strikeRate: 42.6 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 0 },
      { name: "Ravindra Jadeja", role: "All-rounder", batting: { runs: 48, balls: 90, fours: 5, sixes: 0, strikeRate: 53.3 }, bowling: { overs: 48, maidens: 10, runs: 116, wickets: 3, economy: 2.42 }, catches: 0 },
      { name: "KS Bharat", role: "Wicket-keeper", batting: { runs: 40, balls: 77, fours: 4, sixes: 0, strikeRate: 51.9 }, bowling: { overs: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }, catches: 3 },
      { name: "Ravichandran Ashwin", role: "Bowler", batting: { runs: 35, balls: 59, fours: 3, sixes: 0, strikeRate: 59.3 }, bowling: { overs: 56, maidens: 13, runs: 134, wickets: 4, economy: 2.39 }, catches: 0 },
      { name: "Shardul Thakur", role: "All-rounder", batting: { runs: 41, balls: 49, fours: 5, sixes: 1, strikeRate: 83.7 }, bowling: { overs: 20, maidens: 2, runs: 80, wickets: 2, economy: 4.00 }, catches: 0 },
      { name: "Mohammed Shami", role: "Bowler", batting: { runs: 0, balls: 6, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 32, maidens: 6, runs: 108, wickets: 4, economy: 3.38 }, catches: 0 },
      { name: "Mohammed Siraj", role: "Bowler", batting: { runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 }, bowling: { overs: 34, maidens: 5, runs: 118, wickets: 4, economy: 3.47 }, catches: 0 }
    ]
  }
];

module.exports = cricketData;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL pool connection
const pool = new Pool({
  user: 'rmaro',
  host: '192.168.0.123',
  database: 'sleeplogs',
  password: '',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-sleep-log', async (req, res) => {
    const { 
      logDate, usedSleepAids, sleepAidDetails, bedTime, sleepAttemptTime,
      fallAsleepDuration, awakenings, awakeDuration, finalAwakening, outOfBedTime,
      wokeUpEarly, wokeUpEarlyDuration, napped, napsCount, napDuration,
      sleepQuality, energyLevel, moodToday
    } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO sleeplogs (
          log_date, used_sleep_aids, sleep_aid_details, bed_time, sleep_attempt_time,
          fall_asleep_duration, awakenings, awake_duration, final_awakening, out_of_bed_time,
          woke_up_early, woke_up_early_duration, napped, naps_count, nap_duration,
          sleep_quality, energy_level, mood_today
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`, 
        [
          logDate, usedSleepAids, sleepAidDetails, bedTime, sleepAttemptTime,
          fallAsleepDuration, awakenings, awakeDuration, finalAwakening, outOfBedTime,
          wokeUpEarly, wokeUpEarlyDuration, napped, napsCount, napDuration,
          sleepQuality, energyLevel, moodToday
        ]
      );
      res.status(201).send(result.rows[0]);
    } catch (error) {
      if (error.code === '23505') {
        res.status(409).send({ message: "An entry for this date already exists." });
      } else {
        console.error('Error saving sleep log', error);
        res.status(500).send(error);
      }
    }
  });
  


app.get('/fetch-sleep-logs', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM sleeplogs ORDER BY log_date DESC;');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching sleep logs', error);
      res.status(500).send(error);
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

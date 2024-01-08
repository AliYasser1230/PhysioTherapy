const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const checkAdmin = async (req, res) => {
  const { email, password } = req.query;

  try {
    const result = await pool.query('SELECT * FROM admin WHERE email = $1 AND password = $2', [email, password]);
    
    console.log('Database Result:', result.rows); // Log the result to the console

    if (result.rows.length > 0) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking admin:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  checkAdmin,
};

module.exports={
  checkAdmin
}


const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');





const addPatient= async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPatient = await pool.query(
      'INSERT INTO patient (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    res.status(200).json({ message: 'Data received and inserted successfully', data: newPatient.rows[0] });
  } catch (error) 
  {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPatient= async (req, res) => {
  try {
    const { email } = req.query;
    const result = await pool.query('SELECT COUNT(*) FROM patient WHERE email = $1', [email]);

    res.json({ exists: result.rows[0].count > 0 });
  } catch (error) {
    console.error('Error checking patient:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports={
  getPatient,
  addPatient
}


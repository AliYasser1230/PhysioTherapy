const express = require('express');
const router = express.Router();
const pool = require('../db');

const getAppointment= async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM appointments');
      const appointments = result.rows;
      res.json(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports={
    getAppointment
  }



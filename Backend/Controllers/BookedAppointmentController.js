const express = require('express')
const pool = require('../db');

const AddAppointment= async (req, res) => {
    const { name, email, phoneNumber, appointmentId } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO bookedappointments (name, email, phone_number, appointment_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, phoneNumber, appointmentId]
        );

        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error('Error inserting into bookedappointments:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports={
    AddAppointment
}


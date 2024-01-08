const express = require('express');
const cors = require('cors');
const app = express();

const patientRoutes = require('../Controllers/patientController');
const appointmentRoutes = require('../Controllers/appointmentsController');
const bookedAppointmentRoutes = require('../Controllers/BookedAppointmentController'); 
const isAdminRoutes = require('../Controllers/isAdminController');
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(router);

router.post('/add-patient', patientRoutes.addPatient);
router.get('/check-patient', patientRoutes.getPatient);
router.get('/appointments', appointmentRoutes.getAppointment);
router.post('/booked-appointment', bookedAppointmentRoutes.AddAppointment); 
router.get('/check-admin', isAdminRoutes.checkAdmin);

module.exports = router;

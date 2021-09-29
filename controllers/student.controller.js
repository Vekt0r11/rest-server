const Student = require('../models/Students')
const { validationResult } = require('express-validator'); 

const studentCtrl = {};

studentCtrl.newStudent = async (req, res) => {
    const { personalInfo, addressInfo, contactInfo, academicInfo } = req.body;

    const newData = new Student({
        personalInfo, 
        addressInfo, 
        contactInfo, 
        academicInfo
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await newData.save();

    res.send('Datos del estudiante cargados');
}

module.exports = studentCtrl;
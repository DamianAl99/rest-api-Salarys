const express = require('express');
const router = express.Router();

const salaryControllers = require('../controllers/salary.controllers');

router.get('/', salaryControllers.getSalary);
router.post('/', salaryControllers.postSalary);

router.put('/:id', salaryControllers.putSalary);

router.delete('/:id', salaryControllers.deleteSalary);

module.exports = router;

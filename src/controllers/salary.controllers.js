const modelSalary = require('../models/salary.models');
const salaryControllers = {};

salaryControllers.getSalary = async(req, res) => {
    let getSalary = await modelSalary.find();
    res.json(getSalary);
}

salaryControllers.postSalary = async(req, res) => {
    let postSalary = new modelSalary(req.body);
    await postSalary.save();
    res.json(postSalary);
    
}

salaryControllers.putSalary = async(req, res) => {
    let putSalary = await modelSalary.findByIdAndUpdate(req.params.id, req.body);
    res.json(putSalary);
}

salaryControllers.deleteSalary = async(req, res) => {
    let deleteSalary = await modelSalary.findByIdAndDelete(req.params.id);
    res.json(deleteSalary);
}

module.exports = salaryControllers;
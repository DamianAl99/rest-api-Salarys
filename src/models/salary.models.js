const {Schema, model} =require('mongoose');

const modelSchema = new Schema({
    name: {type: String, required: true},
    salary: {type: String, required: true}
}, {
    versionKey: false
});

module.exports = model('Salary', modelSchema);

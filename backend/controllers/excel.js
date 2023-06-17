const Excel = require('../models/excel');

const getExcels = (req, res)=>{
    res.send('excels');
}
const getExcel = (req, res)=>{
    res.send('excel');
}
const addExcel = (req, res)=>{
    res.send('add');
}

const deleteExcel = (req, res)=>{
    res.send('delete');
}

module.exports = {getExcels, getExcel, addExcel, deleteExcel};
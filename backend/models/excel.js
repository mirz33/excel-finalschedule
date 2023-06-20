const mongoose = require('mongoose');

const excelSchema = mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    fileOriginalName:{
        type:String,
        required:true
    },
    filePath:{
        type:String,
        required:true
    }
},{timestamps:true})

const excelModel = mongoose.model('EXCEL',excelSchema);

module.exports = excelModel;
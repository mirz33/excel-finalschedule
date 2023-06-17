const Excel = require('../models/excel');

const getExcels = async(req, res)=>{
    console.log('getExcels');
    try{
        const data = await Excel.find({});
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(300).json({"error":err});
    }
}
const getExcel = async(req, res)=>{
    const id = req.params.id;
    try{
        const file = await Excel.findById(id);
        res.status(200).json(file);
    }catch(err){
        console.log(err);
        res.status(300).json({'error':err});
    }
}
const addExcel = async(req, res)=>{
    console.log(req.file);
    try{
        const excel = Excel({
            fileName:req.file.filename,
            filePath:`public/${req.file.filename}`
        })
        const data = await excel.save();
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(300).json({"error":err})
    }
}

const deleteExcel = async(req, res)=>{
    const id = req.params.id;
    try{
        await Excel.findByIdAndDelete(id);
        res.status(300).json({"status":"done"})
    }catch(err){
        console.log(err);
        res.status(300).json({"status":"not done", "error":err})
    }
}

module.exports = {getExcels, getExcel, addExcel, deleteExcel};
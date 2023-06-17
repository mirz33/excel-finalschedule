const router = require('express').Router();
const {getExcel, getExcels, addExcel, deleteExcel} = require('../controllers/excel');
const upload = require('../config/fileHandler');

router.get('/:id', getExcel);
router.get('/', getExcels);
router.post('/', upload.single('file'), addExcel);
router.delete('/:id', deleteExcel);

module.exports = router;
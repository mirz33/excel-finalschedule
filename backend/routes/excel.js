const router = require('express').Router();
const {getExcel, getExcels, addExcel, deleteExcel} = require('../controllers/excel');

router.get('/:id', getExcel);
router.get('/', getExcels);
router.post('/', addExcel);
router.delete('/:id', deleteExcel);

module.exports = router;
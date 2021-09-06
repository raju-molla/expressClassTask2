const express=require('express');
const route=express.Router();

const {allStudent,allStudentId,allStudentRename}=require('../controller/student')

route.get('/all-student',allStudent);
route.get('/all-student/:id',allStudentId)
route.get('/student/rename/:id/:name',allStudentRename)

module.exports=route;
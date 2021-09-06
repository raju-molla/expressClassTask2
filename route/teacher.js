const express=require('express');
const route=express.Router();
const {allTeacher,allTeacherId,allTeacherRename}=require('../controller/teacher')
route.get('/all-teacher',allTeacher);
route.get('/all-teacher/:id',allTeacherId);
route.get('/teacher/rename/:id/:name',allTeacherRename)
module.exports=route;
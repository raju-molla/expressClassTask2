const express=require('express');
const app= express();

const students=require('./route/student')
const teacher=require('./route/teacher')
app.use(students)
app.use(teacher)
app.get('/',(req,res)=>{
    res.send('<h4>Hi dear, if you want to see information about teacher or student, plz change tha route</h4>')
})

app.get('*',(req,res)=>{
    res.send(`That's a wrong number`)
})


const PORT=1005;
app.listen(PORT,()=>console.log('Server is running'));
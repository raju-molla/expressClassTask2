const allTeacher=(req,res)=>{
    const teacher=[
        {
            id:1,
            name: 'Durjay',
            age:28
        },
        {
            id:2,
            name:'Nur',
            age:29
    
        },
        {
            id:3,
            name:'Rezuan',
            age:36
        },
    ]
    res.send(teacher)
}

const allTeacherId=(req,res)=>{
    const teacher=[
        {
            id:1,
            name: 'Durjay',
            age:28
        },
        {
            id:2,
            name:'Nur',
            age:29
    
        },
        {
            id:3,
            name:'Rezuan',
            age:36
        },
    ]
    const {id}=req.params;
    var len= teacher.length;
    let flag=0;
     for(var i=0; i<len; i++){
         if(+id===teacher[i].id){
             flag=1;
             res.send(teacher[i])
         }
     }
     if(flag===0)res.send(`Id - ${id} is not matched`)

}


const allTeacherRename=(req,res)=>{
    const teacher=[
        {
            id:1,
            name: 'Durjay',
            age:28
        },
        {
            id:2,
            name:'Nur',
            age:29
    
        },
        {
            id:3,
            name:'Rezuan',
            age:36
        },
    ]
    
    const {id,name}=req.params;
    let len=teacher.length;
    let flag=0;
    for(var i=0; i<len; i++){
        if(+id===teacher[i].id){
            teacher[i].name=name;
            flag=1;
            res.send(teacher[i]);
        }
    }
    if(flag===0)res.send(`Id- ${id} is not matched`)
}



module.exports={
    allTeacher,
    allTeacherId,
    allTeacherRename
}
const allStudent=(req,res)=>{
    const Student= [
         {
             id:10,
             name:'Karim',
             age:21
         },
         {
             id:20,
             name:'Rahim',
             age:22
         },
         {
             id:30,
             name:'Porimoni',
             age:25

         }
     
     ]

     res.send(Student)
 }

 const allStudentId=(req,res)=>{
    const Student= [
        {
            id:10,
            name:'Karim',
            age:21
        },
        {
            id:20,
            name:'Rahim',
            age:22
        },
        {
            id:30,
            name:'Porimoni',
            age:25

        }
    
    ]

     const {id}=req.params;
     var len= Student.length;
     let flag=0;
     for(var i=0; i<len; i++){
         if(+id===Student[i].id){
             flag=1;
             res.send(Student[i])
         }
     }
     if(flag===0)res.send(`Id - ${id} is not matched`)
     
 }


 const allStudentRename=(req,res)=>{
    const Student= [
        {
            id:10,
            name:'Karim',
            age:21
        },
        {
            id:20,
            name:'Rahim',
            age:22
        },
        {
            id:30,
            name:'Porimoni',
            age:25

        }
    
    ]

     const {id,name}=req.params;
     let len= Student.length;
     let flag=0;
     for(var i=0; i<len; i++){
         if(+id===Student[i].id){
             Student[i].name=name;
             flag=1;
             res.send(Student[i]);
             
         }
        
     }
     if(flag==0)res.send(`Id- ${id} is not matched`)
 }

module.exports={
    allStudent,
    allStudentId,
    allStudentRename
};
const express =require('express');
const app = express();
const port=3000;
app.listen(3000,()=>{
    console.log("Listening on port 3000...");
});


let ADMINS=[];
let USERS=[];
let COURSES=[];

//Admin routes

app.post('/admin/signup',(req,res)=>{
    const admin = req.body;
    const existing  = ADMINS.find(a=>a.username===admin.username);
    
    if(existing)
    {
            res.status(403).json({message:'Admin already exists.'});
    }
    else{
        ADMINS.push(admin);
        res.json({message:'Admin created successfully!'});

    }
})

app.post('/admin/login', (req,res)=>{

   
})  

app.post("/admin/courses",(req,res)=>{
   
   
});

app.put('/admin/courses/:courseId',(req,res)=>{

})
app.get('/admin/courses',(req,res)=>{

})

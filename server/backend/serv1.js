const express =require('express');
const app = express();
const port=3000;

app.use(express.json());
let ADMINS=[];
let USERS=[];
let COURSES=[];

//Admin routes
const adminAuthentication=(res,req,next)=>{
    const {username,password} = req.headers;
    const existing = ADMINS.find(a=>a.username===username && a.password===password);
    if(existing)
    {
        next();
    }
    else{
        res.status(403).json({message:"Admin authentication failed!"});
    }

}

app.post('/admin/signup',(req,res)=>{
    const admin = req.body;
    const existing  = ADMINS.find(a=>a.username===admin.username);
    //console.log(existing);
    if(existing)
    {

            res.status(403).json({message:'Admin already exists.'});
    }
    else{   
        ADMINS.push(admin);
        res.json({message:'Admin created successfully!'});

    }
})

app.post('/admin/login',adminAuthentication, (req,res)=>{

    res.json({message:"Logged in successfully!"});
   
})  

app.post("/admin/courses",adminAuthentication,(req,res)=>{
   
    const course= req.body;
    course.id = Date.now(); // this gives timeStamp as course ID.

    COURSES.push(course);
    res.json({message:"Course created Successfully!", courseId:course.id});

});

app.put('/admin/courses/:courseId',(req,res)=>{
    
})
app.get('/admin/courses',(req,res)=>{

})

app.listen(4000,()=>{
    console.log("Listening on port 4000...");
});

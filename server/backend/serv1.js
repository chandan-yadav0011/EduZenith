const express =require('express');
const app = express();
const port=3000;

app.use(express.json()); // it is middleware that allows us to parse through json .

let ADMINS=[];
let USERS=[];
let COURSES=[];

//Admin routes
const adminAuthentication=(req,res,next)=>{
    const {username,password} = req.headers;
    const existing = ADMINS.find(a=>a.username===username && a.password===password);
    //console.log(existing);
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

    if(!course.title)
    {
        res.status(411).json({message:"choose the title of this course!"});

    }
    if(!course.description)
    {
        res.status(412).json({message:"Please give description for this course!"});
    }
    if((!course.price))
    {
        res.status(413).json({message:"Please finalize the price of this course first!"});
    }

    if(!course.imgLink)
    {
        res.status(414).json({message:"Give the link of the image!"});
    }
    
    

    course.id = Date.now(); // this gives timeStamp as course ID.

    COURSES.push(course);
    res.json({message:"Course created Successfully!", courseId:course.id});

});

app.put('/admin/courses/:courseId',adminAuthentication,(req,res)=>{
    
    let courseId= Number(req.params.courseId);

    var course = COURSES.find(a=>a.id===courseId);
    if(!course)
        {
            res.json({message:"Course doesn't exists!"});
        }

    else{
        // course.title= req.body.title;
        // course.description= req.body.description;
        // course.price= req.body.price;
        // course.imgLink= req.body.imgLink;
        
        Object.assign(course,req.body);
       
        res.json({message:"Course modified successfully!"});
    }   
})
app.get('/admin/courses',adminAuthentication,(req,res)=>{
    
    // let courses=[];
    // for(let i=0;i<COURSES.length;i++)
    //     {
    //         courses.push(COURSES[i]);
    //     }

    res.json({courses:COURSES});
})
app.delete('/admin/courses/:courseId',adminAuthentication,(req,res)=>{
    const courseId= Number(req.params.courseId);
    console.log(courseId);
    const course = COURSES.find(a=>a.id===courseId);
    console.log(course);
    if(!course)
    {

        res.status(404).json({message:"Course dosen't exists!"});
    }
    else{
       let  Courses=[];
        for(let i=0;i<COURSES.length;i++)
            {
                if(course.id ===courseId)
                    {
                        continue;
                    }
                    else{
                        Courses.push(COURSES[i]);
                    }
            }

            COURSES = Courses;
            
        
        res.json({message:"Course deleted successfully!"});
    }
})


app.listen(3000,()=>{
    console.log("Listening on port 3000...");
});

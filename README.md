# EduZenith

<h1>A platform that lets you purchase any course you want to learn and grow</h1>
<h3>-->Building with love</h3>

# description 
1. Sign Up page for Admins
2. Course creation need should be possible for admins. Courses can be published     or  unpublished, and each one has a title, description, price, and image link.
3. Editing rights to Admins.
4. Sign up facility for User.
5. It should be possible for users to buy courses.
6. All courses purchased by user must be visible to user 
7. All published courses should be available to user for purchasing.




## Routes
### Admin Routes:

-POST /admin/signUp
Discription: Creates a new admin account.
Input:{username:"abc", password:"xyz" }
Output:{message:"Admin created successfully"}

-POST /admin/login
Discription: Authenticate an admin . It requires to send the username and password in headers.
Input: Headers:{username:"abc", password:"xyz"}
Output:{message:"Logged in successfully"}

-POST /admin/courses
Discription :Creates new courses.
Input: Headers:{username:"abc", password:"xyz"}
Input: Body:{title:'course title' , description:'course description',price:1000,imageLink:"https://linkImage.com",published:true}
Output:{message:"Course created successfully", courseId:1}

-PUT /admin/courses/:courseId
 Discription : Edits existing course
 Input: Headers:{username:"abc", password:"xyz"}
 Input: Body:{title:'updated course title' , description:"updated description",...}





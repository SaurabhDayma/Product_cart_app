const express =  require('express');
const mongoose =  require('mongoose');
const Usermodel =  require('../server/model/user')
const cors =  require('cors')

const app =  express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://saurabhdayma:Saurabh@123@cluster0.k6rbhsg.mongodb.net/userinfo?retryWrites=true&w=majority&appName=Cluster0');

app.post('/login' , (req,res) => {

    const {email , password}  =  req.body;
    Usermodel.findOne({email : email})
    .then(user => {
        if(user)
         {
             if(user.password === password)
             {
                res.json("Success")
             }
             else
             {
                res.json("Plese Chsck your email and password");
             }
         }
         else
         {
            res.json("No user found");
         }
    })

})

app.post('/signup', (req,res) => {
       Usermodel.create(req.body)
      .then(userinfo => res.json(userinfo))
      .catch(err => res.json(err));
})

app.listen(8080, () => {
    console.log("Server is Running")
})

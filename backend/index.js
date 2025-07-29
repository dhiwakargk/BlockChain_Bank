// const express=require("express")
// const app=express()
// const cors=require("cors")
// app.use(cors())
// const mongodb=require("mongoose")
// const DB=require("./database")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.get("/",(req,res)=>{
//     res.send("home page")
// })

// app.post("/feedback",async(req,res)=>{
//     console.log(req.body)
//     const add_feedback=await DB.Create_Feed_back(req.body.name,req.body.email,req.body.phoneNumber,req.body.feedbackType,req.body.feedbackDescription,req.body.rating)
    
//     res.json({"result":"Data Added Successfuly"})

// })


// app.listen(3000,()=>{
//     console.log("Server Started")
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DB = require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://dhiwakarcd22:IVZHaZltOfhYjYoi@cluster0.w8tyx.mongodb.net/bank_feed_back?retryWrites=true&w=majority&appName=Cluster0",{

     useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
})
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error("Database connection failed:", err));

app.get("/", (req, res) => {
  res.send("home page");
});


app.get("/db-status", (req, res) => {
  res.send({ connection: mongoose.connection.readyState });
});

app.post("/feedback", async (req, res) => {
  console.log(req.body);
  await DB.Create_Feed_back(
    req.body.name,
    req.body.email,
    req.body.phoneNumber,
    req.body.feedbackType,
    req.body.feedbackDescription,
    req.body.rating
  );
  res.json({ result: "Data Added Successfully" });
});

app.listen(3000, () => {
  console.log("Server Started");
});


const mongodb=require("mongoose")
mongodb.connect("mongodb+srv://dhiwakarcd22:Kfqq2zIpFCFVeiE7@cluster0.w8tyx.mongodb.net/bank_feed_back?retryWrites=true&w=majority&appName=Cluster0
").then(()=>{
    console.log("Data base connected successfully")
}).catch(()=>{
    console.log("Data Base not connected")
})

const table=new mongodb.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ph:{
        type:Number,
        required:true
    },
    feed_back_type:{
        type:String,
        required:true
    },
    feed_back_description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

const feedback=mongodb.model("Feedbacks",table)

const Create_Feed_back=async(name,email,ph,feed_back_type,feed_back_description,rating)=>{
    const add_feedback=new feedback({name:name,email:email,ph:ph,feed_back_type:feed_back_type ,feed_back_description:feed_back_description,rating:rating})
    await add_feedback.save()
}



module.exports={Create_Feed_back}


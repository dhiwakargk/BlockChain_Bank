const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dhiwakarcd22:IVZHaZltOfhYjYoi@cluster0.w8tyx.mongodb.net/bank_feed_back?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected successfully"))
.catch(err => console.error("Database connection failed:", err));  

const table = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    ph: { type: Number, required: true },
    feed_back_type: { type: String, required: true },
    feed_back_description: { type: String, required: true },
    rating: { type: Number, required: true }
});


const Feedback = mongoose.model("Feedbacks", table);
const Create_Feed_back = async (name, email, ph, feed_back_type, feed_back_description, rating) => {
    try {
        const add_feedback = new Feedback({ name, email, ph, feed_back_type, feed_back_description, rating });
        await add_feedback.save();
        console.log("Feedback saved successfully");
    } catch (err) {
        console.error("Error saving feedback:", err);
    }
};

module.exports = { Create_Feed_back };

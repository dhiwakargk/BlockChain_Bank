import React, { useState } from "react";
import axios from "axios";
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber:0,
    feedbackType: "",
    feedbackDescription: "",
    rating:0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    let data= await axios.post("https://app-backend-l4ju.onrender.com/feedback",formData).then((res)=>{
        console.log(res)
        if(res.data.result=="Data Added Successfuly")
        {
            alert("Feedback Submitted")
        }
    }).catch(()=>{
        console.log("Feedback Not Submitted")
    })
   // console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer Feedback Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Phone Number :</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Feedback Type:</label>
          <select
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Praise">Praise</option>
            <option value="Complaint">Complaint</option>

          </select>
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Feedback Description:</label>
          <textarea
            name="feedbackDescription"
            value={formData.feedbackDescription}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Rating :</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select</option>
            <option value="1">1 (Poor)</option>
            <option value="2">2 (Fair)</option>
            <option value="3">3 (Good)</option>
            <option value="4">4 (Very Good)</option>
            <option value="5">5 (Excellent)</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
    display: "block",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default FeedbackForm;

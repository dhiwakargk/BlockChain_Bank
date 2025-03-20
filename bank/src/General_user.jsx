import axios from "axios";
import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    dateofbirth: "",
    gender: "",
    mobile: "",
    email: "",
    pan: "",
    aadhar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    //alert(JSON.stringify(formData, null, 2));
    console.log(formData)
    axios.post("http://localhost:3000/adduser",formData).then((res)=>{
        console.log(res)
    })

  };

  const styles = {
    container: {
      width: "400px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      color: "#555",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Banking Application Form</h2>
      <div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date of Birth</label>
          <input
            style={styles.input}
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <select
            style={styles.input}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input
            style={styles.input}
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>PAN</label>
          <input
            style={styles.input}
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Aadhar Number</label>
          <input
            style={styles.input}
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            pattern="[0-9]{12}"
            required
          />
        </div>
        <button
          style={{
            ...styles.button,
          }}
          type="submit"
          onClick={()=>{handleSubmit()}}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserForm;

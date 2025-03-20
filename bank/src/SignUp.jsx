import React, { useState } from "react";
import "./Signup.css"; 
import { useNavigate } from "react-router-dom";
import usercreateabi from "./ABI/usercreate.json"
import {ethers} from "ethers"
const Signup = () => {
  const [address, setaddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  var contract
const navigate=useNavigate()
  const handleSubmit = async() => {
    let user_create_contract_address="0x59eE1C70149CD4143E3C48cF54C7F11A834Cc59d"
    let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("User account:",account)
    let provider = await new ethers.providers.Web3Provider(window.ethereum);
    let signer =await provider.getSigner();
    contract= await new ethers.Contract(user_create_contract_address,usercreateabi,signer)
    let c=await contract.CreateUser(ethers.utils.getAddress(address),password)
    let tx=await c.wait()
    console.log(tx)
    let status=await contract.CreatedStatus()
    console.log("Account Created status:",status)
    alert(status)
    if(status!=="User Already Exists")
    {
      navigate("/dashboard")
    }

  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">ZEO Bank</h1>
        <div>
          <h2 className="signup-heading">Sign up</h2>
          <div className="input-group">
            <span className="icon user-icon">👤</span>
            <input
              type="text"
              placeholder="Metamask Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon password-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="input-group">
            <span className="icon confirm-password-icon">🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon email-icon">✉️</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> */}
          
          <div className="button-group">
            <button type="submit" className="signup-button" onClick={()=>{handleSubmit()}}>
              Sign up
            </button>
            <button type="button" className="login-button" onClick={()=>{navigate("/login")}}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import "./Login.css"; 
import { useNavigate } from "react-router-dom";
import usercreateabi from "./ABI/usercreate.json"
import {ethers} from "ethers"
const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  var contract;
  const handleSubmit = async(e) => {
    
    console.log("inside handle submit")
    let user_create_contract_address="0x59eE1C70149CD4143E3C48cF54C7F11A834Cc59d"
    let account=await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("User account:",account)
    let provider = await new ethers.providers.Web3Provider(window.ethereum);
    let signer =await provider.getSigner();
    contract= await new ethers.Contract(user_create_contract_address,usercreateabi,signer)
    //console.log(contract)
    let c=await contract.UserLogin(ethers.utils.getAddress(userId),password)
    let tx=await c.wait();
    let loginstatus=await contract.LoggedStatus()
    console.log("login status:",loginstatus)
    alert(loginstatus)
    if(loginstatus=="User Logged in Successfully")
    {
      navigate("/dashboard")
    }
    
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">ZEO Bank</h1>
        <div>
          <div className="input-group">
            <span className="icon user-icon">👤</span>
            <input
              type="text"
              placeholder="User id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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
          {/* <button type="submit" className="login-button" onClick={()=>{navigate("/dashboard")}}>
            Login
          </button> */}
          <button type="submit" className="login-button" onClick={()=>{handleSubmit()}}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

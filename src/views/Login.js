import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/login.css"

export default function Login() {
  return (
    <div className="bd">
      <div className="mainlog">
        <input  type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label  htmlFor="chk" aria-hidden="true">
              Login
            </label>
            
            <input
              
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            /><Link to="/admin/Appointment">
            <button className="log">Login</button></Link>
            <p style={{ textAlign: "center" }}>
              <Link to="/admin/Forgot" style={{ color:"#7ed348",fontWeight:"bold" }}>Forgot Password?</Link>
            </p>
          </form>
        </div>

        <div className="login">
          <form>
            <label  htmlFor="chk" aria-hidden="true">
              Sign Up
            </label>
            <input
              
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button><Link to="/admin/Appointment" style={{color:'white'}}>Sign up</Link></button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

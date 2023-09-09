import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [pass, setPass] = useState("");

    let strongPassStyle  = {
        border: "1px solid black"
    }
    const passField = document.querySelector('.pass-field');

    function blurBorder () {
        passField.style.border = "1px solid black";
        if(pass.search(/[A-Z]/) > 0 &&  pass.search(/[0-9]/) > 0 && pass.search(/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]+/) > 0 ) {
            passField.style.border = "2px solid green";
        }
    }


    function CheckPass(e) {
        setPass(e.target.value);
    }

  return (
    <div className='form-parent'>
        <form action="Login" style={{padding:"40px 80px 40px 80px"}}>
            <h4 style={{textAlign:"center"}}>Login</h4>

            <input type="email" className="form-control email-field" placeholder="Email"/>

            <input type="text" className="form-control pass-field" placeholder="Password" onChange={CheckPass} style={strongPassStyle}onBlur={blurBorder}/>

            {/* Warning Message */}
            {pass.search(/[A-Z]/) > 0 &&  pass.search(/[0-9]/) > 0 && pass.search(/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]+/) > 0 ? <p style={{fontSize:"12px", paddingTop:"0px", marginTop:"2px"}}>Pass is strong</p> : <p style={{fontSize:"12px", paddingTop:"0px", marginTop:"2px"}}>Pass must contain a digit, Uppercase & special Character</p>}

            <div style={{textAlign:"center"}}>
                <button className='btn btn-primary submit-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

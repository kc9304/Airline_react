import React, { useState } from 'react';
import axios from 'axios';
import REG from './images/reg.jpg';
import './reg.css';

const Register = () => {
  const [formData, setFormData] = useState({
    idun: '',
    idemail: '',
    idpw: '',
    idconfirm: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:8082/insert', {
        name: formData.idun,
        email: formData.idemail,
        password: formData.idpw,
        password2: formData.idconfirm,
      });

      console.log(response.data);
      if(response.data == "recived data"){
      alert("Successfull Registered  Login!")
      }
      else{
        alert("failed to register")

      }

    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <div className="fullscreen-video">  
        <div className='ph'>
          <img src={REG} alt="Registration Image" />
        </div>
        <div className='main'>
          <div id="lp" className="login-page1">
            <b><h3>REGISTER</h3></b>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="text"
                  id="idun"
                  placeholder="  Enter Username"
                  value={formData.idun}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="email"
                  id="idemail"
                  placeholder="  Enter Email"
                  value={formData.idemail}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idpw"
                  name="pw"
                  placeholder="  Enter Password"
                  value={formData.idpw}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="idconfirm"
                  name="confirm"
                  placeholder="  Confirm Password"
                  value={formData.idconfirm}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              id='but'
              onClick={handleRegister}
              style={{
                borderRadius: "10px",
                color: "black",
                borderColor: "transparent",
                height: "4vh",
                width: "30vh",
                backgroundColor: "lightblue",
              }}
            >
              Register
            </button>
            <br />
            <br />
            <h4 style={{ height: "5vh" }}>Have an account?<a href='/log'> Login</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

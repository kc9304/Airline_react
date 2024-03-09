import React from 'react'
import './home.css';
import Logo from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



const bookticket = () => {
    
    function scrollTopage() {
        const elements = document.getElementsByClassName("prom"); 
        if (elements.length > 0) {
          elements[0].scrollIntoView({ behavior: "smooth" });
        } else {
          console.error('Target element not found');
        }
      }
 
    function deletefun(){
        localStorage.removeItem('a','null');
      }
  return (
    <div className='body' >

<div style={{ backgroundColor: "black", backgroundSize:"100vh"}} >
    {/* 𝒦𝒸𝒜𝒾𝓇𝓁𝒾𝓃𝑒𝓈  */}
    <div className='header'>
    <img style={{ width: "18vw",cursor:"pointer ",height:"10vh" }} src={Logo} alt='Logo' />

      <div className="menu-links">
      <div class="navbar">
  <div class="dropdown">
    <button style={{backgroundColor:"black",paddingRight:"10px",fontSize:"1vw"}} className="dropbtn">PROFILE
    </button>
    <div style={{backgroundColor:"black"}} class="dropdown-content">
      <a   style={{color:"white",fontSize:"1vw"}}href="#">profile</a>
      <a style={{color:"white",fontSize:"1vw"}}href="#">check orders</a>
      <a style={{color:"white",fontSize:"1vw"}} href="/chpa">change password</a>
      <a style={{color:"white",fontSize:"1vw"}} href="/botc">book ticket</a>

      
      <a onClick={deletefun} style={{color:"white",fontSize:"1vw"}}href="/">Logout</a>

    </div>
  </div> 
</div>

<FontAwesomeIcon style={{color:"white",paddingRight:"4vw",paddingTop:"20px",height:"1.3vh"}} icon={faArrowRight} />      
    {/* <Link to="/">
          <h3>Logout</h3>
        </Link>
         */}
      </div>
    </div>
    <div style={{width:"100vw",height:"30vh",border:"1px solid red",marginBottom:"10vh"}} className='sub-header'>
        <h1>hello </h1>
    </div>
        


<div style={{height:"30vh",width:"100vw"}} className='fotter'>
<footer class="footer-distributed">
          <div class="footer-left">
              <h3 style={{fontSize:"2vw"}}>KC<span>AIRLINES</span></h3>
              <p class="footer-links">
                  <a style={{fontSize:"1vw"}} href="#" class="link-1">Home</a>		
                  <a style={{fontSize:"1vw"}} href="#">Pricing</a>
                  <a style={{fontSize:"1vw"}} href="#">About</a>
                  <a style={{fontSize:"1vw"}} href="#">Faq</a>				
                  <a style={{fontSize:"1vw"}} href="#">Contact</a>
              </p>

          
          </div>

          <div class="footer-center">

              <div>
                  <i class="fa fa-map-marker"></i>
                  <p style={{fontSize:"1vw"}}><span>pincode</span> Vijayawda,KLU</p>
              </div>

              <div>
                  <i class="fa fa-phone"></i>
                  <p style={{fontSize:"1vw"}}>8811002200</p>
              </div>

              <div>
                  <i class="fa fa-envelope"></i>
                  <p style={{fontSize:"1vw"}}><a href="mailto:support@company.com">Kcairline@company.com</a></p>
              </div>

          </div>

          <div class="footer-right">

              <p style={{fontSize:"0.8vw"}} class="footer-company-about">
                  <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>

              <div class="footer-icons">

                  <a href="#"><i class="fa fa-facebook"><FontAwesomeIcon icon={faInstagram} />  </i></a>
        
                  <a href="#"><i class="fa fa-twitter"><FontAwesomeIcon icon={faFacebook} /></i></a>
                  <a href="#"><i class="fa fa-linkedin"><FontAwesomeIcon icon={faXTwitter} /></i></a>
                  <a href="#"><i class="fa fa-github"></i><FontAwesomeIcon icon={faGithub} /></a>

              </div>
     

          </div>
    

      </footer>
 < div  style={{width:"100vw",height:"5vh",textAlign:"center",justifyContent:"center"}}className='copy'>
        <p style={{color:"black",fontSize:"1.3vw"}}>Copyrigths reserved &nbsp;&nbsp;&nbsp; <span>Kcairline@2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <button onClick={scrollTopage} style={{backgroundColor:"transparent",color:"white",cursor:"pointer",backgroundColor:"rgb(251, 87, 28)",fontSize:"1vw"}}>click <FontAwesomeIcon icon={faArrowUp} />  </button> </p>
       
      </div>

</div>
  
</div>  
</div>
  )
}

export default bookticket
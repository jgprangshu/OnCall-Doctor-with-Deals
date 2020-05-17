import React from 'react'
import aboutUs from '../../images/about-us.jpg';
import NavBar from '../NavBar/NavBar'


const image = {
    width:'100%',
    height:'90vh',
    opacity: '0.85',
    marginTop:'55px'
}

const text = {
    position:'absolute',
    left:'35%',
    bottom:'50%',
    top:'20%'
}

const mainText = {
    color:'white',
    fontSize:'80px',
    fontFamily: 'Righteous'
}

const subText ={
    color:'white',
    fontSize:'40px',
    fontFamily: 'Berkshire Swash',
    textDecoration: 'underline'
}

const gitButton= {
  marginTop:'3%',
  color:'white',
  background :'#2ed096',
  height:'30%',
  width:'30%',
  borderRadius:'10px',
}

const buttonText = {
  fontSize:'20px',
  fontFamily: 'Cuprum',
  textAlign :'center',
  padding:'2%',
}


export default function AboutUs() {

    const githubClicked = () =>{
        window.location.replace('http://www.github.com/jgprangshu/OnCall-Doctor-with-Deals')
    }

    return (
        <div>
            <NavBar/>
            <img style={image} src={aboutUs} alt="about-us"/>
            <div style={text}>
                <h2 style={mainText}>I'm Prangshu !!</h2>
                <p style={subText}> A Frontend Web Developer</p>
                <div id="button" style={gitButton} onClick={githubClicked}>
                    <p style={buttonText}>Head on to my Github &nbsp;
                    <i className="fab fa-github"></i>
                    </p>
                </div>
            </div>
           
            
        </div>
    )
}
 

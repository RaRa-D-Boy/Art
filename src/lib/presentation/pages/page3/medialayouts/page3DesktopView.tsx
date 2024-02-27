import React from 'react'
import { Button, Container } from 'react-bootstrap'
import screenImg from '../../../../../assets/images/screen3.png'

function Page3DesktopView() {
const pageBackground = {
    backgroundImage : `url(${screenImg})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    // height:"100vh",
    marginTop:"5%"
   
}

const textBold = {
    fontSize:"8vw",
    fontWeight:"900", 
    marginTop:"-5%"
   
}

const textLight= {
    fontSize:"8vw",
    fontWeight:"500",
    marginTop:"-5%"
    
}

const containerFit = {
   paddingTop:"15%",
   paddingLeft:"20%"
}

const containerStyle = {
    height:"100%",
    width:"100%",
    
    // marginLeft:"20%",
    
   
}
  return (
    <section className="min-vh-100" id="page3" style={pageBackground} >
        <Container fluid style={containerStyle}>
            <div style={containerFit}>
            <div style={textLight}>Grow your</div>
               <div  style={textBold}>Ideas,</div> 
               <div style={textLight}>Digitize your</div>
               <div  style={textBold}>imagination.</div>   
               
               
                <Button className="w-25 py-2 shadow-lg rounded-0 text-secondary fw-bold">
                   View | Add to gallery
                </Button>
            </div>
            
        </Container>
    </section>
  )
}

export default Page3DesktopView
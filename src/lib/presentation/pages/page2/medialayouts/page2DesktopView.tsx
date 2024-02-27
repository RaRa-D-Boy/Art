import React from 'react'
import { Button, Container } from 'react-bootstrap'
import screenImg from '../../../../../assets/images/screen2.png'

function Page2DesktopView() {
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
   
}

const textLight= {
    fontSize:"8vw",
    fontWeight:"500",
    marginTop:"-7%"
    
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
    <section className="min-vh-100" id="page2" style={pageBackground} >
        <Container fluid style={containerStyle}>
            <div style={containerFit}>
               <div  style={textBold}>Art is :</div> 
               <div style={textLight}>Love, peace ,</div>
               <div style={textLight}>you.</div>
               <p className="fw-light" style={{width:"450px"}}>Hybrid is a decentralized, blockchain-based digital asset
                 that provides users with the benefits of both public 
                 and private digital currencies
                </p>
                <Button className="w-25 py-2 shadow-lg rounded-0 text-secondary fw-bold">
                   Make it count($)
                </Button>
            </div>
            
        </Container>
    </section>
  )
}

export default Page2DesktopView
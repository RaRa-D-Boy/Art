import React from 'react'
import { Button, Container } from 'react-bootstrap'
import screenImg from '../../../../../assets/images/screen1.png'

function HomeDesktopView() {
const pageBackground = {
    backgroundImage : `url(${screenImg})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    // height:"100%",
   
}

const textBold = {
    fontSize:"8vw",
    fontWeight:"900", 
    marginTop:"-5%"
}

const textLight= {
    fontSize:"8vw",
    fontWeight:"500"
    
}

const containerFit = {
   paddingTop:"15%",
}

const containerStyle = {
    height:"100%",
    width:"100%",
    marginLeft:"20%",
    
   
}
  return (
    <section className="overflow-hidden min-vh-100" id="homepage" style={pageBackground} >
        <Container fluid style={containerStyle}>
            <div style={containerFit}>
               <div style={textLight}>Buy, Sell,</div> 
               <div style={textBold} >Rent at a fee.</div>
               <p className="fw-light" style={{width:"450px"}}>Hybrid is a decentralized, blockchain-based digital asset
                 that provides users with the benefits of both public 
                 and private digital currencies
                </p>
                <Button className="w-25 py-2 shadow-lg rounded-0 text-secondary fw-bold">
                    Contact Us 
                </Button>
            </div>
            
        </Container>
    </section>
  )
}

export default HomeDesktopView
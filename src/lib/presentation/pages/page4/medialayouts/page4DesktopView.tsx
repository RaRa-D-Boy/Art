import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import screenImg from '../../../../../assets/images/screen4.png'

function Page4DesktopView() {
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
    <section className="min-vh-100" id="page4" style={pageBackground} >
        <Container fluid style={containerStyle}>
            <div style={containerFit}>
            <div style={textLight}>About</div>
                 <Row>
                    <Col md={5} lg={5} sm={12}>
                    <div className="my-3">
                        <p className="fw-bold fs-3"> Sell </p>
                        <p>
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital 
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="fw-bold fs-3"> Buy </p>
                        <p>
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital 
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="fw-bold fs-3"> Rent at a fee </p>
                        <p>
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital 
                        </p>
                    </div>
                    </Col>
                    <Col md={4} lg={4} sm={12}>
                    <div className="my-3">
                        
                        <p >
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital.
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital  
                        </p>
                        <p className="mt-4">

                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        Hybrid is a decentralized, blockchain-based digital.
                        Hybrid is a decentralized, blockchain-based digital asset that provides 
                        users with the benefits of both public and private digital currencies.
                        
                        
                        </p>
                    </div>
                    </Col>
                 </Row>
               
               
               
            </div>
            
        </Container>
    </section>
  )
}

export default Page4DesktopView
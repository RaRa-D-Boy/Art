import { Container,Button } from 'react-bootstrap'
import  {CgMenuGridO} from 'react-icons/cg'
import logo from '../../../../../assets/images/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import screenImg from '../../../../../assets/images/screen7.png'



function NavbarDesktopView() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const pageBackground = {
        backgroundImage : `url(${screenImg})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        width:"100%",
        height:"100%",
       
    }

    const textLight= {
        fontSize:"8vw",
        fontWeight:"500",
        marginTop:"-10%"  
    }

  return (
    <>
    <Container fluid className="px-5 py-3 bg-transparent position-fixed" style={{height:"80px"}}>
         <div className="d-flex justify-content-between">
            <div  style={{marginTop:"0%"}}><img src={logo} style={{width:"200px"}}/></div>
            <div>
                <Button className="rounded-circle py-2 shadow-lg" onClick={handleShow}  >
                 <CgMenuGridO className="text-secondary  fw-bold fs-5"/>
                </Button>
                </div>
            </div>
        
    </Container>

    <Offcanvas show={show} onHide={handleClose} placement="top" style={pageBackground}>
        <Offcanvas.Header className="px-5" closeButton>
          <Offcanvas.Title>
          <div className="d-flex justify-content-between ">
            <div ><img src={logo} style={{width:"200px"}}/></div>
           
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center position-absolute top-50 start-50 translate-middle">
        <div className="text-primary" style={textLight}><a href="#hompepage">Home</a></div> 
        <div className="text-primary" style={textLight}><a className="text-decoration-none" href="#page2">Gallery</a></div> 
        <div className="text-primary" style={textLight}>About</div> 
        <div className="text-primary" style={textLight}>Contact us</div> 
          </Offcanvas.Body>
     </Offcanvas>

    </>
    
       
    
  )
}

export default NavbarDesktopView
import React from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import screenImg from "../../../../../assets/images/screen5.png";
import Img1 from "../../../../../assets/images/4d1.jpg";
import Img2 from "../../../../../assets/images/4d2.jpg";
import Img3 from "../../../../../assets/images/4d3.jpg";
import github from "../../../../../assets/images/GitHub.png";
import linkedin from "../../../../../assets/images/LinkedIn.png";
import twitter from "../../../../../assets/images/Twitter.png";
import instagram from "../../../../../assets/images/Instagram.png";

function Page5DesktopView() {
  const pageBackground = {
    backgroundImage: `url(${screenImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height:"100vh",
    marginTop: "5%",
  };

  const textBold = {
    fontSize: "8vw",
    fontWeight: "900",
    marginTop: "-5%",
  };

  const textLight = {
    fontSize: "8vw",
    fontWeight: "500",
    marginTop: "-5%",
  };

  const containerFit = {
    paddingTop: "10%",
    paddingLeft: "20%",
  };

  const containerStyle = {
    height: "900px",
    width: "100%",

    // marginLeft:"20%",
  };

  const footer = {
    borderTop: "6px solid rgb(237 237 237)",
    height: "200px",
  };

  return (
    <section className="min-vh-100" id="page5" style={pageBackground}>
      <Container fluid style={containerStyle}>
        <div style={containerFit}>
          <div className="d-flex justify-content-between">
            <div style={textLight}>Contact Us</div>
            {/* <Button className="  shadow-lg rounded-0 text-secondary fw-bold">
                   Make it count($)
                </Button> */}
          </div>

          <Row>
            <Col md={3} lg={3} sm={12}>
              <Card className="shadow-lg border-0 rounded-0">
                <CardImg
                  src={Img1}
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <div>UI Designer</div>
                      <div className="fw-bold">RaRa-D-Boy</div>
                    </Col>
                    <Col>
                    <Col>
                      <div className="text-end">
                        <Button className="bg-light border-0 mx-1">
                        <img
                          src={github}
                          style={{ width: "30px", height: "30px" }}
                        />
                        </Button>
                        <Button className="bg-light border-0">
                        <img
                          src={linkedin}
                          style={{ width: "40px", height: "30px" }}
                        />
                        </Button>
                      </div>
                    </Col>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} lg={3} sm={12}>
              <Card className="shadow-lg border-0 rounded-0">
                <CardImg
                  src={Img3}
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <div>Content Creator</div>
                      <div className="fw-bold">Nunana</div>
                    </Col>
                    <Col>
                    <Col>
                      <div className="text-end">
                        <Button className="bg-light border-0 mx-1">
                        <img
                          src={github}
                          style={{ width: "30px", height: "30px" }}
                        />
                        </Button>
                        <Button className="bg-light border-0">
                        <img
                          src={linkedin}
                          style={{ width: "40px", height: "30px" }}
                        />
                        </Button>
                      </div>
                    </Col>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} lg={3} sm={12}>
              <Card className="shadow-lg border-0 rounded-0">
                <CardImg
                  src={Img2}
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <div>Developer</div>
                      <div className="fw-bold">Gideon</div>
                    </Col>
                    <Col>
                      <div className="text-end">
                        <Button className="bg-light border-0 mx-1">
                        <img
                          src={github}
                          style={{ width: "30px", height: "30px" }}
                        />
                        </Button>
                        <Button className="bg-light border-0">
                        <img
                          src={linkedin}
                          style={{ width: "40px", height: "30px" }}
                        />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div style={footer}>
        <Container>
          <Row className="py-5 ">
            <Col className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div className="mx-5">&copy; 2023 Artilary World wide.</div>
                <div className="mx-5">Pricavy Policy .</div>
                <div className="mx-5">Terms and Conditions.</div>
              </div>
              <div>
                <img src={github} style={{ width: "80px", height: "80px" }} />
                <img
                  src={instagram}
                  style={{ width: "80px", height: "80px" }}
                />
                <img src={twitter} style={{ width: "80px", height: "80px" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Page5DesktopView;

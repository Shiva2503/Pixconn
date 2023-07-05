import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './home.css'

export const FrontPage = () => {
  return (
    <Container  fluid={true}>
      <Row className='front-page'>
        <Col className='front-main' lg='5'>
          <div className='front-main-div'>
            <h3 className='front-main-title'>EXPLORE THE WORLD</h3>
            <h1 className='front-main-para pt-3'>It's time <br /> to travel with<br />pixconn</h1>
            <button className='front-main-button mt-5'>Let's Get Started</button>
          </div>
        </Col>
        <Col lg='5'>
          <div className='front-main-right ms-5 ps-5'>
            <img className='front-arrow' src={require('../Images/front-arrow.png')} alt='front-arrow'/>
            <img className='front-main-img ms-5' src={require('../Images/front-main-img.png')} alt='front-main' />
          </div>
        </Col>
      </Row>
      <Row className='mt-5 pt-5 justify-content-center 3card'>
  <Col xl='3'  className='pt-5 text-center hover-effect'>
    <img className='logo' src={require('../Images/responsive.png')} alt="Responsive"/>
    <h2 className='logo-text-main mt-5'>Fully Responsive</h2>
    <h5 className='logo-text-para mt-4'>All our websites are made fully responsive for different <br />devices and screens.</h5>
  </Col>
  <Col xl='3'  className='pt-5 text-center hover-effect'>
    <img className='logo' src={require('../Images/performance.png')} alt="Responsive"/>
    <h2 className='logo-text-main mt-5'>High Performance</h2>
    <h5 className='logo-text-para mt-4'>We optimize all our websites<br /> for maximum performance<br /> and faster loading times.</h5>
  </Col>
  <Col xl='3' className='pt-5 text-center hover-effect'>
    <img className='logo' src={require('../Images/team.png')} alt="Responsive"/>
    <h2 className='logo-text-main mt-5'>Dedicated Team</h2>
    <h5 className='logo-text-para mt-4'>All our websites are made fully responsive for different<br /> devices and screens.</h5>
  </Col>
</Row>
<div className='eclipse-head'>
    <img className='dotted' src={require('../Images/Group 926.png')} alt='dotted' />
<Row className='mt-5 pt-5 justify-content-center'>
<Col className='ms-5' lg='5'>
    <img className='website' src={require('../Images/web-design.png')} alt='website' />
</Col>
<Col className='mt-5 pt-5 ms-5' lg='5'>
    <h1 className='design-title'>Website Design<br /> & Development</h1>
    <p className='design-para pt-3 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br /> diam
     nonumy eirmod tempor invidunt ut labore et dolore<br /> magna aliquyam erat, sed diam voluptua. At vero eos et<br /> accusam et justo duo dolores
      et ea rebum. Stet clita kasd</p>
</Col>
</Row >
<Row className='mt-5 pt-5 ms-5 justify-content-center'>
<Col className='mt-5 pt-5' lg='5'>
    <h1 className='design-title'>Mobile Design<br /> & Development</h1>
    <p className='design-para pt-3 ms-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br /> diam
     nonumy eirmod tempor invidunt ut labore et dolore<br /> magna aliquyam erat, sed diam voluptua. At vero eos et<br /> accusam et justo duo dolores
      et ea rebum. Stet clita kasd</p>
</Col>
<Col className='mt-2' lg='5'>
<img className='mobile' src={require('../Images/mobile-design.png')} alt='website' />
</Col>
</Row>
<Row className='mt-5 pt-5 justify-content-center'>
 <Col className='ms-5' lg='5'>
    <img className='website' src={require('../Images/creative-logos.png')} alt='website' />
 </Col>
 <Col className='mt-5 pt-5' lg='5'>
    <h1 className='design-title ms-5 ps-5'>Creative<br /> Logos</h1>
    <p className='design-para pt-3 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br /> diam
     nonumy eirmod tempor invidunt ut labore et dolore<br /> magna aliquyam erat, sed diam voluptua. At vero eos et<br /> accusam et justo duo dolores
      et ea rebum. Stet clita kasd</p>
  </Col>
  </Row >
  </div>
 <Row className='mt-5 pt-5 ms-5'>
    <Col className='ms-5 ps-5' lg='6'>
        <h1 className='dummy1'>Lorem ipsum dolor sit<br /> amet, consetetur<br /> sadipscing elitr, sed</h1>
    </Col>
  </Row>
  <Col lg={{size:5, offset:6}} className='dummy-button mt-5'>
    <button className='front-main-button'>Let's Get Started</button>
 </Col>
  <Row className='ms-5'>
    <Col lg={{size:5}} className='ms-5 ps-5'>
        <img className='man-1' src={require('../Images/Man-1.png')} alt='man-1'/>
    </Col>
    <Col lg={{size:6}} className='ms-5 d-flex justify-content-center align-items-end'>
        <img className='people-small2' src={require('../Images/people-small2.png')} alt='people-small2'/>
    </Col>
  </Row>
  <Row>
  <Col lg='5' className='d-flex align-items-end scroll-container'>
    <h1 className='pixconn'>PIXCONN</h1>
  </Col>
  <Col lg={{ size: 6 }} style=
  {{ backgroundImage: `linear-gradient(to right, transparent 0, transparent 70px, white 20px)`,
   zIndex:2,
    width:'850px'
     }}>
    <img className='people-small1' src={require('../Images/people-small1.png')} alt='people-small1' />
  </Col>
</Row>
<Row className='people-blur'>
  <Col lg='6' className='ms-5 ps-3 people-blur-col d-flex justify-content-center align-items-center'>
    <h1 className='people-blur-text ms-3 ps-4'>Lorem ipsum dolor sit<br /> amet, consetetur<br /> sadipscing elitr, sed</h1>
  </Col>
  <Col lg='5'>
    <div className='ms-5 ps-5 rectangle1 d-flex justify-content-center'>
      <img src={require('../Images/Rectangle1.png')} alt='rectangle1' />
    </div>
    <div className='rectangle2 ms-5 ps-5'>
      <img src={require('../Images/Rectangle2.png')} alt='rectangle2' />
    </div>
    <div className='ms-5 ps-5 rectangle3 d-flex justify-content-center'>
      <img src={require('../Images/Rectangle3.png')} alt='rectangle3' />
    </div>
  </Col>
</Row>

            <h1 className='technology'>TECHNOLOGY</h1>
        
    </Container>
  )
}

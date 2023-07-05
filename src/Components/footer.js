import React from 'react'
import {  Col, Row } from 'reactstrap'
import './footer.css'

const Footer = () => {
  return (
    <div className='mt-5' style={{backgroundColor:"#E8EBEF", height:"20rem"}}>
<div className='container'>

       <Row>
        <Col lg='12'>
            <div className='d-flex justify-content-center footer-logo mt-5'>
            <img src={require('./Images/footer-logo.png')} alt='footer-logo'/></div>
            <div className='d-flex justify-content-center mt-5 gap-5'>
              <p className='foot-nav-item'>Home</p>
              <p className='foot-nav-item'>About</p>
              <p className='foot-nav-item'>Service</p>
              <p className='foot-nav-item'>Contact</p>
            </div>
            <div className='d-flex justify-content-center mt-3 gap-4' >
                            <a href='/'><img src={require('./Images/facebool.png')} alt='fb' /></a>
                            <a href='/'><img className='pt-1' src={require('./Images/twitter.png')} alt='linkedin' /></a>
                            <a href='/'><img src={require('./Images/instagram.png')} alt='instagram' /></a>
                            <a href='/'><img className='pb-1' src={require('./Images/linkedin.png')} alt='twitter' /></a></div>
                            <div className='mt-4'>
                              <p className='text-center copy-rights'>copyrights@2023 pixconn</p>
                            </div>
        </Col>
       </Row>
</div>
    </div>
  )
}

export default Footer
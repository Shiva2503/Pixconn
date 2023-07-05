import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import './Nav.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function PixconnNavbar() {

    const getPopupContentStyle = () => {
        if (window.innerWidth <= 600) {
          return { maxWidth: '90%' };
        } else {
          return { maxWidth: '600px' };
        }
      };
  const [isOpen, setIsOpen] = useState(false);
  const [menuClass, setMenuClass] = useState('ms-auto me-5 pe-3 gap-5 nav-menu');
  const [activeMenu, setActiveMenu] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
      setWindowWidth(window.innerWidth);
      setMenuClass(window.innerWidth <= 1160 ? 'ms-auto me-5 pe-5 gap-1 nav-menu' : 'ms-auto me-5 pe-3 gap-5 nav-menu');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (windowWidth > 992) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (windowWidth > 992) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth > 992) {
      setDropdownOpen(false);
    }
  };


  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  return (
    <div className="container-fluid navbar-container">
      <Navbar dark expand="lg">
        <NavbarBrand className="navbar-brand-custom" href="/">
          <img src={require('../Images/Pixconn-Logo.png')} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle}>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className={menuClass} navbar>
            <NavItem className="nav-item">
              <Link to="/" className={`nav-link ${activeMenu === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </NavItem>
            <img className='list-dot' src={require('../Images/dot.png')} alt='list-dot'/>
            <NavItem className="nav-item">
              <Link to="/about" className={`nav-link ${activeMenu === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </NavItem>
            <img className='list-dot' src={require('../Images/dot.png')} alt='list-dot'/>
            <NavItem className="nav-item">
              {windowWidth > 992 ? (
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggleDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <DropdownToggle nav>
                    <Link to="/solutions" className="dropdown">Services</Link>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/services/web-dev" className="dropdown-item">Web Developement</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/services/mobile-dev" className="dropdown-item">Mobile Developement</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/services/logos" className="dropdown-item">Creative Logos</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem className="nav-item">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav className='dropdown'>
                      Services
                    </DropdownToggle>
                    <DropdownMenu end>
                    <DropdownItem>
                      <Link to="/services/web-dev" className="dropdown-item">Web Developement</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/services/mobile-dev" className="dropdown-item">Mobile Developement</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/services/logos" className="dropdown-item">Creative Logos</Link>
                    </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>)}
            </NavItem>
            <img className='list-dot' src={require('../Images/dot.png')} alt='list-dot'/>
            <NavItem className="nav-item">
              <Link to="/contact" className={`nav-link ${activeMenu === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Popup className='popup-form'
                trigger={
                  <p className="form-control rounded-pill btn btn-primary waves-effect waves-light btn-md nav-item" id='enquiry'>
                    Enquiry
                  </p>
                }
                modal
                nested
                contentStyle={{
                  backgroundColor: "black",
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: '8px',
                  padding: '20px',
                  overflowY: 'auto',
                  ...getPopupContentStyle()
                }}
                overlayStyle={{ background: 'rgba(0,0,0,0.5)' }}
              >
                {close => (
                  <div className='popup-form d-flex justify-content-center'>
                    <button className='close-button' onClick={close}>
                      X
                    </button>
                    <div className='contact-form-container'>
                      <h1 className='contact-text text-center'>Enquiry</h1>

                    </div>
                  </div>
                )}
              </Popup>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PixconnNavbar;

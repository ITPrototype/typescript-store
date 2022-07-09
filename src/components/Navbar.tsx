import { useState } from 'react'
import {Button, Container, Nav, Navbar as NavbarBS} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CenModal from '../utils/CenModal'

export default function Navbar() {
    const [modalShow,setModalShow] = useState(false)
    const num:number = 0
    return (
    <NavbarBS sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link as = {NavLink} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as = {NavLink} to="/store">
                    Store
                </Nav.Link>
                <Nav.Link as = {NavLink} to="/about">
                    About
                </Nav.Link>
            </Nav>
            <Button 
                onClick={()=>setModalShow(true)}
                variant='outline-primary' 
                className='rounded-circle'
                style={{position:"relative",width:"3rem",height:"3rem"}}
            >
                <i className="fa-solid fa-cart-arrow-down"></i>
            </Button>
            <CenModal
                show={modalShow}
                onHide={()=>setModalShow(false)}
            />
        </Container>
    </NavbarBS>
  )
}

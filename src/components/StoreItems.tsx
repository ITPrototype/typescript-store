import { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { loc } from '../pages/Store'
import InnerImageZoom from 'react-inner-image-zoom'
import Swal from 'sweetalert2'
import '../styles/zoom.css'
import '../styles/cartPhone.css'

type StoreItemProps = {
    id: number
    title: string
    description: string
    image: string
    price: number
    category: string
    rating: number
}


export default function StoreItems({ id, title, description, image, price, category, rating }: StoreItemProps) {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const addToCart = (title: string) => {
        loc.indexOf(title) === -1 ? loc.push({ title: title, price: price, image: image, id: id }) && localStorage.setItem('cart', JSON.stringify(loc)) : alert(`You already added ${title}`)
        showAlert()
    }
    const showAlert = () => {
        return Swal.fire({
            title: 'Successfully added',
            text: 'Check out others',
            icon: 'success',
            confirmButtonText: 'Exit'
        })
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h6 className='text-muted'>Title:</h6>{title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="wrapper">
                        <div>
                            <InnerImageZoom src={image} zoomSrc={image} width={350} />
                        </div>
                        <div id="modBody">
                            <div>
                                <span className='text-muted'>Category:</span>
                                <h6 style={{ color: "blue" }}>#{category}</h6>
                            </div>
                            <hr />
                            <div>
                                <span className='text-muted'>Description:</span><h5>{description}</h5>
                            </div>
                            <hr />
                            <h6 className='text-muted' style={{ float: "right" }}>Price: {price}$</h6>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary' onClick={() => addToCart(title)}>Add to cart</Button>
                </Modal.Footer>
            </Modal>
            <Card style={{ height: "610px" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "40px", borderRadius: "50px", backgroundColor: "#1d3557", display: "flex", flexDirection: "row", justifyContent: "center", color: "white", alignItems: "center",border:'1px solid blue',cursor:'pointer' }}>{rating}</div>
                <Card.Img variant='top' src={image} height="400px" style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                        <span className='fs-2'><h5>{title}</h5></span>
                        <span className='ms-2 text-muted'>{price}$</span>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className='card_footer'>
                    <Card.Text style={{ color: "blue", cursor: "pointer" }}>#{category}</Card.Text>
                    <button className='showmore_btn' onClick={handleShow}>Show more</button>
                </Card.Footer>
            </Card>
        </>
    )
}

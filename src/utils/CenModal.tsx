import Swal from 'sweetalert2'
import { Button, Card, Modal } from 'react-bootstrap'
import { loc } from '../pages/Store'


export default function CenModal(props: any) {

    const showAlert = () => {
        return Swal.fire({
            title: 'Successfully purchased',
            text: 'Deelers will call you later',
            icon: 'success',
            confirmButtonText: 'Exit'
        })
    }
    let cartData: any[] = []
    if (typeof localStorage['cart'] === "undefined") {
        cartData = loc
    } else {
        cartData = JSON.parse(localStorage.getItem('cart') || '')
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                {cartData.length === 0 ? <h2>No items</h2> :
                    cartData.map((tovar: any) => (
                        <Card style={{ width: "18rem", marginTop: "8px" }} key={tovar.id}>
                            <Card.Img variant="top" src={tovar.image} />
                            <Card.Body>
                                <Card.Title>{tovar.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <span>{tovar.price}$</span>
                                <Button className="btn btn-primary" onClick={showAlert}>Order</Button>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

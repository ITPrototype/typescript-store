type NumIt = {
    num:number
}

export default function CartNum({num}:NumIt) {
    


    return (
        <>
            <i className="fa-solid fa-cart-arrow-down"></i>
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%,25%)",
                }}
            >
                {num}
            </div>
        </>
    )
}

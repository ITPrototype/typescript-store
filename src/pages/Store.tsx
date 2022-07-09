import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StoreItems from '../components/StoreItems'
import Loader from '../utils/Loader'
import '../styles/storefix.css'

export const loc:any[]=[]
export default function Store() {
  const[data,setData]=useState<any[]>([])
  const[loader,setLoader]=useState(false)
  
  const getStore = async()=>{
    setLoader(true)
    const response = await fetch(
      `https://fakestoreapi.com/products`
    )
    const item = await response.json()
    setData(item)
    setLoader(false)
  }
  useEffect(()=>{
    getStore()
  },[])
  return (
    <Container className='homecont'>
      <h1>Store</h1>
      {loader ? <Loader/> : <Row md={2} xs={1} lg={3} className="g-3">
        {data.map(items=>(
          <Col key={items.id}>
            <StoreItems {...items} rating={items.rating.rate}/>
          </Col>
        ))}
      </Row>}
    </Container>
  )
}

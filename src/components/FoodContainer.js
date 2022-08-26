import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import dbJson from "../data/db.json"
import VotingCard from './VotingCard';
const FoodContainer = () => {
const[food,setFood]=useState([]);

useEffect(()=>{
    setFood(dbJson);
},[])
  return (
    <div>
    <Container className="app">
      <Row>
        {food.map((curItem) => {
          return (
            <> 
            <Col key={curItem.id} md={4}>
                <VotingCard curItem={curItem}/>
            </Col>
            
            </>
          );
        })}
      </Row>
    </Container>
        
    </div>
  )
}

export default FoodContainer
import React, { useState} from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  const[count,setCount]=useState(0);
  const[voteColor,setVoteColor]=useState(false);

  function addVoteCount(){
        setCount(count+1);
        setVoteColor(true);  
}

  function removeVoteCount(){
    setCount(count-1);
    setVoteColor(voteColor=>!voteColor);
  }
  return (
    <Card style={{ width: "18rem" }}> 
      <Card.Img variant="top" src={`https://loremflickr.com/300/300/${props.curItem.dishName}`} />
      <Card.Body>
        <Card.Title>{props.curItem.dishName}</Card.Title>
        <Card.Text>
          {props.curItem.description}
        </Card.Text>
       {voteColor? <Button variant="danger" onClick={removeVoteCount}>
          Voted
        </Button>
        :
        <Button variant="success" onClick={addVoteCount}>
          Vote
        </Button>} 
       
      </Card.Body>
      <Card.Footer>Vote count: {count}</Card.Footer>
    </Card>
  );
}
export default VotingCard;
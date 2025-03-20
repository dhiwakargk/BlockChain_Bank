import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import test from "./assets/test.jpg"
import own from "./assets/own.jpg"
import person from "./assets/usericon.png"
import { useNavigate } from 'react-router-dom';

const Fund = () => {
  const navigate = useNavigate();

  const Fundform = () => {
    navigate('/fundform');
  };
  const Otheraccount = () => {
    navigate('/otheraccount');
  };

 

  const Benifit = () => {
    navigate('/benifit');
  };
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div style={styles.carouselContainer}>
      <Card
        style={{
          ...styles.card,
          backgroundColor: hoveredCard === 'card1' ? '#f46b1d' : hoveredCard ? '#f9f9f9' : '#f46b1d',
          color: hoveredCard === 'card1' ? 'white' : hoveredCard ? 'gray' : 'white',
        }}
        onMouseEnter={() => handleMouseEnter('card1')}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Body style={styles.cardBody}>
          <Card.Title>Transfer to your own Bank Account</Card.Title>
          <Card.Text>Transfer funds to your own Bank Account instantly.</Card.Text>
          <Card.Img variant="bottom" src={test} alt="Own Bank Account" style={styles.image} />
          <Button variant="light" style={styles.button} onClick={Fundform}>TRANSFER AMOUNT</Button>
        </Card.Body>
      </Card>

      <Card
        style={{
          ...styles.card,
          backgroundColor: hoveredCard === 'card2' ? '#3498db' : hoveredCard ? '#f9f9f9' : '#fff',
          color: hoveredCard === 'card2' ? 'white' : hoveredCard ? 'gray' : 'black',
        }}
        onMouseEnter={() => handleMouseEnter('card2')}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Body style={styles.cardBody}>
          <Card.Title>Transfer to other Bank Account</Card.Title>
          <Card.Text>Transfer funds to other Accounts instantly.</Card.Text>
          <Card.Img variant="bottom" src={own} alt="Other Bank Account" style={styles.image} />
          <Button variant="light" style={styles.button} onClick={Otheraccount}>TRANSFER AMOUNT</Button>
        </Card.Body>
      </Card>

      <Card
        style={{
          ...styles.card,
          backgroundColor: hoveredCard === 'card3' ? '#2ecc71' : hoveredCard ? '#f9f9f9' : '#fff',
          color: hoveredCard === 'card3' ? 'white' : hoveredCard ? 'gray' : 'black',
        }}
        onMouseEnter={() => handleMouseEnter('card3')}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Body style={styles.cardBody}>
          <Card.Title>Add Beneficiary</Card.Title>
          <Card.Text>Add Account details of your choices instantly.</Card.Text>
          <Card.Img variant="bottom" src={person} alt="Add Beneficiary" style={styles.image} />
          <Button variant="light" style={styles.button} onClick={Benifit}>ADD ACCOUNTS</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    flex: '1',
    margin: '0 10px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
};

export default Fund;
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {

  const navigate = useNavigate();

  const Contact = () => {
    navigate('/Contact');
  };
  return (
    <div style={styles.contactUsContainer}>
      <h2 style={styles.heading}>Need Help?<br />Get in Touch with our Bank.</h2>
      <div style={styles.cardContainer}>
        
        <div style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <i className="fas fa-envelope" style={styles.icon}></i>
          </div>
          <h3 style={styles.cardTitle}>Raise Service Requests</h3>
          <p style={styles.cardText}>Raise Service Requests to avail various services offered by us.</p>
          <a href="#" style={styles.cardLink}>RAISE SERVICE REQUEST &gt;</a>
        </div>


        <div style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <i className="fas fa-phone-alt" style={styles.icon}></i>
          </div>
          <h3 style={styles.cardTitle}>Contact Customer Care</h3>
          <p style={styles.cardText}>
            To contact our Bank's Customer Care, use the contact details updated here.
            <br />
            Please do not use the contact details updated on any other website as it can be fake and may risk your account security.
          </p>
          <a href="#" style={styles.cardLink}>CONTACT CUSTOMER CARE &gt;</a>
        </div>

        <div style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <i className="fas fa-info-circle" style={styles.icon}></i>
          </div>
          <h3 style={styles.cardTitle}>Visit Helpdesk</h3>
          <p style={styles.cardText}>Visit the helpdesk at any of our branches. Click the links to find the nearest Branch/ ATM.</p>
          <a href="#" style={styles.cardLink}></a>
          <a href="#" style={styles.cardLink}>ATM SHARING &gt;</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactUsContainer: {
    textAlign: 'center',
    padding: '60px 0',
    backgroundColor: '#f5f7fa',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '50px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '30px', 
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    textAlign: 'left',
    width: '30%', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  contactCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
  iconContainer: {
    fontSize: '40px',
    color: '#f46b1d',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  cardText: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  cardLink: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#f46b1d',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  cardLinkHover: {
    color: '#d35400',
  },
  icon: {
    fontSize: '48px',
    color: '#f46b1d',
  },
};

export default ContactUs;
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faMoneyCheck,faAddressBook,faContactBook,faComment} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import currency from './assets/currency.png';
import bank from './assets/bank.png';
import balance from './assets/balance.png'
import Table from 'react-bootstrap/Table';
import gradient from './assets/gradient.jpg'
import credit from './assets/credit.png';
import cards from './assets/cards.jpg'
import { useNavigate } from 'react-router-dom';
const DashBoard=()=>{
    const navigate=useNavigate()
    return (
        <Container fluid style={{backgroundColor:"whitesmoke"}}>
            <Row>
                <Col xs={3}>
                    <div style={{ height: "720px", margin: 0,padding:0, width: "300px" }}>
                        <Sidebar
                            width='300px'
                            collapsed={false}
                            toggled={true}
                           
                            rootStyles={{
                                backgroundColor: "white",
                                color: "black",
                                fontSize: "22px",
                                height: "100%",
                                boxShadow:"10px 10px 20px grey",
                                
                            }}
                        >
                            <br />
                            <Row>
                                <Col xs={2} style={{ marginLeft: "10px" }}>
                                    <img src={bank} alt="" height={50} width={50} />
                                </Col>
                                <Col style={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <p style={{ color: "black", fontSize: 20, fontWeight: 900 }}>ZEO BANK</p>
                                </Col>
                            </Row>
                            <br />
                            <Menu menuItemStyles={{ root: { ":hover": {  color: "blue",backgroundColor:"red",marginLeft:"10px" } } }}>
                                <MenuItem icon={<FontAwesomeIcon icon={faHome} color='grey'  />} style={{ fontWeight: 600,":hover": { backgroundColor: "blue"}}} >Home</MenuItem>
                                <br />
                                <MenuItem icon={<FontAwesomeIcon icon={faMoneyBill} color='grey' />} style={{ fontWeight: 600 }}> <p onClick={()=>{navigate("/fund")}} style={{marginTop:"14px"}}> Payment Transfer</p> </MenuItem>
                                <br />
                                <MenuItem icon={<FontAwesomeIcon icon={faMoneyCheck} color='grey' />} style={{ fontWeight: 600 }} onClick={()=>{navigate("/history")}}>Transaction History</MenuItem>
                                <br />
                                <MenuItem icon={<FontAwesomeIcon icon={faAddressBook} color='grey' />} style={{ fontWeight: 600 }} onClick={()=>{navigate("/wallet")}}>Wallet Transaction</MenuItem>
                                <br />
                                
                                <MenuItem icon={<FontAwesomeIcon icon={faMoneyCheck} color='grey' />} style={{ fontWeight: 600 }} > <p onClick={()=>{navigate("/customer")}} style={{marginTop:"14px"}}> Customer Services </p></MenuItem>
                                 <br/>
                                <MenuItem icon={<FontAwesomeIcon icon={faComment} color='grey' />} style={{ fontWeight: 600 }} onClick={()=>{navigate("/feedback")}}>Feedback</MenuItem>
                               
                            </Menu>
                        </Sidebar>
                    </div>
                </Col>
                
                <Col style={{ marginTop: "5%" }}>
                    
                    <Card style={{ width: '50%',boxShadow:"10px 10px 20px grey" }}>
                        <Card.Body>
                            <Row>
                                <Col xs={3}>
                                    <img src={balance} alt="" style={{ height: "90px", width: "100px" }} />
                                </Col>
                                <Col style={{marginLeft:"20px"}}>
                                    <Card.Title>Balance</Card.Title>
                                    <Card.Text>
                                        <h4>Current Balance</h4>
                                        <h5>$2000</h5>
                                    </Card.Text>
                                </Col>
                                
                            </Row>
                        </Card.Body>
                        
                    </Card>
                    <br />
                    <br />
                    <br />
                    <br />
                  
                    <Table hover={true}>
                        <thead>
                            <tr>
                                <th>Transaction</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                 <th>Channel</th>
                                 <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Uber 0312</th>
                                <th style={{color:"green",fontSize:"20px"}}>$5.90</th>
                                <th style={{color:"green",borderRadius:"40px",backgroundColor:"#d8edbb",width:"100px",textAlign:"center"}}>Success</th>
                                <th style={{width:"230px"}}>Wed,Apr 24 2:30 pm</th>
                                <th>Online</th>
                                <th style={{color:"#2b16f0",fontWeight:"900"}}>Travel</th>
                            </tr>
                            <br />
                            <tr>
                                <th>United Airlines</th>
                                <th style={{color:"red",fontSize:"20px"}}>$-300.00</th>
                                <th style={{color:"red",borderRadius:"40px",backgroundColor:"#e38c8a",width:"100px",textAlign:"center"}}>Failed</th>
                                <th style={{width:"230px"}}>Mon,May 10 10.00 am</th>
                                <th>Online</th>
                                <th style={{color:"#2b16f0",fontWeight:"900"}}>Travel</th>
                            </tr>
                            <br />
                            <tr>
                                <th>McDonalds</th>
                                <th style={{color:"green",fontSize:"20px"}}>$50.00</th>
                                <th style={{color:"green",borderRadius:"40px",backgroundColor:"#d8edbb",width:"100px",textAlign:"center"}}>Success</th>
                                <th style={{width:"230px"}}>Sun,Jan 12 10:30 pm</th>
                                <th>Online</th>
                                <th style={{color:"#2b16f0",fontWeight:"900"}}>Food</th>
                            </tr>
                            <br />
                            <tr>
                                <th>Medicine</th>
                                <th style={{color:"green",fontSize:"20px"}}>$120.00</th>
                                <th style={{color:"green",borderRadius:"40px",backgroundColor:"#d8edbb",width:"100px",textAlign:"center"}}>Success</th>
                                <th style={{width:"230px"}}>Tue,Feb 20 11.00 am</th>
                                <th>Online</th>
                                <th style={{color:"#2b16f0",fontWeight:"900"}}>Medicine</th>
                            </tr>
                             <br />
                             <tr>
                                <th>McDonalds</th>
                                <th style={{color:"green",fontSize:"20px"}}>$180.00</th>
                                <th style={{color:"green",borderRadius:"40px",backgroundColor:"#d8edbb",width:"100px",textAlign:"center"}}>Success</th>
                                <th style={{width:"230px"}}>Mon,Jun 10.00 am</th>
                                <th>Online</th>
                                <th style={{color:"#2b16f0",fontWeight:"900"}}>Food</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <br />
                <br />
                <br />
                <Col xs={3}>
                <Card style={{ width: '20rem' ,marginTop:"5%",borderRadius:"30px"}}>
      <Card.Img variant="top" src={gradient} style={{height:"120px"}} />
      <div>
         <div style={{height:"60px",width:"60px",borderRadius:"70%",backgroundColor:"grey",padding:"50px",marginTop:"-50px",marginLeft:"20px"}}>
              <h2 style={{textAlign:"center",color:"white",fontSize:"50px",marginTop:"-25px",marginLeft:"-15px"}}>S</h2>
         </div>
      </div>
      <Card.Body>
        <Card.Title>ZEO</Card.Title>
        <Card.Text>
          ZEO@gmail.com
        </Card.Text>
        
      </Card.Body>
    </Card>
      <br />
      <br />
      <br />
       <Col>
          <div style={{border:"0.5px solid grey",padding:"10px",borderRadius:"20px",boxShadow:"15px 15px 20px grey",width:"330px",textDecoration:"underline",fontWeight:700}}>
            <p style={{fontSize:"20px"}}>My Accounts</p>
            <img src={cards} alt=""  style={{height:"200px",width:"270px"}} />
          </div>
       </Col>

                </Col>
            </Row>

            <div style={{position:"absolute",left:"52%",top:"80px",border:"1px solid black",borderRadius:"17px",padding:"10px",backgroundColor:"white",height:"140px"}}>
               <Table hover={true} style={{width:"300px"}}>
                  <thead>
                    <tr>
                        <th>Credit Cards</th>
                        <th>Expiry Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <th style={{fontWeight:500}}>Account 1</th>
                        <th style={{fontWeight:500}}>26 Dec 2024</th>
                    </tr>
                    <tr>
                        <th style={{fontWeight:500}}>Account 2</th>
                        <th style={{fontWeight:500}}>6 Mar 2025</th>
                    </tr>
                  </tbody>
               </Table>
            </div>
            
        </Container>
    );
}

export default DashBoard
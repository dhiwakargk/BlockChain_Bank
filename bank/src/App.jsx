import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faMoneyCheck,faAddressBook,faContactBook } from '@fortawesome/free-solid-svg-icons';
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
import WalletTransfer from './Wallet';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

import DashBoard from './Dashboard';
import Login from './Login';
import Signup from './SignUp';
import ContactUs from './CustomerService';
import Fund from './Fund';
import Fundform from './FundForm';
import Otheraccount from './OtherAccount';
import Benifit from './Benefit';
import UserForm from './General_user';
import FeedbackForm from './Feedback';
import Transaction from './Transaction';
const MyComponent = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Signup/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/dashboard' element={<DashBoard/>}></Route>
                    <Route path='/customer' element={<ContactUs/>}></Route>
                    <Route path='/fund' element={<Fund/>}></Route>
                    <Route path='/fundform' element={<Fundform/>}></Route>
                    <Route path='/otheraccount' element={<Otheraccount/>}></Route>
                    <Route path='/benifit' element={<Benifit/>} ></Route>
                    <Route path='/generaluser' element={<UserForm/>}></Route>
                    <Route path="/feedback" element={<FeedbackForm/>}></Route>
                    <Route path='/history' element={<Transaction/>}></Route>
                    <Route path='/wallet' element={<WalletTransfer/>}></Route>
                </Routes>
            </Router>
        </div>
    )
};

export default MyComponent;

"use client"
import React from 'react'
import { useRef, useState } from "react";
import { Container, Row, Col, Image, Tab, Nav } from 'react-bootstrap'
// import '../preglobal.css';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Footermenu';
import Predicatenav from '../components/Predicatenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function AccountSettingsPage() {

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    const [isOn, setIsOn] = useState(false);
    return (
        <div className='pre-pages-x '>
            <Homeheader />
            <section className='account-settings-page  '>
                <Container >
                    <div className="innerpagecontent">
                        <h2 className="h2 heading-h2 mb-3">Prediction Overview</h2>
                    </div>
                    <Predicatenav />
                    <div className="gridparentbox">
                        <h2 className="inner-heading-title">Account Settings</h2>
                        <p className='card-title mb-3'>Two-Factor Authentication</p>
                        <div className="accountsettingsbox">
                            <div>
                                <p className='card-title'>Enable 2FA</p>
                                <p className='mb-0'>Add an extra layer of security to your account using an authenticator app</p>
                            </div>
                            <div
                                className={`toggle-switch ${isOn ? "on" : ""}`}
                                onClick={() => setIsOn(!isOn)}
                                style={{ background: "#19181B" }}
                            >
                                <div className="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                </Container>

            </section>
            <Homefooter />
        </div>
    )
}

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Col, Row, Nav, Tab, InputGroup, Form, Button, Image, FormCheck, Tooltip, OverlayTrigger } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const page = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    document.body.classList.add('loginbanner');
    document.body.classList.remove('userpanelpage');
  })

  return (
    <div>
      <Homeheader />

      <section className="formbg">
        <Container className="sign">
          <div className="formboxbg">
            <div className="leftsideformbox">
              <div className="leftsidecontent">
              <h2><span className="txt-yellow">ringx</span> - Powering the future of Affiliate Marketing</h2>
              <p>Maximize your earnings, grow your network, and track rela-time performance with our smart affiliate solutions.</p>
              </div>
              <Image src="assets/images/buytoken.svg" className="loginiconb" width={50} height={50} alt="icon" />
            </div>
            <div className="rightsideformbox">
              <Form className="siteformbg">
                <div className="login-form">
                  <div className="loginformbox">
                    <div className="logcenterbox">
                      <h2 className="heading-title pb-3">Register</h2>
                      <div className="formcontentbox mt-3">
                        <Form.Group className="form-group">
                          <Form.Label>Username </Form.Label>
                          <Form.Control type="text" id="username" />
                        </Form.Group>

                        <Form.Group className="form-group">
                          <Form.Label>Email Address </Form.Label>
                          <Form.Control type="email" id="email" />
                        </Form.Group>

                        <Form.Group className="form-group">
                          <Form.Label>Password</Form.Label>
                          <div className="tabrightbox t-gray">
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Your password must contain at least 8 characters, one uppercase (ex: A, B, C, etc), one lowercase letter, one numeric digit (ex: 1, 2, 3, etc) and one special character (ex: @, #, $, etc)</Tooltip>}>
                              <FontAwesomeIcon icon={faInfoCircle} />
                            </OverlayTrigger>
                          </div>
                          <InputGroup>
                            <Form.Control type="password" id="password" />
                            <div className="input-group-append">
                              <InputGroup.Text><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
                            </div>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-group">
                          <Form.Label>Confirm Password</Form.Label>
                          <InputGroup>
                            <Form.Control type="confirmpassword" id="password-confirm" />
                            <div className="input-group-append">
                              <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} /> </InputGroup.Text>
                            </div>
                          </InputGroup>

                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label>Referral ID (Optional)</Form.Label>
                          <Form.Control type="text" id="referral-code" /> </Form.Group>

                        <Form.Group className="form-group">
                          <FormCheck type="checkbox" id="terms-agreement" label={<> I have read and agree to the
                            <Link href="/terms" target="_blank" rel="noopener noreferrer"> {' '}Terms of Service
                            </Link>
                          </>} checked={isChecked} onChange={handleChange} />
                        </Form.Group>
                        <div className="text-center">
                          <Button type="submit" className="btn sitebtn" id="submit"> Submit </Button>
                        </div>
                      </div>
                    </div>
                    <div className="logbottomcellbox">
                      <p className="btngray">Already have an account?
                        <Link href="/signin" className="ms-1 t-blue" id="login"> Sign in </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default page;

import React from "react";
import Link from 'next/link';
import { Container, Row, Col, Form, InputGroup, Image, Button} from 'react-bootstrap';
const Homefooter = () => {
    return (
        <footer className="footerbottombg">
            <section>
                <Container className="">
                    <div className="footerbox">
                        <Row className="menusec subscribebg">
                            <Col lg={4} md={6}>
                                <div className="footabtcnt">
                                    <div className="mb-1 footlogo">
                                        <Image src="assets/images/ringx-logo.svg" width={100} height={57} alt="logo" />
                                    </div>
                                    <p className="ftxt mb-3">Take your crypto to the next level</p>
                                    <div className="followusdiv mt-3">
                                        <div className="socialbg">
                                            <div className="d-flex gap-2">
                                                <div><Link id="xlink" href={"#"}> <Image src="assets/images/x.svg" alt="icon" className="scicon" width={30} height={30} /></Link></div>
                                                <div><Link id="fblink" href={"#"}> <Image src="assets/images/fb.svg" alt="icon" className="scicon" width={30} height={30} /> </Link> </div>
                                                <div><Link id="telelink" href={"#"}> <Image src="assets/images/inst.svg" alt="icon" className="scicon" width={30} height={30} /></Link></div>
                                                <div><Link id="xlink" href={"#"}> <Image src="assets/images/link.svg" alt="icon" className="scicon" width={30} height={30} /></Link></div>
                                                <div><Link id="xlink" href={"#"}> <Image src="assets/images/youtub.svg" alt="icon" className="scicon" width={30} height={30} /></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="">
                                    <h3 className="h3">Menu</h3>
                                    <ul>
                                        <li><Link id="homelink" href="/">Home</Link></li>
                                        <li><Link id="featureslink" href="/#features">Features</Link></li>
                                        <li><Link id="p2plink" href="/overview">P2P Exchange</Link></li>
                                        <li><Link id="affiliatelink" href="#affiliate">Affiliate Program</Link></li>
                                        <li><Link id="agentlink" href="#">Agent Module</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className="">
                                    <h3 className="h3">Support</h3>
                                    <ul>
                                        <li><Link id="helplink" href="#">Help Center</Link></li>
                                        <li><Link id="faqlink" href="#">FAQ</Link></li>
                                        <li><Link id="contactlink" href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={6}>
                                <div>
                                    <h3 className="h3">Legal</h3>
                                    <ul>
                                        <li><Link id="termslink" href="/terms">Terms of Service</Link></li>
                                        <li><Link id="privacylink" href="/privacy">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="footerrights">
                            <p>© ringx. All rights reserved.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </footer>
    )
}
export default Homefooter
"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid recoverykey-page">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Backup Phrase</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer  mt-0">
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <div className="securitycontentbox">
                                <div className="recoveryboxt">
                                    <div className="anticodebox">
                                        <div className="recoverlist lightgraybg">
                                            <div className="tabrightbox">
                                                <Link href="#" className="btn sitebtn btn-sm" id="copybtn"><FontAwesomeIcon icon={faCopy} className="me-1"/>Copy</Link>
                                            </div>
                                            <ul>
                                                <li>1. Semantic</li>
                                                <li>2. Professed</li>
                                                <li>3. Mortified</li>
                                                <li>4. Corrode</li>
                                                <li>5. Evacuee</li>
                                                <li>6. Alone</li>
                                                <li>7. Eagle</li>
                                                <li>8. Fiscally</li>
                                                <li>9. Drippy</li>
                                                <li>10. Legwarmer</li>
                                                <li>11. Elude</li>
                                                <li>12. Ensure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p className="t-gray mb-0">Use only when you want to recover your account when you loose your device.</p>
                                </div>

                                <div className="form-group">
                                    <div className="form-check ps-0">
                                        <Form.Check type="checkbox" id="dealcheck" label="I Accept the deal" />
                                    </div>
                                </div>

                                <div className="form-group text-center">
                                    <Button type="submit" className="btn sitebtn btn-block" id="submitbtn">Submit</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div >
    )
}
export default page



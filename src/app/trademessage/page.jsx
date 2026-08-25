"use client"
import React from 'react'
import Link from 'next/link';
import { Container, Image, Table, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './../../../public/assets/css/p2pcustom.css';


const Page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid trademessagepage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Trade Message</h2>
            </div>
            <article className="gridparentbox trademsgpage">
                <Container className="sitecontainer">
                    <div className="tradetablebox panelcontentbox">
                        {/* <div className="panelcontentbox contentbox">
                            <div className="nodata">
                                <Image src="assets/images/nodata.svg" width={20} height={20} alt="nodata" />
                                    <p>No record found</p>
                            </div>
                        </div> */}
                        <div className="cardbox">
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table2">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table3">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="warning">Pending</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table4">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="danger">Cancelled</Badge> </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table5">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table6">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><Link href="/buytrade" className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Page;
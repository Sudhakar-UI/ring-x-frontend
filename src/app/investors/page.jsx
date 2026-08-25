"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Tab, Nav, Table, ProgressBar, Image, Badge, Row, Col, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Investors = () => {
    useEffect(() => {
        document.body.classList.add('investpagebg');
        return () => {
            document.body.classList.remove('investpagebg');
            document.body.classList.remove('loginbanner');
        };
    }, []);
    return (
        <>
            <div className="innerpage investorspage">
                <Homeheader />
                <div className="innercontentpage investorbanner ">
                    <Container>
                        <div className="text-center">
                            <h2 className="heading-title pb-2">Invest in Real-World Assets Powered by Blockchain.</h2>
                            <p>Discover tokenized real estate, luxury assets, fine art, metals, and legal-backed opportunities with secure blockchain ownership. </p>
                        </div>
                    </Container>
                </div>

                <section className="projectbg">
                    <Container>
                        <h2 className="heading-title pb-3 text-center">Live Projects</h2>
                        {/* <div className="lightgrayboxbg nodatabox">
                      <SimpleBar className="table-responsive sitescroll">
                            <Table className="sitetable" id="table1">
                                <tbody>
                                    <tr className="nodata">
                                        <td><Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No Live Projects Found</td>
                                    </tr> 
                                </tbody>
                            </Table>
                        </SimpleBar>
                    </div> */}
                        <Tab.Container defaultActiveKey="all">
                            <div className="boxtabb mb-3 ">
                                <Nav
                                    className="nav nav-tabs tabbanner border-0 justify-content-center"
                                    role="tablist"
                                >
                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="tab1">Real Estate</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="tab2">Fine Art</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="tab3">Luxury Collectibles</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="tab4">Metals</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-item">
                                        <Nav.Link eventKey="tab5">Tokenized Legal Contracts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="all">

                                    <div className="investcardbg mt-2">
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Solar Farm · Texas</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Austin, USA · 12 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn mb-1"> 14% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Real Estate · Dubai</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Downtown, UAE · 24 months · Quarterly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn fnt-blue  mb-1"> 18% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$1000</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$3M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "52%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">52% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">AgriTech · Punjab</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">India · 18 months · Quarterly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 14% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$600</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">892</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">30d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "62%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">62% funded</span> </div>
                                                        <div><span className="t-gray">10K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project4.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Wind Energy · Netherlands</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Rotterdam, Netherlands · 18 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 16% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$1500</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">2,892</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">12d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "90%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">90% funded</span> </div>
                                                        <div><span className="t-gray">80K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project5.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">EV Charging Network · California</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Los Angeles, USA · 24 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 15% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$500</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">1,792</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$2M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">40d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "40%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">40% funded</span> </div>
                                                        <div><span className="t-gray">5K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project6.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Luxury Watch Vault · Switzerland</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Geneva, Switzerland · 12 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn fnt-blue   mb-1"> 16% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$100</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">640</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">50d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "61%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">61% funded</span> </div>
                                                        <div><span className="t-gray">62K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab1">
                                    <div className="investcardbg">
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project4.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Wind Energy · Netherlands</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Rotterdam, Netherlands · 18 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 16% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$1500</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">2,892</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">12d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "90%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">90% funded</span> </div>
                                                        <div><span className="t-gray">80K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project5.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">EV Charging Network · California</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Los Angeles, USA · 24 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 15% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$500</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">1,792</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$2M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">40d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "40%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">40% funded</span> </div>
                                                        <div><span className="t-gray">5K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project6.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Luxury Watch Vault · Switzerland</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Geneva, Switzerland · 12 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn fnt-blue   mb-1"> 16% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$100</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">640</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">50d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "61%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">61% funded</span> </div>
                                                        <div><span className="t-gray">62K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    <div className="investcardbg">
                                        {/* <div className="investcardbox">
                                            <div className="panelcontentbox">
                                                <div className="investicon">
                                                    <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">Modern Vila</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}><hr /></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <div><span className="t-gray">Crop sales</span> <span className="amtdata  fnt-bld">20% Off</span></div>
                                                                    <ProgressBar now={60} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="amtdata fnt-bld">200K</span><br /><span className="t-gray">Goal</span></td>
                                                                <td className="text-center"><span className="amtdata fnt-bld">60%</span><br /><span className="t-gray">Funded</span></td>
                                                                <td className="text-end"><span className="amtdata fnt-bld">105</span><br /><span className="t-gray">Investor</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Solar Farm · Texas</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Austin, USA · 12 months · Monthly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn mb-1"> 14% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">Real Estate · Dubai</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">Downtown, UAE · 24 months · Quarterly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn fnt-blue  mb-1"> 18% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$1000</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$3M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "52%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">52% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld pb-0">AgriTech · Punjab</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pt-0" colspan={2}>
                                                                    <span className="t-gray invstcnt">India · 18 months · Quarterly payout</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className=""><span className="amtdata  fnt-bld fnt-grn   mb-1"> 14% </span><span className=""> ROI/yr</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">$600</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">892</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">$1M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">30d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "62%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">62% funded</span> </div>
                                                        <div><span className="t-gray">10K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <div className="investcardbg">
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4">
                                    <div className="investcardbg">
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab5">
                                    {/* <div className="investcardbg">
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="investcardbox">
                                            <div className="panelcontentbox position-relative">
                                                <div >
                                                    <div className="investicon">
                                                        <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                    </div>
                                                    <div>
                                                        <div className="rwa-tags">
                                                            <span className="rwa-tag real-estate-tag">
                                                                Real Estate
                                                            </span>

                                                            <span className="rwa-tag med-risk-tag">
                                                                Med risk
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="investcontbox">
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><span className="amtdata  fnt-bld"> 20% Off</span><span className="t-gray"> ROI/yr</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                    <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </Table>


                                                    <div class="rwa-stats">
                                                        <div class="rstat"><div class="rstat-n">00</div><div class="rstat-l">Min invest</div></div>
                                                        <div class="rstat"><div class="rstat-n">624</div><div class="rstat-l">Investors</div></div>
                                                        <div class="rstat"><div class="rstat-n">M</div><div class="rstat-l">Target</div></div>
                                                        <div class="rstat"><div class="rstat-n">45d</div><div class="rstat-l">Closes in</div></div>
                                                    </div>
                                                    <div className="prog">
                                                        <div
                                                            className="pf blue-fill"
                                                            style={{ width: "42%" }}
                                                        ></div>
                                                    </div>
                                                    <div className=" d-flex justify-content-between my-1">
                                                        <div><span className="t-gray">78% funded</span> </div>
                                                        <div><span className="t-gray">40K raised</span></div>
                                                    </div>

                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="nodata-img-x text-center">
                                        <Image src="../assets/images/nodata.svg" />
                                        <p>No record found</p>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Container>
                </section>


                <Homefooter />
            </div>
        </>
    )
}

export default Investors
"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, Image, Table, TabContainer, TabPane, TabContent, Nav, NavItem, NavLink, Tab } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookMarkIcon, LinkIcon } from '../components/HomeIcons';
import HomePredictChart from '../components/HomePredictChart';
import SemiCircleProgress from '../components/SemiCircleProgress';
// import '../preglobal.css';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Footermenu';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const scrollRef = useRef();

  const MemoChart = React.memo(HomePredictChart);

  useEffect(() => {
    AOS.init();
  })

  const CircleProgress = ({ percent, color }) => {
    const radius = 12;
    const stroke = 3;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (percent / 100) * circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circle-progress"
      >
        {/* Background */}
        <circle
          stroke="#2a2a32"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  };

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pathname = usePathname();


  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // Deposit Modal
  const handleCloseDepositModal = () => setShowDepositModal(false);
  const handleShowDepositModal = () => setShowDepositModal(true);

  // Transfer Modal
  const handleCloseTransferModal = () => setShowTransferModal(false);
  const handleShowTransferModal = () => setShowTransferModal(true);

  const handleSignIn = () => {
    setIsSignInLoading(true);
    setTimeout(() => {
      setIsSignInLoading(false);
      handleClose1();
    }, 5000);
  };

  const [canvasShow, setCanvasShow] = useState(false);
  const handleCloseCanvas = () => setCanvasShow(false);
  const handleShowCanvas = () => setCanvasShow(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  return (
    <div className="pre-pages">

      <Homeheader />


      <section className='projectbg'>
        <Container className='banner-cont pt-3'>
          <div className="innerpagecontent">
            <h2 className="h2 heading-h2 mb-3">Prediction Overview</h2>
          </div>
          <div className=" wallet-page">
            <Container className="sitecontainer rxt-wrapper-bg p-3">
              <Row className="wlltpageblnce align-items-center ">
                <Col lg={9} md={7} sm={7} className="d-flex gap-2">
                  <div className="balanceshowt totblance p-2 w-100">
                    <h5>Total Portfolio<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
                    <h4 className="h4">$ 0.00000 </h4>
                  </div>
                  <div className="balanceshowt totblance p-2 w-100 ">
                    <h5>Total Cash<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
                    <h4 className="h4">$ 0.00000 </h4>
                  </div>
                </Col>
                <Col lg={3} md={5} sm={5} className="text-end">
                  <Image className='img-fluid-x' src="assets/images/prediction-market-image.svg" />
                </Col>

              </Row>
            </Container>
          </div>
          <Tab.Container defaultActiveKey="all">
            <div className="boxtabb mb-3 mt-3">
              <Nav
                className="nav nav-tabs tabbanner border-0 justify-content-center"
                role="tablist"
              >
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="all">Trending</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab1">Politics</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab2">Cypto</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab3">Economy</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab4">GeoPolitics</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab5">Tech</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab6">Climate & Science</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab7">Finance</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab8">Culture</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab9">Weather</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab10">Sports</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab11">Software Products</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link eventKey="tab12">Test</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="all">

                <Row>
                  <Col lg={9}>
                    <div>
                      <Slider {...settings} className='slider-container'>
                        <div>
                          <div className="chartbox">
                            <div className="panelcontentbox">
                              <div>
                                <div className='chartbox-tabs'>
                                  <div className='chartbox-panel'>
                                    <div>
                                      <img src="/assets/images/no-img.svg" alt="" />
                                      <div className='d-flex flex-column gap-1'>
                                        <span>Geopolitics - NYMEXC Crude Oil Futures</span>
                                        <h6 className='subhead mb-0'>Will Crude Oil (CL) hit by end of March?</h6>
                                      </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                      <LinkIcon size={24} color='#74717A' />
                                      <BookMarkIcon size={24} color='#74717A' />
                                    </div>
                                  </div>
                                  <Row>
                                    <Col lg={4}>
                                      <div className='d-flex gap-2'>
                                        <Button className='yes-btn'>Yes - (80%)</Button>
                                        <Button className='no-btn'>No - (20%)</Button>
                                      </div>


                                      <div className="marquee-container">
                                        <div className="chart-newsbox marquee-content">

                                          {/* --- SET 1 (Original) --- */}
                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 2 hours ago</span>
                                            </div>
                                            <p>Oil prices are expected to rise by the end of March.</p>
                                          </div>

                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 1 hour ago</span>
                                            </div>
                                            <p>Market volatility increases ahead of Fed meeting.</p>
                                          </div>

                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 30 mins ago</span>
                                            </div>
                                            <p>New tech regulations proposed in the EU assembly.</p>
                                          </div>

                                          {/* --- SET 2 (The Duplicate for Seamless Looping) --- */}
                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 2 hours ago</span>
                                            </div>
                                            <p>Oil prices are expected to rise by the end of March.</p>
                                          </div>

                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 1 hour ago</span>
                                            </div>
                                            <p>Market volatility increases ahead of Fed meeting.</p>
                                          </div>

                                          <div className='newsbox-cont'>
                                            <div className='newsbox-head'>
                                              <img src="assets/images/news-icon.svg" alt="icon" />
                                              <span>News • 30 mins ago</span>
                                            </div>
                                            <p>New tech regulations proposed in the EU assembly.</p>
                                          </div>

                                        </div>
                                      </div>

                                    </Col>
                                    <Col lg={8}>
                                      <MemoChart />
                                    </Col>
                                  </Row>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3>2</h3>
                        </div>
                        <div>
                          <h3>3</h3>
                        </div>
                      </Slider>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className='banner-box'>
                      <div className='panelcontentbox'>
                        <div className='banner-box-title'>
                          <h6 className='mb-0'>Breaking News</h6>
                          <Link href="#0">View All</Link>
                        </div>
                        <div className='banner-box-content'>
                          <div>
                            <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                            <div className='d-flex flex-column'>
                              <span>38%</span>
                              <span>16%</span>
                            </div>
                          </div>
                          <div>
                            <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                            <div className='d-flex flex-column'>
                              <span>38%</span>
                              <span>16%</span>
                            </div>
                          </div>
                          <div>
                            <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                            <div className='d-flex flex-column'>
                              <span>38%</span>
                              <span>16%</span>
                            </div>
                          </div>
                          <div>
                            <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                            <div className='d-flex flex-column'>
                              <span>38%</span>
                              <span>16%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='panelcontentbox'>
                        <div className='banner-box-title'>
                          <h6 className='mb-0'>Hot Topics</h6>
                          <Link href="#0">View All</Link>
                        </div>
                        <div className='banner-box-content2'>
                          <div>
                            <p>1 West ham</p>
                            <div>
                              <span>$4M today</span>
                              <Image src="/assets/images/fire.svg"></Image>
                            </div>
                          </div>
                          <div>
                            <p>Lazio</p>
                            <div>
                              <span>$4M today</span>
                              <Image src="/assets/images/fire.svg"></Image>
                            </div>
                          </div>
                          <div>
                            <p>Trump</p>
                            <div>
                              <span>$4M today</span>
                              <Image src="/assets/images/fire.svg"></Image>
                            </div>
                          </div>
                          <div>
                            <p>Peru</p>
                            <div>
                              <span>$4M today</span>
                              <Image src="/assets/images/fire.svg"></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <section className="markettablebg pt-5" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab1">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab3">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab4">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>



                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab5">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab6">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>



                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab7">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab8">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>



                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab9">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab10">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>



                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab11">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag politics">
                            <Image className='badge-img' src="assets/images/politics.svg" /> Politics
                          </span>

                          <span className="event-time">
                            ⏱ 12d
                          </span>
                        </div>

                        <p className="event-title">
                          Will ETH reach $5,000 before <br /> June?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 39%
                          </span>

                          <span className="no">
                            NO 61%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "39%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "61%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 39¢
                          </button>

                          <button className="no-btn">
                            NO · 61¢
                          </button>
                        </div>
                      </div>

                    </div>
                  </Container>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="tab12">
                <section className="markettablebg pt-2" id="marketslist">
                  <Container>
                    <div className="events-grid">
                      {/* Event 1 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag featured">
                            ⚡ Featured
                          </span>

                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
                          </span>

                          <span className="event-time">
                            ⏱ 2h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Bitcoin close above $95,000 <br /> today?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 64%
                          </span>

                          <span className="no">
                            NO 36%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "64%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "36%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 64¢
                          </button>

                          <button className="no-btn">
                            NO · 36¢
                          </button>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag crypto">
                            <Image className='badge-img' src="assets/images/sports.svg" /> Sports
                          </span>

                          <span className="event-time">
                            ⏱ 5h
                          </span>
                        </div>

                        <p className="event-title">
                          Will Lakers win tonight's  <br />game?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 52%
                          </span>

                          <span className="no">
                            NO 48%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "52%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "48%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 52¢
                          </button>

                          <button className="no-btn">
                            NO · 48¢
                          </button>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="event-card">
                        <div className="event-top">
                          <span className="tag event">
                            <Image className='badge-img' src="assets/images/events.svg" /> Events
                          </span>

                          <span className="event-time">
                            ⏱ 3d
                          </span>
                        </div>

                        <p className="event-title">
                          Will Fed cut rates this <br /> month?
                        </p>

                        <div className="event-percent">
                          <span className="yes">
                            YES 28%
                          </span>

                          <span className="no">
                            NO 72%
                          </span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-yes"
                            style={{ width: "28%" }}
                          ></div>

                          <div
                            className="progress-no"
                            style={{ width: "72%" }}
                          ></div>
                        </div>

                        <div className="event-buttons">
                          <button className="yes-btn">
                            YES · 28¢
                          </button>

                          <button className="no-btn">
                            NO · 72¢
                          </button>
                        </div>
                      </div>



                    </div>
                  </Container>
                </section>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>

        </Container>
      </section>



      <Homefooter />
    </div>
  );
}

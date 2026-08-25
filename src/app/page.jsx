'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Table, ProgressBar, Accordion, Button, Form, InputGroup, Tab, Nav } from 'react-bootstrap';
import Homeheader from './components/Homeheader';
import Homefooter from './components/Homefooter';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import AOS from 'aos';
import 'aos/dist/aos.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 194250;

const timerProps = {
  isPlaying: true,
  size: 140,
  strokeWidth: 9
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="datetxt">{dimension}</div>
      <div className="time timesze">{time}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;



export default function Home() {
  const carouselRef = useRef(null);

  const responsivetwo = {
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 2,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1199, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1,
    },
  };
  const responsivethree = {
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 2,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1199, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 767, min: 550 },
      items: 2
    },
    smmobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };

  const [key, setKey] = useState('hotSpot');
  useEffect(() => {
    document.body.classList.remove('loginbanner', 'apipage', 'tradepagebg');
    AOS.init();
  })

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const trustItems = [
    {
      icon: <Image src="assets/images/h-1.svg" width={100} height={100} alt="icon" />,
      text: "Free to join"
    },
    {
      icon: <Image className='h-small-img' src="assets/images/h-2.svg" width={100} height={100} alt="icon" />,
      text: "KYC Verified Platform"
    },
    {
      icon: <Image className='h-small-img' src="assets/images/h-3.svg" width={100} height={100} alt="icon" />,
      text: "142,000+ Active Users"
    },
    {
      icon: <Image className='h-small-img' src="assets/images/h-4.svg" width={100} height={100} alt="icon" />,
      text: "2.4M Commissions Paid"
    },
    {
      icon: <Image className='h-small-img' src="assets/images/h-5.svg" width={100} height={100} alt="icon" />,
      text: "Smart Contract Secured"
    },
    {
      icon: <Image className='h-small-img' src="assets/images/h-6.svg" width={100} height={100} alt="icon" />,
      text: "No Deposit Needed"
    },
  ];
  const tickerData = [
    { icon: <Image className='h-small-img' src="assets/images/color/btc.svg" width={100} height={100} alt="icon" />, pair: "BTC/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/eth.svg" width={100} height={100} alt="icon" />, pair: "ETH/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/bnb.svg" width={100} height={100} alt="icon" />, pair: "BNB/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/matic.svg" width={100} height={100} alt="icon" />, pair: "MATIC/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/sol.svg" width={100} height={100} alt="icon" />, pair: "SOL/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/avax.svg" width={100} height={100} alt="icon" />, pair: "AVAX/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/xrp.svg" width={100} height={100} alt="icon" />, pair: "XRP/USDT", change: "+2.41%" },
    { icon: <Image className='h-small-img' src="assets/images/color/doge.svg" width={100} height={100} alt="icon" />, pair: "DOGE/USDT", change: "+2.41%" },
  ];
  const loopData = [...tickerData, ...tickerData];

  return (
    <div className="homepagebg">
      <Homeheader />
      <section className="homebannerbg">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12} >
              <div className="hero-left">
                <div className="hero-badge">
                  <div className="hero-badge-dot"></div>
                  <span>Live Platform · 142K+ Users</span>
                </div>

                <h1 className="hero-h1">
                  Earn, Trade, Predict &amp;
                  <br />
                  <span className="green">Invest in Real Assets</span>
                </h1>

                <p className="hero-sub">
                  One ecosystem. Five revenue streams. Referrals, P2P,
                  predictions, RWA investments and daily RXT — all in one
                  place. Start free.
                </p>

                <div className="hero-ctas">
                  <a className="btn-hero-primary" href="#">
                    Start Earning Free →
                  </a>

                  <a className="btn-hero-secondary" href="#">
                    How It Works
                  </a>
                </div>

                <div className="hero-trust">
                  <div className="hero-avatars">
                    <Image className="home-user-img" src="assets/images/user1.svg" width={100} height={100} alt="icon" />
                    <Image className="home-user-img" src="assets/images/user2.svg" width={100} height={100} alt="icon" />
                    <Image className="home-user-img" src="assets/images/user3.svg" width={100} height={100} alt="icon" />
                  </div>

                  <div className="hero-trust-text">
                    Trusted by <strong>142,000+</strong> users worldwide
                  </div>
                </div>
              </div>

            </Col>
            <Col lg={6} md={12} sm={12} className="abouticon text-center">
              <Image src="assets/images/home-main.svg" width={100} height={100} alt="icon" />
            </Col>
          </Row>
        </Container>
      </section>

      <div className="trust-bar">
        <div className="trust-inner">
          {trustItems.map((item, index) => (
            <div className="trust-item" key={index}>
              <span className="trust-icon">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {loopData.map((item, index) => (
            <div className="ticker-item" key={index}>
              <span className="ticker-pair">{item.icon}</span>
              <span className="ticker-pair">{item.pair}</span>
              <span className="ticker-change">{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="hero">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <div className="row align-items-center">

            {/* LEFT */}
            <Col lg={6} md={12} sm={12} className="">
              <Image className="sec-two-img" src="assets/images/sec-two.png" width={100} height={100} alt="icon" />
            </Col>

            {/* RIGHT */}
            <Col lg={6} md={12} sm={12}>
              <div className="hero-right">

                {/* RXT Banner */}
                <div className="rxt-banner">
                  <div className="rxt-banner-left">
                    <div className="rxt-badge-row">
                      <div className="rxt-label">
                        <div className="rxt-label-dot"></div>
                        Free RXT Collection
                      </div>

                      <div className="rxt-limited">LIMITED DAILY</div>
                    </div>

                    <div className="rxt-headline">
                      Claim <span className="blue">50 RXT</span> free
                      <br />
                      today — no deposit needed
                    </div>
                  </div>

                  <div className="rxt-banner-right">
                    <div className="countdown">
                      <div className="cd-unit">
                        <span className="cd-num" id="cd-days">
                          02
                        </span>
                        <span className="cd-lbl">DAYS</span>
                      </div>

                      <span className="cd-sep">:</span>

                      <div className="cd-unit">
                        <span className="cd-num" id="cd-hrs">
                          04
                        </span>
                        <span className="cd-lbl">HRS</span>
                      </div>

                      <span className="cd-sep">:</span>

                      <div className="cd-unit">
                        <span className="cd-num" id="cd-min">
                          23
                        </span>
                        <span className="cd-lbl">MIN</span>
                      </div>

                      <span className="cd-sep">:</span>

                      <div className="cd-unit">
                        <span className="cd-num" id="cd-sec">
                          47
                        </span>
                        <span className="cd-lbl">SEC</span>
                      </div>
                    </div>

                    <a className="btn-collect" href="#">
                      Collect →
                    </a>
                  </div>
                </div>

                {/* Earn Section */}
                <div className="earn-section">
                  <div className="earn-section-title">
                    All Ways to Earn RXT
                  </div>

                  <div className="earn-cards">
                    <div className="earn-card">
                      <div className="earn-icon green-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-ref-signup.svg" width={100} height={100} alt="icon" />

                      </div>
                      <div className="earn-card-name">Ref Signup</div>
                      <div className="earn-card-amount">+50 RXT</div>
                      <div className="earn-card-sub">Per new user</div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon blue-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-ref-kyc.svg" width={100} height={100} alt="icon" /></div>
                      <div className="earn-card-name">Ref KYC</div>
                      <div className="earn-card-amount">+100 RXT</div>
                      <div className="earn-card-sub">
                        When ref verifies
                      </div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon green-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-ref-deposit.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">Ref Deposit</div>
                      <div className="earn-card-amount">1 RXT/$1</div>
                      <div className="earn-card-sub">
                        Per ref deposit
                      </div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon blue-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-ref-purchase.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">Ref Purchase</div>
                      <div className="earn-card-amount">1 RXT/$1</div>
                      <div className="earn-card-sub">
                        Per ref purchase
                      </div>
                    </div>
                  </div>

                  <div className="earn-section-divider">
                    <div className="earn-section-divider-dot"></div>

                    <div className="earn-section-divider-label">
                      Direct Earning
                    </div>

                    <div className="earn-section-divider-line"></div>
                  </div>

                  <div className="earn-cards">
                    <div className="earn-card">
                      <div className="earn-icon green-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-sign-in.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">Sign-in</div>
                      <div className="earn-card-amount">+30 RXT</div>
                      <div className="earn-card-sub">Daily bonus</div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon blue-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-kyc-verify.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">KYC Verify</div>
                      <div className="earn-card-amount">+100 RXT</div>
                      <div className="earn-card-sub">One-time</div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon indigo-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-purchase.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">Purchase</div>
                      <div className="earn-card-amount">1 RXT/$1</div>
                      <div className="earn-card-sub">
                        Per USD spent
                      </div>
                    </div>

                    <div className="earn-card">
                      <div className="earn-icon yellow-bg">
                        <Image className='rxt-small-img' src="assets/images/rxt-rxt-deposit.svg" width={100} height={100} alt="icon" />
                      </div>
                      <div className="earn-card-name">Deposit</div>
                      <div className="earn-card-amount">1 RXT/$1</div>
                      <div className="earn-card-sub">
                        Per USD deposited
                      </div>
                    </div>
                  </div>

                  <div
                    className="earn-action-bar"
                    style={{ marginTop: "12px" }}
                  >
                    <div className="earn-action-text">
                      Collect free RXT, stake tokens and explore all
                      earning methods
                    </div>

                    <a className="btn-blue-sm" href="#">
                      View Full Details →
                    </a>
                  </div>
                </div>

              </div>
            </Col>

          </div>
        </Container>
      </section>

      <section className="section ecosystem-section">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <div className="row align-items-center gy-5">

            {/* LEFT CONTENT */}
            <Col lg={6} md={6} sm={12}>
              <div className="section-tag">Platform</div>

              <h2 className="section-h2">
                Everything in <span class="green-home">one ecosystem</span>
              </h2>

              <p className="section-sub">
                Six powerful modules. One login. Real money,
                real fast.
              </p>

              {/* CARDS */}
              <div className="row g-4">

                <div className="col-12 col-md-6">
                  <div className="platform-card gren-x">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-monetize-earn.svg" width={100} height={100} alt="icon" />
                    </div>
                    <div>
                      <div className="platform-card-title">
                        Monetize &amp; Earn
                      </div>

                      <div className="platform-card-desc">
                        Referrals, P2P, agent networks, affiliate
                        campaigns. Multi-level commissions forever.
                      </div>

                      <div className="platform-card-tag">
                        30% T1 · 10% T2 · 5% T3
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="platform-card">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-p2p-trading.svg" width={100} height={100} alt="icon" />

                    </div>
                    <div>

                      <div className="platform-card-title">
                        P2P Trading
                      </div>

                      <div className="platform-card-desc">
                        Buy and sell crypto peer-to-peer. Zero
                        platform fees. 24 active merchants.
                      </div>

                      <div className="platform-card-tag">
                        0% Fees · Instant
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="platform-card pinky-bg">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-prediction-markets.svg" width={100} height={100} alt="icon" />

                    </div>
                    <div>
                      <div className="platform-card-title">
                        Prediction Markets
                      </div>

                      <div className="platform-card-desc">
                        Trade YES/NO on crypto, sports, events and
                        politics. Instant payouts.
                      </div>

                      <div className="platform-card-tag">
                        68% Win Rate
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="platform-card yllow-bg">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-rwa-investment.svg" width={100} height={100} alt="icon" />
                    </div>
                    <div>
                      <div className="platform-card-title">
                        RWA Investment
                      </div>

                      <div className="platform-card-desc">
                        Tokenised solar, real estate &amp; agri.
                        11–18% ROI/year. Monthly payouts.
                      </div>

                      <div className="platform-card-tag">
                        From $25 · 14.8% ROI
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="platform-card">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-agent-program.svg" width={100} height={100} alt="icon" />
                    </div>
                    <div>
                      <div className="platform-card-title">
                        Agent Program
                      </div>

                      <div className="platform-card-desc">
                        Recruit sub-agents. Earn 5% on their
                        commissions passively, forever.
                      </div>

                      <div className="platform-card-tag">
                        +5% Sub-Volume
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="platform-card red-bg">
                    <div className="platform-card-icon">
                      <Image className='two-small-img' src="assets/images/two-rxt-token.svg" width={100} height={100} alt="icon" />
                    </div>
                    <div>
                      <div className="platform-card-title">
                        RXT Token
                      </div>

                      <div className="platform-card-desc">
                        Earn free daily via sign-ins, KYC,
                        referrals. Stake at 18% APY. Unlock tiers.
                      </div>

                      <div className="platform-card-tag">
                        18% APY · Free Daily
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="action-bar mt-4">
                <span className="action-bar-text">
                  Explore all 6 platform modules and what each
                  one does
                </span>

                <a className="btn-hero-primary " href="/platform-details">
                  View Full Details →
                </a>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} sm={12}>
              <div className="">
                <Image className='one-sec-img' src="assets/images/one-eco.svg" width={100} height={100} alt="icon" />
              </div>
            </Col>

          </div>
        </Container>
      </section>

      <section className="section rwa-section">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <div className="section-header">
            <div className="section-tag">Real World Assets</div>

            <h2 className="section-h2 blue-h2">
              Invest in real assets, <span> earn digital returns</span>
            </h2>

            <p className="section-sub">
              Tokenised ownership in solar farms, real estate and
              agriculture. Passive income from just $5.
            </p>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="UpcomingProjects">
            <div className="boxtabb">
              <Nav variant="pills" className='tabbanner border-0'>
                <Nav.Item>
                  <Nav.Link eventKey="UpcomingProjects">Upcoming Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="LiveProjects">Live Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content className='mt-3'>
              <Tab.Pane eventKey="UpcomingProjects">
                <Carousel
                  ref={carouselRef}
                  responsive={responsivetwo}
                  infinite
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  arrows={true}
                >

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
                  <div className="investcardbox mx-2">
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
                  <div className="investcardbox mx-2">
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
                  <div className="investcardbox mx-2">
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

                </Carousel>
              </Tab.Pane>
              <Tab.Pane eventKey="LiveProjects">
                <Carousel
                  ref={carouselRef}
                  responsive={responsivethree}
                  infinite
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  arrows={true}
                >

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
                  <div className="investcardbox mx-2">
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
                  <div className="investcardbox mx-2">
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
                  <div className="investcardbox mx-2">
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

                </Carousel>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>



          <div className="action-bar">
            <span className="action-bar-text">
              Browse all open investment deals and track your
              portfolio
            </span>

            <a className="sitebtn" href="#">
              View Full Details →
            </a>
          </div>
        </Container>
      </section>


      <section className="section marker-section">
        <div className="section-inner">
          <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <div className="section-tag">
                Prediction Markets
              </div>

              <h2 className="section-h2 blue-h2">
                Trade on <span>what happens next</span>
              </h2>

              <p className="section-sub">
                Crypto · Sports · Events · Politics. YES/NO
                markets with instant payouts.
              </p>
            </div>
            <Row className="align-items-center">
              <Col lg={6} md={6} sm={12} >
                <Image className='girl-sec-img' src="assets/images/girl-sec.svg" width={100} height={100} alt="icon" />

              </Col>
              <Col lg={6} md={6} sm={12} >
                {/* Quick Stats Header */}
                {/* Stats Header */}
                <div className="predict-stats-header">
                  <div className="predict-stats-grid">
                    <div>
                      <div className="predict-stat-value">+$20</div>
                      <div className="predict-stat-label">Your P&amp;L</div>
                    </div>

                    <div>
                      <div className="predict-stat-value gren">68%</div>
                      <div className="predict-stat-label">Win Rate</div>
                    </div>

                    <div>
                      <div className="predict-stat-value">142</div>
                      <div className="predict-stat-label">Open Markets</div>
                    </div>

                    <div>
                      <div className="predict-stat-value">6</div>
                      <div className="predict-stat-label">Active Trades</div>
                    </div>
                  </div>

                  <a href="#" className="predict-trade-btn">
                    Trade Now →
                  </a>
                </div>

                {/* Markets */}
                <Carousel
                  ref={carouselRef}
                  responsive={responsivetwo}
                  infinite
                  autoPlay
                  autoPlaySpeed={2000}
                  arrows={false}
                  showDots={true}

                  dotListClass="custom-dot-list"
                  containerClass="carousel-container"
                >

                  {/* Market 1 */}
                  <div className="market-card">
                    <div className="market-tag">
                      ⚽ Sports · ⏱ 5h
                    </div>

                    <div className="market-q">
                      Will Lakers win tonight's game?
                    </div>

                    <div className="market-bar">
                      <div
                        className="progress-yes"
                        style={{ width: "52%" }}
                      ></div>

                      <div
                        className="progress-no"
                        style={{ width: "48%" }}
                      ></div>
                    </div>

                    <div className="market-pcts">
                      <span className="yes">YES 52%</span>
                      <span className="no">NO 48%</span>
                    </div>

                    <div className="market-btns">
                      <div className="mkt-yes">
                        YES · 52¢
                      </div>

                      <div className="mkt-no">
                        NO · 48¢
                      </div>
                    </div>
                  </div>

                  {/* Market 2 */}
                  <div className="market-card">
                    <div className="market-tag">
                      ⚽ Sports · ⏱ 5h
                    </div>

                    <div className="market-q">
                      Will Lakers win tonight's game?
                    </div>

                    <div className="market-bar">
                      <div
                        className="progress-yes"
                        style={{ width: "52%" }}
                      ></div>

                      <div
                        className="progress-no"
                        style={{ width: "48%" }}
                      ></div>
                    </div>

                    <div className="market-pcts">
                      <span className="yes">YES 52%</span>
                      <span className="no">NO 48%</span>
                    </div>

                    <div className="market-btns">
                      <div className="mkt-yes">
                        YES · 52¢
                      </div>

                      <div className="mkt-no">
                        NO · 48¢
                      </div>
                    </div>
                  </div>

                  {/* Market 3 */}
                  <div className="market-card">
                    <div className="market-tag">
                      🏛 Politics · ⏱ 12d
                    </div>

                    <div className="market-q">
                      Will ETH reach $5,000 before June?
                    </div>

                    <div className="market-bar">
                      <div
                        className="progress-yes"
                        style={{ width: "39%" }}
                      ></div>

                      <div
                        className="progress-no"
                        style={{ width: "61%" }}
                      ></div>
                    </div>

                    <div className="market-pcts">
                      <span className="yes">YES 39%</span>
                      <span className="no">NO 61%</span>
                    </div>

                    <div className="market-btns">
                      <div className="mkt-yes">
                        YES · 39¢
                      </div>

                      <div className="mkt-no">
                        NO · 61¢
                      </div>
                    </div>
                  </div>

                </Carousel>

                <div className="action-bar">
                  <span className="action-bar-text">
                    See all 142+ live prediction markets and start
                    trading
                  </span>

                  <a className="sitebtn" href="#">
                    View Full Details →
                  </a>
                </div>
              </Col>


            </Row>
          </Container>
        </div>
      </section>


      <section className="section affiliate-section">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-tag">
                Affiliate Program
              </div>

              <h2
                className="section-h2"

              >
                Earn <span> 25% commission </span> on every sale
              </h2>

              <p
                className="section-sub"

              >
                No limits. No deposits. Share your link,
                get paid on every referral — real-time
                tracking, 30-day cookie, instant payouts.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="affiliate-stat-cards">
              <div className="aff-stat">
                <div className="aff-stat-val gren">25%</div>
                <div className="aff-stat-lbl">
                  Commission Per Sale
                </div>
              </div>

              <div className="aff-stat">
                <div className="aff-stat-val">30d</div>
                <div className="aff-stat-lbl">
                  Tracking Cookie
                </div>
              </div>

              <div className="aff-stat">
                <div className="aff-stat-val">10K+</div>
                <div className="aff-stat-lbl">
                  Active Affiliates
                </div>
              </div>

              <div className="aff-stat">
                <div className="aff-stat-val">∞</div>
                <div className="aff-stat-lbl">
                  No Earnings Cap
                </div>
              </div>
            </div>

            <div className="affiliate-grid">
              {/* WHY JOIN */}
              <div>
                <div className="aff-col-title">
                  Why Join
                </div>

                <div className="aff-list">
                  <div className="aff-list-item">
                    <div className="aff-list-icon">
                      <Image className='rxt-small-img' src="assets/images/why-sale-forever.svg" width={100} height={100} alt="icon" />

                    </div>

                    <div className="aff-list-body">
                      <div className="aff-list-title">
                        25% on every sale, forever
                      </div>

                      <div className="aff-list-desc">
                        No hard requirements. Paid
                        automatically on every referral.
                      </div>
                    </div>
                  </div>

                  <div className="aff-list-item">
                    <div className="aff-list-icon bule-x">
                      <Image className='rxt-small-img' src="assets/images/why-30-days.svg" width={100} height={100} alt="icon" />
                    </div>

                    <div className="aff-list-body">
                      <div className="aff-list-title">
                        30-day tracking cookie
                      </div>

                      <div className="aff-list-desc">
                        You get credit even if they buy a
                        month later.
                      </div>
                    </div>
                  </div>

                  <div className="aff-list-item">
                    <div className="aff-list-icon">
                      <Image className='rxt-small-img' src="assets/images/why-dashboard.svg" width={100} height={100} alt="icon" />

                    </div>

                    <div className="aff-list-body">
                      <div className="aff-list-title">
                        Real-time dashboard
                      </div>

                      <div className="aff-list-desc">
                        Full clicks, conversions and
                        earnings data live.
                      </div>
                    </div>
                  </div>

                  <div className="aff-list-item">
                    <div className="aff-list-icon bule-x">
                      <Image className='rxt-small-img' src="assets/images/why-affiliates.svg" width={100} height={100} alt="icon" />

                    </div>

                    <div className="aff-list-body">
                      <div className="aff-list-title">
                        Trusted by 10,000+ affiliates
                      </div>

                      <div className="aff-list-desc">
                        A high-converting product that
                        affiliates love worldwide.
                      </div>
                    </div>
                  </div>

                  <div className="aff-list-item">
                    <div className="aff-list-icon">
                      <Image className='rxt-small-img' src="assets/images/why-promote.svg" width={100} height={100} alt="icon" />
                    </div>

                    <div className="aff-list-body">
                      <div className="aff-list-title">
                        Promote your way
                      </div>

                      <div className="aff-list-desc">
                        Blog, YouTube, Telegram, social —
                        any channel works.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EARN CARD */}
              <div className="earn-card-aff">
                <div className="earn-card-aff-label">
                  Total Earned · Live
                </div>

                <div className="earn-card-aff-total">
                  <div className="earn-card-aff-big">
                    $3,240
                  </div>

                  <div className="earn-card-aff-dec">
                    .50
                  </div>
                </div>

                <div className="earn-card-aff-today">
                  ▲ +$48 today · 142 referrals
                </div>

                <div className="aff-earnings-rows">
                  <div className="aff-earn-row">
                    <span className="aff-earn-label">
                      CPA · 62 deals
                    </span>

                    <span className="aff-earn-val">
                      $1,620
                    </span>
                  </div>

                  <div className="aff-earn-row">
                    <span className="aff-earn-label">
                      RevShare · 35%
                    </span>

                    <span className="aff-earn-val">
                      $1,180
                    </span>
                  </div>

                  <div className="aff-earn-row">
                    <span className="aff-earn-label">
                      Hybrid · 8 deals
                    </span>

                    <span className="aff-earn-val">
                      $440
                    </span>
                  </div>

                  <div className="aff-earn-row highlight">
                    <span className="aff-earn-label">
                      Available now
                    </span>

                    <span className="aff-earn-val">
                      $284
                    </span>
                  </div>
                </div>

                <a className="btn-aff-cta" href="#">
                  Join Free — Start Earning →
                </a>
              </div>

              {/* HOW IT WORKS */}
              <div>
                <div className="aff-col-title">
                  How It Works
                </div>

                <div className="aff-step-list">
                  <div className="aff-step">
                    <div className="aff-step-num">
                      1
                    </div>

                    <div>
                      <div className="aff-step-title">
                        Sign Up Free
                      </div>

                      <div className="aff-step-desc">
                        Get your unique referral link
                        instantly. No deposit or approval
                        needed.
                      </div>
                    </div>
                  </div>

                  <div className="aff-step">
                    <div className="aff-step-num">
                      2
                    </div>

                    <div>
                      <div className="aff-step-title">
                        Share Your Link
                      </div>

                      <div className="aff-step-desc">
                        Promote via Telegram, YouTube,
                        blogs or social media — however
                        you reach your audience.
                      </div>
                    </div>
                  </div>

                  <div className="aff-step">
                    <div className="aff-step-num">
                      3
                    </div>

                    <div>
                      <div className="aff-step-title">
                        Audience Converts
                      </div>

                      <div className="aff-step-desc">
                        30-day cookie tracks every
                        visitor. Even delayed purchases
                        count — full credit always.
                      </div>
                    </div>
                  </div>

                  <div
                    className="aff-step"
                    style={{ paddingBottom: 0 }}
                  >
                    <div className="aff-step-num">
                      4
                    </div>

                    <div>
                      <div className="aff-step-title">
                        Get Paid 25%
                      </div>

                      <div className="aff-step-desc">
                        Earn 25% instantly. Track in
                        real-time. Withdraw to wallet
                        whenever you want.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Referral Link Bar */}
            <div className="ref-link-bar">
              <div>
                <div className="ref-link-label">
                  Your Referral Link
                </div>

                <div className="ref-link-box">
                  <span className="ref-link-url">
                    ringx.app/r/AMAN2026
                  </span>

                  <div className="ref-link-copy">
                    Copy
                  </div>
                </div>
              </div>

              <div className="ref-share-btns">
                <div className="ref-share-btn">
                  Telegram
                </div>

                <div className="ref-share-btn">
                  YouTube
                </div>

                <div className="ref-share-btn">
                  Share Link
                </div>
              </div>

              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  background: "var(--green)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 700,
                  borderRadius: "10px",
                  textDecoration: "none",
                }}
              >
                Become an Affiliate →
              </a>
            </div>
            <div className="action-bar mt-1">
              <span className="action-bar-text">
                Read the full guide and get started
                in minutes
              </span>

              <a className="btn-view-details" href="#">
                View Full Details →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="section how-section">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-tag">
                How It Works
              </div>

              <h2 className="section-h2">
                From zero to earning <span>in minutes</span>
              </h2>
            </div>

            <div className="how-steps">
              {/* STEP 01 */}
              <div className="how-step">
                <div className="how-step-num">
                  Step 01
                </div>

                <div className="how-step-icon">
                  <Image className='rxt-small-img' src="assets/images/z-sign-up-free.svg" width={100} height={100} alt="icon" />

                </div>

                <div className="how-step-title">
                  Sign Up Free
                </div>

                <div className="how-step-desc">
                  Create your account in 60 seconds.
                  No deposit or credit card. Claim
                  free RXT immediately.
                </div>
              </div>

              {/* STEP 02 */}
              <div className="how-step">
                <div className="how-step-num">
                  Step 02
                </div>

                <div className="how-step-icon">
                  <Image className='rxt-small-img' src="assets/images/z-complete-kyc.svg" width={100} height={100} alt="icon" />

                </div>

                <div className="how-step-title">
                  Complete KYC
                </div>

                <div className="how-step-desc">
                  Verify identity, unlock full access
                  and earn +100 RXT bonus instantly
                  upon completion.
                </div>
              </div>

              {/* STEP 03 */}
              <div className="how-step">
                <div className="how-step-num">
                  Step 03
                </div>

                <div className="how-step-icon">
                  <Image className='rxt-small-img' src="assets/images/z-start-earning.svg" width={100} height={100} alt="icon" />

                </div>

                <div className="how-step-title">
                  Start Earning
                </div>

                <div className="how-step-desc">
                  Collect daily RXT, refer friends,
                  trade P2P, predict markets or
                  invest in real assets.
                </div>
              </div>

              {/* STEP 04 */}
              <div className="how-step">
                <div className="how-step-num">
                  Step 04
                </div>

                <div className="how-step-icon">
                  <Image className='rxt-small-img' src="assets/images/z-withdraw-scale.svg" width={100} height={100} alt="icon" />
                </div>

                <div className="how-step-title">
                  Withdraw &amp; Scale
                </div>

                <div className="how-step-desc">
                  Withdraw any time. Grow your
                  network and multiply your passive
                  income streams.
                </div>
              </div>
            </div>

            <div className="action-bar">
              <span className="action-bar-text">
                Read the full guide and get started
                in minutes
              </span>

              <a className="sitebtn" href="#">
                View Full Details →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="cta-section">
        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <Row className="green-bg-row">
            <Col lg={12} md={12} sm={12}>
              <div className="cta-inner">
                <div>
                  <div className="cta-tag">
                    Get Started
                  </div>

                  <h2 className="cta-h2">
                    Start earning today.
                    <br />
                    Join 142,000+ users.
                  </h2>

                  <p className="cta-sub">
                    No deposit needed. Claim free RXT in
                    60 seconds. Build your passive income
                    empire.
                  </p>

                  <div className="cta-btns">
                    <a
                      className="btn-hero-primary"
                      href="#"
                    >
                      Get Started Free →
                    </a>

                    <a
                      className="btn-hero-secondary"
                      href="#"
                    >
                      See All Features
                    </a>
                  </div>
                </div>

                <Image className="cta-illustration-img" src="assets/images/gold-img.svg" width={100} height={100} alt="icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* <section className="partnerlogobg">
        <Container>
          <h2 className="heading-title text-center pb-4">Millions of <span className='text-yellow'>customers grow</span> their business every day with us</h2>
          <div className="partnerbox">
            <Carousel responsive={responsive} arrows={false} className="partnerlogoscroll d-flex">
              <div>
                <Image src="assets/images/partner1.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner2.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner3.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner4.png" width={100} height={100} alt="logo" />
              </div>
            </Carousel>
          </div>
        </Container>
      </section> */}

      {/* <section className="howitworkbg" id="howitworks">
        <Image src='assets/images/businessbgright.svg' className='boostbgimg boostbgimgright' />
        <Image src='assets/images/businessbgleft.svg' className='boostbgimg boostbgimgleft' />
        <Container data-aos="fade-up" data-aos-duration="1000">
          <h2 className="heading-title text-center pb-4">Boost <span className='text-yellow'>Your Business</span> and Share Content with Us</h2>
          <div className="flexbox text-center align-item-center businessbg">
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon2.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Advertisers</h4>
                <p className="content">Get more sales & conversions.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon3.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Agencies</h4>
                <p className="content">Manage multiple brands & campaigns.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon4.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Publishers</h4>
                <p className="content">Monetize your traffic with top offers.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="partnerlogobg affresultssec aboutusbg">
        <Container>
          <h2 className="heading-title text-center pb-4">ringx <span className='text-yellow'>Results</span> in Numbers</h2>
          <div className='resultsflex'>
            <div>
              <h4>10,000 +</h4>
              <p>Active Affiliates</p>
            </div>
            <div>
              <h4>$50M +</h4>
              <p>Paid In Commissions</p>
            </div>
            <div>
              <h4>150 +</h4>
              <p>Countries Connected</p>
            </div>
            <div>
              <h4>95%</h4>
              <p>Advertiser Satisfaction Rate</p>
            </div>
            <div>
              <h4>24/7</h4>
              <p>Support & Assistance</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="aboutusbg featuresec" id="features">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon text-center">
              <Image src="assets/images/feedbackimg.png" width={100} height={100} className='powfeatomg' alt="icon" />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h5 className='subtitle'>🤩 Exclusive Features</h5>
              <h2 className="heading-title pb-3">Powerfull <span className='text-yellow'>Features</span> to Maximize Your Earnings</h2>
              <p>Unlock the full potential of affiliate marketing with ringx’s cutting-edge tools. Whether you're an advertiser, agency, or publisher, our platform provides seamless tracking, high payouts, and real-time insights to help you grow and scale effortlessly.</p>
              <div className='d-flex'>
                <div className="mt-3">
                  <Image src='assets/images/feat1.svg' className='featimg' />
                  <h4>High-Paying Affiliate Offers</h4>
                  <p>Promote top brands and earn maximum commissions with exclusive, high-converting offers.</p>
                </div>
                <div className="mt-3">
                  <Image src='assets/images/feat2.svg' className='featimg' />
                  <h4>Real-Time Tracking & Instant Payouts</h4>
                  <p>Monitor your earnings live and withdraw funds quickly via bank, PayPal, or crypto.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="aboutusbg subscribebg" id="aboutus">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2 className="heading-title pb-3"><span className='text-yellow'>Stay Updated</span> & Earn More!</h2>
              <p>Subscribe now to get the latest updates, exclusive offers, and affiliate marketing insights delivered straight to your inbox!</p>
              <Form.Group className="form-group">
                <InputGroup>
                  <Form.Control id="subscribe" type="email" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
                  <InputGroup.Text id="subscribebtn" className="">
                    <Button className="sitebtn btn-sm">Subscribe Now</Button>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon text-center">
              <Image src="assets/images/updateimg.png" width={100} height={100} alt="icon" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="partnerlogobg" id='affiliate'>
        <Container data-aos="fade-up" data-aos-duration="1000">
          <h2 className="heading-title text-center pb-4"><span className='text-yellow'>How</span> ringx Works?</h2>
          <div>
            <Image src='assets/images/affiliate.png' className='affiliateimg' />
          </div>
        </Container>
      </section>

      <section className="aboutusbg dloadsec" id="aboutus">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon dloadimgdiv text-center">
              <Image src="assets/images/dloadmob.png" width={100} height={100} alt="icon" />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2 className="heading-title pb-3">Download Our App for Easy <span className='text-yellow'>Access Anywhere</span></h2>
              <p>Download our app for seamless access to all features, anytime and anywhere. Stay connected and manage everything right from your phone.</p>
              <div className="appimg d-flex gap-3 mt-3">
                <a href="#">
                  <Image src="assets/images/playstore.svg" alt="icon" />
                </a>
                <a href="#">
                  <Image src="assets/images/appstore.svg" alt="icon" />
                </a>
              </div>
              <div className="table-content mt-3">
                <div className="qrbg">
                  <Image
                    src="assets/images/downqr.png"
                    alt="icon"
                    className="qrimg"
                  />
                </div>
                <div>
                  <p className="mb-0">Scan this QR code to</p>
                  <h4 className="h4">Download our app</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <Homefooter />
    </div>
  );
}
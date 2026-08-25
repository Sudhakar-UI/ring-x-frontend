import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/user.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Userheader = () => {

  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.remove('loginbanner');
    document.body.classList.add('userpanelpage');
  })
  function nightMode() {
    document.body.classList.add('nightmode');
    var element = document.getElementById("daymode");
    element?.classList.remove("activemode");
    var element1 = document.getElementById("nightmode");
    element1?.classList.add("activemode");
  }

  function dayMode() {
    document.body.classList.remove('nightmode');
    var element2 = document.getElementById("daymode");
    element2?.classList.add("activemode");
    var element3 = document.getElementById("nightmode");
    element3?.classList.remove("activemode");
  }
  return (
    <header className="headermenu">
      <Navbar expand="lg" className="headbg uheadbg">
        <Container>
          <div className=" d-flex align-items-center">
            <Navbar.Brand>
              <Link href="/">
                <Image src="assets/images/ringx-logo.svg" width={100} height={57} className="logo logo-act" alt="logo" />
              </Link>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                const menu = document.getElementById("leftsidemenu");
                const overlay = document.getElementById("backgroundoverlay");

                menu?.classList.add("active");
                overlay?.classList.add("active");
                document.body.classList.add("pagewrapperbox");
              }}
            />
          </div>
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="navbar-nav leftheadbg">
              <Nav.Item><Link href="/dashboard" id="dashboardlink" className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link></Nav.Item>

              <NavDropdown title="Wallet" id="wallet" className="">
                <NavDropdown.Item as={Link} href="/wallet" id="walletlink" className={`${pathname === '/wallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Balance</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/deposit" id="depositlink" className={`${pathname === '/deposit' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/depositicon1.svg" alt="icon" width={100} height={100} /></span>Deposit</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/withdraw" id="withdrawlink" className={`${pathname === '/withdraw' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/withdrawicon1.svg" alt="icon" width={100} height={100} /></span>Withdraw</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/deposithistory" id="depositlink" className={`${pathname === '/deposithistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/dpsthistory.svg" alt="icon" width={100} height={100} /></span>Deposit History</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/withdrawhistory" id="withdrawlink" className={`${pathname === '/withdrawhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/wthdrawhistory.svg" alt="icon" width={100} height={100} /></span>Withdraw History</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="P2P" id="p2p" className="">
                <NavDropdown.Item as={Link} href="/overview" id="overviewlink" className={`${pathname === '/overview' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/buysell" id="selltradelink" className={`${pathname === '/buysell' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/withdrawicon1.svg" alt="icon" width={100} height={100} /></span>Buy/Sell</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/posttrade" id="posttradelink" className={`${pathname === '/posttrade' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/dpsthistory.svg" alt="icon" width={100} height={100} /></span>Post Trade</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/trademessage" id="trademessagelink" className={`${pathname === '/trademessage' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/trademsg.svg" alt="icon" width={100} height={100} /></span>Trade Message</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/disputetrade" id="disputetradelink" className={`${pathname === '/disputetrade' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/distrd.svg" alt="icon" width={100} height={100} /></span>Dispute Trade</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/adshistory" id="adshistorylink" className={`${pathname === '/adshistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/adshis.svg" alt="icon" width={100} height={100} /></span>Ads History</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/feedback" id="feedbacklink" className={`${pathname === '/feedback' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/feedback.svg" alt="icon" width={100} height={100} /></span>Feedback</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item><Link href="/cashin" id="agentlink" className={`nav-link ${pathname === '/agent' ? 'active' : ''}`}>Agent</Link></Nav.Item>
              <NavDropdown title="Affiliate Pro" id="affiliatepro" className="">
                <NavDropdown.Item as={Link} href="/advertiserdashboard" id="advertiserlink" className={`${pathname === '/advertiserdashboard' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Become Advertiser
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/promoterdashboard" id="promoterlink" className={`${pathname === '/promoterdashboard' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/depositicon1.svg" alt="icon" width={100} height={100} /></span>Become Promoter
                </NavDropdown.Item>               
              </NavDropdown>

            </Nav> */}
          <div className="">
            {/* <h2 className="h2">Dashboard</h2> */}
            <div className="greeting-box">
              <p className="greeting-title">Good morning, Aman 👋</p>
              <p className="greeting-subtitle">
                Thu, May 14, 2026 · Markets open
              </p>
            </div>
          </div>
          <Nav className="navbar-nav ms-auto rightheadbg">
            <div className="btc-card">
              <span className="btc-icon">Ξ</span>

              <span className="btc-price">
                4,820
              </span>

              <span className="btc-change">
                +2.4%
              </span>
            </div>
            <div className="btc-card btc-card-two">
              <span className="btc-icon">₿</span>

              <span className="btc-price">
                4,820
              </span>

              <span className="btc-change">
                +2.4%
              </span>
            </div>
            <Link href="/deposit" className="sitebtn btn-sm">
              + Deposit
            </Link>

            {/* <div className="header-actions">
										<button className="borderbtn  btn-sm">
											View Dashboard →
										</button>

										<button className="borderbtn btn-sm">
											Withdraw $84
										</button>
									</div> */}
            {/* <Nav.Item><Link href="/transfer" id="transferlink" className={`nav-link ${pathname === '/transfer' ? 'active' : ''}`}>Transfer</Link></Nav.Item>

              <Nav.Item><Link href="/support" id="supportlink" className={`nav-link ${pathname === '/support' ? 'active' : ''}`}>Support</Link></Nav.Item> */}


            <NavDropdown title={<div className="pull-left notification-btn"><Image src="assets/images/bell.svg" className="menuicon" alt="user" width={100} height={57} />  <div className="notification-dot"></div></div>} id="basic-nav-dropdown" className="notifyicon">
              <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>5 new Notifications</p></NavDropdown.Item>
              <SimpleBar className="chat-notification">
                <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                  <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                  <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                  <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                  <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2024</small><span className="righticon">
                  <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                </NavDropdown.Item>
              </SimpleBar>
            </NavDropdown>
            {/* <NavDropdown className="usermenudrop" title={<div className="pull-left"><Image src="assets/images/profile.svg" className="photopic" id="userprofile" alt="user" />John</div>} id="profiledrp">
                <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                  <span className="photopic">
                    <Image src="assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                  </span>
                  <h5>testuser@gmail.com<span className="t-gray ms-1">(<span className="t-green"> <FontAwesomeIcon icon={faCheck} /></span><span className="t-green ms-1">Verified</span> )</span><br /><span className="t-gray">username</span></h5>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item as={Link} href="/profile" id="profilelink"><span className="iconboxbg"><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></span>Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/security" id="securitylink"><span className="iconboxbg"><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></span>Security</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/kyc" id="kyclink" className={`${pathname === '/kyc' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></span>Kyc</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/bank" id="banklink" className={`${pathname === '/bank' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/bank.svg" alt="icon" width={100} height={100} /></span>Bank</NavDropdown.Item>

                <hr />
                <NavDropdown.Item as={Link} href="/" id="logoutlink"><span className="iconboxbg"><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></span>Logout</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header >
  )
}

export default Userheader
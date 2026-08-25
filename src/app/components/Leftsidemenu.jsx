'use client'
import React from "react";
import Link from 'next/link';
import { Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


const Leftsidemenu = () => {

  const pathname = usePathname()

  function closeCollapse() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  function menuclick() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  return (

    <div className="leftsidemenu" id="leftsidemenu">
      <div className="closeiconbtn" onClick={closeCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </div>


      <div className="leftsidescroll">
        <Link href="/">
          <Image src="assets/images/ringx-logo.svg" width={100} height={57} className="logo" alt="logo" />
        </Link>
        <div className="sb-user">
          <div className="sb-av">AK</div>

          <div>
            <h4 className="sb-name mb-0 d-flex">
              Aman Khatri
              <h5 className="verified-text m-0"><span className="t-gray ms-1"><span className="t-green"> <FontAwesomeIcon icon={faCheck} /></span><span className="t-green ms-1 mb-0">Verified</span> </span><br /></h5>
            </h4>

            <div className="sb-verified">
              <h5 className="verified-text agent m-0"><span className="t-gray ms-1"><span className="t-green"><Image src="assets/images/agent-img.svg" alt="icon" width={100} height={100} /></span><span className="t-green ms-1 mb-0">Agent</span> </span><br /></h5>
              <h5 className="verified-text adviser m-0"><span className="t-gray ms-1"><span className="t-green"> <Image src="assets/images/adviser-img.svg" alt="icon" width={100} height={100} /></span><span className="t-green ms-1 mb-0">Adviser</span> </span><br /></h5>
            </div>
          
          </div>
        </div>
        <div className="new-scroll-x">
          <div class="sb-sec">Main</div>
          <ul>
            <li><Link id="dashboardlink" href="/dashboard" className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-dashboard.svg" alt="icon" width={100} height={100} /></i><div>Dashboard</div></Link></li>
            <li><Link id="walletlink" href="/wallet" className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-wallet.svg" alt="icon" width={100} height={100} /></i><div>Wallet</div></Link></li>

            <li><Link id="walletlink" href="/" className={`titlemenu ${pathname === '/' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-monetize.svg" alt="icon" width={100} height={100} /></i><div>Monetize</div></Link></li>
            <li><Link id="walletlink" href="/" className={`titlemenu ${pathname === '/' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-prediction.svg" alt="icon" width={100} height={100} /></i><div>Predictions</div></Link></li>
            <li><Link id="walletlink" href="/investors" className={`titlemenu ${pathname === '/investors' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-rwa.svg" alt="icon" width={100} height={100} /></i><div>RWA</div></Link></li>
            {/* <li><Link id="walletlink" href="/" className={`titlemenu ${pathname === '/' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-affiliate.svg" alt="icon" width={100} height={100} /></i><div>Affiliate</div></Link></li> */}
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-bs-toggle titlemenu new-nav" data-bs-toggle="dropdown">
                <span>
                  <i><Image className="me-2" src="assets/images/sm-affiliate.svg" alt="icon" width={100} height={100} /></i>Affiliate </span>
                <span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
              <div className="dropdown-menu">
                <NavDropdown.Item as={Link} id="overviewlink" className={`titlemenu ${pathname === '/campaignsmanager' ? 'active' : ''}`} href="/campaignsmanager"><div>Campaign Manager</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/campaignreport' ? 'active' : ''}`} href="/campaignreport"><div>Performance Report</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/affiliatetracking' ? 'active' : ''}`} href="/affiliatetracking"><div>Affiliate Tracking</div></NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/trademessage' ? 'active' : ''}`} href="/trademessage"><div>Trade Message</div></NavDropdown.Item> */}
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/campaignbilling' ? 'active' : ''}`} href="/campaignbilling"><div>Billing</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/campaignpayouthistory' ? 'active' : ''}`} href="/campaignpayouthistory"><div>Payment History</div></NavDropdown.Item>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-bs-toggle titlemenu new-nav" data-bs-toggle="dropdown">
                <span>
                  <i><Image className="me-2" src="assets/images/sm-p2p.svg" alt="icon" width={100} height={100} /></i>P2P Trade </span>
                <span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
              <div className="dropdown-menu">
                <NavDropdown.Item as={Link} id="overviewlink" className={`titlemenu ${pathname === '/overview' ? 'active' : ''}`} href="/overview"><div>Overview</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/buysell' ? 'active' : ''}`} href="/buysell"><div>Buy/Sell</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/posttrade' ? 'active' : ''}`} href="/posttrade"><div>Post Trade</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/trademessage' ? 'active' : ''}`} href="/trademessage"><div>Trade Message</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/disputetrade' ? 'active' : ''}`} href="/disputetrade"><div>Dispute Trade</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/adshistory' ? 'active' : ''}`} href="/adshistory"><div>Ads History</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/feedback' ? 'active' : ''}`} href="/feedback"><div>Feedback</div></NavDropdown.Item>
              </div>
            </li>
            {/* <li><Link id="myaccountlink" className={`titlemenu ${pathname === '/profile' ? 'active' : ''}`} href="/profile"><i><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></i><div>My Account</div></Link></li> */}
            {/* <li><Link id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link></li> */}
            {/* <li><Link id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>KYC</div></Link></li> */}
            {/* <li><Link id="reflink" className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} href="/referral"><i><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li> */}
            {/* <li><Link id="supportlink" className={`titlemenu ${pathname === '/support' ? 'active' : ''}`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li> */}
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-bs-toggle titlemenu new-nav" data-bs-toggle="dropdown">
                <span>
                  <i><Image className="me-2" src="assets/images/sm-agent.svg" alt="icon" width={100} height={100} /></i>Agent </span>
                <span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
              <div className="dropdown-menu">
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/cashin' ? 'active' : ''}`} href="/cashin"><div>Cash in</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="kyclink" className={`titlemenu ${pathname === '/cashout' ? 'active' : ''}`} href="/cashout"><div>Cash out</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="kyclink" className={`titlemenu ${pathname === '/paymentrequest' ? 'active' : ''}`} href="/paymentrequest"><div>Payment Request</div></NavDropdown.Item>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-bs-toggle titlemenu new-nav" data-bs-toggle="dropdown">
                <span>
                  <i><Image className="me-2" src="assets/images/sm-history.svg" alt="icon" width={100} height={100} /></i>History </span>
                <span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
              <div className="dropdown-menu">
                <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory"><div>Deposit History</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} id="kyclink" className={`titlemenu ${pathname === '/withdrawhistory' ? 'active' : ''}`} href="/withdrawhistory"><div>Withdraw History</div></NavDropdown.Item>
              </div>
            </li>
            <li><Link id="walletlink" href="/transfer" className={`titlemenu ${pathname === '/transfer' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-transfer.svg" alt="icon" width={100} height={100} /></i><div>Transfer</div></Link></li>
            <li><Link id="walletlink" href="/bank" className={`titlemenu ${pathname === '/bank' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-bank.svg" alt="icon" width={100} height={100} /></i><div>Bank</div></Link></li>
            {/* <li><Link href="#" className="titlemenu logout" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Logout</div></Link></li> */}
          </ul>
          <div className="mt-1">
            <div class="sb-sec">Account</div>
            <ul>
              <li><Link id="walletlink" href="/profile" className={`titlemenu ${pathname === '/profile' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-profile.svg" alt="icon" width={100} height={100} /></i><div>Profile</div></Link></li>
              <li><Link id="walletlink" href="/" className={`titlemenu ${pathname === '/' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-notification.svg" alt="icon" width={100} height={100} /></i><div>Notifications</div></Link></li>
              <li><Link id="supportlink" href="/support" className={`titlemenu ${pathname === '/support' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/support-new.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>
              <li><Link id="securitylink" href="/security" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/sm-settings.svg" alt="icon" width={100} height={100} /></i><div>Settings</div></Link></li>
            </ul>
          </div>
          <div className="balance-card">
            <div className="balance-top">
              <div className="mini-logo">
                <Image src="assets/images/rxt-token.svg" />
              </div>

              <h6 className="balance-amount">
                12,500 <span>RXT</span>
              </h6>
            </div>

            <div className="divider"></div>

            <p className="section-heading">Today's Collection</p>

            <div className="collection-list">
              <div className="collection-item">
                <span>Direct Earning</span>
                <strong>150 RXT</strong>
              </div>

              <div className="collection-item">
                <span>Ref Sign-up</span>
                <strong>+1,200 RXT</strong>
              </div>

              <div className="collection-item">
                <span>Ref Deposit</span>
                <strong>+550 RXT</strong>
              </div>

              <div className="collection-item">
                <span>Ref Purchase</span>
                <strong>+500 RXT</strong>
              </div>
            </div>

            <button className="sitebtn btn-sm w-100 text-center"

            >
              Start Collecting RXT →
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Leftsidemenu
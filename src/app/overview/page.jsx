"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import './../../../public/assets/css/p2pcustom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Page = () => {

  const downlinescroll = {
    desktop: {
      breakpoint: { max: 1920, min: 1670 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1670, min: 1270 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1270, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const table = document.getElementById('table1');
      if (!table) return; // Check if the table exists

      const isMobile = window.innerWidth < 768;

      const headers = table.querySelectorAll('th');
      const rows = table.querySelectorAll('tbody tr');

      const responsiveHeader = table.querySelector('.table-responsive-stack-thead');
      const thead = table.querySelector('thead');

      if (isMobile) {
        // Show responsive headers and hide thead
        if (responsiveHeader) responsiveHeader.style.display = 'block';
        if (thead) thead.style.display = 'none';

        rows.forEach(row => {
          headers.forEach((header, index) => {
            const cell = row.cells[index];
            if (cell && !cell.querySelector('.table-responsive-stack-thead')) {
              const span = document.createElement('span');
              span.className = 'table-responsive-stack-thead';
              span.textContent = header.textContent + ' ';
              cell.prepend(span);
            }
          });
        });
      } else {
        // Hide responsive headers and show thead
        if (responsiveHeader) responsiveHeader.style.display = 'none';
        if (thead) thead.style.display = 'table-header-group';
      }
    };

    // Initial call
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid overviewpage">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <h2 className="h2">P2P Overview</h2>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer p2poverview">
          <div className="cryptopricebox">
            <div className="priceflexbox d-flex">
              <div className="pricetable">
                <Link href="/adshistory" id='adshistory' className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/buytrade.svg" width={25} height={25} alt="icon" /></span>
                  </div>
                  <div className="h4">Buy Trade<br /><span className="h5">20</span></div>
                </Link>
              </div>
              <div className="pricetable">
                <Link href="/adshistory" className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/selltrade.svg" width={25} height={25} alt="icon" /></span></div>
                  <div className="h4">Sell Trade<br /><span className="h5">10</span></div>
                </Link>
              </div>

              <div className="pricetable">
                <Link href="/adshistory" className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/completed.svg" width={25} height={25} alt="icon" /></span></div>
                  <div className="h4">Completed Trade<br /><span className="h5">30</span></div>
                </Link>
              </div>
            </div>
            <div className="priceflexbox d-flex">
              <div className="pricetable">
                <Link href="/adshistory" className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/canceltrade.svg" width={25} height={25} alt="icon" /></span>
                  </div>
                  <div className="h4">Cancel Trade<br /><span className="h5">10</span></div>
                </Link>
              </div>

              <div className="pricetable">
                <Link href="/adshistory" className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/pending.svg" width={25} height={25} alt="icon" /></span>
                  </div>
                  <div className="h4">Pending Transaction<br /><span className="h5">20</span></div>
                </Link>
              </div>
              <div className="pricetable">
                <Link href="/adshistory" className="panelcontentbox">
                  <div className="cryptoboxicon"><span className=""><Image src="assets/images/opentransaction.svg" width={25} height={25} alt="icon" /></span>
                  </div>
                  <div className="h4">Open Transaction<br /><span className="h5">10</span></div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-3 announcement panelcontentbox ">
            <h2 className="subhead">Recent feedback</h2>
            <div className="tabrightbox">
              <Link href="/feedback" className="btn-sm sitebtn" id="view_all"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>View All</Link>
            </div>
            <Carousel className="cardlistbox tablemobbg d-flex" responsive={downlinescroll} autoPlay={false} autoPlaySpeed={3000} showDots={true} removeArrowOnDeviceType={["desktop", "laptop", "tablet", "mobile"]} swipeable={true} draggable={true}>
              <div className="panelcontentbox">
                <SimpleBar className="table-responsive feedbackscroll">
                  <Table className="sitetable" id='table2'>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td className="text-right">05:05:00, 18/05/2026</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td className="text-right">John</td>
                      </tr>
                      <tr>
                        <td>Feedback</td>
                        <td className="text-right"><Badge bg="success">80%</Badge></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with
                          him.</td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </div>
              <div className="panelcontentbox">
                <SimpleBar className="table-responsive feedbackscroll">
                  <Table className="sitetable" id='table3'>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td className="text-right">05:05:00, 18/05/2026</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td className="text-right">John</td>
                      </tr>
                      <tr>
                        <td>Feedback</td>
                        <td className="text-right"><Badge bg="success">80%</Badge></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with
                          him.</td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </div>
              <div className="panelcontentbox">
                <SimpleBar className="table-responsive feedbackscroll">
                  <Table className="sitetable" id='table4'>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td className="text-right">05:05:00, 18/05/2026</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td className="text-right">John</td>
                      </tr>
                      <tr>
                        <td>Feedback</td>
                        <td className="text-right"><Badge bg="success">80%</Badge></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with
                          him.</td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </div>
              <div className="panelcontentbox">
                <SimpleBar className="table-responsive feedbackscroll">
                  <Table className="sitetable" id='table5'>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td className="text-right">05:05:00, 18/05/2026</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td className="text-right">John</td>
                      </tr>
                      <tr>
                        <td>Feedback</td>
                        <td className="text-right"><Badge bg="success">80%</Badge></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with
                          him.</td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </div>
              <div className="panelcontentbox">
                <SimpleBar className="table-responsive feedbackscroll">
                  <Table className="sitetable" id='table6'>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td className="text-right">05:05:00, 18/05/2026</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td className="text-right">John</td>
                      </tr>
                      <tr>
                        <td>Feedback</td>
                        <td className="text-right"><Badge bg="success">80%</Badge></td>
                      </tr>
                      <tr>
                        <td colSpan={2}><hr /></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with
                          him.</td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </div>
            </Carousel>
          </div>

          <div className="adsbox mt-3">
            <h2 className="subhead">All Advertisement</h2>
            <div className="tabpanel panelcontentbox">
              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Date</th>
                      <th>Coins</th>
                      <th>Type</th>
                      <th>Limit</th>
                      <th>Max limit</th>
                      <th>Margin (%)</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className="nodata">
                          <td colSpan={10}>
                            <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata"/>
                              <p>No record found</p>
                          </td>
                        </tr> */}
                    <tr>
                      <td>1</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/xrp.svg" className="smallcoin" />XRP</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/bnb.svg" className="smallcoin" />BNB</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/trx.svg" className="smallcoin" />TRX</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2482.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>11-12-2023</td>
                      <td><Image src="assets/images/color/xrp.svg" className="smallcoin" />XRP</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2482.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />
    </div>
  )
}

export default Page;
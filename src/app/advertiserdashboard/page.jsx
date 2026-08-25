"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Advertiserdashboard = () => {

	// useEffect(() => {
	// 	highchartsAccessibility(Highcharts);
	// 	highchartsExporting(Highcharts);
	// 	highchartsExportData(Highcharts);
	// 	highchartsSeriesLabel(Highcharts);

	// 	Highcharts.chart("distributionchart", {
	// 		chart: {
	// 			type: 'column'
	// 		},
	// 		title: {
	// 			text: '  '
	// 		},
	// 		legend: {
	// 			layout: 'vertical',
	// 			align: 'left',
	// 			verticalAlign: 'top',
	// 			x: 150,
	// 			y: 100,
	// 			floating: true,
	// 			borderWidth: 1,
	// 			backgroundColor:
	// 				Highcharts.defaultOptions.legend.backgroundColor || '#181a20'
	// 		},
	// 		xAxis: {
	// 			categories: [
	// 				'John',
	// 				'William',
	// 				'Alex',
	// 				'Peter',
	// 				'David',
	// 			],
	// 			plotBands: [{
	// 				from: 4.5,
	// 				to: 6.5,
	// 			}]
	// 		},
	// 		yAxis: {
	// 			title: {
	// 				text: ' Count | Leads | Conversion'
	// 			}
	// 		},
	// 		tooltip: {
	// 			shared: true,
	// 			valueSuffix: ' Count | Leads | Conversion '
	// 		},
	// 		credits: {
	// 			enabled: false
	// 		},
	// 		plotOptions: {
	// 			areaspline: {
	// 				fillOpacity: 0.5
	// 			},

	// 		},
	// 		series: [
	// 			{
	// 				name: 'Clicks',
	// 				data: [10, 5, 20, 5, 25],
	// 				color: '#237BAB'
	// 			},
	// 			{
	// 				name: 'Leads',
	// 				data: [5, 3, 10, 20, 35],
	// 				color: '#264574'
	// 			},
	// 			{
	// 				name: 'Conversion',
	// 				data: [15, 5, 10, 6, 30],
	// 				color: '#000'
	// 			},
	// 		]
	// 	})

	// }, []);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid advertiserdashboard-page">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<h2 className="h2">Advertiser Dashboard</h2>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="overviewbalancebox panelcontentbox adsblancebox">
						<div className="balanceshowbox">
							<div className="walletbalancebox">
								<div className="tablebox d-flex">
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Balance</h5>
												<h4 className="h4">0</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/clicks.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Spend Balance</h5>
												<h4 className="h4">0 </h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/leads.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Available Balance</h5>
												<h4 className="h4">0</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/converstions.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Campaigns</h5>
												<h4 className="h4">$2.50</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/commission.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flexbox mt-3 adverflexbox">
						<div className="panelcontentbox">
							<h2 className="heading-box pt-0 ps-2 border-0">Top Performing promoters </h2>
							{/* <div className="mt-4">
								<div id="distributionchart" className='transchart perfmchart' style={{ width: '100%', height: '360px', outline: 'none' }}></div>
							</div> */}
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack" id="table1">
									<thead>
										<tr>
											<th>Campaign</th>
											<th>Clicks</th>

										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Growth Accelerator 2026</td>
											<td>0</td>
										</tr>
										<tr>
											<td>testing</td>
											<td>0</td>
										</tr>
										<tr>
											<td>Growth Accelerator 2025</td>
											<td>0</td>
										</tr>

									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
						</div>


						<div className="panelcontentbox">
							<div className="commissinbox">
								<h2 className="heading-box pt-0 ps-2 border-0">Quick Links</h2>
								<div className="balancedirectbox d-flex">
									<div className="panelcontentbox">
										<Link href="/campaignsoverview" className="contentbox" id="campaignoverviewlink">
											<div> <Image src="assets/images/overview.svg" /> </div>
											<div>
												<h5>Campaign Overview</h5>
											</div>
											<div className="text-end">
												<FontAwesomeIcon icon={faArrowRight} />
											</div>
										</Link>
									</div>
									<div className="panelcontentbox">
										<Link href="/campaignsmanager" className="contentbox" id="campaignmanagelink">
											<div> <Image src="assets/images/manager.svg" /> </div>
											<div>
												<h5>Campaign Manager</h5>
											</div>
											<div className="text-end">
												<FontAwesomeIcon icon={faArrowRight} />
											</div>
										</Link>
									</div>
								</div>
								<div className="balancedirectbox d-flex">
									<div className="panelcontentbox">
										<Link href="/campaignreport" className="contentbox" id="campaignreportlink">
											<div> <Image src="assets/images/report.svg" /> </div>
											<div>
												<h5>Performance Report</h5>
											</div>
											<div className="text-end">
												<FontAwesomeIcon icon={faArrowRight} />
											</div>
										</Link>
									</div>
									<div className="panelcontentbox">
										<Link href="/affiliatetracking" className="contentbox" id="campaigntracklink">
											<div> <Image src="assets/images/tracking.svg" /> </div>
											<div>
												<h5>Affiliate Tracking</h5>
											</div>
											<div className="text-end">
												<FontAwesomeIcon icon={faArrowRight} />
											</div>
										</Link>
									</div>

								</div>

								{/* <div className="balancedirectbox d-flex">
									<div className="panelcontentbox">
										<Link href="/campaignbilling" className="contentbox" id="campaignbillinglink">
											<div> <Image src="assets/images/billing.svg" /> </div>
											<div>
												<h5>Billing</h5>
											</div>
											<div className="text-end">
												<FontAwesomeIcon icon={faArrowRight} />
											</div>
										</Link>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="panelcontentbox mt-3">
						<h2 className="heading-box pt-0 ps-2 border-0">Recent Activity </h2>

						<SimpleBar className="table-responsive sitescroll">
							<Table className="sitetable table-responsive-stack" id="table2">
								<thead>
									<tr>
										<th>Date</th>
										<th>Amount</th>
										<th>Coin</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="danger">Closed</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="info">Open</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="warning">Pending</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="info">Open</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="warning">Pending</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="danger">Closed</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
									<tr>
										<td>TY5632137</td>
										<td>How to verify KYC</td>
										<td><Badge bg="info">Open</Badge></td>
										<td>28/12/2024, 13:17:33 </td>
									</tr>
								</tbody>
							</Table>
						</SimpleBar>
						<ResponsiveTable tableId="table2" />
					</div>
				</Container>
			</article>
			<Userfooter />
		</div>
	);
}

export default Advertiserdashboard;
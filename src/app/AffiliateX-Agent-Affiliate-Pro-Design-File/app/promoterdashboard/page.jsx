"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table } from 'react-bootstrap';
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

useEffect(() => {
	highchartsAccessibility(Highcharts);
	highchartsExporting(Highcharts);
	highchartsExportData(Highcharts);
	highchartsSeriesLabel(Highcharts);

	Highcharts.chart("distributionchart", {
		chart: {
			type: 'column'
		},
		title: {
			text: '  '
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 150,
			y: 100,
			floating: true,
			borderWidth: 1,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || '#181a20'
		},
		xAxis: {
			categories: [
				'John',
				'William',
				'Alex',
				'Peter',
				'David',
			],
			plotBands: [{ 
				from: 4.5,
				to: 6.5,
			}]
		},
		yAxis: {
			title: {
				text: ' Count | Leads | Conversion'
			}
		},
		tooltip: {
			shared: true,
			valueSuffix: ' Count | Leads | Conversion '
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			areaspline: {
				fillOpacity: 0.5
			},
			
		},
		series: [					
			{
				name: 'Clicks',
				data: [10, 5, 20, 5, 25],
				color: '#237BAB'
			},
			{
				name: 'Leads',
				data: [5, 3, 10, 20, 35],
				color: '#264574'
			},
			{
				name: 'Conversion',
				data: [15, 5, 10, 6, 30],
				color: '#FFAD00'
			},
		]
	})

}, []);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<h2 className="h2">Promoter Dashboard</h2>
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
												<h5 className="h5">Total Earnings</h5>
												<h4 className="h4">0</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-leads.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Clicks</h5>
												<h4 className="h4">0 </h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-clicks.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Conversions</h5>
												<h4 className="h4">0</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-converstions.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Currently Promoting Campaigns</h5>
												<h4 className="h4">15</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/wthdricon1.svg" alt="icon" withd={20} height={20} />
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
						<div className="mt-4">
							<div id="distributionchart" className='transchart' style={{ width: '100%', height: '360px', outline: 'none' }}></div>
						</div>
					</div>	
					
					<div className="panelcontentbox">
						<div className="commissinbox">
							<h2 className="heading-box pt-0 ps-2 border-0">Quick Links</h2>
							<div className="balancedirectbox">
							<div className="panelcontentbox">
									<Link href="/availablecampaigns" id="affiliate_links" className="contentbox">
										<div> <Image src="assets/images/leads.svg" /> </div>
										<div>
											<h5>My Affiliate Links</h5>
										</div>
										<div className="text-end">
											<FontAwesomeIcon icon={faArrowRight} />
										</div>
									</Link>
								</div>							
								<div className="panelcontentbox">
								    <Link href="/affiliateearnings" className="contentbox" id="earning_link">
										<div> <Image src="assets/images/billing.svg" /> </div>
										<div>
											<h5>Earnings</h5>
										</div>
										<div className="text-end">
											<FontAwesomeIcon icon={faArrowRight} />
										</div>
									</Link>
								</div>															
													
							</div>								
						</div>
				</div>
			</div>
			</Container>
		</article>
		<Userfooter />		
	</div>
	);
}

export default Advertiserdashboard;
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Form, Button, Modal, InputGroup, Nav } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';

const Affiliateviewstats = () => {
	const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

	useEffect(() => {
		highchartsAccessibility(Highcharts);
		highchartsExporting(Highcharts);
		highchartsExportData(Highcharts);
		highchartsSeriesLabel(Highcharts);
	
		Highcharts.chart("distributionchart", {
			chart: {
				type: 'area'
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
				type: 'datetime',
				labels: {
					format: '{value:%H:%M}' // Displays time as HH:MM
				}
			},
			yAxis: {
				title: {
					text: ' Clicks/Leads/Conversions'
				}
			},
			tooltip: {
				xDateFormat: '%H:%M',
				shared: true,
				valueSuffix: ' Clicks/Leads/Conversions '
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.5
				},
				
			},
			series: [{
				name: ' ',
				data: [
					[Date.UTC(2023, 0, 1, 0, 0), 0],   // 00:00
					[Date.UTC(2023, 0, 1, 4, 0), 1],   // 04:00
					[Date.UTC(2023, 0, 1, 8, 0), 4],   // 08:00
					[Date.UTC(2023, 0, 1, 12, 0), 4],  // 12:00
					[Date.UTC(2023, 0, 1, 16, 0), 5],  // 16:00
					[Date.UTC(2023, 0, 1, 20, 0), 2],  // 20:00
					[Date.UTC(2023, 0, 1, 23, 59), 3]  // 23:59
				]
			}]
		})
	
	}, []);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
				<h2 className="h2">View Stats</h2>
				<div className="tabrightbox">
					<Link href="/affiliateperformance" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox affstatspage">
				<Container className="sitecontainer">	
				<div className="panelcontentbox">
				<h2 className="heading-box pt-0 ps-2 border-0">Performance Over Time</h2>
						<div className="mt-4">
							<div id="distributionchart" className='performncechart' style={{ width: '100%', height: '360px', outline: 'none' }}></div>
						</div>
					</div>	
				<div className="panelcontentbox mt-3">		
				<h2 className="heading-box pt-0 ps-2 border-0">Sub-ID Breakdown</h2>
					<SimpleBar className="table-responsive sitescroll">
					<Table className="sitetable table-responsive-stack" id="table1">
						<thead>
							<tr>
								<th>Sub-ID</th>
								<th>Clicks</th>
								<th>Leads</th>
								<th>Conversions</th>
								<th>Conversion Rate</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>instagram</td>
								<td>120</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
							</tr>
							<tr>
								<td>instagram</td>
								<td>120</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
							</tr>
							<tr>
								<td>instagram</td>
								<td>120</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
							</tr>
							<tr>
								<td>instagram</td>
								<td>120</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
							</tr>
							<tr>
								<td>instagram</td>
								<td>120</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
							</tr>
						</tbody>
						</Table>
					</SimpleBar>		
					<ResponsiveTable tableId="table1" />
				</div>	
			</Container>
		</article>
		<Userfooter />		
	</div>
	);
}

export default Affiliateviewstats;
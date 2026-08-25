import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';
import { Table, ProgressBar } from 'react-bootstrap'

const Balancechart = () => {
    useEffect(() => {
        // Initialize the Highcharts modules
        highchartsAccessibility(Highcharts);
        highchartsExporting(Highcharts);
        highchartsExportData(Highcharts);
        highchartsSeriesLabel(Highcharts);

        // Highcharts configuration
        Highcharts.chart("distributionchart", {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
                outline: false
            },
            title: {
                text: ""
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            accessibility: {
                point: {
                    valueSuffix: "%"
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    center: ['20%', '50%'] 
                }
            },
            series: [{
                name: "Crypto",
                colorByPoint: true,
                borderRadius: 0,
                innerSize: "70%",
                data: [
                {
                    name: "Pre Sales 45%",
                    y:  501.9,
                    color:"#77C0F6"
                },
                {
                    name: "Team & Advisors 15% ",
                    y: 301.9,
                    color:"#6F50FD"
                },
                {
                    name: "Bounty 35%",
                    y: 201.1,
                    color:"#F3D667"
                },
                {
                    name: "Platform Integration 15% ",
                    y: 139.9,
                    color:"#F9778A"
                },
                {
                    name: "Private Sale 15%",
                    y: 139.9,
                    color:"#85E0A3"
                }  
            ]
            }],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                itemMarginTop: 5,
                itemMarginBottom: 10,
                itemStyle: {
                    fontSize: '14px' // Change this value to the desired font size
                }
            }
        });
    }, []);

    return (
        <div className="">
            <div id="distributionchart" className='balancechart' style={{ width: '100%', height: '350px', outline: 'none' }}></div>
        </div>
    )
};

export default Balancechart;

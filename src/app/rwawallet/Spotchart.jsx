import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';

// Initialize the Highcharts modules
highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
highchartsSeriesLabel(Highcharts);

const Balancechart = () => {
    useEffect(() => {
        // Highcharts configuration
        Highcharts.chart("spotwalletbalance", {
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
                    showInLegend: true
                }
            },
            series: [{
                name: "Crypto",
                colorByPoint: true,
                borderRadius: 0,
                innerSize: "75%",
                data: [{
                    name: "BTC 0.00310630",
                    y: 2.369
                }, {
                    name: "ETH 0.00000839",
                    y: 3.369,
                },
                {
                    name: "SOL 0.00000839",
                    y: 3.369,
                }, {
                    name: "TRX 0.00000839",
                    y: 3.369,
                }, {
                    name: "LTC 0.00000839",
                    y: 3.369,
                }, {
                    name: "AVAX 0.00000839",
                    y: 3.369,
                }, {
                    name: "DOGE 0.00000839",
                    y: 3.369,
                }]
            }],
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                itemMarginTop: 5,
                itemMarginBottom: 0,
                itemStyle: {
                    fontSize: '14px' // Change this value to the desired font size
                }
            }
        });
    }, []);

    return <div id="spotwalletbalance" className='balancechart' style={{ width: '100%', height: '450px', outline: 'none' }}></div>;
};

export default Balancechart;

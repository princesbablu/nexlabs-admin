"use client"

import React from 'react'
import { Component } from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class PortfolioChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    },
                    background: 'transparent'
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                grid: {
                    borderColor: '#90A4AE08',
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                theme: {
                    mode: 'dark'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 1,
                        gradientToColors: ['#00ADEF', '#8AC640'],
                        inverseColors: false,
                        opacityFrom: .5,
                        opacityTo: 0,
                        stops: [0, 200]
                    },
                },
                // tooltip: {
                //     x: {
                //         show: false
                //     },
                //     marker: {
                //         show: false
                //     },
                // }
            },
            series: [
                {
                    name: 'Sales',
                    data: [40, 30, 45, 35, 55, 40, 50, 25, 45, 35]
                }
            ]
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
                height="300px"
            />
        );
    }
}


export default PortfolioChart;
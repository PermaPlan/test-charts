import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

import './chart.css';

export default class Chart extends Component {

    zip(a,b) {
        return a.map((x,i) => [x, b[i]]);
    }

    render() {
        var series = [{
            name: this.props.name,
            data: this.zip(this.props.timestamps, this.props.values)
        }];

        var options = {
            chart: {
              type: 'line',
              zoom: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: this.props.name,
              align: 'left'
            },
            tooltip: {
                enabled: true,
                x: {
                    format: "dd MMM - HH:mm:ss",
                }
            },
            markers: {
                size: 3,
                colors: undefined,
                strokeColors: '#fff',
                strokeWidth: 1,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                hover: {
                    size: undefined,
                    sizeOffset: 3
                }
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
                type: 'datetime',
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM HH',
                    hour: 'HH:mm'
                }
            }
        };

        return (
            <div className="chart">
                <ReactApexChart options={options} series={series} type="line" height={window.innerHeight - 100}/>
            </div>
        )
    }
}


import React, { Component } from 'react';

import RESTInterface from './../rest'
import Chart from './../chart'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.rest = new RESTInterface();
        this.options = this.rest.getIdentifiers();

        this.state = {
            current: this.options[0],
            data: this.rest.getValues(this.options[0])
        }
    }

    setCurrent(value) {
        this.setState({ 
            current: value, 
            data: this.rest.getValues(value)
        });
    }

    render() {
        const {current, data} = this.state;

        return (
            <div className="main">
                <div className="options">
                    {this.options.map(option => (
                        <button onClick={() => this.setCurrent(option)}>
                            {option}
                        </button>
                    ))}
                </div>
                <Chart
                    name={current}
                    timestamps={data.timestamps}
                    values={data.values}
                />
            </div>
            
        )
    }
}
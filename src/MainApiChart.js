import React, { Component } from 'react';
import ApiChart from './ApiChart';

class MainApiChart extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="cell-3">
                        <ApiChart/>
                    </div>
                </div>
                <div className="row">
                    <div className="cell-12">
                        <ApiChart/>
                    </div>
                </div>
            </div>
        )
    };
}

export default MainApiChart;
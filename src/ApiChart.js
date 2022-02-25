import React, {Component} from 'react';
import Plot from 'react-plotly.js';

class ApiChart extends Component {

    // Set up states for loading data
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    // Call API upon component mount
    componentDidMount() {
        const endpoint = "https://fa.ap.ngrok.io/app/master/userActiveLast30M";

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({data: data})
            })
    }

    // Change data structure
    transformData(data) {
        let plot_data = [];

        let x = [];
        let y = [];
        data.map(each => {
            x.push(each.date_of_interest)
            y.push(each.case_count)
        })
        plot_data['x'] = x;
        plot_data['y'] = y;

        console.log(plot_data)

        return plot_data
    }


    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y'],
                            marker: {color: 'rgb(158,202,225)'},
                            text: this.transformData(this.state.data)['y'],
                            exposition: 'auto',
                            hovering: 'none'
                        }
                    ]}
                    layout={{
                        autosize: true,
                        title: 'Người dùng Active (30 ngày gần đây)'
                    }}
                    useResizeHandler={true}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
        )
    }
}

export default ApiChart;
import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';
//import axios from 'axios';
//import papa from 'papaparse';
class App extends Component{

  constructor(){
    super();
    this.state = {
      chartData:{},
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount(){
    this.getChartData();
  }

  getData(result) {
    this.setState({data: result.data});
  }

  async getChartData(){
      let xlabel =  [];
      let ylabel =  [];
      let response = await fetch('/data/data.csv');
      let data = await response.text();

      //csv parsing
      let csvData = data.split('\n').slice(1);
      csvData.forEach(row => {
        const columns = row.split(',');
        let time = columns[0];
        xlabel.push(time);
        let yieldData = columns[6];
        ylabel.push(yieldData);
      });
    this.setState({
      chartData: {
        labels: xlabel,
        datasets: [
          {
            label:'yield percent',
            data: ylabel,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 135, 0.2)',
              'rgba(54, 160, 230, 0.2)',
              'rgba(255, 20, 90, 0.2)',
              'rgba(75, 10, 100, 0.2)',
            ]
          }
        ]
      }
    });
  }
  render(){
    console.log("chartData" , this.state.chartData);
    return (
      <div className="App">
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;

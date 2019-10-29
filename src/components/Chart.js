import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: this.props.chartData
    }
  }
  //defaultprops
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    fontSize: 25
  }

  render(){
    console.log("inside chart component" , this.props.chartData);
    return (
      <div className="chart">
      <Bar
          data={this.props.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'yield vs time',
              fontSize:this.props.fontSize
            },
            legend:{
              display:this.props.displayTitle,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
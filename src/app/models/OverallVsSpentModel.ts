export class OverallVsSpentModel{
    
    private chart = {
        type :'solidguage',
        height:0
    };

    private title ={
        text:'',
        style: {
             fontSize: '14px'
        }
    };

    private tooltip ={
        enabled :false
    };

    private pane = {
        startAngle: 0,
        endAngle: 360,
        background: {
                outerRadius: '0%',
                innerRadius: '47%',
                backgroundColor:'transparent'
        }
    };

    private yAxis = {
            min: 0,
            max: 0,
            lineWidth: 0,
            tickPositions: new Array()
    };

    private plotOptions = {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
    };

    private series = [{
            data: [{
                color: '#9DFF02',
                radius: '50%',
                innerRadius: '42%',
                y: 0
            }],
    }];

    private credits = {
        enabled: false
    };

    private responsive = {
        rules: [{
            condition: {
                maxWidth: 300
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                }
            }
        }]
    }

      constructor(maxYaxis : number,data : number, color : string, height: number){
        
        console.log('Inside the constructor*******');

        this.yAxis.max = maxYaxis;
        this.series[0].data[0].y = data;
        this.series[0].data[0].color = color;
        this.chart.height = height;
      
    }
}
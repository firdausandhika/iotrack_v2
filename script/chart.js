// My Chart 

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
      labels: ["01.00", "02.00", "03.00", "04.00", "05.00", "06.00", 
      "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00"
      ,"14.00", "15.00", "16.00", "17.00", "18.00","19.00", "20.00"
      ,"21.00", "22.00", "23.00", "00.00"],
        datasets: [{
            label: 'Rent Chart', // Name the series
            data: [1,	3,  5,	0, 2, 0], // Specify the data values array
            fill: false,
            borderColor: '#D97134', // Add custom color border (Line)
            backgroundColor: '#DE9366', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      	scales : {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hour'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Intensity'
                },
                
            }]
        }
    }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: ["01.00", "02.00", "03.00", "04.00", "05.00", "06.00", 
        "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00"
        ,"14.00", "15.00", "16.00", "17.00", "18.00","19.00", "20.00"
        ,"21.00", "22.00", "23.00", "00.00"],
        datasets: [{
            label: 'Profit Chart', // Name the series
            data: [100000,	320000,  50000,	210000, 150000, 50000], // Specify the data values array
            fill: false,
            borderColor: '#D97134', // Add custom color border (Line)
            backgroundColor: '#DE9366', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      	scales : {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hour'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Intensity'
                },
                
            }]
        }
    }
});

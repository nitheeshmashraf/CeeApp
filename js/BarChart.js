google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Genre', 'Q1','Q2', 'Q3', 'Q4', 
          { role: 'annotation' } ],
        ['External', 50, 50, 0, 0, ''],
        ['Internal', 50, 50, 0, 0, ''],
        ['Personnel', 25, 25, 25, 25, ''],
        ['Upsell', 100, 0, 0, 0, ''],
        ['Subjective', 0, 0, 0, 0, '']
        
      ]);

      
      var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
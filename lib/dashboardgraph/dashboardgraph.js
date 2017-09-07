/**
 * Funds transfer Dashboard
 * 
 */

var tabName;
google.charts.load('current', {
	'packages' : [ 'corechart' ]
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var performancedata = google.visualization
			.arrayToDataTable(performanceDataInput);
	var marketdata = google.visualization.arrayToDataTable(marketDataInput);
	var sectordata = google.visualization.arrayToDataTable(sectorDataInput);

	var performanceOptions = {
		title : 'Performance Cap',
		pieHole : 0.5,
		chartArea : {
			left : '100'
		},
		pieSliceText : 'label',
		pieStartAngle : 0,
		pieSliceTextStyle : {
			color : 'white',
			fontName : 'arial',
			fontSize : 10
		}
	};

	var sectorCapOptions = {
		title : 'Sector Cap',
		pieHole : 0.5,
		chartArea : {
			left : '100'
		},
		pieSliceText : 'label',
		pieStartAngle : 0,
		pieSliceTextStyle : {
			color : 'white',
			fontName : 'arial',
			fontSize : 10
		}
	};

	var marketCapOptions = {
		title : 'Market Cap',
		pieHole : 0.5,
		chartArea : {
			left : '100'
		},
		pieSliceText : 'label',
		pieStartAngle : 0,
		pieSliceTextStyle : {
			color : 'white',
			fontName : 'arial',
			fontSize : 10
		}
	};

	var performanceCap = new google.visualization.PieChart(document
			.getElementById('performanceCap'));
	var sector = new google.visualization.PieChart(document
			.getElementById('sector'));
	var marketCap = new google.visualization.PieChart(document
			.getElementById('marketCap'));

	if (tabName == "#tabs-1" || tabName == undefined) {
		// performanceCap.innerHTML = '&nbsp;';
		performanceCap.draw(performancedata, performanceOptions);
	} else if (tabName == "#tabs-2") {
		sector.draw(marketdata, sectorCapOptions);
	} else {
		marketCap.draw(sectordata, marketCapOptions);
	}
}

$(document).ready(function() {
	$("#tabs").tabs({
		activate : function(event, ui) {
			tabName = event.currentTarget.hash;
			google.charts.setOnLoadCallback(drawChart);
		}
	});
});

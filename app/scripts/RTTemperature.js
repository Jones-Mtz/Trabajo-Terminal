console.log('Real Time');
function MainViewModel(data) {
	var self = this;
	var robot = io('http://127.0.0.1:3000/api/robots/chappie');
	
	self.lineChartData = ko.observable({
		labels : ["","","","Temp","","","ºC", ""],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			}
		]
	});
	
	setInterval(function() {
        robot.emit('checkTemperature');
    }, 100);

	robot.on('temperatureValue', function(analogValue){
		// console.log(analogValue);
		var temperature = ((5.0 * analogValue * 100) / 1023).toFixed(2);
		console.log(temperature);
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(temperature);
		
		self.initLine();
	});
	
	self.initLine = function() {
		var options = {
			animation : false,
			scaleOverride : true,
			scaleSteps : 19,//Number - The number of steps in a hard coded scale
			scaleStepWidth : 2,//Number - The value jump in the hard coded scale				
			scaleStartValue : 10//Number - The scale starting value
		};
		
		var ctrtem = $("#temperatureRTchart").get(0).getContext("2d");
		var myLine = new Chart(ctrtem).Line( vm.lineChartData(), options );
	}
	
}

var vm = new MainViewModel();
ko.applyBindings(vm);
vm.initLine();
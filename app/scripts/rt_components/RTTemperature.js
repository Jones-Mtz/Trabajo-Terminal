console.log('Real Time');
function MainViewModel(data) {
	var self = this;
	var robot = io('http://127.0.0.1:3000/api/robots/chappie');
	
	self.lineChartData = ko.observable({
		labels : ["January","February","March","April","May","June","July", "May"],
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
    }, 1000);

	robot.on('temperatureValue', function(analogValue){
		// console.log(analogValue);
		var temperature = (((1024 - analogValue)*100)/924).toFixed(2);
		// console.log(temperature);
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(temperature);
		
		self.initLine();
	});
	
	self.initLine = function() {
		var options = {
			animation : false,
			scaleOverride : true,
			scaleSteps : 20,//Number - The number of steps in a hard coded scale
			scaleStepWidth : 5,//Number - The value jump in the hard coded scale				
			scaleStartValue : 0//Number - The scale starting value
		};
		
		var ctrtem = $("#temperatureRTchart").get(0).getContext("2d");
		var myLine = new Chart(ctrtem).Line( vm.lineChartData(), options );
	}
	
}

var vm = new MainViewModel();
ko.applyBindings(vm);
vm.initLine();
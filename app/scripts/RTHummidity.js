console.log('Real Time');
function MainViewModel(data) {
	var self = this;
	// var socket = io.connect('http://localhost:8070');
	/*Connection witn the arduino*/
	// var device = io('http://127.0.0.1:3000/api/robots/chappie/devices/asensor');
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
	
	/*socket.on('pushdata', function (data) {
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(data);
		self.initLine();
	});*/
/*Data from arduino*/
	/*device.on('message', function(msg) {
		var value = parseInt(msg.data);
		var hummidity = (((700 - value)*100)/555).toFixed(2);
        console.log(value);
        self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(hummidity);
		self.initLine();
      });*/
	
	setInterval(function() {
        robot.emit('checkHummidity');
    }, 100);

	robot.on('hummidityValue', function(analogValue){
		// console.log(analogValue);
		var hummidity = (((1024 - analogValue)*100)/924).toFixed(2);
		console.log(hummidity);
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(hummidity);
		
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
		
		var ctrhum = $("#hummidityRTchart").get(0).getContext("2d");
		var myLine = new Chart(ctrhum).Line( vm.lineChartData(), options );
	}
	
}

var vm = new MainViewModel();
ko.applyBindings(vm);
vm.initLine();
console.log('Real Time');
function MainViewModel(data) {
	var self = this;
	var socket = io.connect('http://localhost:8070');
	
	self.lineChartData = ko.observable({
		labels : ["January","February","March","April","May","June","July"],
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
	
	socket.on('pushdata', function (data) {
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(data);
		
		self.initLine();
	});
	
	self.initLine = function() {
		var options = {
			animation : false,
			scaleOverride : true,
			scaleSteps : 10,//Number - The number of steps in a hard coded scale
			scaleStepWidth : 10,//Number - The value jump in the hard coded scale				
			scaleStartValue : 10//Number - The scale starting value
		};
		
		var ctx = $("#canvas").get(0).getContext("2d");
		var myLine = new Chart(ctx).Line( vm.lineChartData(), options );
	}
	
}

var vm = new MainViewModel();
ko.applyBindings(vm);
vm.initLine();
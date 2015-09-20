console.log('Real Time');
var vm;
function MainViewModel(data) {
	var self = this;
	var robot = io('http://189.225.236.83:3000/api/robots/chappie');
	var intervalo;
	self.lineChartData = ko.observable({
		labels : ["","","","Gen","","","ºC", ""],
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

	self.initTR = function(){
		self.invarvalo = setInterval(function() {
			console.log("teoircamenre un tr")
	        robot.emit('checkGeneric');
	    }, 100);
	};

	self.stopTR = function(){
		clearInterval(self.invarvalo);
	};
	

	robot.on('genericValue', function(analogValue){
		// console.log(analogValue);
		var generic = ((analogValue*100)/1023).toFixed(2);
		console.log(generic);
		self.lineChartData().datasets[0].data.shift();
		self.lineChartData().datasets[0].data.push(generic);
		
		// self.initLine();
	});
	
	self.initLine = function() {
		var options = {
			animation : false,
			scaleOverride : true,
			scaleSteps : 20,//Number - The number of steps in a hard coded scale
			scaleStepWidth : 5,//Number - The value jump in the hard coded scale				
			scaleStartValue : 0//Number - The scale starting value
		};
		
		var genericctr = $("#genericRTchart").get(0).getContext("2d");
		console.log("holi")
		var myLine = new Chart(genericctr).Line( self.lineChartData(), options );
		console.log(myLine)

	}
	
}

var vm = new MainViewModel();



$('#modalTR').on('shown.bs.modal', function (event) {
	ko.applyBindings(vm);
	vm.initLine();
})

$('#modalTR').on('hide.bs.modal', function (event) {
 	vm.stopTR();
})

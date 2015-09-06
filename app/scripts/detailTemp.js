console.log('detalle temperatura');
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var options = {
    responsive:true
};

var randomnb = function(){ return Math.round(Math.random()*300)};
var datas = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Dados primários",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [randomnb(), randomnb(), randomnb(), randomnb(), randomnb(), randomnb(), randomnb()]
        },
        {
            label: "Dados secundários",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, randomnb(), randomnb(), randomnb()]
        }
    ]
}; 

// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#chartTemperatura").get(0).getContext("2d");
var ctx2 = $("#chartActuadores").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myLineChart = new Chart(ctx).Line(data, options);
var myBarChart = new Chart(ctx2).Bar(datas, options);
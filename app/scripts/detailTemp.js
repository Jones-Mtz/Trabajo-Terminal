console.log('detalle temperatura');
var temps1 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [43.2, 24.2, 22.1, 18.6, 17.2, 20.8, 24.2]
        },
/*        {
            label: "My Second dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }*/
    ]
};

var options = {
    responsive:true
};

var randomnb = function(){ return Math.round(Math.random()*300)};
var tempa1 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
        {
            label: "Datos Primarios",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [17, 5, 5, 2, 1, 4, 6]
            // data: [randomnb(), randomnb(), randomnb(), randomnb(), randomnb(), randomnb(), randomnb()]
        },
        /*{
            label: "Dados secundários",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [28, 48, 40, 19, randomnb(), randomnb(), randomnb()]
        }*/
    ]
}; 

var humms1 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [78, 73, 73, 0, 73, 72, 72]
        },
    ]
};

var humma1 =  {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
        {
            label: "Datos Primarios",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [17, 5, 5, 2, 1, 4, 6]
        },
    ]
}; 


// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#chartTemperatura").get(0).getContext("2d");
var ctx2 = $("#chartActuadores").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myLineChart = new Chart(ctx).Line(temps1, options);
var myBarChart = new Chart(ctx2).Bar(tempa1, options);
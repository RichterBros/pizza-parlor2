
function Pizza(){
this.toppings = []
//this.size = ""
}

Pizza.prototype.cost = function(){

}




$(document).ready(function(){

    
    
    $("#place-order").click(function () {
        let pizza = new Pizza()
        pizza.size = parseInt($("#size").val())
        pizza.toppings = []
        console.log(pizza.size)
    
    $("#output").text($("#size option:selected").text())
    $("#output").show();
  });





});

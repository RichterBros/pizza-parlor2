
function Pizza(toppings){
this.toppings = toppings
//this.size = ""
}

Pizza.prototype.cost = function(){

}



$(document).ready(function(){
    Pizza.prototype.toppings = function(){
        this.toppings = [];
        $('#toppings input[type="checkbox"]:checked').each(function(){
          this.toppings.push($(this).val());
        });
       //return toppings
    }

    
    
    $("#show-order").click(function () {
        let pizza = new Pizza()
        pizza.toppings()
        pizza.size = parseInt($("#size").val())
       // pizza.toppings = []
        console.log(pizza.size)
        console.log(pizza.toppings)
    $("#output").html("Your order:" + "<br>" +  $("#size option:selected").text() + "<br>" + pizza.toppings)
    $("#output").show();
  });





});

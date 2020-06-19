
function Pizza(){
this.toppings = []
this.size = ""
}

Pizza.prototype.cost = function(){

}

let pizza = new Pizza
Pizza.prototype.toppings = function(){
    
    this.toppings = [];
    $('#toppings input[type="checkbox"]:checked').each(function(){
      this.toppings.push($(this).val());
    });
}
    console.log(pizza.toppings)

$(document).ready(function(){
    
    


    
    $("#show-order").click(function () {
        let pizza = new Pizza()
      
        function dumpInArray(){
            //var toppings = [];
            $('#toppings input[type="checkbox"]:checked').each(function(){
               pizza.toppings.push($(this).val());
            });
            //return toppings; 
         }
        console.log(dumpInArray())
        console.log(pizza)
      
        console.log(pizza.toppings)
        
        pizza.size = parseInt($("#size").val())
       
        console.log(pizza.size)
        
    $("#output").html("Your order:" + "<br>" +  $("#size option:selected").text() + "<br>" + pizza.toppings)
    $("#output").show();
  });





});

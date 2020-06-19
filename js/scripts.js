
function Pizza(){
this.toppings = []
this.size = 0
this.cost = 0
}

Pizza.prototype.price = function(){
if (this.size === 1){
    this.cost = 10
}else if(this.size === 2){
    this.cost = 15
}else if (this.size === 3){
    this.cost = 20
}
return this.cost

}

let pizza = new Pizza
// Pizza.prototype.toppings = function(){
    
//     this.toppings = [];
//     $('#toppings input[type="checkbox"]:checked').each(function(){
//       this.toppings.push($(this).val());
//     });
// }
    console.log(pizza.toppings)

$(document).ready(function(){
    
    

   
    let pizza = new Pizza()

    
    $("#show-order").click(function () {
        $('#toppings input[type="checkbox"]:checked').each(function(){
            pizza.toppings.push($(this).val());
          });
   pizza.price(pizza)
       
       console.log(pizza.toppings)
       
       pizza.size = parseInt($("#size").val())
       
       console.log(pizza.size)
       console.log(pizza)
       console.log(pizza.price(pizza))
    $("#output").html("Your order:" + "<br>" +  $("#size option:selected").text() + "<br>" + pizza.toppings)
    $("#output").show();
  });
});


function Pizza(){
this.toppings = []
this.size = 0
this.cost = 0
}

Pizza.prototype.price = function(){

for (i = 0; i < this.toppings.length ; i++){

    this.cost += 2
}



    if (this.size === 1){
    this.cost += 10
}else if(this.size === 2){
    this.cost += 15
}else if (this.size === 3){
    this.cost += 20
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
    //pizza.price(pizza)
  
    
    $("#show-order").click(function () {
        $('#toppings input[type="checkbox"]:checked').each(function(){
            pizza.toppings.push($(this).val());
          });
  
       //pizza.cost = 55
       console.log(pizza.toppings)
       
       pizza.size = parseInt($("#size").val())
       
       console.log(pizza.size)
       console.log(pizza.price(pizza))
       console.log(pizza)
    $("#output").html("Your order:" + "<br>" +  $("#size option:selected").text() + "<br>" + pizza.toppings)
    $("#output").show();
  });
});


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

console.log(pizza.toppings)

$(document).ready(function(){
    
    

   
    let pizza = new Pizza()
    
  
    
    $("#show-order").click(function () {
        $('#toppings input[type="checkbox"]:checked').each(function(){
            pizza.toppings.push("<li>" + $(this).val());
          });
  
      
       console.log(pizza.toppings)
       
       pizza.size = parseInt($("#size").val())
       
       console.log(pizza.size)
       console.log(pizza.price(pizza))
       console.log(pizza)
    $("#output").html("Your order:" + "<br>" +  "Size:" + $("#size option:selected").text() + "<br>" + "Toppings:" + "<br>"  + "</ul>" + "<br>" + "Total cost:" + "$" + pizza.cost) 
    $("#output").show();
    $("#price").html(pizza.toppings)

});
});


function Pizza(size, toppings, orderCount, cost, totalCost) {
    this.toppings = toppings;
    this.size = size;
    this.cost = cost;
    this.orderCount = orderCount;
    this.totalCost = totalCost
}

Pizza.prototype.price = function () {
   
   
    
    
    
    
    if (this.size === 1 || this.size === 2 || this.size === 3) {
        for (i = 0; i < this.toppings.length; i++) {
            this.cost += 2
        }
        if (this.size === 1) {
            this.cost += 10
        } else if (this.size === 2) {
            this.cost += 15
        } else if (this.size === 3) {
            this.cost += 20
        }
        return this.cost
    }
    
}


Pizza.prototype.total = function(){
    
    
 return  this.orderCount += 1
}



$(document).ready(function () {

    $("#show-order").click(function () {
        let size = parseInt($("#size").val())
        let toppings = []
        let orderCount = 0
        let cost = 0
        
        
        if (!size) {
         $("#warning").text("Please choose a size!")
        } else {
        $("#warning").text("")

        $('#toppings input[type="checkbox"]:checked').each(function () {
            toppings.push("<li>" + $(this).val());
        });
        console.log(toppings)
        let pizza = new Pizza(size, toppings, orderCount, cost)
        pizza.price()
        pizza.total()
        console.log(pizza.cost)
        
        console.log(pizza.total())
        $("#output").append("<hr class='my-4'></hr>" + "<h4>Your order: " + "#" + pizza.orderCount + toppingsDisplay().val() + "</h4>" + "<hr class='my-4'></hr>" + "<br>" + "Size:" + " " + $("#size option:selected").text() + "<br>" + "Toppings:" + toppings.join("") + "<br>" + "</ul>" + "<br>" + "This pizza cost:" + " " + "$" + pizza.cost + "<br>" + "Totalcost:" + " " + "$" + pizza.total())
        function toppingsDisplay() {
            if (toppings.includes("<li>pepperoni --$2") && toppings.includes("<li>green-peppers --$2") && toppings.includes("<li>onions --$2")) {
                return $("#output").append('<img src="img/pepperoni-green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>pepperoni --$2") && toppings.includes("<li>onions --$2")) {
                return $("#output").append('<img src="img/pepperoniOnionPizza.png" alt="pepOn" width="200" height="200"><br>')
            } else if (toppings.includes("<li>pepperoni --$2") && toppings.includes("<li>green-peppers --$2")) {
                return $("#output").append('<img src="img/pepperoni-green-peppers.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>onions --$2") && toppings.includes("<li>green-peppers --$2")) {
                return $("#output").append('<img src="img/green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>onions --$2") && toppings.includes("<li>green-peppers --$2")) {
                return $("#output").append('<img src="img/green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>pepperoni --$2")) {
                return $("#output").append('<img src="img/pepperoniPizza.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>green-peppers --$2")) {
                return $("#output").append('<img src="img/green-peppers.png" alt="pep" width="200" height="200"><br>')
            } else if (toppings.includes("<li>onions --$2")) {
                return $("#output").append('<img src="img/onions.png" alt="pep" width="200" height="200"><br>')
            } else {
                return $("#output").append('<img src="img/cheesePizza.png" alt="pep" width="200" height="200"><br>')
            }
        }


        $('input[type=checkbox]').each(function () {
            this.checked = false;
        });


        $('#size').val('');



        $(".pizza-cheese").show()
        $("#container-show").show()
        $("#output").show();
        
      //pizza.totalCost += pizza.cost  
    console.log(pizza.total())
    
    }
    });
    
});





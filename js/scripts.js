
function Pizza() {
    this.toppings = []
    this.size = 0
    this.cost = 0
    this.orderCount = 1
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

let pizza = new Pizza

console.log(pizza.toppings)

$(document).ready(function () {
    let pizza = new Pizza()

    $("#show-order").click(function () {


        pizza.size = parseInt($("#size").val())
        console.log(pizza.size)
        if (!pizza.size) {
            $("#warning").text("Please choose a size!")
        } else {
            $("#warning").text("")

            $('#toppings input[type="checkbox"]:checked').each(function () {
                pizza.toppings.push("<li>" + $(this).val());
            });


            console.log(pizza.toppings)

            pizza.size = parseInt($("#size").val())


            console.log(pizza.price(pizza))
            console.log(pizza)
            $("#output").append("<hr class='my-4'></hr>" + "<h4>Your order: " + "#" + pizza.orderCount + "</h4>" + "<hr class='my-4'></hr>" + "<br>" + "Size:" + " " + $("#size option:selected").text() + "<br>" + "Toppings:" + pizza.toppings.join("") + "<br>" + "</ul>" + "<br>" + "Total cost:" + "$" + pizza.cost)

            if (pizza.toppings.includes("<li>pepperoni --$2")) {
                
                $(".pizza-cheese").append('<img src="/img/pepperoniPizza.png" alt="pep" width="200" height="200"><br><br><br><br>')
            }
            
            $(".pizza-cheese").show()
            $("#container-show").show()
            $("#output").show();

            $('input[type=checkbox]').each(function () {
                this.checked = false;
            });

            pizza.toppings = []
            $('#size').val('');

            pizza.orderCount += 1
        }
    });
});
            

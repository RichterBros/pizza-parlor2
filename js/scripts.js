
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

$(document).ready(function () {
    let pizza = new Pizza()

    $("#show-order").click(function () {
        pizza.size = parseInt($("#size").val())

        if (!pizza.size) {
            $("#warning").text("Please choose a size!")
        } else {
            $("#warning").text("")

            $('#toppings input[type="checkbox"]:checked').each(function () {
                pizza.toppings.push("<li>" + $(this).val());
            });

            pizza.size = parseInt($("#size").val())

            pizza.price(pizza)

            $("#output").append("<hr class='my-4'></hr>" + "<h4>Your order: " + "#" + pizza.orderCount + toppingsDisplay().val() + "</h4>" + "<hr class='my-4'></hr>" + "<br>" + "Size:" + " " + $("#size option:selected").text() + "<br>" + "Toppings:" + pizza.toppings.join("") + "<br>" + "</ul>" + "<br>" + "Total cost:" + "$" + pizza.cost)
            function toppingsDisplay() {
                if (pizza.toppings.includes("<li>pepperoni --$2") && pizza.toppings.includes("<li>green-peppers --$2") && pizza.toppings.includes("<li>onions --$2")) {
                    return $("#output").append('<img src="img/pepperoni-green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>pepperoni --$2") && pizza.toppings.includes("<li>onions --$2")) {
                    return $("#output").append('<img src="img/pepperoniOnionPizza.png" alt="pepOn" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>pepperoni --$2") && pizza.toppings.includes("<li>green-peppers --$2")) {
                    return $("#output").append('<img src="img/pepperoni-green-peppers.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>onions --$2") && pizza.toppings.includes("<li>green-peppers --$2")) {
                    return $("#output").append('<img src="img/green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>onions --$2") && pizza.toppings.includes("<li>green-peppers --$2")) {
                    return $("#output").append('<img src="img/green-peppers-onions.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>pepperoni --$2")) {
                    return $("#output").append('<img src="img/pepperoniPizza.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>green-peppers --$2")) {
                    return $("#output").append('<img src="img/green-peppers.png" alt="pep" width="200" height="200"><br>')
                } else if (pizza.toppings.includes("<li>onions --$2")) {
                    return $("#output").append('<img src="img/onions.png" alt="pep" width="200" height="200"><br>')
                } else {
                    return $("#output").append('<img src="img/cheesePizza.png" alt="pep" width="200" height="200"><br>')
                }
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





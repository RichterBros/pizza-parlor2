function Pizza(size, toppings, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

function Count(clickCount) {
  this.clickCount = clickCount;
}

Count.prototype.click = function () {
  return this.clickCount++
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
  let clickCount = 0
  let count = new Count(clickCount)
  $("#show-order").click(function () {
    count.click()
    let cost = 0
    let size = parseInt($("#size").val())

    if (!size) {
      $("#warning").text("Please choose a size!")
    } else {
      $("#warning").text("")
      let toppings = []
      $('#toppings input[type="checkbox"]:checked').each(function () {
        toppings.push("<li>" + $(this).val());
      });

      let pizza = new Pizza(size, toppings, cost)
      cost = pizza.price()

      $("#output").append("<hr class='my-4'></hr>" + "<h4>Your order: " + "#" + count.clickCount + toppingsDisplay().val() + "</h4>" + "<hr class='my-4'></hr>" + "<br>" + "Size:" + " " + $("#size option:selected").text() + "<br>" + "Toppings:" + toppings.join("") + "<br>" + "</ul>" + "<br>" + "Total:" + " " + "$" + cost + "<br>")
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

      $(".pizza-cheese").show()
      $("#container-show").show()
      $("#output").show();
      $('#size').val('');
    }
  });
});





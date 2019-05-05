
var Templates = require('../Templates');
var Storage = require('../LocalStorage');

//Перелік розмірів піци
var PizzaSize = {
    Big: "big_size",
    Small: "small_size"
};

//Змінна в якій зберігаються перелік піц в кошику
var Cart = [];

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");
var $header = $(".top-part");
var $footer = $(".bottom-part");

function addToCart(pizza, size) {
    //Додавання однієї піци в кошик покупок

    var added = false;

    Cart.forEach(function (cart_item) {
        if (!added) {
            if (cart_item.pizza === pizza && cart_item.size === size) {

                cart_item.quantity += 1;
                added = true;

            }
        }


    });

    //Приклад реалізації, можна робити будь-яким іншим способом
    if (!added) {
        Cart.push({
            pizza: pizza,
            size: size,
            quantity: 1
        });
    }
    //Оновити вміст кошика на сторінці
    updateCart();
}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика

    Cart.splice(Cart.indexOf(cart_item), 1);

    //Після видалення оновити відображення
    updateCart();
}

function clearCart(Cart) {

    Cart.splice(0, Cart.length);
    updateCart();

}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    //TODO: ...

    var orders = Storage.get("cart");

    if (orders)
        Cart = orders;

    updateCart();
}

function getPizzaInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.PizzaCart_OneItem(cart_item);

        var $node = $(html_code);

        var sum = cart_item.quantity * cart_item.pizza[cart_item.size].price;
        $node.find(".how-money").text(sum);

        $node.find(".plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;

            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function () {
            //Зменшуємо кількість замовлених піц
            if (cart_item.quantity <= 1) {
                removeFromCart(cart_item);
            } else {
                cart_item.quantity -= 1;
            }
            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".count-clear").click(function () {
            removeFromCart(cart_item);
            updateCart();
        });

        if (document.location.href == "http://localhost:5050/order.html") {

            $node.find(".plus").css("display", "none");
            $node.find(".minus").css("display", "none");
            $node.find(".count-clear").css("display", "none");

            var piz = "";

            if (cart_item.quantity == 1) piz = "піца";
            else if (cart_item.quantity % 10 == 2 || cart_item.quantity % 10 == 3 || cart_item.quantity % 10 == 4) piz = "піци";
            else piz = "піц";

            $node.find(".counter").text(cart_item.quantity + " " + piz);

        } else {

            $node.find(".plus").css("display", "inline-block");
            $node.find(".minus").css("display", "inline-block");
            $node.find(".count-clear").css("display", "inline-block");
            $node.find(".counter").text(cart_item.quantity);

        }

        $cart.append($node);


    }

    $header.find(".clear-order").click(function () {

        clearCart(Cart);

    });

    $header.find(".badge").text(Cart.length);

    var sum = 0;
    Cart.forEach(function (t) {

        sum += parseInt(t.pizza[t.size].price) * parseInt(t.quantity);

    });

    if (document.location.href == "http://localhost:5050/order.html") {

        $header.find(".button-clear").css("visibility", "hidden");

    } else {

        $header.find(".button-clear").css("visibility", "visible");
    }

    $footer.find(".sum-order-number").text(sum);

    if (Cart.length < 1) {
        $(".submit-order").attr("disabled", true);
    } else {
        Cart.forEach(showOnePizzaInCart);
        $(".submit-order").attr("disabled", false);
    }

    $(".submit-order").click(function () {
        document.location.href = "http://localhost:5050/order.html";
    });

    var orders = Cart;
    Storage.set("cart", orders);

    Cart.forEach(showOnePizzaInCart);

}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.PizzaSize = PizzaSize;
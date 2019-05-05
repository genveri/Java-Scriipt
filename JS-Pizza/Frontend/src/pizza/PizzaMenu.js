var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML ������� ���� ������ ���������� ���
var $pizza_list = $("#pizza_list");
var $inner = $(".inner-container");

function showPizzaList(list) {
    //������� ���� ��� � ������
    $pizza_list.html("");

    //��������� ���� ���
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-big").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });
        $node.find(".buy-small").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        });

        $pizza_list.append($node);
    }

    console.log(list);

    list.forEach(showOnePizza);
}

function filterPizza(filter) {
    //����� ���� ���������� ��� �� ����� ��������
    var pizza_shown = [];

    Pizza_List.forEach(function (pizza) {
        //���� ��� ������� �������

        if (filter === "all") {
            pizza_shown.push(pizza);
        } else if (filter === "vegan") {
            if (!pizza.content.meat && !pizza.content.chicken && !pizza.content.ocean)
                pizza_shown.push(pizza);
        } else {
            if (pizza.content[filter])
                pizza_shown.push(pizza);
        }

    });

    $inner.find(".orange-circle").text(pizza_shown.length);

    //�������� ������������ ���
    showPizzaList(pizza_shown);
}

function initialiseMenu() {
    //�������� �� ���

    $inner.find(".btn").click(function () {

        $inner.find(".btn").removeClass("pressed");
        $(this).addClass("pressed");
        filterPizza(event.target.id);

    });

    showPizzaList(Pizza_List)
}

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;
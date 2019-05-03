exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Pizza KMA'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Замовлення'
    });
};
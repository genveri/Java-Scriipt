
exports.startPage = function(req, res) {
    res.render('startPage', {
        pageTitle: 'Travel'
    });
};

exports.wayPage = function(req, res) {
    res.render('wayPage', {
        pageTitle: 'Way'
    });
};

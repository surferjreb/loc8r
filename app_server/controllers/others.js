/*GET home page*/

module.exports.about = function(req, res) {
    res.render('generic_text', {title: 'About'});
};
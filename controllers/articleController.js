const {Article} = require('../models');

module.exports.renderAddForm = function(req, res){
    const article = {
        title: '',
        intro: '',
        image_url: '',
        body: ''
    };
    res.render('articles/add', {article});
}

module.exports.addArticle = async function(req, res){
    const article = await Article.create({
        title: req.body.title,
        intro: req.body.intro,
        image_url: req.body.image_url,
        body: req.body.body,
        author_id: 1, //todo get logged in user
        published_on: new Date()
    });
    res.redirect('/') //todo change the redirect to view all once made
}
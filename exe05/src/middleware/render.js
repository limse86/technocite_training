function Render() {
    let PagesModel = require(`${process.cwd()}/src/models/pages`);
    let model = PagesModel();

    function middleware(req, res, next) {
        console.log('render');
        var page = model.searchPageByUrl(req.url);
        if (page) {
            res.render(page.template,{layout:page.layout,model:page});
        } else {
            next();
        }
    };

    return middleware;
}

module.exports = Render;
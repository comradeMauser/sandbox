const products = [] //plug-3ambI4ka


// /admin/add-product ==> GET
exports.getAddProduct = (req, res, next) => {
    res.render("add-product",
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        })
}

// /admin/add-product ==> POST
exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    // const products = adminData.products
    res.render("shop",
        {
            prods: products,
            pageTitle: "Shop",
            path: '/shop',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        })
}
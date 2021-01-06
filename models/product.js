const fs = require('fs')
const path = require('path')


module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")

        fs.readFile(p, (err, data) => {
            let products = []
            if (!err) {
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(callback) {
        const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")

        fs.readFile(p, (err, data) => {
            if (err) {
                callback([])
            }
            callback(JSON.parse(data))
        })
        // return products
    }
}
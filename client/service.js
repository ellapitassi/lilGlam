//like sequelize

// const {products} = require('../db/index.js')
app.service('ProductService', function($http){
    /*const products = 
    [{id: 0, name: 'hair dryer'}, 
    {id: 1, name: 'hair brush'}, 
    {id: 2, name: 'nail polish'}]
    */
   const products = []
   const findAll = () => {
        return $http.get('/api/products')
        .then(res => {
            angular.copy(res.data, products)
            console.log(products)
            return res.data;
        })
   }

    const create = function(name){
        products.push({id: products.length, name})
        console.log(products)
    }

    const destroy = function(id){
        const filtered = products.filter( product=> product.id !== id)
        angular.copy(filtered, products)
    }

    const edit = function(id){
        console.log("id", id)
    }

    return {
        products,//this is now the get/findAll function
        create,
        destroy,
        edit,
        findAll
    }
})
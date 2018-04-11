//to reuse
app.directive('productSummary', function(){
    return {
        templateUrl: '/client/templates/productSummary.html',
        controller: 'ProductSummary'
    }
})

app.directive('productList', function(){
    return {
        templateUrl: '/client/templates/productList.html',
        controller: 'ProductList'
    }
})

// app.directive('productDetails', function(){
//     return {
//         templateUrl: '/client/templates/productDetails.html',
//         controller: 'ProductDetails'
//     }
// })
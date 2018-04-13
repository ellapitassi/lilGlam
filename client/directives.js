//to reuse
app.directive('addProduct', function(){
    return {
        templateUrl: '/client/templates/addProduct.html',
        controller: 'ProductSummary'
    }
})

app.directive('productList', function(){
    return {
        templateUrl: '/client/templates/productlist.html',
        controller: 'ProductForm'
    }
})

// angular.module('glamsquad')
//     .directive('gsNav', function(){

app.directive('gsNav', function(){
    return {
        templateUrl: '/client/templates/gsNav.html'//,
        // controller: 'ProductForm'
    }
})
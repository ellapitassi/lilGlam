//$provide: for factories, $compileProvider: for directives, $filterProvider: for filter

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $stateProvider
        .state('home', {
            url: '/home',
            template: 'home',
        })
        .state('products', {
            url: '/products',
            templateUrl: '/client/templates/productlist.html',
            controller: 'ProductList'
        })
        .state('products.add-product', {
            url: '/add-product',
            templateUrl: '/client/templates/addProduct.html',
            controller: 'ProductForm'
        })
    $urlRouterProvider.otherwise('/')
})
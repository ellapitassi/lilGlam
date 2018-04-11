//like router
app.controller('ProductList', function($scope, ProductService){
    $scope.edit = {}
    $scope.products = ProductService.products
    $scope.destroyProduct = (ID) => ProductService.destroy(ID)
    $scope.clickedEdit = (ID) => {
        $scope.edit[ID] = !$scope.edit[ID]
    }
    $scope.editProduct = (ID) => ProductService.edit(ID)
})

app.controller('ProductDetails', function($scope, ProduceService){

})

app.controller('ProductSummary', function($scope, ProductService){
    $scope.count = () => ProductService.products.length
})

app.controller('ProductForm', function($scope, ProductService){
    $scope.submit = (productName) => {
        ProductService.create(productName)
        $scope.name = ''
    }
    ProductService.findAll()
    .then(products => {
        $scope.products = products
    })
});


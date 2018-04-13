//like router (or link is ~the same)
app.controller('ProductList', function($scope, ProductService, $state){
    console.log($state)
    ProductService.findAll()
    .then(products => {
        $scope.products = products
    })
    $scope.edit = {}
    $scope.products = ProductService.products
    $scope.destroyProduct = (ID) => ProductService.destroy(ID)
    $scope.clickedEdit = (ID) => {
        // $scope.editing = $scope.editing === ID ? null : ID;
        $scope.edit = ID
    }
    $scope.editProduct = (ID) => ProductService.edit(ID)
    $scope.count = () => ProductService.products.length
    $scope.showAddProducts = ()=> {
        return $state.current.name === 'products';
    }
})

app.controller('addProduct', function($scope, ProductService){
    // $scope.count = () => ProductService.products.length
})

app.controller('ProductForm', function($scope, ProductService){
    $scope.submit = (productName) => {
        ProductService.create(productName)
        $scope.name = ''
    }
    // ProductService.findAll()
    // .then(products => {
    //     $scope.products = products
    // })
});


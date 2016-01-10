var bookStoreApp = angular.module('bookStoreApp', ['ngRoute','bookStoreServices']);

bookStoreApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/books', {
        templateUrl: './list/list.html',
        controller: 'BookListController'
    })
    .when('/books/:bookId', {
        templateUrl: './detail/detail.html',
        controller: 'BookDetailController'
    }).
    otherwise({
      redirectTo: '/books'
    });
}]);

bookStoreApp.controller('BookListController', ['$scope', 'Books', function($scope, Books) {
  $scope.books= Books.query();
}]);

bookStoreApp.controller('BookDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.bookId = $routeParams.bookId;
}]);

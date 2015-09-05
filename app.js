angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post 1', upvotes: 4},
    {title: 'post 2', upvotes: 32},
    {title: 'post 3', upvotes: 8},
    {title: 'post 4', upvotes: 15},
    {title: 'post 5', upvotes: 23}
    ],
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };
}]);

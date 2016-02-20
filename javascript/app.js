var app = angular.module('legitNews', []);

app.factory('posts', [function() {
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
      $scope.posts = posts.posts;
    };


    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };


    $scope.posts = [{
      title: 'post 1',
      upvotes: 3
    }, {
      title: 'post 2',
      upvotes: 14
    }, {
      title: 'post 3',
      upvotes: 10
    }, {
      title: 'post 4',
      upvotes: 7
    }, {
      title: 'post 5',
      upvotes: 6
    }];
  }
]);

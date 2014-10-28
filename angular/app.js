var todomvc = angular.module('todomvc', []);

todomvc.controller('todoCtrl', function($scope){

$scope.todosList = [];

$scope.addTodo=function(){
var newTodo = $scope.newTodo.trim();
if (!newTodo.length) {
	return;
	}
$scope.todosList.push($scope.newTodo);
$scope.newTodo = '';
};

$scope.editTodo = function (todo) {
$scope.todoEdited = todo;
};

$scope.doneEditing = function (todo) {
todo = $scope.editedTodo.trim();
};
	
$scope.removeTodo = function (todo) {
$scope.todosList.splice($scope.todosList.indexOf(todo), 1);
};

});
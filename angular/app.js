var todomvc = angular.module('todomvc', []);

todomvc.controller('todoCtrl', function($scope){

$scope.todosList = [];
$scope.todoFilter=null;

$scope.addTodo=function(){
var newTodo = $scope.newTodo.trim();
if (!newTodo.length) {
	return;
	}
$scope.todosList.push({
text:$scope.newTodo,
completed: false
});
$scope.newTodo = '';
};

$scope.startEdit = function (todo) {
text = todo.text;
$scope.editedTodo = todo;
};

$scope.doneEditing = function () {
$scope.editedTodo = null;
};

$scope.removeTodo = function (todo) {
$scope.todosList.splice($scope.todosList.indexOf(todo), 1);
};

$scope.completeTodo = function (todo){
todo.completed = !todo.completed;
};

$scope.selectFilter = function(arg) {
$scope.todoFilter=arg;
};

$scope.checkAll = function() {
$scope.todosList.forEach(function(todo){
todo.completed=$scope.masterCheckbox;
});
};

$scope.clearCompleted = function() {
$scope.todosList.forEach(function(todo){
if(todo.completed==true){
$scope.removeTodo(todo);}
});
};

});
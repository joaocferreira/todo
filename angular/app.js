var todomvc = angular.module('todomvc', []);

todomvc.controller('todoCtrl', function($scope){

$scope.todosList = [];

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
if($scope.masterCheckbox==true){
$scope.checked=true;}
else{
$scope.checked=false;}
};

});
var app = angular.module('projects', []);
app.controller('ProjectsController', function($scope) {
    $scope.view1Boolean=false;  
    var numberOfProjects=3;
    $scope.projects=[];
    for (var i=0;i<numberOfProjects;i++) {
        $scope.projects[i]={};
        $scope.projects[i].viewBoolean=false;
        $scope.projects[i].viewProject= function() {
            var display;
            if (!this.viewBoolean) display=true;
            else display=false;
            for (var j=0;j<numberOfProjects;j++){
                $scope.projects[j].viewBoolean=false;
            }
            if (display) this.viewBoolean=true; 
        }
    }
});


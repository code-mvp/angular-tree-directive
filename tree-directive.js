var treeModule = angular.module("treeModule", []);

treeModule.directive("tree", function (){
  return {
    restrict: "E",
    replace: true,
    scope: {
      collection: "=",
      onClick: "&"
    },
    controller: function ($scope) {
       $scope.toggle = function ($event) {
        console.log("treeDirective toggle");
      }; 
      
      // method to listen for event
      $scope.$on('toggleEvent', function(event, data) {
        console.log('on: ', $scope);
        console.log("Catched toggle event: " + event.name, data);
        //todo:
        console.log("on: ", $scope.collection);
        
        // parameter naming is important in this case.
        // onClick is cliced on the directive in index.html
        $scope.onClick({data:data});  
        
      });
    },
    templateUrl: "tree.html"  
  }
});

treeModule.directive("treeNode", function ($compile) {
  return {
    restrict: "E",
    replace: true,
    scope: true,
    templateUrl: "tree-node.html",
    link: function (scope, element, attrs, treeCtrl) {
      console.log("Link Scope: ", scope.toggle());
      if (angular.isArray(scope.member.child)) {
        element.append("<tree collection='member.child'></tree>"); 
        $compile(element.contents())(scope); 
         
        element.on("click", function (e) {
          $(e.target).toggleClass("selected");
          if ($(e.target).next("ul").hasClass("hide")) {  
            $(e.target).next("ul").show();
            $(e.target).next("ul").removeClass("hide");
            scope.$emit('toggleEvent', {response: scope.member}); // emit dispatches upward
            console.log("expanded click: ", scope.member);
            
          }
          else {
            console.log("collapsed click: ", scope.member);
            $(e.target).next("ul").hide();
            $(e.target).next("ul").addClass("hide");
            scope.$emit('toggleEvent', {response: scope.member}); // emit dispatches upward
          }
        }); 
      }
    }
  }
});




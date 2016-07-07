var appModule = angular.module("myApp", ['treeModule']);

appModule.controller("appController", function ($scope){
  var vm = this;
  vm.onItemSelected = function (data) {
    console.log('app: finally:', JSON.stringify(data));   
  };
  
  vm.data = [
    { 
      name: "p1",
      child:[
         { 
          name: "a1",
          child: [
            { name: "aa1"},
            { name: "aa2"}
          ]    
         },
         {
           name: "a2"
         }
      ]
    },
    { 
      name: "p2",
      child:[
         { 
          name: "b1",
          child: [
            { 
              name: "bb1",
              child: [
                { name: "cc1"},
                { name: "cc2"},
              ]
            },
          ]    
         },
         {
           name: "bb2"
         }
      ]
    },
    {
      name: "p3"
    }
  ];
  
  vm.data2 = [
    { 
      name: "q1",
      child:[
         { 
          name: "a1",
          child: [
            { name: "aa1"},
            { name: "aa2"}
          ]    
         },
         {
           name: "a2"
         }
      ]
    },
    { 
      name: "q2",
      child:[
         { 
          name: "b1",
          child: [
            { 
              name: "bb1",
              child: [
                { name: "cc1"},
                { name: "cc2"},
              ]
            },
          ]    
         },
         {
           name: "bb2"
         }
      ]
    },
    {
      name: "z3"
    }
  ];
  
});


 logo.controller("voteModify",function($scope){
     $scope.voteData = {
         cate : ["农场特色","农产品特色"],
         type:["单选","多选","混合"],
         status:["发布","草稿"],
         title:["大家都喜欢什么类型的农场？"],
         item : ["亲子", "采摘", "种地", "烧烤", "垂钓", "爬山"]

     };
     var vote = {
         cate:[],
         type:[],
         status:[],
         title:["大家都喜欢什么类型的农场?"],
         item:[
             {
                id:0, value:"亲子"
             }
         ]
     };
     //$scope.oriData = angular.copy(vote);
     //多选按钮的点击事件
     $scope.voteCate = function(text){
        var index = vote.cate.indexOf(text);
         if(index == -1){
             vote.cate.push(text);
         }else{
             vote.cate.splice(index,1);
         }
     };
    $scope.voteType = function(text){
        var index = vote.type.indexOf(text);
        if(index == -1){
            vote.type.push(text);
        }else{
            vote.type.splice(index,1);
        }
    };
     $scope.voteStatus = function(text){
         var index = vote.status.indexOf(text);
         if(index == -1){
             vote.status.push(text);
         }else{
             vote.status.splice(index,1);
         }
     };
     //添加事件
     $scope.addVoteItem = function(){
         vote.item.push( {
             id:0, value:"亲子"
         });
     };
     //移除一项
     $scope.deleteVoteItem = function(id){
         var index = vote.item.indexOf(id);
         vote.item.splice(index,1);
     };




     $scope.vote=vote;

     $scope.voteSubmit = function(){
         console.log(vote);
     };
     $scope.voteResize = function(){
         //vote = angular.copy($scope.oriData);
         //$scope.myForm.$setPristine();

         $scope.vote = {
             item:[{id:0, value:"亲子"}]
         };

         console.log(vote);
     }
});


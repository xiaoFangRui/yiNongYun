/**
 * Created by Administrator on 2016/8/8.
 */
var app=angular.module('myApp',['mynav','ngRoute']);


//controller控制部分--Start--
app.controller('mainCtrl',function($scope,$location){
    //Geturl($location);

});

//function Geturl($location){
//    var index=$location.absUrl().split('/').length-1;
//    var href=$location.absUrl().split('/')[index].split('.')[0];
//
//    return href;
//}
//


app.controller('headerCtrl',function($scope){
    $scope.loginhref="logo.html";      //!!!!!!!!!!看房锐的命名
    $scope.applyhref="register.html";      //!!!!!!!!!!看房锐的命名
});

app.controller('headernavCtrl',function($scope){
    $scope.indexhref="index.html";      //!!!!!!!!!!看组员的命名
    $scope.producthref="product.html";      //!!!!!!!!!!看组员的命名
    $scope.newhref="new.html";      //!!!!!!!!!!看组员的命名



    //hover效果--Start--
    //$scope.index = 0;
    //$scope.changeStyle = function(e){
    //    console.log($scope.index);
    //    $scope.index = e.target.dataset.index;
    //};

    $scope.changeStyle = function(con){
        angular.forEach($scope.navs,function(data,index,j){
            $scope.index = con;
        })
    };
    //hover效果--END--

    $scope.navs=[
        {href:"index.html",con:"首页"},
        {href:"product.html",con:"产品商城"},
        {href:"new.html",con:"新闻公告"}
    ];



});
//controller控制部分--END--


//directive自定义指令--Start--
app.directive('indexfooter',function(){
    return{
        restrict:'AE',
        templateUrl:'indexview/foot.html'
    }
});
app.directive('headertop',function(){
    return{
        restrict:'AE',
        templateUrl:'indexview/headertop.html'
    }
});
app.directive('headernav',function(){
    return{
        restrict:'AE',
        templateUrl:'indexview/indexnav.html'
    }
});


//directive自定义指令--END--

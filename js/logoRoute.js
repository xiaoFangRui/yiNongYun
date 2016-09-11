/**
 * Created by Administrator on 2016/8/9.
 */
var logo = angular.module("logo",['ngRoute']);

logo.constant("Routes",{
    farmManagement:"/farmManagement",       //农场管理
    farmDetail:"/farmDetail",               //农场详情
    productDetail:"/productDetail",          //产品详情
    policyDetail:"/policyDetail",            //政策详情
    vote:"/vote" ,                            //投票
    voteModify:"/voteModify"   ,               //投票修改
    role:"/role",                               //角色管理
    policy:"/policy"                            //政策-文章分类
});

logo.config(["$routeProvider","Routes",function($routeProvider,Routes){
    $routeProvider
        .when(Routes.farmManagement,{
            templateUrl:"views/farmManagement.html",
            controller:"farmManagement"
        })
        .when(Routes.farmDetail,{
            templateUrl:"views/farmDetail.html",
            controller:"farmDetail"
        })
        .when(Routes.productDetail,{
            templateUrl:"views/productDetail.html",
            controller:"productDetail"
        })
        .when(Routes.policyDetail,{
            templateUrl:"views/policyDetail.html",
            controller:"policyDetail"
        })
        .when(Routes.vote,{
            templateUrl:"views/vote.html",
            controller:"vote"
        })
        .when(Routes.voteModify,{
            templateUrl:"views/voteModify.html",
            controller:"voteModify"
        })
        .when(Routes.role,{
            templateUrl:"views/role.html",
            controller:"role"
        })
        .when(Routes.policy,{
            templateUrl:"views/policy.html",
            controller:"policy"
        })
        .otherwise({
            redirectTo:Routes.role
        })
}]);
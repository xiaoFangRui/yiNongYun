/**
 * Created by Administrator on 2016/8/13.
 */

var register = angular.module("register",['ngRoute']);

register.constant("Routes",{
    setting:"/registerSetting",
    basic:"/registerBasic",
    approve:"/registerApprove"
});

register.config(["$routeProvider","Routes",function($routeProvider,Routes){
    $routeProvider
        .when(Routes.setting,{
            templateUrl:"views/registerSetting.html",
            controller:"registerSetting"
        })
        .when(Routes.basic,{
            templateUrl:"views/registerBasic.html",
            controller:"registerBasic"
        })
        .when(Routes.approve,{
            templateUrl:"views/registerApprove.html",
            controller:"registerApprove"
        })
        .otherwise({
            redirectTo:Routes.setting
        })
}])
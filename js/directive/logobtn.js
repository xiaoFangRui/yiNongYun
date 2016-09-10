/**
 * Created by Administrator on 2016/8/12.
 */

logo.directive("logobluebtn",function(){
    return{
        restrict:"EA",
        template:"<button class='logoBlueBtn'><span ng-transclude ></span></button>",
        replace:true,
        transclude:true
    }
});

//logo.directive("logoform",function(){
//    return{
//        restrict:"EA",
//        templateUrl:"umeditor1_2_2-src/direct.html",
//        //replace:true
//    }
//});
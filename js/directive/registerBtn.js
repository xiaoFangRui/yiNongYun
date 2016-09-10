/**
 * Created by Administrator on 2016/8/13.
 */

register.directive("registerbtn",function(){
    return{
        restrict:"EA",
        template:"<button class='registerBtn'><span ng-transclude></span></button>",
        replace:true,
        transclude:true
    }
});
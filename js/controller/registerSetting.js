/**
 * Created by Administrator on 2016/8/13.
 */

register.controller("registerSetting",function($scope){
    $scope.regSetting = {};

    $scope.settingSubmit = function(isValid){
        if(isValid){
            console.log($scope.regSetting);
            window.location.href = "#registerBasic";
        }else{
            alert('验证失败');
        }

    }
});
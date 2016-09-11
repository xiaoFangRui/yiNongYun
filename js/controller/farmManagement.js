/**
 * Created by Administrator on 2016/8/9.
 */

logo.controller("farmManagement",function($scope){
    $scope.info = [
        {
            number:"1",
            name:"风雨农场",
            link:"吴世勋",
            phone:"13899668866",
            area:"2000",
            production:"1280",
            sale:"1200",
            level:"一级",
            score:"50",
            account:"正常",
            operation:"停用"
        },
        {
            number:"1",
            name:"风雨农场",
            link:"吴世勋",
            phone:"13899668866",
            area:"2000",
            production:"1280",
            sale:"1200",
            level:"一级",
            score:"50",
            account:"正常",
            operation:"停用"
        },
        {
            number:"1",
            name:"风雨农场",
            link:"吴世勋",
            phone:"13899668866",
            area:"2000",
            production:"1280",
            sale:"1200",
            level:"一级",
            score:"50",
            account:"正常",
            operation:"停用"
        }
    ];
    $scope.listAdd = function(){
        $scope.info.push( {
            number:"1",
            name:"风雨农场",
            link:"吴世勋",
            phone:"13899668866",
            area:"2000",
            production:"1280",
            sale:"1200",
            level:"一级",
            score:"50",
            account:"正常",
            operation:"停用"
        });
    }

});
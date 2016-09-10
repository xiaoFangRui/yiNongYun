/**
 * Created by Administrator on 2016/8/13.
 */
register.filter("registerCity",function(){      //三联下拉菜单过滤
    return function(data,parent){
        var city=[];
        angular.forEach(data,function(item){
            if(item.parent == parent){
                city.push(item);
            }
        });
        return city;
    }
});

register.controller("registerBasic",function($scope){
    $scope.regBasic = {
        type:[],
        city:{}
    };
    $scope.type = ["水果","蔬菜","畜禽","林业"];
    $scope.city = [
        {"name":"黑龙江","parent":0,"id":1},
        {"name":"绥化市","parent":1,"id":10},
        {"name":"哈尔滨市","parent":1,"id":11},
        {"name":"大庆市","parent":1,"id":12},
        {"name":"绥棱县 ","parent":10,"id":100},
        {"name":"北林区 ","parent":10,"id":101},
        {"name":"双城区 ","parent":11,"id":110},
        {"name":"木兰县","parent":11,"id":111},
        {"name":"红岗区 ","parent":12,"id":120},
        {"name":"肇州县 ","parent":12,"id":121},

        {"name":"吉林省","parent":0,"id":2},
        {"name":"长春市","parent":2,"id":20},
        {"name":"吉林市","parent":2,"id":21},
        {"name":"通化市","parent":2,"id":22},
        {"name":"朝阳区 ","parent":20,"id":200},
        {"name":"南关区 ","parent":20,"id":201},
        {"name":"龙潭区 ","parent":21,"id":210},
        {"name":"昌邑区 ","parent":21,"id":211},
        {"name":"东昌区 ","parent":22,"id":220},
        {"name":"通化县 ","parent":22,"id":221},

        {"name":"山西省","parent":0,"id":3},
        {"name":"太原市","parent":3,"id":30},
        {"name":"临汾市","parent":3,"id":31},
        {"name":"晋中市","parent":3,"id":32},
        {"name":"杏花岭区","parent":30,"id":300},
        {"name":"万柏林区","parent":30,"id":301},
        {"name":"尧都区","parent":31,"id":310},
        {"name":"古县","parent":31,"id":311},
        {"name":"太谷县","parent":32,"id":320},
        {"name":"榆次区","parent":32,"id":321}

    ];
//种类点击事件
    $scope.typeClick = function(id){
        index = $scope.regBasic.type.indexOf(id);
        if(index == -1){
            $scope.regBasic.type.push(id);
            $scope.typeIndex = id;
        }else{
            $scope.regBasic.type.splice(index,1);
            $scope.typeIndex = 0;

        }
    };
    //单选
    $scope.basicUrl = false;
    $scope.registerUrl = function(){
       if( $scope.basicUrl ){
           $scope.basicUrl = false;
       }else{
           $scope.basicUrl = true;
       }
    };
//    上一步下一步
    $scope.basicLast = function(){
          window.location.href = "#registerSetting";
    };
    $scope.basicNext = function(){
        window.location.href = "#registerApprove";
        console.log($scope.regBasic);
    }
});
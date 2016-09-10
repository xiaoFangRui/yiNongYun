app.controller("detail",function($scope,$http){
    $scope.imgIndex = 0;
    // 商品图轮换效果
    $scope.changeImg = function(e){
        if(e.target.nodeName.toLowerCase()=="img"){
            $scope.imgIndex = e.target.dataset.index;
        }
    };

    // 购买商品的数量变化事件函数
    $scope.count = 1;
    $scope.increase = function(){
        if($scope.count<99){
            $scope.count++;
        }
    };
    $scope.decrease = function(){
        if($scope.count>1){
            $scope.count--;
        }
    };
    $scope.Img = {
        src: ["img/douya_big.png",
            "img/huangdou_big.png",
            "img/douzi_big.png",
            "img/dadou_big.png"
        ]
    };
    $scope.listNav = {
        first:"谷物",
        second:"大豆",
        third:"非转基因大豆"
    };
    $scope.nav = {
        cont:[
                {
                    src:"img/guopin.png",
                    name:"果品",
                    caidan:["苹果","香蕉","橘子","樱桃","草莓"]
                },
                {
                    src:"img/shucai.png",
                    name:"蔬菜",
                    caidan:["西红柿","白菜","黄瓜","茄子","芹菜","西蓝花"]
                },
                {
                    src:"img/guwu.png",
                    name:"谷物",
                    caidan:["大米","小米","玉米面","大豆","面粉"]
                },
                {
                    src:"img/qindan.png",
                    name:"禽蛋",
                    caidan:["鸡蛋","鸭蛋","鹌鹑蛋","鹅蛋"]
                },
                {
                    src:"img/qita.png",
                    name:"其他",
                    caidan:["豆制品","香油","醋","酱油","食用盐"]
                }
        ]
    };
    $scope.imgList = [
        {
            src:"img/douya_small.png"
        },
        {
            src:"img/huangdou_small.png"
        },
        {
            src:"img/douzi_small.png"
        },
        {
            src:"img/dadou_small.png"
        }
    ];
    $scope.textList = {
        p1:'春粮赋土 黄豆 非转基因 1000g 东北大豆',
        p2:"非转基因 营养价值高 吃得放心",
        p3:"56.00",
        p4:"1.0kg",
        p5:"1000kg",
        p6:"10",
        p7:"绥化市绥棱县绥棱农场"
    };
    $scope.infoList = {
        p1:"绥棱农场",
        p2:"果蔬 | 谷物",
        p3:"13000001234",
        p4:"1955",
        p5:"绥化市绥棱县",
        p6:"100"
    };
    $scope.detail = {
        src:"img/product-detail.png"
    }
});
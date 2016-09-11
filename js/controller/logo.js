/**
 * Created by Administrator on 2016/8/8.
 */



logo.controller("logoMain",function($scope){
    $scope.list = [
        {
            title:"农场管理",
            ul:[
                {
                    href:"#farmDetail",
                    text:"农场详情",
                    id:0
                },
                {
                    href:"#farmManagement",
                    text:"农场管理",
                    id:1
                }
            ]
        },
        {
            title:"审核管理",
            ul:[
                {
                    href:"#role",
                    text:"角色管理",
                    id:0
                }

            ]
        },
        {
            title:"产品推广",
            ul:[
                {
                    href:"#productDetail",
                    text:"产品详情",
                    id:0
                },

                {
                    href:"#",
                    text:"农场管理",
                    id:2
                }
            ]
        },
        {
            title:"政策管理",
            ul:[
                {
                    href:"#policy",
                    text:"文章分类",
                    id:0
                },
                {
                    href:"#policyDetail",
                    text:"政策详情",
                    id:1
                }
            ]
        },
        {
            title:"投票管理",
            ul:[
                {
                    href:"#vote",
                    text:"投票",
                    id:0
                },
                {
                    href:"#voteModify",
                    text:"投票修改",
                    id:1
                }
            ]
        }
    ];

    $scope.listIndex = 1;
    $scope.ulIndex = 0;
    $scope.logoLeftList = function(e){
        $scope.listIndex = e.target.parentNode.dataset.index;
    };
    $scope.logoListUl = function(id){
        $scope.ulIndex = id;
    }

});


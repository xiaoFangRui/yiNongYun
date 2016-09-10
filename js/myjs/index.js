

app.controller("smalllogoCtrl",function($scope){
    $scope.item=[
        {class:"sc",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"qx",
            cont:"气象墒情检测",
            cont2:"产量预估",
            cont3:" 实时气象",
            cont4:"历史气象"
        },
        {class:"bc",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"jg",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"zl",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"cp",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"zc",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        },
        {class:"zz",
            cont:"生产监管",
            cont2:"农场状况",
            cont3:" 实时监测",
            cont4:"作物数据"
        }
    ] ;
      $scope.listIndex=0;
      $scope.mouseover=function(e){
          //console.log(e.target)
        $scope.listIndex= e.target.dataset.index;
          $scope.style="ty"

   }
});
app.controller("zhnyCtrl",function($scope){
      $scope.item2={
          h1:"智慧农业",
          h3:"全面掌握农业生产，预估农场效益" ,
          one:"实时视频",
          two:"数据采集",
          three:"智能控制"
      }  ;
}) ;


app.controller("dataCtrl",function($scope){
    $scope.item3={
        h1:"农场数据"
    }
});


app.controller("paihangbang",function($scope){
    $scope.items=[
        {
            h: '优质农场'
        },
        {
            h:'人气商品'
        }
    ];
    $scope.index=0;
    $scope.clickMe=function(i){

        $scope.index=i;
    };
    $scope.cp=[
        {one:'1.大豆'},
        { one:'2.小豆' },
        {one:'3.黄瓜'},
        {one:'4.西瓜'},
        {one:'5.冬瓜'}
    ] ;
    $scope.cp2=[
        {one:'张家湾农场'},
        { one:'三级台农场' },
        {one:'二六农场'},
        {one:'海鹰农场'},
        {one:'绥棱农场'},
        {one:'张海湾农场'}
    ]
});


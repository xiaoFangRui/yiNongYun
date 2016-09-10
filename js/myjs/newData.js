
app.controller('newCtrl',function($scope,$http){
    GetNewDataInit();
    $scope.FarmOrPolicy=function(e){
        var farmData=[];
        var sumDataArr=[];
        $http.get("http://192.168.1.39:8081/news.php")
            .success(function(response){
                //console.log(response);
                angular.forEach(response,function(data,index,array){

                    if(data.type == e.target.dataset.type){
                        farmData.push(array[index])
                    }

                });
                for(var i=0;i<Math.ceil(farmData.length/5);i++){
                    sumDataArr.push(farmData.slice(5*i,5*i+5))
                }
                //console.log(sumDataArr);
                //showData=farmData.slice(n,n+5);

                //$scope.newpages=sumDataArr;

                $scope.newpages=[];
                sumDataArr.forEach(function(data,index,array){
                    //console.log(data);
                    //console.log(index);
                    $scope.newpages.push(index);
                });
                $scope.fitems=sumDataArr[0];
                var Newpageindex=0;
                $scope.ChangeNewPage=function(n){

                    //console.log(n);
                    Newpageindex=n;
                    $scope.fitems=sumDataArr[n];
                    console.log(Newpageindex);
                };
                console.log(Newpageindex);
                $scope.NewPageUp=function(){
                    if(Newpageindex>=1){
                        $scope.fitems=sumDataArr[Newpageindex-1];
                        Newpageindex--;
                    }

                };
                $scope.NewPageDown=function(){
                    if(Newpageindex<= Math.ceil(farmData.length/5)){
                        $scope.fitems=sumDataArr[Newpageindex-1];
                        Newpageindex++;
                    }

                }

            });

    };


//默认数据初始化
    function GetNewDataInit(){
        var farmData=[];
        $http.get("http://192.168.1.39:8081/news.php")
            .success(function(response){
                angular.forEach(response,function(data,index,array){
                    if(data.type =="农业新闻"){
                        farmData.push(array[index])
                    }
                });
                var sumDataArr=[];
                for(var i=0;i<Math.ceil(farmData.length/5);i++){
                    sumDataArr.push(farmData.slice(5*i,5*i+5))
                }

                $scope.newpages=[];
                sumDataArr.forEach(function(data,index,array){
                    //console.log(data);
                    //console.log(index);
                    $scope.newpages.push(index);
                });

                $scope.fitems=sumDataArr[0];
                $scope.ChangeNewPage=function(n){
                    //console.log(n);
                    $scope.fitems=sumDataArr[n];
                }
            });
    }


});






app.controller('newSumCtrl',function($scope){

    $scope.itemNewDetails=function(newid){
        window.location.href = "itemDetails.html?id="+newid;
    };



})
    .controller('newDetailsCtrl',function($scope,$http,$location){

        var newid=$location.absUrl().split("=")[1];
        console.log(newid);

        var newData=[];
        $http.get("http://192.168.1.39:8081/news.php")
            .success(function(response){
                angular.forEach(response,function(data,index,array){
                    if(data.newid==newid){
                        newData.push(array[index])
                    }
                    $scope.itemfitem=newData[0];
                });

            });


});


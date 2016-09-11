/**
 * Created by Administrator on 2016/8/13.
 */

register.controller("registerApprove",function($scope,$timeout){
    $scope.file = {
        touXiang:[],
        license:[],
        idCard:[]
    };

//上传图片
//    setImagePreview方法参数为(上传的input-id,预览窗口的id)    切记为id
    document.getElementById("fileTx2").addEventListener("change",function(){
        setImagePreview("fileTx2","fileTx1");
        $scope.file.touXiang.push(this.files);
        console.log(this.files)
    },false);
    document.getElementById("license2").addEventListener("change",function(){
        setImagePreview("license2","license1");
        $scope.file.license.push(this.files);
    },false);
    document.getElementById("idCard11").addEventListener("change",function(){
        setImagePreview("idCard11","idCard1");
        $scope.file.idCard.push(this.file);
    },false);
    document.getElementById("idCard21").addEventListener("change",function(){
        setImagePreview("idCard21","idCard2");
        $scope.file.idCard.push(this.file);
    },false);
//图片上传预览功能插件
    function setImagePreview(docObj,imgObjPreview) {
        docObj=document.getElementById(docObj);
        imgObjPreview=document.getElementById(imgObjPreview);
        if(docObj.files &&docObj.files[0]){
            //火狐下，直接设img属性
            imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '100px';
            imgObjPreview.style.height = '100px';
//            imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        }
        else {
            //IE下，使用滤镜
            docObj.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId = document.getElementById("localImag");
            //必须设置初始大小
            localImagId.style.width = "100px";
            localImagId.style.height = "100px";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try{
                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
            }
            catch(e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview.style.display = 'none';
            document.selection.empty();
        }
        return true;
    }



    //上一步

    $scope.approveLast = function(){
        window.location.href = "#registerBasic";
    };
    $scope.success = false;
    $scope.approveNext = function(){
        console.log($scope.file);
        $(".registerAccountPro div").eq(3).addClass("on").siblings().removeClass("on");
        $scope.success = true;

        var timer = $timeout(function(){
            $scope.success = false;
            window.location.href = "login.html";
        },2000);


    }

});


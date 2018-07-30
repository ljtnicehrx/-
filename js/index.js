$(function () {
    $(window).on("resize",function () {
        //1、获取窗口的宽度
        let clientW = $(window).width();
        //2、设置临界值
        let isShowBigImage = clientW >= 800;
        //3、获取所有的Item
        let $allItems = $("#lk_carousel .item");
        //4/遍历
        $allItems.each(function (index,item) {
            //4.1取出图片的路径

            let src = isShowBigImage?$(item).data("lg-img"):$(item).data("sm-img");
            let imgUrl = 'url("'+src+'")';
            //4.2设置背景
            $(item).css({
                backgroundImage:imgUrl
            });
            //5、设置img标签
            if(!isShowBigImage)
            {
                let $img="<img src='"+src+"'>";
                $(item).empty().append($img);
            }
            else{
                $(item).empty();
            }
        });
    });
    //工具提示
    $('[data-toggle="tooltip"]').tooltip();
    //动态处理选项卡
    let $ul=$("#lk_product .nav");
    let $allLis=$("[role='presentation']",$ul);
    //遍历
    let totalW = 0;
    $allLis.each(function (index,item) {
        totalW += $(item).width();
        let parentW = $ul.parent().width();
        //设置宽度
        if(totalW>parentW){
            $ul.css({
                width:totalW+"px"
            })
        }
        else{
            $ul.removeAttr("style");
        }
    });
    //导航处理
    let allLis = $("#lk_nav li");
    $(allLis[2]).on("click",function () {
        $("html,body").animate({scrollTop:$("#lk_hot").offset().top},1000);
    });
   $(window).trigger("resize");
});



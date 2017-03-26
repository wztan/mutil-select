$(function(){
  /*
* 下拉选择
* 多选
*/
//点击得到下拉区域
    $(".region-box").click(function(){
        $(this).toggleClass("shrink");
        if($(this).hasClass("shrink")){
            $(".region-list").show();
        }else{
            $(".region-list").hide();
        }
        //阻止冒泡
        return false;
    })
    //隐藏下拉区域
    $(".page-content").click(function(){
        $(this).find(".region-list").hide();
        $(".region-box").removeClass("shrink");
    })
    $(".region-list").click(function(){
        //阻止冒泡
        return false;
    })
    //选择所在区域 checkbox
    $(".region-list ul").on("click",".check",function(){
       if($(this).parent().hasClass("selected")){
           $(this).parent().removeClass("selected");
           var val = $(this).parent().find(".text").html();
           $(".region-com li").find(".text").each(function(){
               if($(this).html() == val){
                   $(this).parents("li").remove();
               }
           })
       }else{
           $(this).parent().addClass("selected");
           var val = $(this).parent().find(".text").html();
           var text = "<li><span class=\"text\">"+val+"</span><i class=\"icon\"></i></li>";
           $(".region-com ul").append(text);
       }
    })
    //删除所在区域 checkbox
    $(".region-com").on("click","i",function(){
        $(this).parents("li").remove();
        var clear_val = $(this).parents("li").find(".text").html();
        $(".region-list li").find(".text").each(function(){
            if($(this).html() == clear_val){
                $(this).parents("li").removeClass("selected");
            }
        })
    })
})
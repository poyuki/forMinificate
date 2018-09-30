function addFavorite(alias,id_avtovech_npp,event){
    var el=event.target;
    var name = alias+"-"+id_avtovech_npp;
    if($(el).hasClass("fa-star-o")){
        $(el).removeClass("fa-star-o");
        $(el).addClass("fa-star");
        $(el).attr("title","Убрать из избранного");
        $.cookie(name,id_avtovech_npp.toString(),{
            expires:7,
            path:"/"
        });
    }else{
        $(el).removeClass("fa-star");
        $(el).addClass("fa-star-o");
        $(el).attr("title","Добавить в избранное");
        $.cookie(name,'',{
            expires:-1,
            path:"/"
        });
    }
}
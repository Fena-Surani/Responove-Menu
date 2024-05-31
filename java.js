window.onload=function(){
    var barbtn=document.getElementById("bar-btn");

    barbtn.onclick=function(){
        var menubox=document.getElementById("menu-box");
        
        var baricon=document.getElementById("bar-icon");

        if(menubox.style.display == "flex"){
            menubox.style.display="none";
            baricon.className="fa fa-bars";
        }

        else{
            menubox.style.display="flex";
        }

    }
}
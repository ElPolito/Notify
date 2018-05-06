let thetype = "defaultType";
let thetheme = "defaultTheme";
let theplace;
let thetime = 5;
function sendNotification(text, type = null, time = null, theme = null, place = null){
    let not = document.createElement("div");
    if(type != null){
        thetype = type;
    }
    if(theme != null){
        thetheme = theme;
    }
    if(place != null){
        theplace = place;
    }else{
        theplace = thetype;
    }
    not.classList.add("Notify", thetheme, thetype, theplace);
    let i =  document.createElement("i");
    i.classList.add("close");
    i.innerHTML = "x";
    not.appendChild(i);
    let em = document.createElement("em");
    em.classList.add("text");
    em.innerHTML = text;
    not.appendChild(em);
    
    document.body.appendChild(not);
    i.addEventListener("click", () => closeNotif(not));
    setTimeout(addClass, 100, not);
    if(time != null){
        thetime = time;
    }
    if(time != "NONE"){
        setTimeout(closeNotif, thetime * 1000, not);    
    }
    
}

function closeNotif(elem){
    elem.classList.remove("active");
    elem.addEventListener("transitionend", function(){
        document.body.removeChild(elem);
    });
}

function addClass(elem){
    elem.classList.add("active");
}
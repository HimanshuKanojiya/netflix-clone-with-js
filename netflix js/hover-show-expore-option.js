function sleepforsomeseconds(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}




function hovershowexploreoptions(){
    let documentbody = document.getElementById("maincontentsection");
    documentbody.onmouseover = function(event){
        if(event.target.tagName !== null){
            if(event.target.tagName === "IMG"){
                if(event.target.parentElement.previousElementSibling.tagName !== null && 
                    event.target.parentElement.previousElementSibling.tagName === "A"){

                    if(event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.tagName !== null && 
                        event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.tagName === "SPAN"){
                        event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.style.display = "inline";
                    }
                }
            }
            else if(event.target.tagName === "H2"){
                if(event.target.firstElementChild.tagName !== null && event.target.firstElementChild.tagName === "SPAN"){
                    if(event.target.firstElementChild.firstElementChild.tagName !== null && 
                        event.target.firstElementChild.firstElementChild.tagName === "DIV"){
                        event.target.firstElementChild.style.display = "inline";
                        event.target.firstElementChild.firstElementChild.style.display = "inline";
                    }
                }
            }
        }
        
    }

    documentbody.onmouseout =  function(event){
        if(event.target.tagName !== null){
            if(event.target.tagName === "IMG"){
                if(event.target.parentElement.previousElementSibling.tagName !== null && 
                    event.target.parentElement.previousElementSibling.tagName === "A"){
                    if(event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.tagName !== null && 
                        event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.tagName === "SPAN"){
                        event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.style.display = "none";
                    }
                }
            }
            else if(event.target.tagName === "H2"){
                if(event.target.firstElementChild.tagName !== null && 
                    event.target.firstElementChild.tagName === "SPAN"){
                    if(event.target.firstElementChild.firstElementChild.tagName !== null && 
                        event.target.firstElementChild.firstElementChild.tagName === "DIV"){
                        event.target.firstElementChild.style.display = "none";
                        event.target.firstElementChild.firstElementChild.style.display = "none";
                    }
                }
            }

        }
        
}

}

hovershowexploreoptions();
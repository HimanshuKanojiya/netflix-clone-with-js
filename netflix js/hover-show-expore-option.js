//This script is not depended on other scripts, it will only work in homepage "index.html"
//This Script is for doing these things (same as Netflix):
//1. If User move mouse over the image then it will show '>' with the category title
//2. If User move mouse out of the image then it will disappear '>' from the category title
//3. If user move mouse over the category title, then '>' and explore all will be visible
//4. If user move mouse out of the category title, then '>' and explore all will be hidden


const hovershowexploreoptions = () => {
    const documentbody = document.getElementById("maincontentsection");
    documentbody.onmouseover = (event) => {
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

    documentbody.onmouseout = (event) => {
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

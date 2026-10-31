
 const clicktosee = document.querySelector(".clicktosee");
 const numbergamessec = document.querySelector(".numbergamessec");

 clicktosee.addEventListener("click", () => {
    if(numbergamessec.style.visibility === "hidden"){
        numbergamessec.style.visibility = "visible";
        
    }

    else{
        numbergamessec.style.visibility = "hidden";
        clicktosee.textContent = "Click to see all the options to choose from";
    }
 });

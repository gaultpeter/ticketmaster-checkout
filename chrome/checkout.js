if(window.location.href.includes("event")){
    let findTicketsBtn = document.querySelector("[data-testid='findTicketsBtn']");
    if(findTicketsBtn){
        findTicketsBtn.click();
    }else{
        location.reload(); 
    }
}
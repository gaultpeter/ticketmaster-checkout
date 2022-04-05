if(window.location.href.includes("event")){
    let venueParagraph = document.getElementsByClassName("sc-n00qmo-10 AZZHo")[0]
    if(venueParagraph.textContent.includes("No map available for this venue.")){
        let findTicketsBtn = document.querySelector("[data-testid='findTicketsBtn']");
        if(findTicketsBtn){
            findTicketsBtn.click();
        }else{
            location.reload(); 
        }
    }
}
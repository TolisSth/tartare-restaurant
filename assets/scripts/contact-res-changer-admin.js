document.getElementById("contact-data-button").addEventListener("click", contact_hide_res); 
document.getElementById("reservation-data-button").addEventListener("click", res_hide_contact); 

function contact_hide_res(){
    console.log("contact button-data has been pressed"); 
    document.getElementById("reservation-data").style.display="none";
    document.getElementById("contact-data").style.display="inline";
    document.getElementById("contact-data-button").style.backgroundColor = "goldenrod";
    document.getElementById("reservation-data-button").style.backgroundColor = "white";
}

function res_hide_contact(){
    console.log("Reservation button-data has been pressed");
    document.getElementById("contact-data").style.display="none";
    document.getElementById("reservation-data").style.display="inline";
    document.getElementById("contact-data-button").style.backgroundColor = "white";
    document.getElementById("reservation-data-button").style.backgroundColor = "goldenrod";
}
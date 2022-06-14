document.getElementById("contact-button").addEventListener("click", contact_hide_res); 
document.getElementById("reservation-button").addEventListener("click", res_hide_contact); 

function contact_hide_res(){
    console.log("contact button has been pressed"); 
    document.getElementById("reservation-form").style.display="none";
    document.getElementById("contact-form").style.display="inline";
    document.getElementById("contact-button").style.backgroundColor = "goldenrod";
    document.getElementById("reservation-button").style.backgroundColor = "white";
}

function res_hide_contact(){
    console.log("Reservation button has been pressed");
    document.getElementById("contact-form").style.display="none";
    document.getElementById("reservation-form").style.display="inline";
    document.getElementById("contact-button").style.backgroundColor = "white";
    document.getElementById("reservation-button").style.backgroundColor = "goldenrod";
}
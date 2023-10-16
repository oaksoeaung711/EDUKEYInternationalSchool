// Start Jquery Area
$(document).ready(function(){

});
// End Jquery Area


// Start Javascript Area

// Start Student Counter Section
var getcountervalues = document.querySelectorAll('.countervalues');
getcountervalues.forEach(function(getcountervalue){
    getcountervalue.textContent = 0;

    const updatecounter = function(){
        const getcttarget = +getcountervalue.getAttribute('data-target');
        const getctcontent = +getcountervalue.innerText;
        const incnumber = getcttarget / 100;
        if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent+incnumber;
            setTimeout(updatecounter,20);
        }
    }

    updatecounter();
});
// End Student Counter Section

// End Javascript Area
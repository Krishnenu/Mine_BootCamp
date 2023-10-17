/**
 * @param {number} val 
 */

function issueTicket(val){
    let ticNo=val;
    return function getTicket(){
        if(ticNo<=0){
             console.log("No Ticket available:");
        }else{
            console.log("Ticket issued");           
        }
        ticNo--;
    }
}

let ticket=2;
var anda = issueTicket(ticket);
anda();
anda();
anda();

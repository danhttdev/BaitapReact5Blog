export function getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    var d = new Date(); // for now
    var hh=d.getHours(); // => 9
    var MM=d.getMinutes(); // =>  30
    var ss=d.getSeconds(); // => 51

    today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss;

    
    return today;
}

export function sortDate(a, b) {
    var nameA = a.date.toUpperCase(); // ignore upper and lowercase
    var nameB = b.date.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1; return 0;
}
let clock = () => {
    
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();



let period = "AM";

if(hrs == 0 ){
    hrs = 12;
}else if (hrs >= 12){
    hrs = hrs;
    period = "PM"
}

hrs = hrs < 10 ? "0" + hrs : hrs;
mins  = mins <10 ? "0" + mins : mins;
secs = secs <10 ? "0" + secs:secs;


let time = `${hrs}:${mins}:${secs}:${period}`;
let relogio = document.getElementById('clock');
relogio.innerText = time;

setTimeout(clock,1000)


};

clock();


// cronometro

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;


function start() {
    cron = setInterval(()=>{timer(); },tempo);

    
}


function pause() {
    clearInterval(cron)
}


function zerar() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('cron').innerText = '00:00:00';
}


function timer() {

    ss++;
    if(ss == 60) {
        ss = 0
        mm++
        if(mm == 60){
            mm = 0;
            hh ++;
        }
    }



    var format = (hh < 10 ? '0' + hh : hh ) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('cron').innerText = format;

    
}


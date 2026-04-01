const targetDate = new Date("2026-04-01T17:15:00Z").getTime();

function updateTimer(){

    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance <= 0){
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2,"0");
}

setInterval(updateTimer,1000);

updateTimer();


let secElem=document.querySelector(".second");
let minElem=document.querySelector(".minute")
let hourElem=document.querySelector(".hour")
let secTemp=0
let minTemp=0
let hourTemp=0
let csec,cmin,chour
function incrSecond(){
    csec=setInterval(()=>{
        if(secTemp<60){
            secTemp++;
        }else{
            secTemp=0
        }
        secElem.innerHTML=`<p class="time second">${secTemp}</p>`
    },1000)
}
function incrMinute(){
    cmin=setInterval(()=>{
        if(minTemp<60){
            minTemp++;
        }else{
            minTemp=0
        }
        minElem.innerHTML=`<p class="time minute">${minTemp}</p>`
    },60000)
}
function incrHour(){
    chour=setInterval(()=>{
        if(hourTemp<24){
            hourTemp++;
        }else{
            hourTemp=0
        }
        hourElem.innerHTML=`<p class="time hour">${hourTemp}</p>`
    },60000*60)
}
function start(){
    incrSecond()
    incrMinute()
    incrHour()
}
function stopCount(){
    clearInterval(csec)
    clearInterval(cmin)
    clearInterval(chour)
}
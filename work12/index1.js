//
let year = new Date().getFullYear()
//
document.getElementById("cal").innerHTML= calendar(year)
setCalendar(year);
function setCalendar(year){
//
    var obj=document.getElementById('preyear');
   // var n=obj.innerHTML;
   obj.dataset.year=year-1;
    obj.innerHTML= obj.dataset.year;
    year=document.getElementById('preyear').innerHTML;
//
   document.getElementById('curyear').innerHTML=year-1+2;
//
    var a=document.getElementById('nextyear');
    //var e=a.innerHTML;
    a.dataset.year=year-1+3;
    a.innerHTML= a.dataset.year;
//
    document.getElementById("cal").innerHTML= calendar(year);
  

}
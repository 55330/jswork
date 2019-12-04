//

let endseconds= new Date().getHours();
endseconds=endseconds*3600+3600;
//endseconds=endseconds.getTime();

//
let d= h = m = s = 0 ;
//
let id= setInterval(seckill,1000);

function seckill (){ 
    let nowtime =new Date().getHours();//
    nowtime=nowtime*3600;
    let a1=new Date().getMinutes();
    a1=a1*60;
    let a2=new Date().getSeconds();
    nowtime=nowtime+a1+a2;
    //
    let remaining = endseconds- nowtime;
    //
    if (remaining>0) {
        d = parseInt(remaining / 86400);//
        h = parseInt((remaining / 3600) % 24);//
        m = parseInt((remaining/60) % 60);//
        s = parseInt(remaining%60);//
        //
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

    } else {
        clearInterval(id); //
        d=h=m=s='00';
    }
    //
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
 }
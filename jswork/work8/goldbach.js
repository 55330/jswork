function goldbach(){let str=''
var z=document.getElementById('odd').value
var x=1,w=0;var t=0;var aaa=[];
if(z%2==0){
for(var i=2;i<z;i++){ qqq=true;
    for(var x=2;x<i;x++){  if( i%x==0 ){qqq=false;break;}   }
    if(qqq){   aaa[w]=i;  w++;
        
    }




    
  
}





}


var pp=aaa.length;
console.log(aaa)
console.log(pp)

    
    
for(p=0;p<pp;p++    ){for(t=0;t<pp;t++)
    {    n=aaa[p];m=aaa[t];
     
     
     if(z==n+m && n<m ){    str+=("</br>"+z+"=" +aaa[p] +"+" +aaa[t] );
     document.getElementById('goldbach').innerHTML= str;
      }
      }  
      }

}

var turn=1;
var si=0;
var ku=0;
var masu=[
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,1,2,0,0,0, 
   0,0,0,2,1,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
];
var ma=[
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
   0,0,0,0,0,0,0,0, 
];
var ok=0;
var taan=1;
var mi=0;
var hi=0;
var u=0;
var shi=0;
var miu=0;
var mishi=0;
var hiu=0;
var hishi=0;
var tan="";
var cells;
var wh="白";
var bl="黑";
const COLORS=["black","white"];
const LINES_COUNT=8;
const CELLS_COUNT=LINES_COUNT*LINES_COUNT;
function dame(a){
    if(ma[a]==1){
        ireru(a);
    }
}
function ireru(a){
    if(turn==1){
        cells[a].classList.remove("han");
        cells[a].classList.add("white");
        masu[a]=1;
    }else　if(turn==2){
        cells[a].classList.add("black");
        cells[a].classList.remove("han");
        masu[a]=2;
    }
    taan++;
    hantei(a);
}
window.onload=function(){
    cells=document.querySelectorAll("td");
    cells[27].classList.add("white");
    cells[36].classList.add("white");
    cells[28].classList.add("black");
    cells[35].classList.add("black");
    da();
    for(let i=0;i<cells.length;i++){
        cells[i].addEventListener("click",function(){
            dame(i);
            da();
        if(turn==1){
           document.getElementById("caption2").innerText=wh+"转";
    　　}else if(turn==2){
            document.getElementById("caption2").innerText=bl+"转";
    　　}
        tan="("+taan+"转)";
    　　document.getElementById("teen").innerText=tan;
        
        if(taan==61){
        for(var l=0;l<masu.length;l++){
            if(masu[l]==1){
               si++; 
            }else  if(masu[l]==2){
                ku++;
            }
        } 
            document.getElementById("cause").innerText="黑："+ku+"件　白："+si+"件";
        }
        
        });
      
        
    }
}
function hantei(a){
    han(a);
    for(var i=0;i<mi;i++){
        if(turn==1){
           cells[a+i+1].classList.remove("black");
           cells[a+i+1].classList.remove("han");
           cells[a+i+1].classList.add("white");
           masu[a+i+1]=1;
        }else if(turn==2){
            cells[a+i+1].classList.remove("white");
            cells[a+i+1].classList.remove("han");
            cells[a+i+1].classList.add("black");
            masu[a+i+1]=2;
        }
    }
    for(var i=0;i<hi;i++){
        if(turn==1){
           cells[a-i-1].classList.remove("black");
           cells[a-i-1].classList.remove("han");
           cells[a-i-1].classList.add("white");
           masu[a-i-1]=1;
        }else if(turn==2){
            cells[a-i-1].classList.remove("white");
            cells[a-i-1].classList.remove("han");
            cells[a-i-1].classList.add("black");
            masu[a-i-1]=2;
        }
    }
    for(var i=0;i<u;i++){
        if(turn==1){
           cells[a-i*8-8].classList.remove("black");
           cells[a-i*8-8].classList.remove("han");
           cells[a-i*8-8].classList.add("white");
           masu[a-i*8-8]=1;
        }else if(turn==2){
            cells[a-i*8-8].classList.remove("white");
            cells[a-i*8-8].classList.remove("han");
            cells[a-i*8-8].classList.add("black");
            masu[a-i*8-8]=2;
        }
    }
    for(var i=0;i<shi;i++){
        if(turn==1){
           cells[a+i*8+8].classList.remove("black");
           cells[a+i*8+8].classList.remove("han");
           cells[a+i*8+8].classList.add("white");
           masu[a+i*8+8]=1;
        }else if(turn==2){
            cells[a+i*8+8].classList.remove("white");
            cells[a+i*8+8].classList.remove("han");
            cells[a+i*8+8].classList.add("black");
            masu[a+i*8+8]=2;
        }
    }
    for(var i=0;i<hiu;i++){
        if(turn==1){
           cells[a-i*9-9].classList.remove("black");
           cells[a-i*9-9].classList.remove("han");
           cells[a-i*9-9].classList.add("white");
           masu[a-i*9-9]=1;
        }else if(turn==2){
            cells[a-i*9-9].classList.remove("white");
            cells[a-i*9-9].classList.remove("han");
            cells[a-i*9-9].classList.add("black");
            masu[a-i*9-9]=2;
        }
    }
    for(var i=0;i<mishi;i++){
        if(turn==1){
           cells[a+i*9+9].classList.remove("black");
           cells[a+i*9+9].classList.remove("han");
           cells[a+i*9+9].classList.add("white");
           masu[a+i*9+9]=1;
        }else if(turn==2){
            cells[a+i*9+9].classList.remove("white");
            cells[a+i*9+9].classList.remove("han");
            cells[a+i*9+9].classList.add("black");
            masu[a+i*9+9]=2;
        }
    }
    for(var i=0;i<miu;i++){
        if(turn==1){
           cells[a-i*7-7].classList.remove("black");
           cells[a-i*7-7].classList.remove("han");
           cells[a-i*7-7].classList.add("white");
           masu[a-i*7-7]=1;
        }else if(turn==2){
            cells[a-i*7-7].classList.remove("white");
            cells[a-i*7-7].classList.remove("han");
            cells[a-i*7-7].classList.add("black");
            masu[a-i*7-7]=2;
        }
    }
    for(var i=0;i<hishi;i++){
        if(turn==1){
           cells[a+i*7+7].classList.remove("black");
           cells[a+i*7+7].classList.remove("han");
           cells[a+i*7+7].classList.add("white");
           masu[a+i*7+7]=1;
        }else if(turn==2){
            cells[a+i*7+7].classList.remove("white");
            cells[a+i*7+7].classList.remove("han");
            cells[a+i*7+7].classList.remove("white");
            cells[a+i*7+7].classList.add("black");
            masu[a+i*7+7]=2;
        }
    }
    if(turn==1){
        turn=2;
    }else if(turn==2){
        turn=1;
    }

}
function han(a){
    mi=0;
    hi=0;
    u=0;
    shi=0;
    miu=0;
    mishi=0;
    hiu=0;
    hishi=0;
    if(turn==1){
        b=2;
        c=1;
    }else if(turn==2){
        b=1;
        c=2;
    }
    ok=0;
    if((a%8)==7){
        ok=1;
    }else if((a%8)==6){
        ok=1;
    }
    if(ok==0){
        for(mi=0;mi<7-(a%8);mi++){
            if(masu[a+mi+1]==0){
                mi=0;
                break;
            }else if(masu[a+mi+1]==c){
                if(mi==0){
                    mi=0;
                    break;
                }else {
                    break;
                }
            }
            if(mi==(7-(a%8))-1){
                mi=0;
                break;
            }
            
        }
    }
    ok=0;
    if((a%8)==0){
        ok=1;
    }else if((a%8)==1){
        ok=1;
    }
    if(ok==0){
        for(hi=0;hi<a%8;hi++){
            if(masu[a-hi-1]==0){
                hi=0;
                break;
            }else if(masu[a-hi-1]==c){
                if(hi==0){
                    hi=0;
                    break;
                }else {
                    break;
                }
            }
            if(hi==(a%8)-1){
                hi=0;
                break;
            }
            
        }
    }
    ok=0;
    if(a<=15){
        ok=1;
    }
    if(ok==0){
        for(u=0;u<(a-(a%8))/8;u++){
            if(masu[a-u*8-8]==0){
                u=0;
                break;
            }else if(masu[a-u*8-8]==c){
                if(u==0){
                    u=0;
                    break;
                }else {
                    break;
                }
            }
            if(u==(a-(a%8))/8-1){
                u=0;
                break;
            }
            
        }
    }
    ok=0;
    if(a>=48){
        ok=1;
    }
    if(ok==0){
        for(shi=0;shi<7-((a-(a%8))/8);shi++){
            if(masu[a+shi*8+8]==0){
                shi=0;
                break;
            }else if(masu[a+shi*8+8]==c){
                if(shi==0){
                    shi=0;
                    break;
                }else {
                    break;
                }
            }
            if(shi==7-((a-(a%8))/8)-1){
                shi=0;
                break;
            }
            
        }
    }
    ok=0;
    if(a<=15){
        ok=1;
    }else if((a%8)==0){
        ok=1;
    }else if((a%8)==1){
        ok=1;
    }
    if(ok==0){
        var z=0;
        var x=(a-(a%8))/8;
        var y=a%8;
        if(x>y){
            z=y;
        }else if(y>z){
            z=x;
        }else if(x==y){
            z=x;
        }
        for(hiu=0;hiu<z;hiu++){
            if(masu[a-hiu*9-9]==0){
                hiu=0;
                break;
            }else if(masu[a-hiu*9-9]==c){
                if(hiu==0){
                    hiu=0;
                    break;
                }else {
                    break;
                }
            }
            if(hiu==z-1){
                hiu=0;
                break;
            }
            
        }
    }
    ok=0;
    if(a>=48){
        ok=1;
    }else if((a%8)==7){
        ok=1;
    }else if((a%8)==6){
        ok=1;
    }
    if(ok==0){
        var z=0;
        var x=(7-(a%8));
        var y=7-((a-(a%8))/8);
        if(x>y){
            z=y;
        }else if(y>z){
            z=x;
        }else if(x==y){
            z=x;
        }
        for(mishi=0;mishi<z;mishi++){
            if(masu[a+mishi*9+9]==0){
                mishi=0;
                break;
            }else if(masu[a+mishi*9+9]==c){
                if(mishi==0){
                    mishi=0;
                    break;
                }else {
                    break;
                }
            }
            if(mishi==z-1){
                mishi=0;
                break;s
            }
            
        }
    }
    ok=0; 
    if(a<=15){
        ok=1;
    }else if((a%8)==7){
        ok=1;
    }else if((a%8)==6){
        ok=1;
    }
    if(ok==0){
        var z=0;
        var x=7-(a%8)
        var y=(a-(a%8))/8;
        if(x>y){
            z=y;
        }else if(y>z){
            z=x;
        }else if(x==y){
            z=x;
        }
        for(miu=0;miu<z;miu++){
            if(masu[a-miu*7-7]==0){
                miu=0;
                break;
            }else if(masu[a-miu*7-7]==c){
                if(miu==0){
                    miu=0;
                    break;
                }else {
                    break;
                }
            }
            if(miu==z-1){
                miu=0;
                break;s
            }
            
        }
    }
    ok=0; 
    if((a%8)==0){
        ok=1;
    }else if((a%8)==1){
        ok=1;
    }else if(a>=48){
        ok=1;
    }
    if(ok==0){
        var z=0;
        var x=a%8;
        var y=7-((a-(a%8))/8);
        if(x>y){
            z=y;
        }else if(y>z){
            z=x;
        }else if(x==y){
            z=x;
        }
        for(hishi=0;hishi<z;hishi++){
            if(masu[a+hishi*7+7]==0){
                hishi=0;
                break;
            }else if(masu[a+hishi*7+7]==c){
                if(hishi==0){
                    hishi=0;
                    break;
                }else {
                    break;
                }
            }
            if(hishi==z-1){
                hishi=0;
                break;
            }
            
        }
    }
}
function da(){
    for(var i=0;i<masu.length;i++){
        cells[i].classList.remove("han");
        ma[i]=0;
    }
    var ka=0;
    for(var i=0;i<masu.length;i++){
        ka=0;
        if(masu[i]==0){
            han(i);
            if(mi!==0){
                ka=1;
            }else if(hi!==0){
                ka=1;
            }else if(u!==0){
                ka=1;
            }else if(shi!==0){
                ka=1;
            }else if(hiu!==0){
                ka=1;
            }else if(hishi!==0){
                ka=1;
            }else if(miu!==0){
                ka=1;
            }else if(mishi!==0){
                ka=1;
            }
            if(ka==1){
                cells[i].classList.add("han");
                ma[i]=1;
            }
        }
    }
}
function skip(){
    if(turn==1){
        turn=2;
    }else if(turn==2){
        turn=1;
    }
    if(turn==1){
        document.getElementById("caption2").innerText=wh+"转";
 　　}else if(turn==2){
         document.getElementById("caption2").innerText=bl+"转";
 　　}
}

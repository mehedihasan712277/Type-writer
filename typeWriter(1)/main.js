let x = "I am a Designer and Developer ";
let y = document.getElementById("txt");
z = x.length
a = z + z ;
let i = 0;
function myFunc(){
    if (i <= x.length) {
        y.innerHTML  = x.slice(0, i);
        i++;
    }
    else if (i <= a){
        y.innerHTML = x.slice(0, x.length - i);
        i++;
    }else{
        i = 1;
    }
    setTimeout(myFunc, 100);
}
myFunc();

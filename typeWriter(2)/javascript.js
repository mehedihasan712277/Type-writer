let x, y, z, i, j, txt1, txt2;
txt1 = "I am a Freelaner  ";//first text
txt2 = "and I am a Web Designer  ";// second text
i = 0;
j = 0;
z = txt1.length;
y = document.getElementById("id");
function myfunc() {
    if (i <= txt1.length ){
        y.innerHTML = txt1.slice(0,i);
        i++;

    }
    else if(j <= txt2.length){
        y.innerHTML = txt2.slice(0,j);
        j++;   

    }else{
        i = 0;
        j = 0
    }
    // call function repeatedly
    setTimeout(myfunc,100);
}
myfunc();
let w, x, y, z, i, j, txt1, txt2, a, b;
txt1 = "I am a Freelaner  ";//first text
txt2 = "and I am a Web Designer  ";// second text
i = 0;
j = 0;
z = txt1.length;
w = txt2.length;
a = z + z;
b = w + w;
y = document.getElementById("id");
function myfunc() {
    if (i <= a ){
        if (i <= z) {
            y.innerHTML = txt1.slice(0, i);
            i++;
        }
        else{
            y.innerHTML = txt1.slice(0, z - i);
            i++;
        }
    }
    else if(j <= b){
        if (j <= w) {
            y.innerHTML = txt2.slice(0, j);
            j++;
        }
        else{
            y.innerHTML = txt2.slice(0, w - j);
            j++;
        }
    }else{
        i = 0;
        j = 0
    }
    // call function repeatedly
    setTimeout(myfunc,100);
}
myfunc();
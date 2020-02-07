function submit(){
    var a = document.getElementById("income").value;
    a=Number(a);
   
    var b = document.getElementById("expense").value;
    b=Number(b);
  
    var c =(a-b);
    document.getElementById("saving").value=c;
}

function submit2(){
    var a = document.getElementById("income1").value;
    a=Number(a);
    var b = document.getElementById("income2").value;
    b=Number(b);
    var c = document.getElementById("income3").value;
    c=Number(c);
    var d = document.getElementById("income4").value;
    d=Number(d);
    var i=(a+b+c+d);
    document.getElementById("income").value=i;
    console.log(i);
    

    var e = document.getElementById("expense1").value;
    e=Number(e);
    var f = document.getElementById("expense2").value;
    f=Number(f);
    var g = document.getElementById("expense3").value;
    g=Number(g);
    var h = document.getElementById("expense4").value;
    h=Number(h);
    var j=(e+f+g+h);
    document.getElementById("expense").value=j;
    console.log(j);

}
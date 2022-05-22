let num1=document.getElementById("number1");
let num2=document.getElementById("number2");

var add=document.getElementById("Add");
btn=function(){
      ans=Number(num1.value)+Number(num2.value);
      document.getElementById("result").value=ans;
}
add.addEventListener("click",btn);

var sub=document.getElementById("Sub");
btn=function(){
      ans=Number(num1.value)-Number(num2.value);

      document.getElementById("result").value=ans;
}
sub.addEventListener("click",btn);

var mul=document.getElementById("Mul");
btn=function(){
      ans=Number(num1.value)*Number(num2.value);

      document.getElementById("result").value=ans;
}
mul.addEventListener("click",btn);

var dsn=document.getElementById("Dsn");
btn=function(){
      ans=Number(num1.value)/Number(num2.value);

      document.getElementById("result").value=ans;
}
dsn.addEventListener("click",btn);
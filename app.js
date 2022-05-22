num1=document.getElementById("number1");
num2=document.getElementById("number2");

// add=document.getElementById("Add");
// btn=function(){
//       ans=Number(num1.value)+Number(num2.value);
//       document.getElementById("result").value=ans;
// }
// add.addEventListener("click",btn);

Object.onclick=function Add(){
      ans=Number(num1.value)+Number(num2.value);
       document.getElementById("result").value=ans;
};
Object.addEventListener("click",Add);

sub=document.getElementById("Sub");
btn=function(){
      ans=Number(num1.value)-Number(num2.value);

      document.getElementById("result").value=ans;
}
sub.addEventListener("click",btn);

mul=document.getElementById("Mul");
btn=function(){
      ans=Number(num1.value)*Number(num2.value);

      document.getElementById("result").value=ans;
}
mul.addEventListener("click",btn);

div=document.getElementById("Div");
btn=function(){
      ans=Number(num1.value)/Number(num2.value);

      document.getElementById("result").value=ans;
}
div.addEventListener("click",btn);

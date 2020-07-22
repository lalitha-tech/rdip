var y;var x;
var op;
$(document).ready(function(){
$("#1").click(function(){
  $("#number").val($("#number").val()+"1");
});
});
$(document).ready(function(){
$("#2").click(function(){
  $("#number").val($("#number").val()+"2");
});
});
$(document).ready(function(){
$("#3").click(function(){
  $("#number").val($("#number").val()+"3");
});
});
$(document).ready(function(){

$("#4").click(function(){
   $("#number").val($("#number").val()+"4");
});
});
$(document).ready(function(){
$("#5").click(function(){
  $("#number").val($("#number").val()+"5");
});
});
$(document).ready(function(){
$("#6").click(function(){
  $("#number").val($("#number").val()+"6");
});
});
$(document).ready(function(){
$("#7").click(function(){
  $("#number").val($("#number").val()+"7");
});
});
$(document).ready(function(){
$("#8").click(function(){
  $("#number").val($("#number").val()+"8");
});
});
$(document).ready(function(){
$("#9").click(function(){
  $("#number").val($("#number").val()+"9");
});
});
$(document).ready(function(){
$("#0").click(function(){
  $("#number").val($("#number").val()+"0");
});
});
$(document).ready(function(){
$("#div").click(function(){
y=$("#number").val();
op=$("#div").val();
  $("#number").val(" ");

});
});
$(document).ready(function(){
$("#mul").click(function(){
y=$("#number").val();
op=$("#mul").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#add").click(function(){
y=$("#number").val();
op=$("#add").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#sub").click(function(){
y=$("#number").val();
op=$("#sub").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#clear").click(function(){
y=$("#number").val();
op=$("#clear").val();
  $("#number").val(" ");
});
});
$(document).ready(function(){
$("#abs").click(function(){
y=$("#number").val();
op=$("#abs").val();
calc();
});
});
$(document).ready(function(){
$("#mod1").click(function(){
y=$("#number").val();
op=$("#mod1").val();
$("#number").val(" ");
});
});
$(document).ready(function(){
$("#sqrt1").click(function(){
y=$("#number").val();
op=$("#sqrt1").val();
calc();
});
});
function calc()
{ x=Number(document.getElementById("number").value);
y=Number(y);
if(op=='add')
var c=x+y;
if(op=='sub')
{
var c=y-x;
}
if(op=='mul')
var c=x*y;
if(op=='div')
{
if(x!="0")
var c=y/x;
else
alert("error");
}
if(op=='abs')
{
var c=x;
if(x<0)
var c=x-2*x;
}
if(op=="mod1")
{alert("hii");
var c=(y/100)*x;}
if(op =="sqrt1")
{
var c=Math.sqrt(x);
}
document.getElementById("number").value = c;
}
function validate()
{//alert("hii");
var flag=0;
var name=document.getElementById("name").value;
var phno=document.getElementById("phno").value;
var email=document.getElementById("email").value;
if(name.charCodeAt(0)>=48&&name.charCodeAt(0)<=57)
alert("error:The first letter of the name is an integer");
if(phno.length<10)
alert("error:phone number is less than 10 numbers");
for(var i=0;i<phno.length;i++)
{if(phno.charCodeAt(i)>=48&&phno.charCodeAt(i)<=57)
flag=0;
else
flag=1;
}
if(flag==1)
alert("error:Phone number is wrong");
flag=0;
for(var i=0;i<email.length;i++)
{
if(email.charAt(i)=='@')
flag=1;
}
if(flag==0)
alert("error:Email is wrong");
}
function palindrome()
{
var str="";
var x=document.getElementById("word").value;
var temp=x;
var n=x.length-1;
while(n>=0)
{
str=str+x.charAt(n--);
}
if(str==temp)
{
alert("palindrome");
}
else
{//document.getElementById("result").value="false";
alert("not palindrome");
}
var S1=document.getElementById("word1").value;
var S2=document.getElementById("word2").value;
var s1=S1.replaceAll("//s","");
var s2=S2.replaceAll("//s","");
alert(s1+" "+s2);
var s1=s1.toLowerCase();
var s2=s2.toLowerCase();
var split1=s1.split("");
var split2=s2.split("");
var sort1=split1.sort();
var sort2=split2.sort();
var str1=sort1.join("");
var str2=sort2.join("");
if(str1!=str2)
{
	alert("strings are not anagrams");

}
else
{
alert(S1+","+S2+","+"are anagrams");	
}
 }
function gameplay()
{
var r1= Math.floor(Math.random() * (+1000 - +0) + +0);	
var r2= Math.floor(Math.random() * (+1000 - +0) + +0);	

document.getElementById("num1").value=r1;
document.getElementById("num2").value=r2;

var rem1=r1%3;
var rem2=r2%3;
if(rem1==0 && rem2==1 || rem2==0 && rem1==1)
{

	document.getElementById("result").value="human survives";
}
else if(rem1==rem2)
{
	document.getElementById("result").value="tie";
}
else if(rem1==1 && rem2==2 || rem2==1 && rem1==2)
{
document.getElementById("result").value= "Cockroach survives";	
}
else if(rem1==0 && rem2==2 || rem2==0 && rem1==2)
{
document.getElementById("result").value="human dies";	
}

	return false;
}

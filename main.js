let value = document.getElementById('value');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
let count =0 ;
document.getElementById('increase').onclick = function(){
  count++;
 value.textContent=count;
}
document.getElementById('decrease').onclick=function(){
  count--;
  value.textContent=count;
}
document.getElementById('reset').onclick=function(){
  count=0;
  value.textContent=count;
}
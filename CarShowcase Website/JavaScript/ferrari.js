const top1bi = document.getElementById('Toggle1');
const top1div  = document.getElementById('one');
const top2bi = document.getElementById('Toggle2');
const top2div  = document.getElementById('two');
const top3bi = document.getElementById('Toggle3');
const top3div  = document.getElementById('three');
const closediv1 =document.getElementById('num1')
const closediv2 =document.getElementById('num2')
const closediv3 =document.getElementById('num3')

top1bi.onclick = () => {
    top1div.style.visibility ='visible';
};
top2bi.onclick = () => {
    top2div.style.visibility ='visible';
};
top3bi.onclick = () => {
    top3div.style.visibility ='visible';
};
closediv1.onclick=()=>{
    top1div.style.visibility='hidden'
}
closediv2.onclick=()=>{
    top2div.style.visibility='hidden'
}
closediv3.onclick=()=>{
    top3div.style.visibility='hidden'
}
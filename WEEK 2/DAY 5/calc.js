let calcDisplay = document.getElementById("display");
// console.log(calcDisplay.innerHTML)
let calcstr = ""

function my_f(btn) {
    calcstr = calcstr + btn;
    calcDisplay.innerHTML = calcstr;
    console.log(calcDisplay)
}
function result() {
    let calcresult = eval(calcstr);
    calcDisplay.innerHTML = calcresult;
    //console.log(calcresult);
}
function clear() {
    calcstr = "";
    calcDisplay.innerHTML = 0;
}

function reset(){
    if (calcDisplay.innerHTML.length > 1){
        calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1);
    } else {
        calcDisplay.innerHTML = 0;
    }
    
    
}
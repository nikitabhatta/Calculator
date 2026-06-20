function addValue(value){
    document.getElementById("display").value +=value;
}
function clearDisplay(){
    document.getElementById("display").value= "";
}
function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}
function calculate(){
    let expression = document.getElementById("display").value;
    try{
        let result = eval(expression);
        document.getElementById("display").value = result;
    }
    catch{
        document.getElementById("display").value = "Error";
    }
}
document.addEventListener("keydown", function(event){
    let key = event.key;
    if("0123456789+-*/.%".includes(key)){
        addValue(key);}
    else if(key === "Enter"){
        calculate();}
    else if(key === "Backspace"){
        backspace();}
        else if(key.toLowerCase() === "c"){
        clearDisplay();}
}
);
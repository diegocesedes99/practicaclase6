let num1=parseInt(prompt('Ingrese cualquier número: '));
let num2=parseInt(prompt('Ingrese otro número: '));
let div=x(num1, num2)

function x(num1, num2){
    if(num1 % num2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(div);
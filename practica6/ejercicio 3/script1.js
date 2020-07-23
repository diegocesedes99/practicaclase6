let num=parseInt(prompt('Ingrese cualquier número: '));
let primo=esPrimo(num);


function esPrimo(number){
    let p=true;
    for(let i=2; i<number;i++){
        if (number % i== 0){
            return p=false;
        }else{
            return p=true;
        }
    }
}


console.log (primo);
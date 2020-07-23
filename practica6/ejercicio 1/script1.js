let num1=prompt ('Ingrese cualquier número: ');

let num2=prompt ('Ingrese otro número: ');

function max(number1, number2){

    for(let i=0; i<1; i++){
        
       if(number1>number2){
            return console.log('El primer número es mayor al segundo');
       }else{
           return console.log('El segundo número es mayor al primero');
       }
       
    }
   
}
let array= max(num1, num2);

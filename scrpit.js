function calculator(){
    const numberBtns = document.querySelectorAll('.nums');
    const operators = document.querySelectorAll('.operator');
    const allClear = document.getElementById('ac');
    const clear = document.getElementById('del');
    const equals = document.getElementById('equals');
    const secondScreen = document.getElementById('primary-input');
    const firstScreen = document.getElementById('secondary-input');



    numberBtns.forEach(number => {
        number.addEventListener('click', ()=>{
        /*-----This checks if there is already a dot so that we will not be typing 
                multiple dots in a single operation-----*/
        if( firstScreen.innerText.includes(`.`) && number.innerHTML === '.'  ) return;

            firstScreen.innerHTML = firstScreen.innerHTML.toString() + number.innerHTML.toString();
            
        });
    }); 

    operators.forEach(operator => {
        operator.addEventListener('click', ()=> {
            

            /*if(secondScreen.innerHTML = '')  */
               
                /* secondScreen.innerText = eval(firstScreen.innerText.toString() +  secondScreen.innerText.toString()); 
                secondScreen.innerHTML =  ;*/
                firstScreen.innerHTML = `${firstScreen.innerText} ${operator.innerHTML}`
            /* else{
                firstScreen.innerHTML += operator.innerHTML;
                secondScreen.innerHTML = eval(firstScreen.innerHTML);
                secondScreen.innerHTML = (firstScreen.innerHTML); 
                firstScreen.innerHTML = '';
            }*/

           /*  secondScreen.innerText = eval(firstScreen.innerHTML.toString() + secondScreen.innerHTML.toString()); */

        });
    });

    allClear.addEventListener('click', () =>{
        firstScreen.innerHTML = '';
        secondScreen.innerHTML = '';
    });

    equals.addEventListener('click', () =>{
        if(firstScreen.innerText ===""){
            alert('screen is empty');
        }
/*         else if(secondScreen.innerText != '' && firstScreen.innerText === firstScreen.innerText.includes(operators.innerHTML)){
            
            
            secondScreen.innerText = eval(firstScreen.innerHTML.toString() &&  secondScreen.innerText.toString());
        } */
        
            

            /* firstScreen.innerHTML = ''; */
           else if(secondScreen.innerText != ''){
                /* secondScreen.innerHTML = eval(firstScreen.innerText.toString() + secondScreen.innerHTML.toString()); */

                switch(operator){
                    case '+':
                        secondScreen.innerHTML + firstScreen.innerHTML;
                        break

                    case '-':
                        secondScreen.innerHTML - firstScreen.innerHTML;
                        break

                    case '/':
                        secondScreen.innerHTML / firstScreen.innerHTML;
                        break

                    case '*':
                        secondScreen.innerHTML * firstScreen.innerHTML;
                        break                        
                }
            }

            
            else{
                secondScreen.innerHTML = eval(firstScreen.innerText);
            }
             
            
            firstScreen.innerHTML = '';
            operator = undefined;
        
        
    });

    clear.addEventListener('click', () => {
        firstScreen.innerHTML = firstScreen.innerText.slice(0, -1);
        if(firstScreen.innerHTML != ''){
            secondScreen.innerHTML = secondScreen.innerText.slice(0, -1);
        }
    })

}

calculator()



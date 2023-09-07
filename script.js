const display = document.getElementById('display');

        const appendToDisplay =(value) =>{
            display.value += value;
        }

        const clearDisplay = () =>{
            display.value = '';
        }

        const calculate =() =>{
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        
        document.getElementById('btn7').addEventListener('click', () => appendToDisplay('7'));
        document.getElementById('btn8').addEventListener('click', () => appendToDisplay('8'));
        document.getElementById('btn9').addEventListener('click', () => appendToDisplay('9'));
        document.getElementById('btnAdd').addEventListener('click', () => appendToDisplay('+'));
        document.getElementById('btn4').addEventListener('click', () => appendToDisplay('4'));
        document.getElementById('btn5').addEventListener('click', () => appendToDisplay('5'));
        document.getElementById('btn6').addEventListener('click', () => appendToDisplay('6'));
        document.getElementById('btnSubtract').addEventListener('click', () => appendToDisplay('-'));
        document.getElementById('btn1').addEventListener('click', () => appendToDisplay('1'));
        document.getElementById('btn2').addEventListener('click', () => appendToDisplay('2'));
        document.getElementById('btn3').addEventListener('click', () => appendToDisplay('3'));
        document.getElementById('btnMultiply').addEventListener('click', () => appendToDisplay('*'));
        document.getElementById('btn0').addEventListener('click', () => appendToDisplay('0'));
        document.getElementById('btnClear').addEventListener('click', clearDisplay);
        document.getElementById('btnEquals').addEventListener('click', calculate);
        document.getElementById('btnDivide').addEventListener('click', () => appendToDisplay('/'));
